import { MdFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
const LocationDate = () => {
  let inputs = [
    {
      index: 1,
      items: [
        {
          index: 3,
          icon: <MdFlightTakeoff />,
          id: "takingPlane",
          spanClass: "rounded-start-5",
          inputClass: "rounded-end-0",
          inputType: "text",
          placeHolder: "Nereden",
        },
        {
          index: 4,
          icon: <MdOutlineFlightLand />,
          id: "landingPlane",
          spanClass: "rounded-start-0",
          inputClass: "rounded-end-5",
          inputType: "text",
          placeHolder: "Nereye",
        },
      ],
    },
    {
      index: 2,
      items: [
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
      ],
    },
  ];
  return (
    <div className="my-3 row align-items-center gap-3 gap-lg-0">
      {inputs.map((input) => (
        <div
          className="d-flex align-items-center gap-1 col-lg-6"
          key={input.index}
        >
          {input?.items.map((singleInput) => (
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
      ))}
    </div>
  );
};

export default LocationDate;
