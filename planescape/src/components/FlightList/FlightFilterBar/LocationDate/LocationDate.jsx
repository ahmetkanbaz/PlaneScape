/* eslint-disable react/prop-types */
import { MdFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
const LocationDate = ({setDepartureArrival}) => {
  let radios = [
    {
      index: 1,
      name: "departureArrival",
      icon: <MdFlightTakeoff />,
      id: "departure",
      spanClassName: 'rounded-start-5',
      className: "rounded-end-0",
      title: "Departure",
      defaultChecked: "checked",
    },
    {
      index: 2,
      name: "departureArrival",
      icon: <MdOutlineFlightLand />,
      id: "arrival",
      spanClassName: 'rounded-start-0',
      className: "rounded-end-5",
      title: "Arrivals",
      defaultChecked: "",
    },
  ];
  let inputs = [
    {
      index: 5,
      icon: <FaCalendarDay />,
      id: "firstDate",
      spanClass: "rounded-start-5",
      inputClass: "rounded-end-0",
      inputType: "date",
      placeHolder: "Tarihi giriniz...",
    },
    {
      index: 6,
      icon: <FaCalendarDay />,
      id: "secondDate",
      spanClass: "rounded-start-0",
      inputClass: "rounded-end-5",
      inputType: "date",
      placeHolder: "Tarihi giriniz...",
    },
  ];
  return (
    <div className="my-3 row align-items-center gap-3 gap-lg-0">
      <div className="d-flex align-items-center gap-1 col-lg-6">
        {radios.map((radio) => (
          <div className="input-group" key={radio.index}>
            <div className={`input-group-text ${radio.spanClassName}`}>{radio.icon}</div>
            <input
              type="radio"
              className='btn-check'
              name={radio.name}
              id={radio.id}
              autoComplete="off"
              onChange={(e) => setDepartureArrival(e.target.id)}
              defaultChecked={radio.defaultChecked}
            />
            <label className={`btn w-75 btn-outline-primary ${radio.className}`} htmlFor={radio.id}>
              {radio.title}
            </label>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center gap-1 col-lg-6">
        {inputs?.map((singleInput) => (
          <div className="input-group" key={singleInput.index}>
            <span
              className={`input-group-text ${singleInput.spanClass}`}
              id={singleInput.id}
            >
              {singleInput.icon}
            </span>
            <input
              type={singleInput.inputType}
              className={`form-control shadow-none ${singleInput.inputClass}`}
              placeholder={singleInput.placeHolder}
              aria-label={singleInput.placeHolder}
              aria-describedby={singleInput.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDate;
