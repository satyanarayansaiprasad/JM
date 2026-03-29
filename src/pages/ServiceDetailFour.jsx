import React from "react";
import servicePerson1 from "../assets/rajni.png";
import { motion } from "framer-motion";
import servicedetailrow1 from "../assets/service-detail4-row1.png";
import servicedetailrow2 from "../assets/service-detail4-row2.png";
import servicedetailrow3 from "../assets/service-detail4-row3.png";
import servicedetailrow4 from "../assets/service-detail4-row4.png";
import servicerDetailPerson4 from "../assets/service-detail-person-4.png";
import Banner from "../components/Banner";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceDetailFour = () => {
  return (
    <div>
      <div className="pt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full pt-16 pb-10 px-6 lg:px-20 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row items-center relative">
            {/* LEFT TEXT */}
            <div className="w-full absolute  z-40">
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
            <div className="w-full  relative mt-16 lg:mt-0 flex justify-end">
              {/* GRAY CARD */}
              <div className="relative w-full lg:w-[50%] h-[260px] lg:h-[360px]  rounded-[30px]  z-20">
                <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
                <motion.img
                  src={servicePerson1}
                  alt="person"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-0 left-[30%] transform -translate-x-1/2 object-contain h-[320px] lg:h-[440px] z-30"
                />
              </div>

              {/* IMAGE (OVERLAPPING INTO TEXT) */}
            </div>
          </div>
          <div className="flex justify-start pb-10 items-end">
            <div className="max-w-[605px] pr-[141px]">
              <div className="font-body text-[24px] z-20 text-justify">
                Be Visible Where Your Customers Are SearchingWe help your
                business dominate search results with strategies that drive
                organic traffic, quality leads, and long-term growth. Rank Us
                Higher
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
              >
                Build My PROFILE
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="px-20 pb-10">
          <div className="text-[32px] font-body text-[#39AEB9]">
            Why SEO Matters?
          </div>
          <div className="pt-4 text-[24px] max-w-[936px] font-body">
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
          <div className="flex items-center">
            <div>
              <span className="text-[#F6CB12] leading-[0.7] font-sans font-[700] text-[100px]">
                the way we
                <br /> rank
              </span>{" "}
              <span className="font-script text-[90px] leading-[0.7] text-[#F6CB12]">
                {" "}
                for <br />
                you
                <span className="font-body text-[36px] text-black font-semibold leading-[0]">
                  no body can match
                </span>
              </span>
            </div>
            <img
              src={servicerDetailPerson4}
              alt="Service Detail Person"
              className="h-[512px] w-[275px]"
            />
          </div>
        </div>

        <div className="text-center pt-10 text-[#39AEB9] font-body text-[32px]">
          Why Jugadu Marketers Are the Perfect SEO Partner?
        </div>

        <div className="text-center pt-4  text-[24px] leading-[1] max-w-[936px] mx-auto font-body">
          We don’t believe in shortcuts, we build SEO{" "}
          <span className="text-[64px] font-semibold">strategies</span> that put
          your business on top and keep it there. From visibility to
          credibility, here’s how we make
          <span className="font-semibold text-[48px] text-[#FEC107]">
            Google work
          </span>{" "}
          for you:
        </div>

        <div className="flex justify-center items-center py-36  px-20">
          <div className="flex">
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow1}
                alt="Service Detail Row 1"
              />
              <div className="text-center text-[24px] pt-4 max-w-[240px] ">
                Optimized structure, speed, and content that search engines love
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-center text-[24px] pt-4  max-w-[240px]">
                Authority-building backlinks and brand mentions.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-center text-[24px] pt-4  max-w-[240px]">
                Get found in “near me” searches and maps.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-center text-[24px] pt-4  max-w-[240px]">
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
