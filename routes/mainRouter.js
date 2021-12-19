var express = require('express');
var router = express.Router();

var main = require('../controllers/mainController');


module.exports = router;


router.get('/', main.index);

router.get('/home', main.home);

router.get('/booking', main.booking);

// router.post('/booking', main.booking_post);
