// Set the date on load for booking table
document.getElementById('date').valueAsDate = new Date();
  
/**
 *  Form validation
 *
 *  Will need to implement a DB to query or some storage to determine whether a date is taken
 *  or not, as well as time.
 */
$('form.email-form').submit(function(event) {
//   document.getElementById('test').addEventListener('submit', function(event) {
  event.preventDefault();
  const name_regexp = /^[^\s\W]+\w{2,40}$/gi;
  const phone_regexp = /^(\(\d{3}\)|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/g;
  const email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const time_regexp = /(^1[1-9]|20):[0-5]\d$/g;
  const elements = [...this.elements].filter(el => el.className === 'form-control');
  let invalid = false;

  elements.forEach(function(el) {
    let validate = el.nextElementSibling;
    let bad = false;
    let msg = '';

    switch (el.name) {
      case 'name':
        if (!name_regexp.test(el.value))    // Add better message to reflect error
          bad = invalid = true;
        msg = 'Please enter more than 2 characters';
        break;

      case 'email':
        if (!email_regexp.test(el.value))
          bad = invalid = true; 
        msg = 'Please enter a valid email address';
        break;

      case 'phone':
        if (!phone_regexp.test(el.value))
          bad = invalid = true;
        msg = 'Please enter a valid phone number';
        break;
        
      case 'date':  
        if (!el.value || new Date(el.value) - new Date() < 0) {
          msg = 'Please enter a valid date';
          bad = invalid = true;
        }
        break;

      case 'time':
        if (!el.value) msg = 'Please enter a valid time';
        else if (!time_regexp.test(el.value)) 
          msg = 'Please enter a time within our business hours';
        if (msg) bad = invalid = true;        
        break;

      case 'people':
        if (el.value < 1) msg = 'Must be at least one person to make a booking';
        else if (el.value > 16) msg = 'The number exceeds our maximum booking amount (16)';
        if (msg) bad = invalid = true;
        break;     

      case 'subject':
        if (!/^[\s\w]{5,}$/.test(el.value)) msg = 'Please enter a subject of at least 5 characters';
        else if (!/^[\s\w]{5,75}$/.test(el.value)) msg = 'Exceeds maximum of 75 characters';
        bad = invalid = true;       
        break;

      case 'message':
        if (!/^[\s\w]{10,}$/.test(el.value)) {
          msg = 'Please enter a message of at least 10 characters';
          bad = invalid = true;
        }          
        break;
        
    }
    // Gives the error message and shows or hides the message
    $(validate).text(bad ? msg : '').show('blind');      
  });

  if (invalid) return false;

  const form = $(this);
  const action = form.attr('action');

  if (!action) {
    form.find('.loading').slideUp();
    form.find('.error-message').slideDown().text('The form action property is not set!');
    return false;
  }

  form.find('.sent-message').slideUp();
  form.find('.error-message').slideUp();
  form.find('.loading').slideDown();

  fetch('/booking?' + form.serialize(), {
    credentials: 'same-origin', // includes cookies in the request
    method: 'GET',
    headers: {
      'CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    timeout: 40000
  })
  .then(res => {
    form.find('.loading').slideUp();
    if (res.ok) {      
      form.find('.sent-message').slideDown();
      form.find("input:not(input[type=submit]), textarea").val('');
    } 
    else {
      let msg = "Form submission failed!<br>" + 'Status: ' + res.statusText;
      form.find('.error-message').delay(700).slideDown().html(msg);
    }    
  });
});
