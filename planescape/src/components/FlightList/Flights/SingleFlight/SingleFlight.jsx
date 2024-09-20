import DepartureArrival from "./DepartureArrival/DepartureArrival";

const SingleFlight = ({singleFlight}) => {
  const {lastUpdatedAt, flightDirection, flightName, } = singleFlight
  return (
    <div className="singleFlight">
      <div className="mt-4 bg-white rounded p-3 position-relative">        
        <DepartureArrival />
        <div>
          <p className="mb-0">Uçuş Numarası:</p>
          <p className="mb-0">Uçuş Adı:</p>
          <p className="mb-0">Uçak Tipi:</p>
          <p className="mb-0">Son Güncellenme Zamanı:</p>
        </div>

        <button
          className="btn position-absolute bottom-0 end-0 px-4 py-3 bookFlightButton"
          type="button"
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
