import React from "react";
import aimImage from "../Assets/our-aim.png";
import whoImage from "../Assets/who-we-are.png"; // Update with your actual image path

const Description = () => {
  return (
    <div className="bg-white w-full px-4 py-12 space-y-16" >
      {/* ========== OUR AIM Section ========== */}
      <section>
      <div  data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="200"
      > <div className="group text-center mb-1" >
          <h2 className="text-3xl md:text-4xl font-bold text-black inline-block">
            Our Aim
            <span className="block h-[3px] bg-[#00AEEF] mt-2 mx-auto max-w-[60px] transition-all duration-500 group-hover:max-w-[160px]"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-center max-w-[1240px] mx-auto gap-6">
          <div className="flex justify-center">
            <img
              src={aimImage}
              alt="Our Aim"
              className="w-[240px] md:w-[280px] object-contain"
            />
          </div>
          <div className="text-[#004b7c] text-center md:text-left">
            <p className="text-lg md:text-xl  leading-relaxed max-w-[500px] mx-auto md:mx-0">
              <span className="font-semibold">Seabed Marine Services</span> is a committed team dedicated to providing
              professional advice and delivering high-quality marine services to
              our clients with trust and excellence.
            </p>
          </div>
        </div>
        </div>
       
     

      {/* ========== WHO WE ARE Section ========== */}
     <div data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="200"
      ><div className="group text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black inline-block">
            Who We Are
            <span className="block h-[3px] bg-[#00AEEF] mt-2 mx-auto max-w-[60px] transition-all duration-500 group-hover:max-w-[160px]"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-center max-w-[1240px] mx-auto gap-6">
          <div className="flex justify-center">
            <img
              src={whoImage}
              alt="Who We Are"
              className="w-[240px] md:w-[300px] object-contain"
            />
          </div>
          <div className="text-[#004b7c] md:text-left text-center">
            <p className="text-lg md:text-xl  mb-4">
              Established in 2005, <span className="font-bold">C-Bed Marine</span> is a Dubai-based
              marine service company with extensive experience in:
            </p>
            <ul className="list-disc pl-5 text-md md:text-lg space-y-2 text-left">
              <li>Ship coordination and port operations</li>
              <li>Compliance with DP World and Dubai Customs regulations</li>
              <li>Offshore industrial services and supply</li>
              <li>Long-standing relationships with trusted marine partners</li>
            </ul>
          </div>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default Description;
