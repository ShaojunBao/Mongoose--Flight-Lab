const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET route for flights/new
router.get('/new',flightsCtrl.new);

// Post /flights
router.post('/',flightsCtrl.create);

//GET route for /flights
router.get('/',flightsCtrl.index);

//GET route for/:id
router.get('/:id', flightsCtrl.show);





module.exports = router;
