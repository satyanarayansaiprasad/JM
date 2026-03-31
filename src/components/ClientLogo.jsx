import React from "react";
import logo1 from "../assets/row1.png";
import logo2 from "../assets/row2.png";
import logo3 from "../assets/row3.png";
import logo4 from "../assets/row4.png";
import logo5 from "../assets/row5.png";
import logo6 from "../assets/row6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientsMarquee = () => {
  return (
    <div className="w-full pt-10 pb-10 overflow-hidden relative">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Track contains two identical halves for a seamless loop */}
        <div className="flex items-center gap-24 px-12 shrink-0">
          {logos.map((logo, index) => (
            <img
              key={`set1-${index}`}
              src={logo}
              alt="client"
              className="h-16 lg:h-24 w-auto object-contain"
            />
          ))}
        </div>
        <div className="flex items-center gap-24 px-12 shrink-0">
          {logos.map((logo, index) => (
            <img
              key={`set2-${index}`}
              src={logo}
              alt="client"
              className="h-16 lg:h-24 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
