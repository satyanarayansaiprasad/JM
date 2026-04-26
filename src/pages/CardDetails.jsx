/* eslint-disable default-case */
import React from "react";

import Card2 from "../assets2/card2.webp";
import Card2top from "../assets2/card2-top.webp";
import Crad2Logo from "../assets2/card2-logo.webp";
import Card3bg from "../assets2/card3bg.webp";
import Card3Logo from "../assets2/card3logo.webp";
import Card4bg from "../assets2/card4bg.webp";
import Card4Logo from "../assets2/card4logo.webp";
import Card1logo from "../assets2/card1logo.webp";
import Card1bg from "../assets2/card1bg.webp";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Video Data for Case Studies
const VIDEO_CASE_STUDIES = [
  {
    brand: "Odisha KhoKho HPC",
    description: "Empowering traditional sports through high-performance training and dynamic digital storytelling. This initiative brings Kho Kho into the modern era with professional-grade content and strategic brand building.",
    videos: ["UOv5nNK90iE", "bozlYxuQzNo", "BYkuZ-7k0J4"],
    layout: "landscape"
  },
  {
    brand: "DialUrbano",
    description: "Revolutionizing urban mobility and real estate marketing. We transformed scattered campaigns into a cohesive performance ecosystem that drives high-quality leads and brand trust through interactive content.",
    videos: ["d5JfT4XdsMw", "qubHwBb3mXg", "ncRlW_o56Pg", "ZOA8veXLsrs", "08Cyv8EukEU", "CDwpTKZN6qc"],
    layout: "portrait"
  },
  {
    brand: "Deomali Coffee",
    description: "Crafting a premium lifestyle experience around Odisha's finest coffee. By optimizing digital touchpoints and running targeted performance campaigns, we turned a product into a community favorite.",
    videos: ["xwsgTErfZiA", "YTJyCZoaKk4", "8Zs-DGjyB98", "jSQHO7eFYhU"],
    layout: "portrait"
  },
  {
    brand: "Khaiba Junction",
    description: "Redefining the digital food destination. Through consistent storytelling and relatable content, we moved beyond one-time cravings to build lasting customer loyalty and a thriving online food community.",
    videos: ["NbXZmP_vE80", "60BbAagWF5o", "6Pgjjunvqfg", "Gwo7O5PFZwQ"],
    layout: "portrait"
  }
];

// Sequential Video Player Component
const SequentialPlayer = ({ videoIds, brand, layout }) => {
  const isPortrait = layout === "portrait";
  const videoList = videoIds.join(",");
  const firstVideo = videoIds[0];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2rem] shadow-2xl bg-black group ${
        isPortrait ? "aspect-[9/16] max-w-[320px] mx-auto" : "aspect-video w-full"
      }`}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${firstVideo}?playlist=${videoList}&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0`}
        title={brand}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[2rem]"></div>
    </motion.div>
  );
};

// 🔥 parent container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// 🔥 item animation
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
    <div className="w-full">
      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full px-6 lg:px-20 lg:py-20 py-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
              {caseStudy || "Explore our detailed impact and strategic transformation across various industries."}
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <div className="flex justify-center">
            {renderCard(id)}
          </div>
        </div>
      </motion.div>

      {/* VIDEO CASE STUDIES SECTION */}
      <div className="w-full bg-[#f8f8f8] py-24 lg:py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-5xl lg:text-7xl font-bold mb-6">Our Impact in Motion</h3>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              Visual journeys of how we bring brands to life through strategic content and creative performance.
            </p>
          </motion.div>

          <div className="space-y-32">
            {VIDEO_CASE_STUDIES.map((category, idx) => (
              <div 
                key={category.brand}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                >
                  <h4 className="text-4xl font-bold mb-6 text-black flex items-center gap-4">
                    <span className="text-yellow-500 text-5xl">0{idx + 1}</span>
                    {category.brand}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-500 shadow-sm">
                      #{category.brand.split(' ')[0]}
                    </span>
                    <span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-500 shadow-sm">
                      #PerformanceMarketing
                    </span>
                    <span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-500 shadow-sm">
                      #ContentStrategy
                    </span>
                  </div>
                </motion.div>

                <div className={idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <SequentialPlayer 
                    videoIds={category.videos} 
                    brand={category.brand} 
                    layout={category.layout}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
