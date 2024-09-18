const User = require('../models/User');

// Kullanıcı Girişi
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Kullanıcı bulunamadığında veya şifre yanlış olduğunda hata mesajını döndürüyoruz
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({
        success: false,
        message: 'Geçersiz e-posta veya şifre!',
      });
    }

    // Başarıyla giriş yapıldığında
    res.json({
      success: true,
      message: 'Giriş başarılı!',
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Giriş işlemi başarısız.',
      error: error.message,
    });
  }
};


// Kullanıcı Kaydı
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({
      success: true,
      message: 'Hesabınız başarıyla oluşturuldu. Giriş yapabilirsiniz.',
      userId: user._id,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Hesabınız oluşturulamadı!',
      error: error.message,
    });
  }
};

module.exports = { register, login };