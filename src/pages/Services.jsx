import React from "react";
import { motion } from "framer-motion";
import servicePerson1 from "../assets/service-person1.png";
import trump from "../assets/trump.png";
import akshay from "../assets/akshay.png";
import rajni from "../assets/rajni.png";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services = () => {
  const navigation = useNavigate();
  return (
    <div className="h-full pb-10">
      {/* HERO */}
      <div className="relative w-full h-[260px] lg:h-[750px] overflow-hidden flex items-center justify-center">
        <div className="absolute left-[95px] top-[15px] lg:left-[390px] lg:top-[20px] w-[80px] h-[80px] lg:w-[274px] lg:h-[274px] rounded-full bg-gradient-to-l from-[#FEC107] to-[#FE6A07]" />
        <div className="absolute right-[55px] bottom-[18px] lg:right-[170px] lg:bottom-[0px] w-[75px] h-[75px] lg:w-[274px] lg:h-[274px] rounded-full bg-[#43b9c8]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex items-center justify-center"
        >
          <h1 className="w-full flex justify-between items-center font-black text-black leading-none text-[240px] lg:text-[750px]">
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </h1>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-script text-[72px] lg:text-[240px] text-[#f5b400] rotate-[-8deg] z-20 lg:pt-32 pt-10">
            Services
          </span>
        </motion.div>
      </div>

      <div className="space-y-16 hidden lg:block">
        {/* CARD 1 */}
        <motion.div
          // onClick={() => navigation("/services-details")}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full py-16 px-6 lg:px-20 relative"
        >
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%]"
            >
              <div className="relative rounded-[30px] h-[260px] lg:h-[360px] bg-[#e9e9e9] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              <motion.img
                src={servicePerson1}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-10 lg:left-20 h-[320px] lg:h-[440px]"
              />
            </motion.div>

            <div className="absolute top-[10px] right-[-50px] w-full lg:w-[55%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                SOCIAL MEDIA
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            <div className="absolute bottom-0 right-0">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-[#2FA4A9] font-semibold block">
                    Your Brand,
                  </span>
                  Everywhere Your Customers Are
                </p>

                <motion.button
                  onClick={() => navigation("/services-details")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Grow My Brand Online
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          // onClick={() => navigation("/services-detail-2")}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full py-16 px-6 lg:px-20 relative"
        >
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%]"
            >
              <div className="rounded-[30px] h-[260px] lg:h-[360px] bg-[#e9e9e9]" />
              <motion.img
                src={trump}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-[-50px] h-[390px]"
              />
            </motion.div>

            <div className="absolute top-[10px] right-[100px] w-full lg:w-[45%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                PERFORMANCE
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            <div className="absolute bottom-0 right-0">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  Every Clicks Count: Count Your Business with
                  <span className="text-[#2FA4A9] block font-semibold">
                    Data-Driven Campaigns
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-2")}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Start Performance Campaigns
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          // onClick={() => navigation("/services-detail-3")}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full py-16 px-6 lg:px-20 relative"
        >
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%] ml-auto"
            >
              <div className="rounded-[30px] h-[260px] lg:h-[360px] bg-[#e9e9e9]" />
              <motion.img
                src={akshay}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="absolute bottom-[-65px] right-0 h-[390px]"
              />
            </motion.div>

            <div className="absolute top-[10px] left-0 w-full lg:w-[45%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                WEBSITE
                <span className="block text-[#FEC107]">DEVELOPEMENT</span>
              </h1>
            </div>

            <div className="absolute bottom-0 left-0">
              <div className="max-w-sm">
                <p className="text-lg text-gray-600">
                  Your Website is Your Digital Shopfront –
                  <span className="text-[#2FA4A9] block font-semibold">
                    Let’s Build One That Sells.
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-3")}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Build My Website
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ CARD 4 (RAJNI - FIXED) */}
        <motion.div
          // onClick={() => navigation("/services-detail-4")}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full py-16 px-6 lg:px-20 relative"
        >
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%] ml-auto"
            >
              <div className="rounded-[30px] h-[260px] lg:h-[360px] bg-[#e9e9e9]" />

              <motion.img
                src={rajni}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[390px] lg:h-[452px]"
              />
            </motion.div>

            <div className="absolute top-[10px] left-0 w-full lg:w-[90%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                SEARCH ENGINE
                <span className="block text-[#FEC107]">OPTIMIZATION</span>
              </h1>
            </div>

            <div className="absolute bottom-0 left-0">
              <div className="max-w-sm">
                <p className="text-lg text-gray-600">
                  <span className="block">Be Visible Where Your</span>
                  <span className="text-[#2FA4A9] font-semibold block">
                    Customers Are Searching
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-4")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Rank Us Higher
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        {/* MOBILE SERVICES (HIDDEN ON LARGE SCREENS) */}
        <div className=" space-y-10 lg:hidden px-10 pt-10">
          {/* CARD 1 */}
          <div>
            <motion.div
              // onClick={() => navigation("/services-details")}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative"
            >
              <div className="relative rounded-[30px] h-[180px] bg-[#e9e9e9] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              <motion.img
                src={servicePerson1}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 "
              />
            </motion.div>
            <div className=" w-full flex justify-center">
              <h1 className="text-[30px] font-extrabold pt-2 font-heading text-left leading-[1]">
                SOCIAL MEDIA
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            <div className="pt-4">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-[#2FA4A9] font-semibold block">
                    Your Brand,
                  </span>
                  Everywhere Your Customers Are
                </p>

                <motion.button
                  onClick={() => navigation("/services-details")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Grow My Brand Online
                </motion.button>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              // onClick={() => navigation("/services-detail-2")}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative "
            >
              <div className="relative rounded-[30px] h-[180px] bg-[#e9e9e9] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              <motion.img
                src={trump}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 right-6 "
              />
            </motion.div>
            <div className=" w-full flex justify-center">
              <h1 className="text-[30px] font-extrabold pt-2 font-heading text-left leading-[1]">
                PERFORMANCE
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            <div className="pt-4">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-black block">
                    Every Clicks Count: Count Your Business with
                  </span>
                  <span className="font-semibold text-[#2FA4A9] ">
                    Data-Driven Campaigns
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-2")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Start Performance Campaigns
                </motion.button>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              // onClick={() => navigation("/services-detail-3")}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative"
            >
              <div className="relative rounded-[30px] h-[180px] bg-[#e9e9e9] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              <motion.img
                src={akshay}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-[-30px] "
              />
            </motion.div>
            <div className=" w-full pt-6 flex justify-center">
              <h1 className="text-[30px] font-extrabold pt-2 font-heading text-left leading-[1]">
                WEBSITE
                <span className="block text-[#FEC107]">DEVELOPEMENT</span>
              </h1>
            </div>

            <div className="pt-4">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600 text-left">
                  <span className="text-black block">
                    Your Website is Your Digital Shopfront–
                  </span>
                  <span className="font-semibold text-[#2FA4A9] ">
                    Let’s Build One That Sells.
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-3")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Build My Website
                </motion.button>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <motion.div
              // onClick={() => navigation("/services-detail-4")}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative"
            >
              <div className="relative rounded-[30px] h-[180px] bg-[#e9e9e9] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              <motion.img
                src={rajni}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-[0px] h-[261px] w-[181px] left-[20%] "
              />
            </motion.div>
            <div className=" w-full pt-6 flex justify-center">
              <h1 className="text-[30px] font-extrabold pt-2 font-heading text-left leading-[1]">
                SEARCH ENGINE
                <span className="block text-[#FEC107]">optimization</span>
              </h1>
            </div>

            <div className="pt-4">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600 text-left">
                  <span className="text-black block">
                    Be Visible Where Your
                  </span>
                  <span className="font-semibold text-[#2FA4A9] ">
                    Customers Are Searching
                  </span>
                </p>

                <motion.button
                  onClick={() => navigation("/services-detail-4")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
                >
                  Rank Us Higher
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-32 pt-20">
        <Banner />
      </div>
    </div>
  );
};

export default Services;
