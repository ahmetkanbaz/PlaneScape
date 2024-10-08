import ExploreMore from "./ExploreMore/ExploreMore";
import FlightFilterBar from "./FlightFilterBar/FlightFilterBar";
import { FlightListWrapper } from "./FlightListStyle";
import { useSelector } from "react-redux";
import Flights from "./Flights/Flights";
import { useState } from "react";

const FlightList = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [departureArrival, setDepartureArrival] = useState("departure");

  return (
    <FlightListWrapper theme={theme} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <FlightFilterBar setDepartureArrival={setDepartureArrival} />
            <Flights departureArrival={departureArrival} />
          </div>
          <ExploreMore />
        </div>
      </div>
    </FlightListWrapper>
  );
};

export default FlightList;
