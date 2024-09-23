/* eslint-disable react/prop-types */
import { FaPlane } from "react-icons/fa";
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Toast from "../../Toast/Toast";
const MyFlight = ({ flight, getMyFlights }) => {
  let {
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
  } = flight;

  const options = { hour: "2-digit", minute: "2-digit", hour12: false };

  const date = (value) => {
    return new Date(value).toLocaleTimeString("tr-TR", options);
  };

  const handleDeleteBooking = async (e) => {
    e.preventDefault();
    if(confirm(`Are you sure you want to cancel your reservation for ${flightNumber}?`)) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/booking/${flight._id}`)
        getMyFlights()
        Toast({message: response.data.message, type: 'success'})
      } catch (error) {
        Toast({message: error.response?.data.message || error.message, type: 'error'})
      }
    }
  }
  return (
    <div className="rounded p-4 mt-4 myFlight">
      <p className="text-end fst-italic">Güncelleme Zamanı: {new Date(lastUpdatedAt).toLocaleTimeString()}</p>
      <div className="d-flex justify-content-between">
        <div>
          <p className="mb-0">Flight Name: {flightName}</p>
          <div><FaPlane size='1.5rem'/></div>
          {date(scheduleDateTime ? scheduleDateTime : estimatedLandingTime)}
        </div>
        <div className="text-center">
          <p className="mb-0">Route: {route}</p>
          <p className="mb-0">Airline Code: {airlineCode}</p>
          <p className="mb-0">{mainFlight}</p>
        </div>
        <div className="text-end">
          <p className="mb-0">Aircraft Type: {aircraftType}</p>
          {flightDirection == 'D' ? <div><LuPlaneTakeoff size='1.5rem'/></div> : <div><LuPlaneLanding size='1.5rem'/></div>}
          <p className="mb-0">Flight Number: {flightNumber}</p>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-center justify-content-md-end">
        <FaTrashAlt size='1.5rem' color="red" cursor='pointer' onClick={(e) => handleDeleteBooking(e)}/>
      </div>
    </div>
  );
};

export default MyFlight;
