import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full py-4 flex justify-center ">
      <div className="bg-black rounded-full px-10 py-1 gap-16 flex items-center  text-white">
        {/* LEFT NAV */}
        <div className="flex gap-16 items-center">
          <span className="cursor-pointer text-sm">Service</span>
          <span className="cursor-pointer text-sm">Our Team</span>
          <span className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium cursor-pointer">
            Home
          </span>
        </div>

        {/* CENTER LOGO (ABSOLUTE PERFECT CENTER) */}
        <div>
          {/* Replace with your logo */}
          <img src={logo} alt="logo" className="h-14  object-contain" />
        </div>

        {/* RIGHT NAV */}
        <div className="flex gap-16 items-center">
          <span className="cursor-pointer text-sm">Clients</span>
          <span className="cursor-pointer text-sm">Our Works</span>
          <span className="cursor-pointer text-sm">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
