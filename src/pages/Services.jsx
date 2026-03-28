import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="h-full pb-10">
        <div className="relative w-full h-[260px] lg:h-[750px] overflow-hidden  flex items-center justify-center">
        {/* Left yellow circle */}
<div
  className="
    absolute left-[95px] top-[15px] 
    lg:left-[390px] lg:top-[20px] 
    w-[80px] h-[80px] lg:w-[274px] lg:h-[274px] 
    rounded-full 
    bg-gradient-to-l from-[#FEC107] to-[#FE6A07]
  "
/>
        {/* Right bottom teal circle */}
        <div className="absolute right-[55px] bottom-[18px] lg:right-[170px] lg:bottom-[0px] w-[75px] h-[75px] lg:w-[274px] lg:h-[274px] rounded-full bg-[#43b9c8]" />

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex items-center justify-center"
        >
            {/* Big OUR text */}
        <h1
    className="
        w-full 
        flex justify-between items-center 
        font-black text-black 
        leading-none select-none
        text-[240px] lg:text-[750px]
    "
    style={{
        textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
    }}
    >
    <span>O</span>
    <span>U</span>
    <span>R</span>
    </h1>

            {/* Services text */}
            <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        font-script text-[72px] lg:text-[240px] text-[#f5b400]
                        whitespace-nowrap rotate-[-8deg] z-20 lg:pt-32 pt-10"
            >
            Services
            </span>
        </motion.div>
        </div>
    </div>
  );
};

export default Services;