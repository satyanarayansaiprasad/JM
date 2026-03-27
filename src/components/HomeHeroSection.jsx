import React from "react";
import HomeText from "../assets/home-text.png";
import HomeBg from "../assets/home-bg.png";
import Earth from "../assets/earth.png";
const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* TEXT IMAGE */}
      <img
        src={HomeText}
        alt="text"
        className="absolute left-20 top-32 w-[550px] max-w-[90%]"
      />

      {/* ROCKET + CLOUD */}
      <img
        src={HomeBg}
        alt="rocket"
        className="absolute right-0 left-[-8%] bottom-0 "
      />

      {/* EARTH */}
      <img
        src={Earth}
        alt="earth"
        className="absolute right-0 bottom-0 w-[500px]"
      />
    </div>
  );
};

export default HomeHeroSection;
