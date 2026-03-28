import React from "react";
import servicePerson1 from "../assets/service-person-color.png";
import { motion } from "framer-motion";
import servicedetailrow1 from "../assets/service-detail-row1.png";
import servicedetailrow2 from "../assets/service-detail-row2.png";
import servicedetailrow3 from "../assets/service-detail-row3.png";
import servicedetailrow4 from "../assets/service-detail-row4.png";
import servicedetailrow5 from "../assets/service-detail-row5.png";
import servicerDetailPerson1 from "../assets/service-detail-showperson.png";
import TrumpColor from "../assets/trump-color.png";
import Banner from "../components/Banner";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceDetailTwo = () => {
  return (
    <div>
      <div className="pt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full pt-16 pb-10 px-6 lg:px-20 relative"
        >
          <div className="max-w-7xl mx-auto relative isolate">
            {/* LEFT CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%]"
            >
              {/* Gray Background */}
              <div className="relative rounded-[30px] h-[260px] lg:h-[360px] bg-[#e9e9e9] overflow-hidden z-20">
                <div className="absolute inset-0 z-30 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              {/* IMAGE (NOW ABOVE CARD ✅) */}
              <motion.img
                src={TrumpColor}
                alt="person"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-10 lg:left-0 h-[320px] w-[640px] lg:h-[390px] z-30"
              />
            </motion.div>

            {/* TEXT (TOP MOST) */}
            <div className="absolute z-40 top-[10px] right-[-80px] w-full lg:w-[60%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                PERFORMANCE
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            {/* SUBTEXT */}
            <div className="absolute bottom-0 right-0 z-40">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  Every Click Counts: Grow Your Business with
                  <span className="text-[#2FA4A9] font-semibold block">
                    Data-Driven Campaigns
                  </span>
                </p>
              </div>
            </div>

            {/* LEFT BLUE CIRCLE */}
          </div>
        </motion.div>
        <div className="flex justify-end pb-10 items-end">
          <div className="max-w-[605px] pr-[141px]">
            <div className="font-body text-[24px] z-20 text-justify">
              We run ROI-focused campaigns across Meta, Google, and other
              platforms to ensure every ad rupee works hard for your business.  
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
            >
              Start Performance Campaigns
            </motion.button>
          </div>
        </div>
        <div className="px-20 pb-10">
          <div className="text-[32px] font-body text-[#39AEB9]">
            Why Performance Marketing Matters?
          </div>
          <div className="pt-4 text-[24px] max-w-[936px] font-body">
            Traditional advertising can often be costly and unpredictable,with
            little guarantee of results. Performance marketing changes that by
            ensuring you only pay for measurable outcomes such as clicks, leads,
            or sales. By combining creativity, precise audience targeting, and
            data-driven analytics, performance marketing maximizes ROI and
            ensures every campaign dollar works hard for your business. In fact,
            businesses using performance marketing often see up to{" "}
            <span className="text-[#30949D]">3x higher conversion</span> rates
            compared to standard campaigns.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <div>
              <span className="text-[#F6CB12] leading-[0.7] font-sans font-[700] text-[100px]">
                the way we
                <br /> market
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
              src={servicerDetailPerson1}
              alt="Service Detail Person"
              className="h-[512px] w-[275px]"
            />
          </div>
        </div>
        <div className="text-center pt-10 text-[#39AEB9] font-body text-[32px]">
          Why Jugadu Marketers Are the Perfect Performance Marketing Partner?
        </div>
        <div className="text-center pt-4  text-[24px] leading-[1] max-w-[936px] mx-auto font-body">
          We don’t just run ads, we create campaigns that deliver&nbsp;
          <span className="text-[64px] font-semibold">measurable results</span>
          &nbsp; generate leads, and grow your business. Here's how we make
          every &nbsp;
          <span className="font-semibold text-[48px] text-[#FEC107]">
            click count
          </span>
        </div>
        <div className="flex justify-center items-center py-36  px-20">
          <div className="flex">
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow1}
                alt="Service Detail Row 1"
              />
              <div className="text-center font-sans text-[20px] pt-4">
                Eye-catching graphics, videos, and posts that get noticed
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-center font-sans text-[20px] pt-4">
                Custom plans for Instagram, Facebook, LinkedIn, and more.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-center font-sans text-[20px] pt-4">
                Build relationships, respond fast, keep your audience engaged.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-center font-sans text-[20px] pt-4">
                Track, analyze, and optimize every campaign.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow5}
                alt="Service Detail Row 5"
              />
              <div className="text-center text-[20px] font-sans text-[#0000000] pt-4">
                Smart ads that deliver measurable ROI.
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

export default ServiceDetailTwo;
