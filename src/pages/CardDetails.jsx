/* eslint-disable default-case */
import React from "react";

import Card2 from "../assets/card2.png";
import Card2top from "../assets/card2-top.png";
import Crad2Logo from "../assets/card2-logo.png";
import Card3bg from "../assets/card3bg.png";
import Card3Logo from "../assets/card3logo.png";
import Card4bg from "../assets/card4bg.png";
import Card4Logo from "../assets/card4logo.png";
import Card1logo from "../assets/card1logo.png";
import Card1bg from "../assets/card1bg.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// 🔥 parent container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// 🔥 item animation (you already had)
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CaseStudies = () => {
  const location = useLocation();
  const caseStudy = location.state?.caseStudy?.description;
  const id = location.state?.id;
  const text = "Studies";

  const renderCard = (id) => {
    switch (id) {
      case 1:
        return (
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex flex-col items-center pt-6">
              <img
                src={Card1logo}
                className="object-contain px-6 pt-10"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#E42425] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img src={Card1bg} className="object-contain" alt="img" />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex flex-col items-center pt-6 relative z-10">
              <img
                src={Crad2Logo}
                className="h-32 lg:h-44 object-contain"
                alt="img"
              />
            </div>

            {/* 🌿 flower animation */}
            <motion.img
              src={Card2top}
              alt="flower"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-0 w-full bottom-[150px] lg:bottom-[260px] z-30 object-contain pointer-events-none"
            />

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#472E00] rounded-full mx-auto -mt-[80px] lg:-mt-[110px] relative z-20 flex items-end justify-center">
              <img
                src={Card2}
                className="w-[180px] lg:w-[307px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex pt-6 justify-center">
              <img
                src={Card3Logo}
                className="h-[120px] lg:h-[150px]"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#18B400] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img
                src={Card3bg}
                className="h-[300px] lg:h-[563px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex pt-6 justify-center">
              <img
                src={Card4Logo}
                className="h-[120px] lg:h-[147px]"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#25517E] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img
                src={Card4bg}
                className="h-[250px] lg:h-[389px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full px-6 lg:px-20 lg:py-20 py-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <motion.div variants={item}>
          <h2 className="text-7xl lg:text-[128px] font-bold leading-tight">
            Case{" "}
            <span className="font-script text-yellow-500 text-7xl lg:text-[128px] font-normal inline-block">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-justify font-body text-base max-w-xl">
            {caseStudy}
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        {renderCard(id)}
      </div>
    </motion.div>
  );
};

export default CaseStudies;
