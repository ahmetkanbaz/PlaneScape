import axios from "axios";

export const getFlights = async (departureArrival) => {
  try {
    const response = await axios.get("http://localhost:3001/api/flights", {
      params: {
        flightDirection: departureArrival == "departure" ? "D" : "A",
      }, // Yön parametresini ekliyoruz
    });
    return response.data?.flights;
  } catch (error) {
    return error.message;
  }
};