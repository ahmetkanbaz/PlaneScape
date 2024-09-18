const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Kullanıcı Kaydı (Register)
router.post("/register", async (request, res) => {
  const { name, email, password } = request.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({
      success: true,
      message: "Hesabınız başarıyla oluşturuldu.",
      userId: user._id,
    });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        message: "Hesabınız oluşturulamadı!",
        error: error.message,
      });
  }
});

//Kullanıcı Girişi (Login)
router.post('/login', async (request, res) => {
  const {email, password} = request.body

  try {
    const user = await User.findOne({email})
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Geçersiz e-posta veya şifre!'
      })
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    res.json({
      success: true,
      message: 'Giriş başarılı!',
      token
    })
  } catch (error) {
    res.status(500).json({success: false, message: 'Giriş işlemi başarısız.', error: error.message})
  }
})

module.exports = router