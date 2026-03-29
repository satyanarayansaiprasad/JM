import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItemsLeft = [
    { name: "Service", path: "/services" },
    { name: "Our Team", path: "/our-team" },
    { name: "Home", path: "/" },
  ];

  const menuItemsRight = [
    // { name: "Clients", path: "/clients" },
    { name: "Our Works", path: "/works" },
    { name: "Contact", path: "/contact-us" },
  ];

  const renderItem = (item) => {
    const isActive = location.pathname === item.path;

    return (
      <div
        key={item.path}
        onClick={() => navigate(item.path)}
        className="relative cursor-pointer text-sm px-6 py-3"
      >
        {/* Animated Highlight */}
        {isActive && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-yellow-400 rounded-full z-0"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}

        <span
          className={`relative z-10 ${
            isActive ? "text-black font-medium" : "text-white"
          }`}
        >
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full py-4 flex justify-center">
      <div className="bg-black w-[98%] md:w-auto gap-10 lg:rounded-full px-6 md:px-10 py-2 flex items-center justify-between text-white relative">
        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button onClick={() => setOpen(!open)}>
            <FaBars className="text-xl text-yellow-500" />
          </button>
        </div>

        {/* LEFT NAV */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {menuItemsLeft.map(renderItem)}
        </div>

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="absolute cursor-pointer left-1/2 transform -translate-x-1/2 md:static md:transform-none"
        >
          <img src={logo} alt="logo" className="h-10 md:h-14 object-contain" />
        </div>

        {/* RIGHT NAV */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {menuItemsRight.map(renderItem)}
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-6 z-[999] md:hidden">
            {[...menuItemsLeft, ...menuItemsRight].map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className={`cursor-pointer text-xl px-6 py-3 rounded-full transition ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
