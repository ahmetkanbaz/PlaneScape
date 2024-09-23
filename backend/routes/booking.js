const express = require('express');
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  deleteReservation,
} = require('../controllers/bookingController');

// Routes
router.post('/', createReservation);
router.get('/:userId', getAllReservations);
router.delete('/:id', deleteReservation);

module.exports = router;
