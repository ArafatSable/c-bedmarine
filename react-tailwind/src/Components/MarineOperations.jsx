import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const marineOps = [
  "Ship agency services",
  "Launch services",
  "Crew change coordination",
  "Inward/Outward vessel clearance",
  "Custom clearance",
  "Centralized husbandry & protection services",
];

const MarineOperations = () => {
  return (
    <div className="w-full px-4 py-12 bg-white" data-aos="fade-up">
      {/* Marine Operations Title */}
      <div className="text-center mb-8 group">
        <h2 className="text-3xl md:text-4xl font-bold text-black inline-block relative">
          Marine Operations
          <span className="block h-[3px] bg-[#00AEEF] mt-2 mx-auto max-w-[60px] transition-all duration-500 group-hover:max-w-[160px]" />
        </h2>
      </div>

      {/* Marine Operations Grid */}
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {marineOps.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="flex items-center gap-4 p-5 min-h-[110px] bg-[#f8fcff] border border-[#d9ebf3] rounded-lg shadow-sm hover:shadow-md transition"
          >
            <FaCheckCircle className="text-[#00AEEF] text-3xl flex-shrink-0" />
            <span className="text-[#004B7C] text-lg font-medium leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Our Team Section */}
      <div className="text-center max-w-[900px] mx-auto px-2" data-aos="fade-up">
      <div className="text-center mb-8 group">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Team
          <span className="block h-[3px] bg-[#00AEEF] mt-2 mx-auto max-w-[60px] transition-all duration-500 group-hover:max-w-[160px]" />
        </h2>
         </div>
        <p className="text-[#004B7C] text-md md:text-lg leading-relaxed">
          Our team is composed of highly experienced marine pilots and operational professionals with over 20 years of industry knowledge.
          We are dedicated to precision, safety, and customer satisfaction — building our reputation on reliability and results.
        </p>
      </div>
    </div>
  );
};

export default MarineOperations;
