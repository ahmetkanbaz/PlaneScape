import { FaPlane } from "react-icons/fa6";
import LocationDate from "./LocationDate/LocationDate";
const FlightFilterBar = () => {
  return (
    <div className="p-3 mt-4 rounded-4 flightFilterBar">
      <div className="d-flex justify-content-md-between align-items-center flex-wrap">
        <div>
          <FaPlane /> <span className="fw-semibold">BOOK YOUR FLIGHT</span>
        </div>
        <div className="d-flex align-items-center mt-3 mt-md-0">
          <div>
            <input
              type="radio"
              className="btn-check"
              name="roundTrip"
              id="roundTrip"
              autoComplete="off"
              // onChange={(e) => setSelectedForm(e.target.id)}
              defaultChecked="checked"
            />
            <label className="btn px-3 rounded-start-5" htmlFor="roundTrip">
              Round trip
            </label>
          </div>
          <div>
          <input
              type="radio"
              className="btn-check"
              name="roundTrip"
              id="oneWay"
              autoComplete="off"
              // onChange={(e) => setSelectedForm(e.target.id)}
            />
            <label className="btn px-3 rounded-end-5" htmlFor="oneWay">
              One way
            </label>
          </div>
        </div>
      </div>

      <LocationDate />

      <button className="btn px-4 py-2 showButton">Show flights</button>
    </div>
  );
};

export default FlightFilterBar;
