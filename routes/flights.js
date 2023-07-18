const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET route for flights/new
router.get('/new',flightsCtrl.new);

// Post /flights
router.post('/',flightsCtrl.create);

//GET route for /movies
router.get('/',flightsCtrl.index);

module.exports = router;
