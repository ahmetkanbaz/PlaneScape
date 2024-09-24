import axios from 'axios'

export const userLogin = async (values) => {
  let {email, password} = values
  try {
    const response = await axios.post('http://localhost:3001/api/auth/login', {email, password});
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const userRegister = async (values) => {
  let {name, email, password} = values
  try {
    const response = await axios.post('http://localhost:3001/api/auth/register', {name, email, password})
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const bookingFlight = async (values, userId) => {
  const {
    lastUpdatedAt,
    flightDirection,
    flightName,
    aircraftType,
    flightNumber,
    estimatedLandingTime,
    scheduleDateTime,
    route,
    airlineCode,
    mainFlight,
    id
  } = values;

  try {
    const response = await axios.post('http://localhost:3001/api/booking', {
      id,
      userId,
      lastUpdatedAt,
      flightDirection,
      flightName,
      aircraftType,
      flightNumber,
      estimatedLandingTime,
      scheduleDateTime,
      route,
      airlineCode,
      mainFlight
    });

    return response.data;
  } catch (error) {
    return error.response ? error.response.data : { message: 'Rezervasyon sırasında bilinmeyen bir hata oluştu.' };
  }
};