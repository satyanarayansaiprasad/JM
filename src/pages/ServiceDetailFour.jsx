import React from "react";
import servicePerson1 from "../assets/rajni.png";
import { motion } from "framer-motion";
import servicedetailrow1 from "../assets/service-detail4-row1.png";
import servicedetailrow2 from "../assets/service-detail4-row2.png";
import servicedetailrow3 from "../assets/service-detail4-row3.png";
import servicedetailrow4 from "../assets/service-detail4-row4.png";
import servicerDetailPerson4 from "../assets/service-detail-person-4.png";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceDetailFour = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="lg:hidden block">
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
      </div>
      <div className="lg:pt-20 pt-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full pt-16 pb-10 px-6 lg:px-20 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto   flex flex-col lg:flex-row items-center relative">
            {/* LEFT TEXT */}
            <div className="w-full absolute lg:block hidden  z-40">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                SEARCH ENGINE
                <span className="block text-[#FEC107] uppercase">
                  OPTIMIZATION
                </span>
              </h1>

              <div className="mt-6 max-w-md">
                <p className="text-lg text-gray-600">
                  <span className="text-black block">
                    Climb the Rankings Like a
                  </span>
                  <span className="text-[#2FA4A9] font-semibold">
                    Digital Rockstar.
                  </span>
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE + CARD */}
            <div className="w-full  relative lg:mt-16 mt-0 flex justify-end">
              {/* GRAY CARD */}
              <div className="relative w-full lg:w-[50%] h-[260px] lg:h-[360px]  rounded-[30px]  z-20">
                <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
                <motion.img
                  src={servicePerson1}
                  alt="person"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-0 left-0  transform -translate-x-1/2 object-contain h-[320px] w-full lg:h-[440px] z-30"
                />
              </div>

              {/* IMAGE (OVERLAPPING INTO TEXT) */}
            </div>
          </div>
          <div className="flex justify-center w-full lg:pt-0 pt-4">
            <div className="lg:hidden block">
              <h1 className="text-[30px] lg:text-[72px] font-heading leading-[1]">
                SEARCH ENGINE
                <span className="block text-[#FEC107]"> OPTIMIZATION</span>
              </h1>
            </div>
          </div>
          <div className=" lg:hidden block text-center w-full">
            <div className="max-w-sm text-center mx-auto">
              <p className="text-lg text-gray-600 pt-2">
                Climb the Rankings Like a
                <span className="text-[#2FA4A9] font-semibold block">
                  Digital Rockstar.
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-start pb-10 lg:pt-0 pt-4 items-end">
            <div className="lg:max-w-[605px] lg:pr-[141px]">
              <div className="font-body lg:text-[24px] z-20 text-justify">
                Be Visible Where Your Customers Are SearchingWe help your
                business dominate search results with strategies that drive
                organic traffic, quality leads, and long-term growth. Rank Us
                Higher
              </div>
              <motion.button
                onClick={() => navigation("/contact-us")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
              >
                Build My PROFILE
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="lg:px-20 px-6 pb-10">
          <div className="lg:text-[32px] lg:text-left text-center font-body text-[#39AEB9]">
            Why SEO Matters?
          </div>
          <div className="pt-4 lg:text-left  text-justify lg:text-[24px] max-w-[936px] font-body">
             Most people never go beyond the first page of Google, which means
            if your business isn’t ranking, you’re practically invisible to
            potential customers. SEO is what ensures your brand gets seen where
            it matters most. A well-optimized website not only builds
            credibility but also drives consistent, high-quality traffic while
            reducing your reliance on paid ads. In fact, studies show that 93%
            of online experiences begin with a search engine, and 75% of users
            never scroll past the first page, making SEO one of the most
            powerful growth tools for your business.
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="lg:flex items-center">
            <div>
              <span className="text-[#F6CB12] leading-[0.7] font-sans font-[700] text-[50px] lg:text-[100px]">
                the way we
                <br /> market
              </span>{" "}
              <span className="font-script text-[90px] lg:pl-0 pl-4 leading-[0.7] text-[#F6CB12]">
                {" "}
                for <br />
                you
                <span className="font-body lg:text-[36px] text-[20px] text-black font-semibold leading-[0]">
                  no body can match
                </span>
              </span>
            </div>
            <img
              src={servicerDetailPerson4}
              alt="Service Detail Person"
              className="h-[512px] w-[275px] object-contain"
            />
          </div>
        </div>

        <div className="text-center lg:px-0 px-6 pt-10 text-[#39AEB9] font-body lg:text-[32px]">
          Why Jugadu Marketers Are the Perfect SEO Partner?
        </div>

        <div className="text-center pt-4 lg:px-0 px-6  lg:text-[24px] leading-[1] max-w-[936px] mx-auto font-body">
          We don’t believe in shortcuts, we build SEO{" "}
          <span className="lg:text-[64px] text-[30px] font-semibold">
            strategies
          </span>{" "}
          that put your business on top and keep it there. From visibility to
          credibility, here’s how we make
          <span className="font-semibold lg:text-[48px] text-[30px] text-[#FEC107]">
            Google work
          </span>{" "}
          for you:
        </div>

        <div className="flex justify-center items-center lg:py-36 py-10 px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[150px] object-contain"
                src={servicedetailrow1}
                alt="Service Detail Row 1"
              />
              <div className="text-[16px] lg:text-[16px] pt-3 lg:max-w-[180px]">
                Optimized structure, speed, and content that search engines love
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[150px] object-contain"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-[16px] lg:text-[16px] pt-3 lg:max-w-[180px]">
                Authority-building backlinks and brand mentions.
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[150px] object-contain"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-[16px] lg:text-[16px] pt-3 lg:max-w-[180px]">
                Get found in “near me” searches and maps.
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[150px] object-contain"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-[16px] lg:text-[16px] pt-3 lg:max-w-[180px]">
                Higher product rankings that boost sales.
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailFour;
