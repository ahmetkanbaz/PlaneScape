const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");

// Kullanıcı Girişi (Login)
router.post("/login", login);

// Kullanıcı Kaydı (Register)
router.post("/register", register);

module.exports = router;