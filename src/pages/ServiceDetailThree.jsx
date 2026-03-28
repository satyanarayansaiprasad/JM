import React from "react";
import akshay from "../assets/akshay3.png";
import { motion } from "framer-motion";
import servicedetailrow1 from "../assets/service-detail3-row1.png";
import servicedetailrow2 from "../assets/service-detail3-row2.png";
import servicedetailrow3 from "../assets/service-detail3-row3.png";
import servicedetailrow4 from "../assets/service-detail3-row4.png";
import servicedetailrow5 from "../assets/service-detail3-row5.png";
import servicedetailrow6 from "../assets/service-detail3-row6.png";
import servicerDetailPerson1 from "../assets/service-detail-person-1.png";
import Banner from "../components/Banner";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceDetailThree = () => {
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
                src={akshay}
                alt="person"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-10 lg:left-20 h-[320px] lg:h-[440px] z-30"
              />
            </motion.div>

            {/* TEXT (TOP MOST) */}
            <div className="absolute z-40 top-[10px] right-[-80px] w-full lg:w-[60%]">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                WEBSITE
                <span className="block text-[#FEC107]">DEVELOPMENT</span>
              </h1>
            </div>

            {/* SUBTEXT */}
            <div className="absolute bottom-0 right-0 z-40">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-black  block">
                    Your Website is Your Digital Shopfront –
                  </span>
                  <span className="text-[#2FA4A9] font-semibold">
                    Let’s Build One That Sells.
                  </span>
                </p>
              </div>
            </div>

            {/* LEFT BLUE CIRCLE */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute lg:bottom-[-100px] left-[-100px] z-0 w-48 h-48 rounded-full bg-[#39AEB9]"
            />

            {/* RIGHT ORANGE CIRCLE (BEHIND TEXT) */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-[-170px] lg:right-[-20px] right-[-50px] z-0 w-48 h-48 bg-gradient-to-l from-[#FEC107] to-[#FE6A07] rounded-full"
            />
          </div>
        </motion.div>

        <div className="flex justify-end pb-10 items-end">
          <div className="max-w-[605px] pr-[141px]">
            <div className="font-body text-[24px] z-20">
              Your Website is Your Digital Shopfront Let’s Build One That Sells.
              We design & develop websites that don’t just look good, but also
              perform fast, secure, and built to convert visitors into
              customers.
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
            >
              Build My Website
            </motion.button>
          </div>
        </div>

        <div className="px-20 pb-10">
          <div className="text-[32px] font-body text-[#39AEB9]">
            Why Your Business Needs a Great Website?
          </div>
          <div className="pt-4 text-[24px] max-w-[936px] font-body">
             In today’s digital-first world, your website is often the very
            first interaction customers have with your brand. Research shows
            that visitors form an opinion in just 3 seconds. If your website
            looks outdated, loads slowly, or feels confusing, you’re not just
            losing attention, you’re losing potential sales. Over 75% of users
            judge a company’s credibility based on its website design. A
            professionally built, modern, and user-friendly website instantly
            builds trust, captures leads, and fuels business growth.
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <div>
              <span className="text-[#F6CB12] leading-[0.7] font-sans font-[700] text-[100px]">
                the way we
                <br /> develop
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
          Why Jugadu is the Perfect Website Partner?
        </div>

        <div className="text-center pt-4  text-[24px] leading-[1] max-w-[936px] mx-auto font-body">
          We believe a website{" "}
          <span className="text-[64px] font-semibold"></span> should do more
          than just look good — it should build trust, engage visitors, and
          drive sales. That’s why our approach to web development combines
          creativity, technology, and strategy to deliver
          <span className="font-semibold text-[48px] text-[#FEC107]">
            results
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
              <div className="text-center text-[24px] pt-4">
                No templates, only websites as unique as your brand.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-center text-[24px] pt-4">
                Flawless on mobile, desktop & everywhere in between.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-center text-[24px] pt-4">
                Smart online stores built to sell.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-center text-[24px] pt-4">
                Campaign-ready pages that actually convert.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow5}
                alt="Service Detail Row 5"
              />
              <div className="text-center text-[24px] pt-4">
                Smooth, simple, and customer-friendly.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px] object-contain"
                src={servicedetailrow6}
                alt="Service Detail Row 5"
              />
              <div className="text-center text-[24px] pt-4">
                We don’t vanish after launch, we stay.
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

export default ServiceDetailThree;
