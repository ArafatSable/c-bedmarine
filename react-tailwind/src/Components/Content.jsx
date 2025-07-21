import React from "react";
import hero from "../Assets/hero-image.png";

const Content = ({ scrollToServices }) => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        src={hero}
        alt="Boats Hero"
        className="w-full h-full object-cover animate-float"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Trusted Marine Services Since 2005
        </h1>
        <p className="text-white text-md md:text-lg max-w-2xl mb-6">
          We coordinate complex port operations and offshore logistics with precision and experience.
        </p>
        <div className="flex gap-4">
          <button
            onClick={scrollToServices}
            className="bg-[#00AEEF] text-white px-6 py-2 rounded font-semibold hover:bg-[#008dc4] transition"
          >
            Explore Our Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-white text-6xl">↓</div>
      </div>
    </div>
  );
};

export default Content;
