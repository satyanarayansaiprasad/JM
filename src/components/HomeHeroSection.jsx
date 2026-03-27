import React from "react";
import HomeText from "../assets/home-text.png";
import HomeBg from "../assets/home-bg.png";
import Earth from "../assets/earth.png";
import Cloud from "../assets/cloud.png";
import Rocket from "../assets/rocket.png";
const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[calc(100vh-80px)] overflow-hidden">
      {/* TEXT IMAGE */}
      <div
        className="
    absolute 
    left-1/2 -translate-x-1/2 top-10 
    w-[90%] max-w-[550px]

    md:left-20 md:top-32 md:w-[550px] md:translate-x-0
  "
      >
        {/* Top Line */}
        <h2 className="text-yellow-500 font-heading text-2xl md:text-4xl">
          you built your
        </h2>

        {/* BUSINESS */}
        <h1 className="font-heading text-4xl md:text-7xl font-bold leading-tight">
          <span className="text-teal-500">BUSI</span>
          <span className="text-black">NESS</span>
        </h1>

        {/* Sub text */}
        <p className="text-black text-sm md:text-base italic mt-2 max-w-[500px]">
          from the ground up. We help it reach the skies by turning everyday
          clicks into lasting
        </p>

        {/* Customers */}
        <h3 className="font-script text-yellow-500 text-3xl md:text-5xl mt-1">
          customers
        </h3>
      </div>
      {/* ROCKET + CLOUD */}
      <div
        className=" absolute
          bottom-36
          right-[600px] /* mobile center */ animate-rocket-enter"
      >
        <img
          src={Rocket}
          alt="rocket"
          className="
            animate-rocket-move
          w-[250px]
        "
        />
      </div>
      <img
        src={Cloud}
        alt="Cloud"
        className="
          absolute 
        bottom-0
        "
      />

      {/* EARTH */}
      <img
        src={Earth}
        alt="earth"
        className="
          absolute 
          w-[750px]
          right-[-10%] bottom-[-30%]  /* mobile center */
          animate-spin-slow
        "
      />
    </div>
  );
};

export default HomeHeroSection;
