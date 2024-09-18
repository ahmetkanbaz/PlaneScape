const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require('./routes/auth')
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

connectDB(); // Veritabanı bağlantısını burada kullanıyoruz.

const PORT = process.env.PORT || 3000;

//Auth rotalarını kullanma
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});