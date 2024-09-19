import { FaPlane } from "react-icons/fa6";
import { MdFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
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

      <div className="my-3 d-flex align-items-center gap-3 flex-wrap">
        <div className="d-flex align-items-center gap-1">
        <div className="input-group mb-3">
          <span className="input-group-text rounded-start-5" id="takingPlane"><MdFlightTakeoff /></span>
          <input type="text" className="form-control shadow-none rounded-end-0" placeholder="Nereden" aria-label="Taking Plane" aria-describedby="takingPlane" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text rounded-start-0" id="landingPlane"><MdOutlineFlightLand /></span>
          <input type="text" className="form-control shadow-none rounded-end-5" placeholder="Nereye" aria-label="Landing Plane" aria-describedby="landingPlane" />
        </div>
        </div>

        <div className="d-flex align-items-center gap-1">
        <div className="input-group mb-3">
          <span className="input-group-text rounded-start-5" id="takingPlane"><FaCalendarDay /></span>
          <input type="date" className="form-control shadow-none rounded-end-0" placeholder="Nereden" aria-label="Taking Plane" aria-describedby="takingPlane" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text rounded-start-0" id="landingPlane"><FaCalendarDay /></span>
          <input type="date" className="form-control shadow-none rounded-end-5" placeholder="Nereye" aria-label="Landing Plane" aria-describedby="landingPlane" />
        </div>
        </div>
      </div>

      <button className="btn px-4 py-2 showButton">Show flights</button>
    </div>
  );
};

export default FlightFilterBar;
