const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require('./routes/auth')
const flightRoutes = require('./routes/flights')
const bookRoutes = require('./routes/booking')
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

connectDB(); // Veritabanı bağlantısını burada kullanıyoruz.

const PORT = process.env.PORT || 3000;

//Auth rotalarını kullanma
app.use('/api/auth', authRoutes)

//Uçuş rotasını kullanabilmek için ekliyoruz
app.use('/api/flights', flightRoutes)

//Booking (Rezervasyon) rotasını kullanıyoruz
app.use('/api/booking', bookRoutes)

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});