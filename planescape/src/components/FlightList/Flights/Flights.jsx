/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import SingleFlight from "./SingleFlight/SingleFlight";

const Flights = ({departureArrival}) => {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  
  const getFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/flights", {
        params: { flightDirection: departureArrival == 'departure' ? 'D' : 'A' } // Yön parametresini ekliyoruz
    });
      setFlights(response.data?.flights);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFlights();
  }, [departureArrival]);

  console.log(flights)

  if (loading) return <p>Loading</p>;
  
  return (
    <div className="col-md-9">
      {flights.map((flight) => (
        <SingleFlight key={flight.id} flight = {flight}/>
      ))}
    </div>
  );
};

export default Flights;
