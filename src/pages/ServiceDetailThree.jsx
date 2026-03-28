import React from "react";
import servicePerson1 from "../assets/service-person-color.png";
import { motion } from "framer-motion";
import servicedetailrow1 from "../assets/service-detail-row1.png";
import servicedetailrow2 from "../assets/service-detail-row2.png";
import servicedetailrow3 from "../assets/service-detail-row3.png";
import servicedetailrow4 from "../assets/service-detail-row4.png";
import servicedetailrow5 from "../assets/service-detail-row5.png";
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
                src={servicePerson1}
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
                SOCIAL MEDIA
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            {/* SUBTEXT */}
            <div className="absolute bottom-0 right-0 z-40">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-[#2FA4A9] font-semibold block">
                    Your Brand,
                  </span>
                  Everywhere Your Customers Are
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
              We create strategies, content, and campaigns that not only engage
              your audience but also convert them into loyal customers.
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
            >
              Grow My Brand Online
            </motion.button>
          </div>
        </div>

        <div className="px-20 pb-10">
          <div className="text-[32px] font-body text-[#39AEB9]">
            Why Social Media Marketing Matters?
          </div>
          <div className="pt-4 text-[24px] max-w-[936px] font-body">
            Social media today is much more than a platform for engagement; it's
            a powerful engine for business growth. Brands without a strong
            social presence risk missing out on valuable leads, customer trust,
            and potential sales. Meanwhile, your competitors are already active,
            connecting with the very audience you want to reach. With over 3.7
            billion people using social media globally, your customers are
            already online. The question is, will they find you or your
            competitors first?
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
          Why Jugadu Marketers Are the Perfect Social Media Partner?
        </div>

        <div className="text-center pt-4  text-[24px] leading-[1] max-w-[936px] mx-auto font-body">
          We don&apos;t just post content, we create{" "}
          <span className="text-[64px] font-semibold">campaigns</span> that grow
          your brand, engage your audience, and drive real business results.
          Here&apos;s how{" "}
          <span className="font-semibold text-[48px] text-[#FEC107]">
            we do
          </span>{" "}
          it:
        </div>

        <div className="flex justify-center items-center py-36  px-20">
          <div className="flex">
            <div>
              <img
                className="h-[175px] w-[240px]"
                src={servicedetailrow1}
                alt="Service Detail Row 1"
              />
              <div className="text-center text-[24px] pt-4">
                Eye-catching graphics, videos, and posts that get noticed
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px]"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-center text-[24px] pt-4">
                Custom plans for Instagram, Facebook, LinkedIn, and more.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px]"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-center text-[24px] pt-4">
                Build relationships, respond fast, keep your audience engaged.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px]"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-center text-[24px] pt-4">
                Track, analyze, and optimize every campaign.
              </div>
            </div>
            <div>
              <img
                className="h-[175px] w-[240px]"
                src={servicedetailrow5}
                alt="Service Detail Row 5"
              />
              <div className="text-center text-[24px] pt-4">
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

export default ServiceDetailThree;
