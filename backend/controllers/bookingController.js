const Booking = require('../models/Booking'); // Rezervasyon modelini import edin

// Rezervasyon yapma
const createReservation = async (req, res) => {
  const { lastUpdatedAt,
    flightDirection,
    flightName,
    aircraftType,
    flightNumber,
    estimatedLandingTime,
    scheduleDateTime,
    route,
    airlineCode,
    mainFlight,
    id, userId } = req.body;

  try {
    // Kullanıcının daha önce bu uçuş için rezervasyon yapıp yapmadığını kontrol et
    const existingReservation = await Booking.findOne({ userId, flightId: id });
    if (existingReservation) {
      return res.status(400).json({ message: 'Bu uçuş için daha önceden sizin adınıza rezervasyon bulunmaktadır.' });
    }

    const reservationData = {
      userId,
      flightId: id,
      lastUpdatedAt: lastUpdatedAt,
      flightDirection: flightDirection,
      flightName: flightName,
      aircraftType: aircraftType?.iataMain,
      flightNumber: flightNumber,
      estimatedLandingTime: estimatedLandingTime,
      scheduleDateTime: scheduleDateTime,
      route: route?.destinations[0],
      airlineCode: airlineCode,
      mainFlight: mainFlight,
    };

    const reservation = new Booking(reservationData);
    await reservation.save();
    res.status(201).json({message: 'Rezervasyonunuz başarılı bir şekilde gerçekleştirilmiştir.'});
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

// Giriş yapan kullanıcının rezervasyonları listeleme
const getAllReservations = async (req, res) => {
  const {userId} = req.params //userId'yi alıyoruz
  try {
    const reservations = await Booking.find({userId});
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Rezervasyonlar alınamadı', error });
  }
};

// Rezervasyonu silme
const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Booking.findOneAndDelete({ _id: id });
    if (!reservation) {
      return res.status(404).json({ message: 'Rezervasyon bulunamadı.' });
    }
    res.status(200).json({ message: 'Rezervasyon başarıyla silindi.' });
  } catch (error) {
    res.status(500).json({ message: 'Rezervasyon silinirken bir hatayla karşılaşıldı!', error });
  }
};

module.exports = {
  createReservation,
  getAllReservations,
  deleteReservation
};
