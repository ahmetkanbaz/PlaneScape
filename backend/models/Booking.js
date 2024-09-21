const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  flightId: { type: String, required: true },
  lastUpdatedAt: Date,
  flightDirection: String,
  flightName: String,
  aircraftType: String,
  flightNumber: String,
  estimatedLandingTime: Date,
  scheduleDateTime: Date,
  route: String,
  airlineCode: String,
  mainFlight: String,
});

module.exports = mongoose.model('Booking', bookingSchema);