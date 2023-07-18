const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST route for /flights/:id
router.post('/flights/:id/destinations',destinationsCtrl.create);

module.exports = router;