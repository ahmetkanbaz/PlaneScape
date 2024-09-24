/* eslint-disable react/prop-types */
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { bookingFlight } from "../../../../services/posts";
import Toast from "../../../Toast/Toast";
import { useNavigate } from "react-router-dom";

const SingleFlight = ({ flight }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
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
  } = flight;

  const handleBooking = async () => {
    if (Object.keys(user).length == 0) {
      Toast({
        message: "Uçuşa rezervasyon yaptırabilmek için lütfen giriş yapınız.",
        type: "error",
      });
      navigate("/auth/login");
    } else {
      const response = await bookingFlight(flight, user.userId);
      Toast({ message: response.message });
    }
  };

  const options = { hour: "2-digit", minute: "2-digit", hour12: false };

  const date = (value) => {
    return new Date(value).toLocaleTimeString("tr-TR", options);
  };

  return (
    <div className="singleFlight">
      <div className="mt-4 rounded p-3 position-relative">
        <div className="my-3 d-flex align-items-center justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2">
              {flightDirection == "D" ? (
                <>
                  <LuPlaneTakeoff size="1.25rem" /> Departure
                </>
              ) : (
                <>
                  <LuPlaneLanding size="1.25rem" /> Arrival
                </>
              )}
            </div>
            <div className="fw-semibold">
              {date(scheduleDateTime)
                ? date(scheduleDateTime)
                : date(estimatedLandingTime)}
            </div>
            <div>Airport: {route?.destinations[0]}</div>
          </div>
          <hr
            style={{
              width: "100px",
              border: "none",
              height: "2px",
              backgroundColor: "black",
            }}
          />
          <div className="text-center">
            <div>{mainFlight}</div>
            <div>
              <FaPlane size="1.25rem" />
            </div>
            <div>Airline Code: {airlineCode}</div>
          </div>
        </div>
        <div className="otherInfos">
          <p className="mb-0">Flight Number: {flightNumber}</p>
          <p className="mb-0">Flight Name: {flightName}</p>
          <p className="mb-0">Aircraft Type: {aircraftType?.iataMain}</p>
          <p className="mb-0">
            Last Updated At: {new Date(lastUpdatedAt).toLocaleString()}
          </p>
        </div>

        <button
          className="btn position-absolute bottom-0 end-0 px-4 py-3 bookFlightButton"
          type="button"
          onClick={handleBooking}
        >
          Book Flight
        </button>
      </div>
      <button
        className="btn px-3 py-2 fw-medium text-decoration-underline rounded-0 rounded-bottom checkTheDetails"
        type="button"
      >
        Check the details
      </button>
    </div>
  );
};

export default SingleFlight;
