// var sanitizer = require("validator");

exports.index = function(req, res) {
  res.redirect("/home");
};

exports.home = function(req, res) {
  res.render("home");
};

exports.booking = function(req, res) {
  console.log(req.query);
  // Sanitize input
  res.json("success");
};




exports.booking_post = function(req, res) {
  // Sanitize input
  console.log(req.body, req);
  res.json("success");
};

