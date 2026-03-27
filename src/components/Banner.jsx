import React from "react";
import footerBanner from "../assets/footer-banner.png";
const Banner = () => {
  return (
    <div className="flex justify-center">
      <img
        src={footerBanner}
        className="lg:px-20 px-4 py-4 "
        alt="Footer Banner"
      />
    </div>
  );
};

export default Banner;
