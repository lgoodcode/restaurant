(function($) {
  "use strict";

  $(window).on('load', function() {
    // Preloader
    $('#preloader').delay(200).fadeOut('slow', function() {
      $(this).remove();
    });
  
    // Init AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      once: true
    });
  
    // Menu list isotope and filter
    const menuIsotope = $('.menu-container').isotope({
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });
  
    $('#menu-filters li').on('click', function() {
      $("#menu-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      menuIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  
    // Back to top button scroll
    $('.back-to-top').on('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });        
  });
  
  
  // Events carousel using the Owl Carousel library
  $('.owl-carousel').owlCarousel({
    autoplay: true,   // Autoplays on load
    dots: true,       // Navigation dots
    loop: true,       // Loops forever
    items: 1          // Display one item at a time
  });
  
  
  // ServiceWorker
  if ('serviceWorker' in navigator) { 
    // Check if a serviceWorker is already registered
    navigator.serviceWorker.getRegistration().then(registration => {
      // If not, register it and reload to ensure client is under service worker's contract
      if (!registration || !navigator.serviceWorker.controller)
        navigator.serviceWorker.register('/serviceWorker.js');
    });  
  } 
 
  
  // Notification permissions
  if ('permission' in Notification !== 'denied')
    Notification.requestPermission();
  
  
  $(document).ready(function() {
    // Initiate venobox lightbox
    $('.venobox').venobox();

 
    // Progressive loading for images
    const imagesToLoad = document.querySelectorAll('img[data-src]');
    const loadImage = img => {
      $(img).attr('src', $(img).attr('data-src'));
      $(img).on('load', () => $(img).removeAttr('data-src'));
    }

    if ('IntersectionObserver' in window) {
      // Loads when scrolled into view
      const observer = new IntersectionObserver((items, observer) => { 
        items.forEach(item => { 
          if (item.isIntersecting) {
            loadImage(item.target);
            observer.unobserve(item.target);
          }
        });
      });

      imagesToLoad.forEach(img => observer.observe(img));
    }
    else { // Fallback if API isn't supported: loads after DOM is ready
      imagesToLoad.forEach(img => loadImage(img));
    }

  
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
  
        // Back to top button style
        $('.back-to-top').fadeIn('slow');
      } 
      else {
        $('#header').removeClass('header-scrolled');
        $('#topbar').removeClass('topbar-scrolled');
        $('.back-to-top').fadeOut('slow');
      }
    });

  
    // Toggle when reloading page without having to scroll
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
      $('.back-to-top').fadeIn('slow');
    }
    
  
    // Smooth scroll for the navigation menu and links with .scrollto classes 
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      // If clicking home link, will not have a hash, redirect
      if (!this.hash) return;
      e.preventDefault();
      const scrolltoOffset = $('#header').outerHeight() - 1;
      const scrollto = $(this.hash).offset().top - scrolltoOffset;
  
      // SmoothScroll.js
      window.scrollTo({ 
        top: scrollto, 
        behavior: 'smooth' 
      });
  
      if ($(this).parents('.nav-menu, .mobile-nav').length) {
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }
  
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-overlay').fadeOut();
      }
    });

  
    // Place order modal 
    $(document).on('click', '.btn-place-order', function(e) {
      $('.place-order').slideDown();
      $('.place-order-overlay').show();
      $('body').toggleClass('place-order-active');
    });

    $(document).on('click', '.place-order-close', function(e) {     
      $('.place-order').slideUp();
      $('.place-order-overlay').hide();
      $('body').removeClass('place-order-active');
    });
  
    $(document).on('click', function(e) {
      const container = $('.place-order, .btn-place-order');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('place-order-active')) {
          $('body').removeClass('place-order-active');
          $('.place-order').slideUp();
          $('.place-order-overlay').hide();
        }
      }
    }); 
  
  
    // Mobile Navigation
    if ($('.nav-menu').length) {
      const $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
      $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overlay"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-overlay').toggle();
      });
  
      $(document).on('click', '.mobile-nav-close', function(e) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-overlay').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).on('click', function(e) {
        const container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overlay').fadeOut();
          }
        }
      });
    } 
    else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
    // Navigation active state on scroll
    const nav_sections = $('section');
    const main_nav = $('.nav-menu, .mobile-nav');
  
    $(window).on('scroll', function() {
      const cur_pos = $(this).scrollTop() + 200;
  
      nav_sections.each(function() {
        const top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
  });

})(jQuery);