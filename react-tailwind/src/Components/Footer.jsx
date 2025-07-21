import React from "react";
import logo from "../Assets/logo.png";
import { MdEmail, MdLocalPhone, MdFax } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#e6f8ff] text-[#004B7C] py-6 px-4 mt-10 border-t border-[#cceefa]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="C-Bed Marine Logo" className="h-14 mb-2" />
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-end text-right gap-3">
          {/* Desktop: full details */}
          <div className="hidden md:flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#00AEEF]" size={20} />
              <span>bss121@hotmail.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocalPhone className="text-[#00AEEF]" size={20} />
              <span>+971 0 50 2252 393</span>
            </div>
            <div className="flex items-center gap-2">
              <MdFax className="text-[#00AEEF]" size={20} />
              <span>+971 0 4 361 5660</span>
            </div>
          </div>

          {/* Mobile: icons only */}
          <div className="flex md:hidden flex-row items-center gap-4 text-[#00AEEF]">
            <MdEmail className="text-2xl" />
            <MdLocalPhone className="text-2xl" />
            <MdFax className="text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
