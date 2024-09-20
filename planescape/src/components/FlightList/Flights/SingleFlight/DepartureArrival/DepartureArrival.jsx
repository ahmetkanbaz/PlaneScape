import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";
const DepartureArrival = () => {
  return (
    <div className="my-3 d-flex align-items-center justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2">
              <LuPlaneTakeoff size="1.25rem" /> Departure
            </div>
            <div className="fw-semibold">7.30 AM</div>
            <div>Airport: MX</div>
          </div>
          <hr style={{ width: '50px', border: 'none', height: '2px', backgroundColor: 'black' }} />
          <div className="text-center">
            <div>Airport</div>
            <div><FaPlane size='1.25rem' /></div>
            <div>Toplam Süre</div>
          </div>
          <hr style={{ width: '50px', border: 'none', height: '2px', backgroundColor: 'black' }} />
          <div>
            <div className="d-flex align-items-center gap-2">
              <LuPlaneLanding size="1.25rem" /> Arrival
            </div>
            <div className="fw-semibold">7.30 AM</div>
            <div>Airport: MX</div>
          </div>
        </div>
  )
}

export default DepartureArrival