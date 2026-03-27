import React from "react";
import ss1 from "../assets/chat1.png";
import ss2 from "../assets/chat2.png";
import ss3 from "../assets/chat3.png";

const Testimonials = () => {
  return (
    <div className="w-full  py-20 px-6">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-heading leading-tight">
          WHAT <span className="text-yellow-500">THEY</span> <br />
          SAY
          <span className="text-4xl  font-script">ABOUT US</span>
        </h1>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <img
          src={ss1}
          alt="testimonial"
          className="w-full rounded-xl shadow-sm"
        />

        <img
          src={ss2}
          alt="testimonial"
          className="w-full rounded-xl shadow-sm"
        />

        <img
          src={ss3}
          alt="testimonial"
          className="w-full rounded-xl shadow-sm"
        />
      </div>
    </div>
  );
};

export default Testimonials;
