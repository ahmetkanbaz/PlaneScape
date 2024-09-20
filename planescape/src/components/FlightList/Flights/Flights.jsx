import { useEffect, useState } from "react";
import axios from "axios";

const Flights = () => {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const getFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/flights");
      setFlights(response.data?.flights);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFlights();
  }, []);
  
  if (loading) return <p>Loading</p>;
  return (
    <div className="col-md-9 bg-danger">
      {flights.map((flight, i) => (
        <div key={i}>{flight.actualLandingTime}</div>
      ))}
    </div>
  );
};

export default Flights;
