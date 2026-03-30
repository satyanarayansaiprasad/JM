import React from "react";
import { motion } from "framer-motion";
import rightImg from "../assets/footer-ba2.png";
import mountain from "../assets/mountain.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center lg:px-[160px] lg:pb-10 pb-0">
      <motion.div
        onClick={() => navigate("/contact-us")} // ✅ BLUE SECTION CLICK
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl rounded-lg border bg-[#43B6C4] h-[540px] lg:h-[166px] lg:bg-black cursor-pointer"
      >
        <div className="absolute bottom-0 left-0 hidden h-full w-[420px] bg-black lg:block" />

        <img
          src={rightImg}
          alt="right"
          className="absolute right-0 top-0 hidden h-full object-contain lg:block"
        />

        {/* BRAND GROWTH */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-5 left-4 z-10 font-heading font-bold text-white text-[50px] leading-[1] lg:leading-[0.82] max-w-[180px] lg:top-2 lg:right-4 lg:left-auto lg:text-[40px] lg:max-w-[228px]"
        >
          BRAND <br />
          GROWTH
        </motion.div>

        {/* SPRINT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-script absolute top-[-10px] right-3 z-10 text-[94px] text-yellow-500 lg:top-[-40px] lg:-right-[100px] lg:text-[108px]"
        >
          sprint
        </motion.div>

        {/* OFFER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-[130px] left-0 z-10 w-full px-4 text-center lg:bottom-4 lg:right-[79px] lg:left-auto lg:top-auto lg:w-auto lg:max-w-[348px] lg:translate-x-0 lg:px-0 lg:text-left"
        >
          <div className="text-[16px] font-bold text-white lg:text-[20px]">
            90 Days Hero Offer
          </div>
          <div className="text-[11px] leading-[1.05] text-white lg:text-[15px]">
            Get guaranteed results or your money back.
            <br className="block lg:hidden" />
            Start your growth journey today.
          </div>
        </motion.div>

        {/* TERMS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-[190px] left-1/2 z-10 -translate-x-1/2 text-center text-[8px] text-white lg:bottom-2 lg:right-2 lg:left-auto lg:top-auto lg:translate-x-0 lg:text-xs"
        >
          *Terms & Conditions apply.
        </motion.div>

        {/* BUTTON */}
        <motion.div
          onClick={(e) => {
            e.stopPropagation(); // ✅ prevent double trigger
            navigate("/contact-us");
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(250,204,21,0)",
              "0 0 18px rgba(250,204,21,0.5)",
              "0 0 0px rgba(250,204,21,0)",
            ],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            boxShadow: { repeat: Infinity, duration: 1.5 },
          }}
          viewport={{ once: true }}
          className="absolute top-[40%] left-[35%] lg:left-[45%] p-4 h-[50px] bg-yellow-500 flex justify-start cursor-pointer animate-pulse items-center rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
        >
          NOWWWWWW!
        </motion.div>

        {/* MOUNTAIN */}
        <motion.img
          onClick={(e) => {
            e.stopPropagation(); // ✅ prevent parent click conflict
            navigate("/contact-us");
          }}
          src={mountain}
          alt="mountain"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 z-[1] h-[255px] w-full object-cover lg:w-[372px] lg:h-auto lg:object-contain cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
