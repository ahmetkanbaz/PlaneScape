const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const { flightDirection } = req.query;
  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          app_id: "34ef7b33",
          app_key: "5e32de0dad6c649a3ba23bfe6fd50851",
          ResourceVersion: "v4",
        },
        params: {
          flightDirection: flightDirection, // Yön parametresini ekliyoruz
        },
      }
    );
    res.json(response.data); // Uçuş verilerini frontend'e gönderiyoruz
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Uçuş verilerini alırken bir hata oluştu." });
  }
});

module.exports = router;
