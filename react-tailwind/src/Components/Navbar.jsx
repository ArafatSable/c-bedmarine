import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdEmail, MdLocalPhone, MdFax } from "react-icons/md";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "bg-[#00AEEF] text-white px-3 py-1 "
      : "text-[#00AEEF] hover:bg-[#e0f4ff] px-3 py-1 ";

  return (
    <div className="w-full border-b shadow-sm fixed top-0 left-0 z-50 bg-white">
      {/* Top bar with logo and contact */}
      <div className="flex justify-between items-center py-3 px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="C-Bed Marine Logo" className="h-12 md:h-14" />
        </div>
        <div className="hidden md:flex flex-col text-right text-[#00AEEF] text-sm leading-5">
          <div className="flex items-center space-x-2 justify-end">
            <MdEmail size={18} />
            <span>bss121@hotmail.co.uk</span>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <MdLocalPhone size={18} />
            <span>+971 0 50 2252 393</span>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <MdFax size={18} />
            <span>+971 0 4 361 5660</span>
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden text-[#00AEEF] cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="bg-white px-4 md:px-8 border-t border-[#00AEEF]">
        <ul className="hidden md:flex space-x-8 font-bold text-lg">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>
              ABOUT ME
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {nav && (
        <div className="md:hidden bg-white w-full px-4 pb-4 text-[#00AEEF] font-semibold">
          <ul className="flex flex-col space-y-3  font-bold text-lg">
            <li>
              <NavLink to="/" className={navLinkStyle} onClick={() => setNav(false)}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyle} onClick={() => setNav(false)}>
                ABOUT ME
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
