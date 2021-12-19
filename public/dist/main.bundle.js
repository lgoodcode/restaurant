/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/food-truck-5.jpg */ "./src/img/food-truck-5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/food-truck-7.jpg */ "./src/img/food-truck-7.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/events-bg.jpg */ "./src/img/events-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*--------------------------------------------------------------\r\n# General\r\n--------------------------------------------------------------*/\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  background: #fff;\r\n  color: #000;\r\n}\r\n\r\na {\r\n  color: #4389a0;\r\n}\r\n\r\na:hover {\r\n  color: #d9ba85;\r\n  text-decoration: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\nimg[data-src] {\r\n  filter: blur(0.2em);\r\n}\r\n\r\nimg {\r\n  filter: blur(0em);\r\n  transition: filter 0.3s;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Preloader\r\n--------------------------------------------------------------*/\r\n#preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999;\r\n  overflow: hidden;\r\n  background: #1a1814;\r\n}\r\n\r\n#preloader::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: calc(50% - 30px);\r\n  left: calc(50% - 30px);\r\n  border: 6px solid #1a1814;\r\n  border-top-color: #4389a0;\r\n  border-bottom-color: #4389a0;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  -webkit-animation: animate-preloader 1s linear infinite;\r\n  animation: animate-preloader 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate-preloader {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-preloader {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Back to top button\r\n--------------------------------------------------------------*/\r\n.back-to-top {\r\n  position: fixed;\r\n  display: none;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  z-index: 995;\r\n}\r\n\r\n.back-to-top i {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50px;\r\n  color: #4389a0;\r\n  transition: all 0.4s;\r\n  border: 2px solid #4389a0;\r\n}\r\n\r\n.back-to-top i:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Disable aos animation delay on mobile devices\r\n--------------------------------------------------------------*/\r\n@media screen and (max-width: 768px) {\r\n  [data-aos-delay] {\r\n    transition-delay: 0 !important;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Top Bar\r\n--------------------------------------------------------------*/\r\n#topbar {\r\n  height: 40px;\r\n  font-size: 14px;\r\n  transition: all 0.5s;\r\n}\r\n\r\n#topbar.topbar-scrolled {\r\n  top: -40px;\r\n}\r\n\r\n#topbar .contact-info {\r\n  color: white;\r\n}\r\n\r\n#topbar .contact-info i {\r\n  color: #fff;\r\n  padding-right: 4px;\r\n}\r\n\r\n#topbar .contact-info i + i {\r\n  margin-left: 15px;\r\n}\r\n\r\n#topbar .social-links a {\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  background: #4e8496;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 8px 0;\r\n  margin-right: 4px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  width: 36px;\r\n  height: 36px;\r\n  transition: 0.3s;\r\n}\r\n\r\n#topbar .social-links a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Header\r\n--------------------------------------------------------------*/\r\n#header {\r\n  background: #4389a0bf;\r\n  transition: all 0.5s;\r\n  z-index: 997;\r\n  padding: 15px 0;\r\n  top: 40px;\r\n}\r\n\r\n#header.header-scrolled {\r\n  top: 0;\r\n  background: #30799ee3\r\n}\r\n\r\n#header .logo {\r\n  font-size: 28px;\r\n  margin: 0;\r\n  padding: 0;\r\n  line-height: 1;\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#header .logo a {\r\n  color: #fff;\r\n}\r\n\r\n#header .logo img {\r\n  max-height: 40px;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Navigation Menu\r\n--------------------------------------------------------------*/\r\n/* Desktop Navigation */\r\n.nav-menu ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu > ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu > ul > li {\r\n  position: relative;\r\n  white-space: nowrap;\r\n  padding-left: 28px;\r\n}\r\n\r\n.nav-menu a {\r\n  display: block;\r\n  position: relative;\r\n  color: white;\r\n  transition: 0.3s;\r\n  font-size: 16px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {\r\n  color: #7cff8c;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-menu .btn-place-order a {\r\n  border: 2px solid #4389a0;\r\n  color: #fff;\r\n  background: #333333c4;\r\n  border-radius: 50px;\r\n  padding: 8px 25px;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.nav-menu .btn-place-order a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n}\r\n\r\n.nav-menu .drop-down ul {\r\n  display: block;\r\n  position: absolute;\r\n  left: 15px;\r\n  top: calc(100% + 30px);\r\n  z-index: 99;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  transition: 0.3s;\r\n}\r\n\r\n.nav-menu .drop-down:hover > ul {\r\n  opacity: 1;\r\n  top: 100%;\r\n  visibility: visible;\r\n}\r\n\r\n.nav-menu .drop-down li {\r\n  min-width: 180px;\r\n  position: relative;\r\n}\r\n\r\n.nav-menu .drop-down ul a {\r\n  padding: 10px 20px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  text-transform: none;\r\n  color: #1a1814;\r\n}\r\n\r\n.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {\r\n  color: #4389a0;\r\n}\r\n\r\n.nav-menu .drop-down > a::after {\r\n  content: \"\\ea99\";\r\n  font-family: IcoFont;\r\n  padding-left: 5px;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down ul {\r\n  top: 0;\r\n  left: calc(100% - 30px);\r\n}\r\n\r\n.nav-menu .drop-down .drop-down:hover > ul {\r\n  opacity: 1;\r\n  top: 0;\r\n  left: 100%;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down > a {\r\n  padding-right: 35px;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down > a::after {\r\n  content: \"\\eaa0\";\r\n  font-family: IcoFont;\r\n  position: absolute;\r\n  right: 15px;\r\n}\r\n\r\n@media (max-width: 1366px) {\r\n  .nav-menu .drop-down .drop-down ul {\r\n    left: -90%;\r\n  }\r\n  .nav-menu .drop-down .drop-down:hover > ul {\r\n    left: -100%;\r\n  }\r\n  .nav-menu .drop-down .drop-down > a::after {\r\n    content: \"\\ea9d\";\r\n  }\r\n}\r\n\r\n/* Mobile Navigation */\r\n.mobile-nav-toggle {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 15px;\r\n  z-index: 9998;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  transition: all 0.4s;\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n}\r\n\r\n.mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav {\r\n  position: fixed;\r\n  top: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  left: 15px;\r\n  z-index: 9999;\r\n  overflow-y: auto;\r\n  background: #1a1814;\r\n  border: 2px solid rgba(255, 255, 255, 0.1);\r\n  transition: ease-in-out 0.2s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  border-radius: 10px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.mobile-nav * {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.mobile-nav .mobile-nav-close {\r\n  margin: 0 15px 0 auto;\r\n  display: block;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  transition: all 0.4s;\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.mobile-nav .mobile-nav-close:hover {\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav a {\r\n  display: block;\r\n  position: relative;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n  outline: none;\r\n  transition: 0.3s;\r\n}\r\n\r\n.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n.mobile-nav .drop-down > a::after {\r\n  content: \"\\ea99\";\r\n  font-family: IcoFont;\r\n  padding-left: 10px;\r\n  position: absolute;\r\n  right: 15px;\r\n}\r\n\r\n.mobile-nav .active.drop-down > a::after {\r\n  content: \"\\eaa1\";\r\n}\r\n\r\n.mobile-nav .btn-place-order a {\r\n  color: #fff;\r\n  border: 2px solid #4389a0;\r\n  border-radius: 50px;\r\n  margin: 20px 0 0 0;\r\n  padding: 10px 25px;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n}\r\n\r\n.mobile-nav .btn-place-order a:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav .drop-down > a {\r\n  padding-right: 35px;\r\n}\r\n\r\n.mobile-nav .drop-down ul {\r\n  display: none;\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-nav .drop-down li {\r\n  padding-left: 20px;\r\n}\r\n\r\n.mobile-nav-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9997;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  overflow: hidden;\r\n  display: none;\r\n  transition: ease-in-out 0.2s;\r\n}\r\n\r\n.mobile-nav-active {\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-nav-active .mobile-nav {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.mobile-nav-active .mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Hero Section\r\n--------------------------------------------------------------*/\r\n#hero {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top center;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n\r\n#hero::before {\r\n  content: \"\";\r\n  background: rgba(0, 0, 0, 0.5);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#hero .container {\r\n  padding-top: 110px;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  #hero .container {\r\n    padding-top: 98px;\r\n  }\r\n}\r\n\r\n#hero h1 {\r\n  margin: 0;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n  line-height: 56px;\r\n  color: #fff;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#hero h1 span {\r\n  color: #4389a0;\r\n}\r\n\r\n#hero h2 {\r\n  color: #eee;\r\n  margin-bottom: 10px 0 0 0;\r\n  font-size: 22px;\r\n}\r\n\r\n#hero .btns {\r\n  margin-top: 30px;\r\n}\r\n\r\n#hero .btn-menu, #hero .btn-place-order {\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  letter-spacing: 0.5px;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  padding: 12px 30px;\r\n  border-radius: 50px;\r\n  transition: 0.3s;\r\n  line-height: 1;\r\n  color: white;\r\n  border: 2px solid #4389a0;\r\n}\r\n\r\n#hero .btn-menu:hover, #hero .btn-place-order:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n#hero .btn-place-order {\r\n  margin-left: 15px;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  #hero {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (max-height: 500px) {\r\n  #hero .container {\r\n    padding-top: 130px;\r\n    padding-bottom: 60px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #hero h1 {\r\n    font-size: 28px;\r\n    line-height: 36px;\r\n  }\r\n  #hero h2 {\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Sections General\r\n--------------------------------------------------------------*/\r\nsection {\r\n  padding: 60px 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.section-bg {/*   background-color: #1a1814; */background-color: #fff;}\r\n\r\n.section-title {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.section-title h2 {\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  padding: 0;\r\n  line-height: 1px;\r\n  margin: 0 0 5px 0;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  color: #2d2d2d;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.section-title h2::after {\r\n  content: \"\";\r\n  width: 120px;\r\n  height: 1px;\r\n  display: inline-block;\r\n  background: #00000080;\r\n  margin: 4px 10px;\r\n}\r\n\r\n.section-title p {\r\n  margin: 0;\r\n  margin: 0;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  font-family: \"Playfair Display\", serif;\r\n  color: #4389a0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# About\r\n--------------------------------------------------------------*/\r\n.about {\r\n/*   background: url(\"../img/about-bg.jpg\") center center; */\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center center;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding: 80px 0;\r\n  font-family: var(--font-family-sans-serif);\r\n}\r\n\r\n.about::before {\r\n  content: \"\";\r\n  background: rgba(0, 0, 0, 0.8);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.about .about-img {\r\n  position: relative;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img img {\r\n  max-width: 100%;\r\n  border: 4px solid rgba(255, 255, 255, 0.2);\r\n  position: relative;\r\n}\r\n\r\n.about .about-img::before {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 1;\r\n  content: '';\r\n  border-left: 5px solid #4389a0;\r\n  border-top: 5px solid #4389a0;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img::after {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 2;\r\n  content: '';\r\n  border-right: 5px solid #4389a0;\r\n  border-bottom: 5px solid #4389a0;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img:hover {\r\n  transform: scale(1.03);\r\n}\r\n\r\n.about .about-img:hover::before {\r\n  left: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.about .about-img:hover::after {\r\n  right: 10px;\r\n  bottom: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .about .about-img::before,\r\n  .about .about-img::after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.about .content {\r\n  color: #fff;\r\n}\r\n\r\n.about .content h3 {\r\n  font-weight: 600;\r\n  font-size: 26px;\r\n}\r\n\r\n.about .content ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.about .content ul li {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.about .content ul i {\r\n  font-size: 20px;\r\n  padding-right: 4px;\r\n  color: #4389a0;\r\n}\r\n\r\n.about .content p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .about {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Why Us\r\n--------------------------------------------------------------*/\r\n.why-us .box {\r\n  padding: 50px 30px;\r\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n  transition: all ease-in-out 0.3s;\r\n  background: #1a1814;\r\n}\r\n\r\n.why-us .box span {\r\n  display: block;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n  color: #4389a0;\r\n}\r\n\r\n.why-us .box h4 {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  padding: 0;\r\n  margin: 20px 0;\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.why-us .box p {\r\n  color: #aaaaaa;\r\n  font-size: 15px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.why-us .box:hover {\r\n  background: #4389a0;\r\n  padding: 30px 30px 70px 30px;\r\n  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.why-us .box:hover span, .why-us .box:hover h4, .why-us .box:hover p {\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Menu Section\r\n--------------------------------------------------------------*/\r\n.menu #menu-filters {\r\n  padding: 0;\r\n  margin: 0 auto 0 auto;\r\n  list-style: none;\r\n  text-align: center;\r\n  border-radius: 50px;\r\n}\r\n\r\n.menu #menu-filters li {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  padding: 8px 12px 10px 12px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 1;\r\n  color: #fff;\r\n  margin-bottom: 10px;\r\n  transition: all ease-in-out 0.3s;\r\n  border-radius: 50px;\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\n.menu #menu-filters li:hover, .menu #menu-filters li.filter-active {\r\n  color: #4389a0;\r\n}\r\n\r\n.menu #menu-filters li:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.menu .menu-item {\r\n  margin-top: 50px;\r\n}\r\n\r\n.menu .menu-img {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  border: 4px solid #a2a1a1db;\r\n}\r\n\r\n.menu .menu-content {\r\n  margin-left: 85px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\n.menu .menu-content::after {\r\n  content: \"......................................................................\"\r\n \"....................................................................\"\r\n \"....................................................................\";\r\n  position: absolute;\r\n  left: 20px;\r\n  right: 0;\r\n  top: -4px;\r\n  z-index: 1;\r\n  color: #000;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\n.menu .menu-content a {\r\n  padding-right: 10px;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 3;\r\n  font-weight: 700;\r\n  color: #212529;\r\n  transition: 0.3s;\r\n}\r\n\r\n.menu .menu-content a:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n.menu .menu-content span {\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 3;\r\n  padding: 0 10px;\r\n  font-weight: 600;\r\n  color: #212529;\r\n}\r\n\r\n.menu .menu-description {\r\n  margin-left: 85px;\r\n  font-style: oblique;\r\n  font-size: 15px;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n  color: #000000e0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Specials\r\n--------------------------------------------------------------*/\r\n.specials {\r\n  overflow: hidden;\r\n}\r\n\r\n.specials .nav-tabs {\r\n  border: 0;\r\n}\r\n\r\n.specials .nav-link {\r\n  border: 0;\r\n  padding: 12px 15px;\r\n  transition: 0.3s;\r\n  color: #fff;\r\n  border-radius: 0;\r\n  border-right: 2px solid #4389a0;\r\n  font-weight: 600;\r\n  font-size: 15px;\r\n}\r\n\r\n.specials .nav-link:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n.specials .nav-link.active {\r\n  color: #1a1814;\r\n  background: #4389a0;\r\n  border-color: #4389a0;\r\n}\r\n\r\n.specials .nav-link:hover {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.specials .tab-pane.active {\r\n  -webkit-animation: fadeIn 0.5s ease-out;\r\n  animation: fadeIn 0.5s ease-out;\r\n}\r\n\r\n.specials .details h3 {\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.specials .details p {\r\n  color: #aaaaaa;\r\n}\r\n\r\n.specials .details p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .specials .nav-link {\r\n    border: 0;\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Events\r\n--------------------------------------------------------------*/\r\n.events {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center center no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.events::before {\r\n  content: '';\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.events .section-title h2 {\r\n  color: #fff;\r\n}\r\n\r\n.events .container {\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .events {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n.events .owl-carousel {\r\n  background: #ffffff1c;\r\n  padding: 30px;\r\n}\r\n\r\n.events .owl-slide {\r\n  color: #fff;\r\n}\r\n\r\n.events .owl-slide h3 {\r\n  font-weight: 600;\r\n  font-size: 26px;\r\n  color: #4389a0;\r\n}\r\n\r\n.events .owl-slide .price {\r\n  font-size: 26px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.events .owl-slide .price span {\r\n  border-bottom: 2px solid #4389a0;\r\n}\r\n\r\n.events .owl-slide ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.events .owl-slide ul li {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.events .owl-slide ul i {\r\n  font-size: 20px;\r\n  padding-right: 4px;\r\n  color: #4389a0;\r\n}\r\n\r\n.events .owl-slide p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.events .owl-nav, .events .owl-dots {\r\n  margin-top: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.events .owl-dot {\r\n  display: inline-block;\r\n  margin: 0 5px;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n  background-color: #b9b9b985 !important;\r\n  outline: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.events .owl-dot.active {\r\n  background-color: #4389a0 !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .events .testimonial-item p {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Gallery\r\n--------------------------------------------------------------*/\r\n.gallery .gallery-item {\r\n  overflow: hidden;\r\n  border-right: 3px solid #454035;\r\n  border-bottom: 3px solid #454035;\r\n}\r\n\r\n.gallery .gallery-item img {\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n\r\n.gallery .gallery-item:hover img {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.vbox-container {\r\n  overflow-y: hidden; /* Remove the scrollbar when viewing images */\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Contact\r\n--------------------------------------------------------------*/\r\n.contact .info {\r\n  width: 100%;\r\n}\r\n\r\n.contact .info i {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  float: left;\r\n  width: 44px;\r\n  height: 44px;\r\n  background: #4389a0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.contact .info h4 {\r\n  padding: 0 0 0 60px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-bottom: 5px;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.contact .info p {\r\n  padding: 0 0 0 60px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  color: #212529;\r\n}\r\n\r\n.contact .info .open-hours, .contact .info .email, .contact .info .phone {\r\n  margin-top: 40px;\r\n}\r\n\r\n.contact .email-form {\r\n  width: 100%;\r\n}\r\n\r\n.contact .email-form .form-group {\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.contact .email-form .validate {\r\n  display: none;\r\n  color: red;\r\n  margin: 0 0 15px 0;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n}\r\n\r\n.contact .email-form .error-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #ed3c0d;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.contact .email-form .sent-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #18d26e;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.contact .email-form .loading {\r\n  display: none;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact .email-form .loading::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0 10px -6px 0;\r\n  border: 3px solid #4389a0;\r\n  border-top-color: #1a1814;\r\n  -webkit-animation: animate-loading 1s linear infinite;\r\n  animation: animate-loading 1s linear infinite;\r\n}\r\n\r\n.contact .email-form input, .contact .email-form textarea {\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 14px;\r\n  background: #2b2926;\r\n  border-color: #625b4b;\r\n  color: white;\r\n}\r\n\r\n.contact .email-form input::-webkit-input-placeholder, .contact .email-form textarea::-webkit-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::-moz-placeholder, .contact .email-form textarea::-moz-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input:-ms-input-placeholder, .contact .email-form textarea:-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::-ms-input-placeholder, .contact .email-form textarea::-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::placeholder, .contact .email-form textarea::placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input:focus, .contact .email-form textarea:focus {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.contact .email-form input {\r\n  height: 44px;\r\n}\r\n\r\n.contact .email-form textarea {\r\n  padding: 10px 12px;\r\n}\r\n\r\n.contact .email-form button[type=\"submit\"] {\r\n  background: #4389a0;\r\n  border: 0;\r\n  padding: 10px 35px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  border-radius: 50px;\r\n}\r\n\r\n.contact .email-form button[type=\"submit\"]:hover {\r\n  background: #d3af71;\r\n}\r\n\r\n@-webkit-keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Place Order\r\n--------------------------------------------------------------*/\r\n.place-order {\r\n  position: fixed;\r\n  top: 15px;\r\n  right: 15px;\r\n  bottom: 150px;\r\n  left: 15px;\r\n  z-index: 9999;\r\n  overflow-y: auto;\r\n  background: #1a1814;\r\n  border: 2px solid rgba(255, 255, 255, 0.1);\r\n/*   transition: ease-in-out 0.2s; */\r\n  /* opacity: 0; */\r\n  /* visibility: hidden; */\r\n  display: none;\r\n  border-radius: 10px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.place-order .place-order-close {\r\n  margin: 15px 0 0 auto;\r\n  padding: 0;\r\n  display: block;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 36px;\r\n  /*   transition: all 0.4s; */\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.place-order .place-order-close:hover {\r\n  color: #d0d0d0;\r\n}\r\n\r\n.place-order .section-title h2 {\r\n  color: #8d8c8a;\r\n}\r\n\r\n.place-order .section-title h2::after {\r\n  background: #8d8c8a;\r\n}\r\n\r\n.place-order .section-title p {\r\n  color: #e6e6e6;\r\n}\r\n\r\n.place-order-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9997;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  overflow: hidden;\r\n  display: none;\r\n  transition: ease-in-out 0.2s;\r\n}\r\n\r\n.place-order .order-form {\r\n  width: 100%;\r\n}\r\n\r\n.place-order .order-form .form-group {\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.place-order .order-form .validate {\r\n  display: none;\r\n  color: red;\r\n  margin: 0 0 15px 0;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n}\r\n\r\n.place-order .order-form .error-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #ed3c0d;\r\n  text-align: left;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.place-order .order-form .error-message br + br {\r\n  margin-top: 25px;\r\n}\r\n\r\n.place-order .order-form .sent-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #18d26e;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.place-order .order-form .loading {\r\n  color: #fff;\r\n  display: none;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.place-order .order-form .loading::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0 10px -6px 0;\r\n  border: 3px solid #4389a0;\r\n  border-top-color: #1a1814;\r\n  -webkit-animation: animate-loading 1s linear infinite;\r\n  animation: animate-loading 1s linear infinite;\r\n}\r\n\r\n.place-order .order-form input, .place-order .order-form textarea {\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 14px;\r\n  background: #2b2926;\r\n  border-color: #625b4b;\r\n  color: white;\r\n}\r\n\r\n.place-order .order-form input::-webkit-input-placeholder, .place-order .order-form textarea::-webkit-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::-moz-placeholder, .place-order .order-form textarea::-moz-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input:-ms-input-placeholder, .place-order .order-form textarea:-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::-ms-input-placeholder, .place-order .order-form textarea::-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::placeholder, .place-order .order-form textarea::placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input:focus, .place-order .order-form textarea:focus {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.place-order .order-form input {\r\n  height: 44px;\r\n}\r\n\r\n.place-order .order-form textarea {\r\n  padding: 10px 12px;\r\n}\r\n\r\n.place-order .order-form .btn-submit {\r\n  background: #4389a0;\r\n  border: 0;\r\n  padding: 10px 35px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  border-radius: 50px;\r\n  outline: none;\r\n}\r\n\r\n.place-order .order-form .btn-submit-disabled {\r\n  background: #41575f;\r\n  color: #d4d4d4;\r\n}\r\n\r\n.place-order .order-form .btn-submit:hover {\r\n  background: #dedede;\r\n  color: #4389a0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Footer\r\n--------------------------------------------------------------*/\r\n#footer {\r\n  background: black;\r\n  padding: 0 0 30px 0;\r\n  color: #fff;\r\n  font-size: 14px;\r\n}\r\n\r\n#footer .footer-top {\r\n  background: #0c0b09;\r\n  border-top: 1px solid #37332a;\r\n  border-bottom: 1px solid #28251f;\r\n  padding: 60px 0 30px 0;\r\n}\r\n\r\n#footer .footer-top .footer-info {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer .footer-top .footer-info h3 {\r\n  font-size: 24px;\r\n  margin: 0 0 20px 0;\r\n  padding: 2px 0 2px 0;\r\n  line-height: 1;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#footer .footer-top .footer-info p {\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  margin-bottom: 0;\r\n  font-family: \"Playfair Display\", serif;\r\n  color: #fff;\r\n}\r\n\r\n#footer .footer-top .social-links a {\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  background: #28251f;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 8px 0;\r\n  margin-right: 4px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  width: 36px;\r\n  height: 36px;\r\n  transition: 0.3s;\r\n}\r\n\r\n#footer .footer-top .social-links a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n#footer .footer-top h4 {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  position: relative;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#footer .footer-top .footer-links {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer .footer-top .footer-links ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#footer .footer-top .footer-links ul i {\r\n  padding-right: 2px;\r\n  color: #4389a0;\r\n  font-size: 18px;\r\n  line-height: 1;\r\n}\r\n\r\n#footer .footer-top .footer-links ul li {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#footer .footer-top .footer-links ul li:first-child {\r\n  padding-top: 0;\r\n}\r\n\r\n#footer .footer-top .footer-links ul a {\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n#footer .footer-top .footer-links ul a:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form {\r\n  margin-top: 30px;\r\n  background: #28251f;\r\n  padding: 6px 10px;\r\n  position: relative;\r\n  border-radius: 50px;\r\n  border: 1px solid #454035;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"email\"] {\r\n  border: none;\r\n  padding: 4px;\r\n  width: calc(100% - 110px);\r\n  background: #28251f;\r\n  color: white;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"email\"]:active {\r\n  outline: none;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"submit\"] {\r\n  position: absolute;\r\n  top: -1px;\r\n  right: -1px;\r\n  bottom: -1px;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0 20px 2px 20px;\r\n  background: #4389a0;\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"submit\"]:hover {\r\n  background: #d3af71;\r\n}\r\n\r\n#footer .copyright {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n#footer .credits {\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/*--------------------------------------------------------------\r\n# General\r\n--------------------------------------------------------------*/\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  background: #fff;\r\n  color: #000;\r\n}\r\n\r\na {\r\n  color: #4389a0;\r\n}\r\n\r\na:hover {\r\n  color: #d9ba85;\r\n  text-decoration: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\nimg[data-src] {\r\n  filter: blur(0.2em);\r\n}\r\n\r\nimg {\r\n  filter: blur(0em);\r\n  transition: filter 0.3s;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Preloader\r\n--------------------------------------------------------------*/\r\n#preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999;\r\n  overflow: hidden;\r\n  background: #1a1814;\r\n}\r\n\r\n#preloader::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: calc(50% - 30px);\r\n  left: calc(50% - 30px);\r\n  border: 6px solid #1a1814;\r\n  border-top-color: #4389a0;\r\n  border-bottom-color: #4389a0;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  -webkit-animation: animate-preloader 1s linear infinite;\r\n  animation: animate-preloader 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate-preloader {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-preloader {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Back to top button\r\n--------------------------------------------------------------*/\r\n.back-to-top {\r\n  position: fixed;\r\n  display: none;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  z-index: 995;\r\n}\r\n\r\n.back-to-top i {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50px;\r\n  color: #4389a0;\r\n  transition: all 0.4s;\r\n  border: 2px solid #4389a0;\r\n}\r\n\r\n.back-to-top i:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Disable aos animation delay on mobile devices\r\n--------------------------------------------------------------*/\r\n@media screen and (max-width: 768px) {\r\n  [data-aos-delay] {\r\n    transition-delay: 0 !important;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Top Bar\r\n--------------------------------------------------------------*/\r\n#topbar {\r\n  height: 40px;\r\n  font-size: 14px;\r\n  transition: all 0.5s;\r\n}\r\n\r\n#topbar.topbar-scrolled {\r\n  top: -40px;\r\n}\r\n\r\n#topbar .contact-info {\r\n  color: white;\r\n}\r\n\r\n#topbar .contact-info i {\r\n  color: #fff;\r\n  padding-right: 4px;\r\n}\r\n\r\n#topbar .contact-info i + i {\r\n  margin-left: 15px;\r\n}\r\n\r\n#topbar .social-links a {\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  background: #4e8496;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 8px 0;\r\n  margin-right: 4px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  width: 36px;\r\n  height: 36px;\r\n  transition: 0.3s;\r\n}\r\n\r\n#topbar .social-links a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Header\r\n--------------------------------------------------------------*/\r\n#header {\r\n  background: #4389a0bf;\r\n  transition: all 0.5s;\r\n  z-index: 997;\r\n  padding: 15px 0;\r\n  top: 40px;\r\n}\r\n\r\n#header.header-scrolled {\r\n  top: 0;\r\n  background: #30799ee3\r\n}\r\n\r\n#header .logo {\r\n  font-size: 28px;\r\n  margin: 0;\r\n  padding: 0;\r\n  line-height: 1;\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#header .logo a {\r\n  color: #fff;\r\n}\r\n\r\n#header .logo img {\r\n  max-height: 40px;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Navigation Menu\r\n--------------------------------------------------------------*/\r\n/* Desktop Navigation */\r\n.nav-menu ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu > ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu > ul > li {\r\n  position: relative;\r\n  white-space: nowrap;\r\n  padding-left: 28px;\r\n}\r\n\r\n.nav-menu a {\r\n  display: block;\r\n  position: relative;\r\n  color: white;\r\n  transition: 0.3s;\r\n  font-size: 16px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {\r\n  color: #7cff8c;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-menu .btn-place-order a {\r\n  border: 2px solid #4389a0;\r\n  color: #fff;\r\n  background: #333333c4;\r\n  border-radius: 50px;\r\n  padding: 8px 25px;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.nav-menu .btn-place-order a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n}\r\n\r\n.nav-menu .drop-down ul {\r\n  display: block;\r\n  position: absolute;\r\n  left: 15px;\r\n  top: calc(100% + 30px);\r\n  z-index: 99;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  transition: 0.3s;\r\n}\r\n\r\n.nav-menu .drop-down:hover > ul {\r\n  opacity: 1;\r\n  top: 100%;\r\n  visibility: visible;\r\n}\r\n\r\n.nav-menu .drop-down li {\r\n  min-width: 180px;\r\n  position: relative;\r\n}\r\n\r\n.nav-menu .drop-down ul a {\r\n  padding: 10px 20px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  text-transform: none;\r\n  color: #1a1814;\r\n}\r\n\r\n.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {\r\n  color: #4389a0;\r\n}\r\n\r\n.nav-menu .drop-down > a::after {\r\n  content: \"\\ea99\";\r\n  font-family: IcoFont;\r\n  padding-left: 5px;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down ul {\r\n  top: 0;\r\n  left: calc(100% - 30px);\r\n}\r\n\r\n.nav-menu .drop-down .drop-down:hover > ul {\r\n  opacity: 1;\r\n  top: 0;\r\n  left: 100%;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down > a {\r\n  padding-right: 35px;\r\n}\r\n\r\n.nav-menu .drop-down .drop-down > a::after {\r\n  content: \"\\eaa0\";\r\n  font-family: IcoFont;\r\n  position: absolute;\r\n  right: 15px;\r\n}\r\n\r\n@media (max-width: 1366px) {\r\n  .nav-menu .drop-down .drop-down ul {\r\n    left: -90%;\r\n  }\r\n  .nav-menu .drop-down .drop-down:hover > ul {\r\n    left: -100%;\r\n  }\r\n  .nav-menu .drop-down .drop-down > a::after {\r\n    content: \"\\ea9d\";\r\n  }\r\n}\r\n\r\n/* Mobile Navigation */\r\n.mobile-nav-toggle {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 15px;\r\n  z-index: 9998;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  transition: all 0.4s;\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n}\r\n\r\n.mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav {\r\n  position: fixed;\r\n  top: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  left: 15px;\r\n  z-index: 9999;\r\n  overflow-y: auto;\r\n  background: #1a1814;\r\n  border: 2px solid rgba(255, 255, 255, 0.1);\r\n  transition: ease-in-out 0.2s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  border-radius: 10px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.mobile-nav * {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.mobile-nav .mobile-nav-close {\r\n  margin: 0 15px 0 auto;\r\n  display: block;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  transition: all 0.4s;\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.mobile-nav .mobile-nav-close:hover {\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav a {\r\n  display: block;\r\n  position: relative;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n  outline: none;\r\n  transition: 0.3s;\r\n}\r\n\r\n.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n.mobile-nav .drop-down > a::after {\r\n  content: \"\\ea99\";\r\n  font-family: IcoFont;\r\n  padding-left: 10px;\r\n  position: absolute;\r\n  right: 15px;\r\n}\r\n\r\n.mobile-nav .active.drop-down > a::after {\r\n  content: \"\\eaa1\";\r\n}\r\n\r\n.mobile-nav .btn-place-order a {\r\n  color: #fff;\r\n  border: 2px solid #4389a0;\r\n  border-radius: 50px;\r\n  margin: 20px 0 0 0;\r\n  padding: 10px 25px;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n}\r\n\r\n.mobile-nav .btn-place-order a:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n.mobile-nav .drop-down > a {\r\n  padding-right: 35px;\r\n}\r\n\r\n.mobile-nav .drop-down ul {\r\n  display: none;\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-nav .drop-down li {\r\n  padding-left: 20px;\r\n}\r\n\r\n.mobile-nav-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9997;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  overflow: hidden;\r\n  display: none;\r\n  transition: ease-in-out 0.2s;\r\n}\r\n\r\n.mobile-nav-active {\r\n  overflow: hidden;\r\n}\r\n\r\n.mobile-nav-active .mobile-nav {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.mobile-nav-active .mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Hero Section\r\n--------------------------------------------------------------*/\r\n#hero {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: url('../img/food-truck-5.jpg') top center;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n\r\n#hero::before {\r\n  content: \"\";\r\n  background: rgba(0, 0, 0, 0.5);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#hero .container {\r\n  padding-top: 110px;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  #hero .container {\r\n    padding-top: 98px;\r\n  }\r\n}\r\n\r\n#hero h1 {\r\n  margin: 0;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n  line-height: 56px;\r\n  color: #fff;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#hero h1 span {\r\n  color: #4389a0;\r\n}\r\n\r\n#hero h2 {\r\n  color: #eee;\r\n  margin-bottom: 10px 0 0 0;\r\n  font-size: 22px;\r\n}\r\n\r\n#hero .btns {\r\n  margin-top: 30px;\r\n}\r\n\r\n#hero .btn-menu, #hero .btn-place-order {\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  letter-spacing: 0.5px;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  padding: 12px 30px;\r\n  border-radius: 50px;\r\n  transition: 0.3s;\r\n  line-height: 1;\r\n  color: white;\r\n  border: 2px solid #4389a0;\r\n}\r\n\r\n#hero .btn-menu:hover, #hero .btn-place-order:hover {\r\n  background: #4389a0;\r\n  color: #fff;\r\n}\r\n\r\n#hero .btn-place-order {\r\n  margin-left: 15px;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  #hero {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (max-height: 500px) {\r\n  #hero .container {\r\n    padding-top: 130px;\r\n    padding-bottom: 60px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #hero h1 {\r\n    font-size: 28px;\r\n    line-height: 36px;\r\n  }\r\n  #hero h2 {\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Sections General\r\n--------------------------------------------------------------*/\r\nsection {\r\n  padding: 60px 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.section-bg {/*   background-color: #1a1814; */background-color: #fff;}\r\n\r\n.section-title {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.section-title h2 {\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  padding: 0;\r\n  line-height: 1px;\r\n  margin: 0 0 5px 0;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  color: #2d2d2d;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.section-title h2::after {\r\n  content: \"\";\r\n  width: 120px;\r\n  height: 1px;\r\n  display: inline-block;\r\n  background: #00000080;\r\n  margin: 4px 10px;\r\n}\r\n\r\n.section-title p {\r\n  margin: 0;\r\n  margin: 0;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  font-family: \"Playfair Display\", serif;\r\n  color: #4389a0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# About\r\n--------------------------------------------------------------*/\r\n.about {\r\n/*   background: url(\"../img/about-bg.jpg\") center center; */\r\n  background: url('../img/food-truck-7.jpg') center center;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding: 80px 0;\r\n  font-family: var(--font-family-sans-serif);\r\n}\r\n\r\n.about::before {\r\n  content: \"\";\r\n  background: rgba(0, 0, 0, 0.8);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.about .about-img {\r\n  position: relative;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img img {\r\n  max-width: 100%;\r\n  border: 4px solid rgba(255, 255, 255, 0.2);\r\n  position: relative;\r\n}\r\n\r\n.about .about-img::before {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 1;\r\n  content: '';\r\n  border-left: 5px solid #4389a0;\r\n  border-top: 5px solid #4389a0;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img::after {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 2;\r\n  content: '';\r\n  border-right: 5px solid #4389a0;\r\n  border-bottom: 5px solid #4389a0;\r\n  transition: .5s;\r\n}\r\n\r\n.about .about-img:hover {\r\n  transform: scale(1.03);\r\n}\r\n\r\n.about .about-img:hover::before {\r\n  left: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.about .about-img:hover::after {\r\n  right: 10px;\r\n  bottom: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .about .about-img::before,\r\n  .about .about-img::after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.about .content {\r\n  color: #fff;\r\n}\r\n\r\n.about .content h3 {\r\n  font-weight: 600;\r\n  font-size: 26px;\r\n}\r\n\r\n.about .content ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.about .content ul li {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.about .content ul i {\r\n  font-size: 20px;\r\n  padding-right: 4px;\r\n  color: #4389a0;\r\n}\r\n\r\n.about .content p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .about {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Why Us\r\n--------------------------------------------------------------*/\r\n.why-us .box {\r\n  padding: 50px 30px;\r\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n  transition: all ease-in-out 0.3s;\r\n  background: #1a1814;\r\n}\r\n\r\n.why-us .box span {\r\n  display: block;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n  color: #4389a0;\r\n}\r\n\r\n.why-us .box h4 {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  padding: 0;\r\n  margin: 20px 0;\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.why-us .box p {\r\n  color: #aaaaaa;\r\n  font-size: 15px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.why-us .box:hover {\r\n  background: #4389a0;\r\n  padding: 30px 30px 70px 30px;\r\n  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.why-us .box:hover span, .why-us .box:hover h4, .why-us .box:hover p {\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Menu Section\r\n--------------------------------------------------------------*/\r\n.menu #menu-filters {\r\n  padding: 0;\r\n  margin: 0 auto 0 auto;\r\n  list-style: none;\r\n  text-align: center;\r\n  border-radius: 50px;\r\n}\r\n\r\n.menu #menu-filters li {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  padding: 8px 12px 10px 12px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 1;\r\n  color: #fff;\r\n  margin-bottom: 10px;\r\n  transition: all ease-in-out 0.3s;\r\n  border-radius: 50px;\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n\r\n.menu #menu-filters li:hover, .menu #menu-filters li.filter-active {\r\n  color: #4389a0;\r\n}\r\n\r\n.menu #menu-filters li:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.menu .menu-item {\r\n  margin-top: 50px;\r\n}\r\n\r\n.menu .menu-img {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  border: 4px solid #a2a1a1db;\r\n}\r\n\r\n.menu .menu-content {\r\n  margin-left: 85px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\n.menu .menu-content::after {\r\n  content: \"......................................................................\"\r\n \"....................................................................\"\r\n \"....................................................................\";\r\n  position: absolute;\r\n  left: 20px;\r\n  right: 0;\r\n  top: -4px;\r\n  z-index: 1;\r\n  color: #000;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\n.menu .menu-content a {\r\n  padding-right: 10px;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 3;\r\n  font-weight: 700;\r\n  color: #212529;\r\n  transition: 0.3s;\r\n}\r\n\r\n.menu .menu-content a:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n.menu .menu-content span {\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 3;\r\n  padding: 0 10px;\r\n  font-weight: 600;\r\n  color: #212529;\r\n}\r\n\r\n.menu .menu-description {\r\n  margin-left: 85px;\r\n  font-style: oblique;\r\n  font-size: 15px;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n  color: #000000e0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Specials\r\n--------------------------------------------------------------*/\r\n.specials {\r\n  overflow: hidden;\r\n}\r\n\r\n.specials .nav-tabs {\r\n  border: 0;\r\n}\r\n\r\n.specials .nav-link {\r\n  border: 0;\r\n  padding: 12px 15px;\r\n  transition: 0.3s;\r\n  color: #fff;\r\n  border-radius: 0;\r\n  border-right: 2px solid #4389a0;\r\n  font-weight: 600;\r\n  font-size: 15px;\r\n}\r\n\r\n.specials .nav-link:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n.specials .nav-link.active {\r\n  color: #1a1814;\r\n  background: #4389a0;\r\n  border-color: #4389a0;\r\n}\r\n\r\n.specials .nav-link:hover {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.specials .tab-pane.active {\r\n  -webkit-animation: fadeIn 0.5s ease-out;\r\n  animation: fadeIn 0.5s ease-out;\r\n}\r\n\r\n.specials .details h3 {\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.specials .details p {\r\n  color: #aaaaaa;\r\n}\r\n\r\n.specials .details p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .specials .nav-link {\r\n    border: 0;\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Events\r\n--------------------------------------------------------------*/\r\n.events {\r\n  background: url(../img/events-bg.jpg) center center no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.events::before {\r\n  content: '';\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.events .section-title h2 {\r\n  color: #fff;\r\n}\r\n\r\n.events .container {\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .events {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n.events .owl-carousel {\r\n  background: #ffffff1c;\r\n  padding: 30px;\r\n}\r\n\r\n.events .owl-slide {\r\n  color: #fff;\r\n}\r\n\r\n.events .owl-slide h3 {\r\n  font-weight: 600;\r\n  font-size: 26px;\r\n  color: #4389a0;\r\n}\r\n\r\n.events .owl-slide .price {\r\n  font-size: 26px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.events .owl-slide .price span {\r\n  border-bottom: 2px solid #4389a0;\r\n}\r\n\r\n.events .owl-slide ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.events .owl-slide ul li {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.events .owl-slide ul i {\r\n  font-size: 20px;\r\n  padding-right: 4px;\r\n  color: #4389a0;\r\n}\r\n\r\n.events .owl-slide p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.events .owl-nav, .events .owl-dots {\r\n  margin-top: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.events .owl-dot {\r\n  display: inline-block;\r\n  margin: 0 5px;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n  background-color: #b9b9b985 !important;\r\n  outline: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.events .owl-dot.active {\r\n  background-color: #4389a0 !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .events .testimonial-item p {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Gallery\r\n--------------------------------------------------------------*/\r\n.gallery .gallery-item {\r\n  overflow: hidden;\r\n  border-right: 3px solid #454035;\r\n  border-bottom: 3px solid #454035;\r\n}\r\n\r\n.gallery .gallery-item img {\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n\r\n.gallery .gallery-item:hover img {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.vbox-container {\r\n  overflow-y: hidden; /* Remove the scrollbar when viewing images */\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Contact\r\n--------------------------------------------------------------*/\r\n.contact .info {\r\n  width: 100%;\r\n}\r\n\r\n.contact .info i {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  float: left;\r\n  width: 44px;\r\n  height: 44px;\r\n  background: #4389a0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.contact .info h4 {\r\n  padding: 0 0 0 60px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-bottom: 5px;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.contact .info p {\r\n  padding: 0 0 0 60px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  color: #212529;\r\n}\r\n\r\n.contact .info .open-hours, .contact .info .email, .contact .info .phone {\r\n  margin-top: 40px;\r\n}\r\n\r\n.contact .email-form {\r\n  width: 100%;\r\n}\r\n\r\n.contact .email-form .form-group {\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.contact .email-form .validate {\r\n  display: none;\r\n  color: red;\r\n  margin: 0 0 15px 0;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n}\r\n\r\n.contact .email-form .error-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #ed3c0d;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.contact .email-form .sent-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #18d26e;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.contact .email-form .loading {\r\n  display: none;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact .email-form .loading::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0 10px -6px 0;\r\n  border: 3px solid #4389a0;\r\n  border-top-color: #1a1814;\r\n  -webkit-animation: animate-loading 1s linear infinite;\r\n  animation: animate-loading 1s linear infinite;\r\n}\r\n\r\n.contact .email-form input, .contact .email-form textarea {\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 14px;\r\n  background: #2b2926;\r\n  border-color: #625b4b;\r\n  color: white;\r\n}\r\n\r\n.contact .email-form input::-webkit-input-placeholder, .contact .email-form textarea::-webkit-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::-moz-placeholder, .contact .email-form textarea::-moz-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input:-ms-input-placeholder, .contact .email-form textarea:-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::-ms-input-placeholder, .contact .email-form textarea::-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input::placeholder, .contact .email-form textarea::placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.contact .email-form input:focus, .contact .email-form textarea:focus {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.contact .email-form input {\r\n  height: 44px;\r\n}\r\n\r\n.contact .email-form textarea {\r\n  padding: 10px 12px;\r\n}\r\n\r\n.contact .email-form button[type=\"submit\"] {\r\n  background: #4389a0;\r\n  border: 0;\r\n  padding: 10px 35px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  border-radius: 50px;\r\n}\r\n\r\n.contact .email-form button[type=\"submit\"]:hover {\r\n  background: #d3af71;\r\n}\r\n\r\n@-webkit-keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Place Order\r\n--------------------------------------------------------------*/\r\n.place-order {\r\n  position: fixed;\r\n  top: 15px;\r\n  right: 15px;\r\n  bottom: 150px;\r\n  left: 15px;\r\n  z-index: 9999;\r\n  overflow-y: auto;\r\n  background: #1a1814;\r\n  border: 2px solid rgba(255, 255, 255, 0.1);\r\n/*   transition: ease-in-out 0.2s; */\r\n  /* opacity: 0; */\r\n  /* visibility: hidden; */\r\n  display: none;\r\n  border-radius: 10px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.place-order .place-order-close {\r\n  margin: 15px 0 0 auto;\r\n  padding: 0;\r\n  display: block;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 36px;\r\n  /*   transition: all 0.4s; */\r\n  outline: none !important;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: right;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.place-order .place-order-close:hover {\r\n  color: #d0d0d0;\r\n}\r\n\r\n.place-order .section-title h2 {\r\n  color: #8d8c8a;\r\n}\r\n\r\n.place-order .section-title h2::after {\r\n  background: #8d8c8a;\r\n}\r\n\r\n.place-order .section-title p {\r\n  color: #e6e6e6;\r\n}\r\n\r\n.place-order-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9997;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  overflow: hidden;\r\n  display: none;\r\n  transition: ease-in-out 0.2s;\r\n}\r\n\r\n.place-order .order-form {\r\n  width: 100%;\r\n}\r\n\r\n.place-order .order-form .form-group {\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.place-order .order-form .validate {\r\n  display: none;\r\n  color: red;\r\n  margin: 0 0 15px 0;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n}\r\n\r\n.place-order .order-form .error-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #ed3c0d;\r\n  text-align: left;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.place-order .order-form .error-message br + br {\r\n  margin-top: 25px;\r\n}\r\n\r\n.place-order .order-form .sent-message {\r\n  display: none;\r\n  color: #fff;\r\n  background: #18d26e;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.place-order .order-form .loading {\r\n  color: #fff;\r\n  display: none;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.place-order .order-form .loading::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0 10px -6px 0;\r\n  border: 3px solid #4389a0;\r\n  border-top-color: #1a1814;\r\n  -webkit-animation: animate-loading 1s linear infinite;\r\n  animation: animate-loading 1s linear infinite;\r\n}\r\n\r\n.place-order .order-form input, .place-order .order-form textarea {\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 14px;\r\n  background: #2b2926;\r\n  border-color: #625b4b;\r\n  color: white;\r\n}\r\n\r\n.place-order .order-form input::-webkit-input-placeholder, .place-order .order-form textarea::-webkit-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::-moz-placeholder, .place-order .order-form textarea::-moz-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input:-ms-input-placeholder, .place-order .order-form textarea:-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::-ms-input-placeholder, .place-order .order-form textarea::-ms-input-placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input::placeholder, .place-order .order-form textarea::placeholder {\r\n  color: #a49b89;\r\n}\r\n\r\n.place-order .order-form input:focus, .place-order .order-form textarea:focus {\r\n  border-color: #4389a0;\r\n}\r\n\r\n.place-order .order-form input {\r\n  height: 44px;\r\n}\r\n\r\n.place-order .order-form textarea {\r\n  padding: 10px 12px;\r\n}\r\n\r\n.place-order .order-form .btn-submit {\r\n  background: #4389a0;\r\n  border: 0;\r\n  padding: 10px 35px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  border-radius: 50px;\r\n  outline: none;\r\n}\r\n\r\n.place-order .order-form .btn-submit-disabled {\r\n  background: #41575f;\r\n  color: #d4d4d4;\r\n}\r\n\r\n.place-order .order-form .btn-submit:hover {\r\n  background: #dedede;\r\n  color: #4389a0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Footer\r\n--------------------------------------------------------------*/\r\n#footer {\r\n  background: black;\r\n  padding: 0 0 30px 0;\r\n  color: #fff;\r\n  font-size: 14px;\r\n}\r\n\r\n#footer .footer-top {\r\n  background: #0c0b09;\r\n  border-top: 1px solid #37332a;\r\n  border-bottom: 1px solid #28251f;\r\n  padding: 60px 0 30px 0;\r\n}\r\n\r\n#footer .footer-top .footer-info {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer .footer-top .footer-info h3 {\r\n  font-size: 24px;\r\n  margin: 0 0 20px 0;\r\n  padding: 2px 0 2px 0;\r\n  line-height: 1;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#footer .footer-top .footer-info p {\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  margin-bottom: 0;\r\n  font-family: \"Playfair Display\", serif;\r\n  color: #fff;\r\n}\r\n\r\n#footer .footer-top .social-links a {\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  background: #28251f;\r\n  color: #fff;\r\n  line-height: 1;\r\n  padding: 8px 0;\r\n  margin-right: 4px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  width: 36px;\r\n  height: 36px;\r\n  transition: 0.3s;\r\n}\r\n\r\n#footer .footer-top .social-links a:hover {\r\n  background: #fff;\r\n  color: #4389a0;\r\n  text-decoration: none;\r\n}\r\n\r\n#footer .footer-top h4 {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  position: relative;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n#footer .footer-top .footer-links {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#footer .footer-top .footer-links ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#footer .footer-top .footer-links ul i {\r\n  padding-right: 2px;\r\n  color: #4389a0;\r\n  font-size: 18px;\r\n  line-height: 1;\r\n}\r\n\r\n#footer .footer-top .footer-links ul li {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#footer .footer-top .footer-links ul li:first-child {\r\n  padding-top: 0;\r\n}\r\n\r\n#footer .footer-top .footer-links ul a {\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n#footer .footer-top .footer-links ul a:hover {\r\n  color: #4389a0;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form {\r\n  margin-top: 30px;\r\n  background: #28251f;\r\n  padding: 6px 10px;\r\n  position: relative;\r\n  border-radius: 50px;\r\n  border: 1px solid #454035;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"email\"] {\r\n  border: none;\r\n  padding: 4px;\r\n  width: calc(100% - 110px);\r\n  background: #28251f;\r\n  color: white;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"email\"]:active {\r\n  outline: none;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"submit\"] {\r\n  position: absolute;\r\n  top: -1px;\r\n  right: -1px;\r\n  bottom: -1px;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0 20px 2px 20px;\r\n  background: #4389a0;\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  border-radius: 50px;\r\n}\r\n\r\n#footer .footer-top .footer-newsletter form input[type=\"submit\"]:hover {\r\n  background: #d3af71;\r\n}\r\n\r\n#footer .copyright {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n#footer .credits {\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ (() => {

/**
 *  Form validation
 *
 *  Will need to implement a DB to query or some storage to determine whether a date is taken
 *  or not, as well as time.
 */
$('form.order-form').on("submit", function(event) {
//   document.getElementById('test').addEventListener('submit', function(event) {
  event.preventDefault();
  const name_regexp = /^[^\s\W]+\w{2,40}$/gi;
  const phone_regexp = /^(\(\d{3}\)|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/g;
  const email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const time_regexp = /(^1[1-9]|20):[0-5]\d$/g;
  const elements = [...this.elements].filter(el => el.className === 'form-control');
  let invalid = false;

//   elements.forEach(function(el) {
//     let validate = el.nextElementSibling;
//     let bad = false;
//     let msg = '';

//     switch (el.name) {
//       case 'name':
//         if (!name_regexp.test(el.value))    // Add better message to reflect error
//           bad = invalid = true;
//         msg = 'Please enter more than 2 characters';
//         break;

//       case 'email':
//         if (!email_regexp.test(el.value))
//           bad = invalid = true; 
//         msg = 'Please enter a valid email address';
//         break;

//       case 'phone':
//         if (!phone_regexp.test(el.value))
//           bad = invalid = true;
//         msg = 'Please enter a valid phone number';
//         break;
        
//       case 'date':  
//         if (!el.value || new Date(el.value) - new Date() < 0) {
//           msg = 'Please enter a valid date';
//           bad = invalid = true;
//         }
//         break;

//       case 'time':
//         if (!el.value) msg = 'Please enter a valid time';
//         else if (!time_regexp.test(el.value)) 
//           msg = 'Please enter a time within our business hours';
//         if (msg) bad = invalid = true;        
//         break;

//       case 'people':
//         if (el.value < 1) msg = 'Must be at least one person to make a booking';
//         else if (el.value > 16) msg = 'The number exceeds our maximum booking amount (16)';
//         if (msg) bad = invalid = true;
//         break;     

//       case 'subject':
//         if (!/^[\s\w]{5,}$/.test(el.value)) msg = 'Please enter a subject of at least 5 characters';
//         else if (!/^[\s\w]{5,75}$/.test(el.value)) msg = 'Exceeds maximum of 75 characters';
//         bad = invalid = true;       
//         break;

//       case 'message':
//         if (!/^[\s\w]{10,}$/.test(el.value)) {
//           msg = 'Please enter a message of at least 10 characters';
//           bad = invalid = true;
//         }          
//         break;
        
//     }
//     // Gives the error message and shows or hides the message
//     $(validate).text(bad ? msg : '').show('blind');      
//   });

//   if (invalid) return false;

  const form = $(this);
  const action = form.attr('action');
console.log(form);
  if (!action) {
    form.find('.loading').slideUp();
    form.find('.error-message').slideDown().text('The form action property is not set!');
    return false;
  }

  form.find('.sent-message').slideUp();
  form.find('.error-message').slideUp();
  form.find('.loading').slideDown();
  form.find('.btn-submit').addClass('btn-submit-disabled')
  form.find('.btn-submit-disabled').removeClass('btn-submit');

//   fetch(action, {
//     credentials: 'same-origin', // includes cookies in the request
//     method: 'POST',
//     headers: {
//       'CSRF-Token': $(this).attr('content')
//     },
//     timeout: 40000
//   })
//   .then(res => {
//     form.find('.loading').slideUp();
//     if (res.ok) {      
//       form.find('.sent-message').slideDown();
//       form.find("input:not(input[type=submit]), textarea").val('');
//     } 
//     else {
//       let msg = "Form submission failed!<br>" + 'Status: ' + res.statusText;
//       form.find('.error-message').delay(700).slideDown().html(msg);
//     }    
//   });
});


/***/ }),

/***/ "./src/img/events-bg.jpg":
/*!*******************************!*\
  !*** ./src/img/events-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "089a5749b06646aedee7.jpg";

/***/ }),

/***/ "./src/img/food-truck-5.jpg":
/*!**********************************!*\
  !*** ./src/img/food-truck-5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29cc6cd430087e290760.jpg";

/***/ }),

/***/ "./src/img/food-truck-7.jpg":
/*!**********************************!*\
  !*** ./src/img/food-truck-7.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf1375910ab0227ba562.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/js/order.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_order__WEBPACK_IMPORTED_MODULE_1__);



$.when($.ready).then(function() {
  // Preloader
  $("#preloader")
    .delay(200)
    .fadeOut("slow", function () {
      $(this).remove();
    });

  // Init AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    once: true,
  });

  // Menu list isotope and filter
  const menuIsotope = $(".menu-container").isotope({
    itemSelector: ".menu-item",
    layoutMode: "fitRows",
  });

  $("#menu-filters li").on("click", function () {
    $("#menu-filters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    menuIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });

  // Back to top button scroll
  $(".back-to-top").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  // Events carousel using the Owl Carousel library
  $(".owl-carousel").owlCarousel({
    autoplay: true, // Autoplays on load
    dots: true, // Navigation dots
    loop: true, // Loops forever
    items: 1, // Display one item at a time
  });

  // // ServiceWorker
  // if ("serviceWorker" in navigator) {
  //   // Check if a serviceWorker is already registered
  //   navigator.serviceWorker.getRegistration().then((registration) => {
  //     // If not, register it and reload to ensure client is under service worker's contract
  //     if (!registration || !navigator.serviceWorker.controller)
  //       navigator.serviceWorker.register("/serviceWorker.js");
  //   });
  // }

  // // Notification permissions
  // if ("permission" in Notification !== "denied")
  //   Notification.requestPermission();

  // Initiate venobox lightbox
  $(".venobox").venobox();

  // Progressive loading for images
  const imagesToLoad = document.querySelectorAll("img[data-src]");
  const loadImage = (img) => {
    $(img).attr("src", $(img).attr("data-src"));
    $(img).on("load", () => $(img).removeAttr("data-src"));
  };

  if ("IntersectionObserver" in window) {
    // Loads when scrolled into view
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImage(item.target);
          observer.unobserve(item.target);
        }
      });
    });

    imagesToLoad.forEach((img) => observer.observe(img));
  } else {
    // Fallback if API isn't supported: loads after DOM is ready
    imagesToLoad.forEach((img) => loadImage(img));
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#topbar").addClass("topbar-scrolled");

      // Back to top button style
      $(".back-to-top").fadeIn("slow");
    } else {
      $("#header").removeClass("header-scrolled");
      $("#topbar").removeClass("topbar-scrolled");
      $(".back-to-top").fadeOut("slow");
    }
  });

  // Toggle when reloading page without having to scroll
  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
    $("#topbar").addClass("topbar-scrolled");
    $(".back-to-top").fadeIn("slow");
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on(
    "click",
    ".nav-menu a, .mobile-nav a, .scrollto",
    function (e) {
      // If clicking home link, will not have a hash, redirect
      if (!this.hash) return;
      e.preventDefault();
      const scrolltoOffset = $("#header").outerHeight() - 1;
      const scrollto = $(this.hash).offset().top - scrolltoOffset;

      // SmoothScroll.js
      window.scrollTo({
        top: scrollto,
        behavior: "smooth",
      });

      if ($(this).parents(".nav-menu, .mobile-nav").length) {
        $(".nav-menu .active, .mobile-nav .active").removeClass("active");
        $(this).closest("li").addClass("active");
      }

      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-overlay").fadeOut();
      }
    }
  );

  // Place order modal
  $(document).on("click", ".btn-place-order", function (e) {
    $(".place-order").slideDown();
    $(".place-order-overlay").show();
    $("body").toggleClass("place-order-active");
  });

  $(document).on("click", ".place-order-close", function (e) {
    $(".place-order").slideUp();
    $(".place-order-overlay").hide();
    $("body").removeClass("place-order-active");
  });

  $(document).on("click", function (e) {
    const container = $(".place-order, .btn-place-order");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("place-order-active")) {
        $("body").removeClass("place-order-active");
        $(".place-order").slideUp();
        $(".place-order-overlay").hide();
      }
    }
  });

  // Mobile Navigation
  if ($(".nav-menu").length) {
    const $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $(".mobile-nav").prepend(
      '<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>'
    );
    $("#header").append(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overlay"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-overlay").toggle();
    });

    $(document).on("click", ".mobile-nav-close", function (e) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overlay").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).on("click", function (e) {
      const container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overlay").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  const nav_sections = $("section");
  const main_nav = $(".nav-menu, .mobile-nav");

  $(window).on("scroll", function () {
    const cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      const top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map