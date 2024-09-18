const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB(); // Veritabanı bağlantısını burada kullanıyoruz.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});
