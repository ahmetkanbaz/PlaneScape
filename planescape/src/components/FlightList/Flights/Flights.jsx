/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import SingleFlight from "./SingleFlight/SingleFlight";
import Loading from "../../Loading/Loading";
import ErrorDanger from '../../ErrorDanger/ErrorDanger'

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

  if (loading) return <Loading />;

  if (error) return <ErrorDanger message={error} />
  
  return (
    <div>
      {flights.map((flight) => (
        <SingleFlight key={flight.id} flight = {flight}/>
      ))}
    </div>
  );
};

export default Flights;
