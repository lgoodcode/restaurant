// eslint-disable-next-line new-cap
const router = require('express').Router();

const main = require('../controllers/mainController');

module.exports = router;

router.get('/', main.index);

router.get('/home', main.home);

router.get('/booking', main.booking);

// router.post("/booking", main.booking_post);
