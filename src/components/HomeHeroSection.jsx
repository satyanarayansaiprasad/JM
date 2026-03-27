import React from "react";
import HomeText from "../assets/home-text.png";
import HomeBg from "../assets/home-bg.png";
import Earth from "../assets/earth.png";

const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden">
      {/* TEXT IMAGE */}
      <img
        src={HomeText}
        alt="text"
        className="
          absolute 
          left-1/2 -translate-x-1/2 top-10   /* mobile center */
          w-[90%] max-w-[550px]

          md:left-20 md:top-32 md:w-[550px] md:translate-x-0
        "
      />

      {/* ROCKET + CLOUD */}
      <img
        src={HomeBg}
        alt="rocket"
        className="
          absolute 
          left-[-15%] right-0 bottom-0  /* mobile center */
          w-[120%]

          md:right-0 md:left-[-8%] md:w-auto md:translate-x-0
        "
      />

      {/* EARTH */}
      <img
        src={Earth}
        alt="earth"
        className="
          absolute 
          right-[-20%] bottom-0 w-[250px]   /* mobile smaller + pushed */

          md:right-0 md:w-[500px]
        "
      />
    </div>
  );
};

export default HomeHeroSection;
