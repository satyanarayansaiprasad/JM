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
    <div className="w-full pt-20 py-10 overflow-hidden">
      <div className="relative flex w-full overflow-hidden">
        {/* TRACK */}
        <div className="flex animate-marquee gap-16">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client"
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
