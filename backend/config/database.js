//MongoDB ile olan bağlantıyı yönettiğimiz dosyadır.
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); //.env değişkenlerini yüklüyoruz.
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Veritabanına başarılı bir şekilde bağlanıldı: ${connect.connection.host}`
    );
  } catch (error) {
    console.log(
      `Veritabanına bağlanırken bir hatayla karşılaşıldı: ${error.message}!`
    );
  }
};

module.exports = connectDB