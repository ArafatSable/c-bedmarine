import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../Assets/service1.jpg"; // Replace with your actual paths
import img2 from "../Assets/service2.jpg";
import img3 from "../Assets/service3.jpg";
import img4 from "../Assets/service4.jpg";
import img5 from "../Assets/service5.jpg";
import img6 from "../Assets/service6.jpg";

const servicesData = [
  {
    id: 1,
    title: "Rig Moves & Towing Operations",
    image: img1,
  },
  {
    id: 2,
    title: "Break Bulk Cargo Loadouts (Port & Offshore)",
    image: img2,
  },
  {
    id: 3,
    title: "Piloting – Various types of Vessels and Sizes in all Ports",
    image: img3,
  },
  {
    id: 4,
    title: "Magnetic Compass Calibration (Remote & On-site)",
    image: img4,
  },
  {
    id: 5,
    title: "Chartering and Brokerage – TUGS",
    image: img5,
  },
  {
    id: 6,
    title: "Bollard Pull Test in Jebel Ali PortDubai Dry DockSharjah Hamriyah",
    image: img6,
  },
  // Add more if needed
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronLeft className="text-[#00AEEF]" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronRight className="text-[#00AEEF]" />
  </div>
);

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4  bg-white" data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="200" >
      {/* Section Title */}
      <div className="group text-center mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-black inline-block">
          Our Services
          <span className="block h-[3px] bg-[#00AEEF] mt-2 mx-auto max-w-[60px] transition-all duration-500 group-hover:max-w-[160px]" />
        </h2>
        <p className="text-[#00558C] text-xl mt-2">We specialize in:</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1240px] mx-auto">
        <Slider {...settings}>
          {servicesData.map((service) => (
            <div key={service.id} className="px-2">
              <div className="border shadow hover:shadow-lg transition rounded overflow-hidden bg-white flex flex-col h-[320px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4 text-[#00558C] font-semibold text-center text-xl md:text-md flex-1 flex items-center justify-center text-ellipsis">
                  {service.id}. {service.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
