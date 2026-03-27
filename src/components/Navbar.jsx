import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full py-4 flex justify-center">
      <div className="bg-black w-[95%] md:w-auto gap-8 rounded-full px-6 md:px-10 py-2 flex items-center justify-between text-white relative">
        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button onClick={() => setOpen(!open)}>
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* LEFT NAV (DESKTOP) */}
        <div className="hidden md:flex gap-8 lg:gap-16 items-center">
          <span className="cursor-pointer text-sm">Service</span>
          <span className="cursor-pointer text-sm">Our Team</span>
          <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium cursor-pointer">
            Home
          </span>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <img src={logo} alt="logo" className="h-10 md:h-14 object-contain" />
        </div>

        {/* RIGHT NAV (DESKTOP) */}
        <div className="hidden md:flex gap-8 lg:gap-16 items-center">
          <span className="cursor-pointer text-sm">Clients</span>
          <span className="cursor-pointer text-sm">Our Works</span>
          <span className="cursor-pointer text-sm">Contact</span>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-black rounded-2xl flex flex-col items-center gap-4 py-6 md:hidden z-50">
            <span className="cursor-pointer text-sm">Service</span>
            <span className="cursor-pointer text-sm">Our Team</span>
            <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium cursor-pointer">
              Home
            </span>
            <span className="cursor-pointer text-sm">Clients</span>
            <span className="cursor-pointer text-sm">Our Works</span>
            <span className="cursor-pointer text-sm">Contact</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
