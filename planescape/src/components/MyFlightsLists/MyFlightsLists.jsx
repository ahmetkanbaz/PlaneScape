/* eslint-disable react/prop-types */
import MyFlight from "./MyFlight/MyFlight";

const MyFlightsLists = ({ myflight, getMyFlights }) => {
  return (
    <div>
      {myflight.map((flight) => (
        <MyFlight key={flight.flightId} flight={flight} getMyFlights = {getMyFlights} />
      ))}
    </div>
  );
};

export default MyFlightsLists;
