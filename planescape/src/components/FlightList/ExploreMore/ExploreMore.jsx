import SingleImageWrapper from "./SingleImageWrapper/SingleImageWrapper";
import { FaCar, FaHotel, FaUmbrellaBeach } from "react-icons/fa6";


const ExploreMore = () => {
  let images = [
    { index: 1, imageUrl: "https://www.osoulhouse.com/blog/wp-content/uploads/2016/10/Money-saving-car-rental-tips.jpg", alt: "Car Rentals", icon: FaCar, title: "CAR RENTALS" },
    { index: 2, imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGk5UwXwBIp5APzs6FE5s2jrcNCGvVdoPD4jp8TG4425-jWKPj", alt: "Hotels", icon: FaHotel, title: "HOTELS" },
    { index: 3, imageUrl: "https://media.sciencephoto.com/f0/09/81/81/f0098181-800px-wm.jpg", alt: "Travel Package", icon: FaUmbrellaBeach, title: "TRAVEL PACKAGE" },
  ];
  return (
    <div className="col-md-3 text-white exploreMore">
      {images.map((singleImage) => (
        <SingleImageWrapper key={singleImage.index} singleImage = {singleImage} />
      ))}
    </div>
  );
};

export default ExploreMore;
