import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaDiscord,
} from "react-icons/fa";
const Works = () => {
  return (
    <div className="h-full">
      <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center ">
        {/* LEFT SMALL CIRCLE */}
        <div className="absolute left-[-200px] bottom-[-70px] w-[300px] h-[300px] bg-[#39AEB9] rounded-full"></div>

        {/* RIGHT SMALL CIRCLE */}
        <div className="absolute right-[-50px] top-10 w-[300px] h-[300px] bg-[#39AEB9] rounded-full"></div>

        {/* MAIN ROW */}
        <div className="flex items-center justify-center reletive z-10">
          {/* ORANGE CIRCLE */}
          <div className="w-[220px] h-[220px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-b from-[#FEC107] to-[#FE6A07] flex items-center justify-center">
            <span className="font-script text-3xl lg:text-[200px] text-black translate-y-2 lg:translate-y-6">
              Works
            </span>
          </div>
          {/* BIG TEXT */}
          <div className="ml-4 lg:ml-8 text-[120px] lg:text-[600px] font-bold leading-none">
            UR
          </div>
        </div>
      </div>
      {/* bootom section */}
      <div className="w-full  py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
              Lets work together
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md mb-10">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 text-xl text-black">
              <FaDiscord className="cursor-pointer hover:opacity-70" />
              <FaFacebookF className="cursor-pointer hover:opacity-70" />
              <FaDribbble className="cursor-pointer hover:opacity-70" />
              <FaInstagram className="cursor-pointer hover:opacity-70" />
              <FaBehance className="cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full max-w-md lg:ml-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#dcdcdc] p-4 mb-4 outline-none text-gray-700 placeholder-gray-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#dcdcdc] p-4 mb-6 outline-none text-gray-700 placeholder-gray-600"
            />

            <button className="bg-[#2f2f2f] text-white px-10 py-4 hover:bg-black transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
