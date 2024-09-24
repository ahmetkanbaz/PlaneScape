import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MyFlightsLists from "../../components/MyFlightsLists/MyFlightsLists";
import ErrorDanger from "../../components/ErrorDanger/ErrorDanger";

const MyFlights = () => {
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const [myFlights, setMyFlights] = useState([]);
  const [error, setError] = useState(null);

  const getMyFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/booking/${user.userId}`
      );
      setMyFlights(response.data);
    } catch (error) {
      setError(error.response?.data.message || error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMyFlights();
  }, []);

  if (loading) return <Loading />;

  if (error) return <ErrorDanger message={error} />

  if (myFlights?.length == 0) return <ErrorDanger message='Rezervasyon yapmış olduğunuz herhangi bir uçuşunuz bulunamamaktadır!' />

  return (
    <section className="py-5">
      <div className="container">
        <SectionTitle title="Uçuşlarım" classname="fw-medium" />
        <MyFlightsLists myflight={myFlights} getMyFlights = {getMyFlights}/>
        
      </div>
    </section>
  );
};

export default MyFlights;