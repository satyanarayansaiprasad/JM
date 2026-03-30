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
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceDetails = () => {
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
          className="w-full lg:pt-16 pt-10 lg:pb-10 px-6 pb-6  lg:px-20 relative"
        >
          <div className="lg:max-w-7xl mx-auto relative isolate">
            {/* LEFT CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full lg:w-[65%]"
            >
              {/* Gray Background */}
              <div className="relative rounded-[30px] h-[200px] lg:h-[360px] bg-[#e9e9e9] overflow-hidden z-20">
                <div className="absolute inset-0 z-30 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.2)_0%,rgba(21,21,21,0)_100%)]"></div>
              </div>

              {/* IMAGE (NOW ABOVE CARD ✅) */}
              <motion.img
                src={servicePerson1}
                alt="person"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 lg:left-20  lg:h-[440px] z-30 object-contain"
              />
            </motion.div>

            {/* TEXT (TOP MOST) */}
            <div className="absolute z-40 top-[10px] lg:right-[-80px] w-full lg:w-[60%] lg:block hidden">
              <h1 className="text-[40px] lg:text-[72px] font-heading leading-[1]">
                SOCIAL MEDIA
                <span className="block text-[#FEC107]">MARKETING</span>
              </h1>
            </div>

            {/* SUBTEXT */}
            <div className="absolute bottom-0 right-0 z-40 lg:block hidden">
              <div className="max-w-sm text-right">
                <p className="text-lg text-gray-600">
                  <span className="text-[#2FA4A9] font-semibold block">
                    Your Brand,
                  </span>
                  Everywhere Your Customers Are
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center w-full">
          <div className=" lg:hidden block">
            <h1 className="text-[30px] lg:text-[72px] font-heading leading-[1]">
              SOCIAL MEDIA
              <span className="block text-[#FEC107]">MARKETING</span>
            </h1>
          </div>
        </div>
        <div className=" lg:hidden block text-center w-full">
          <div className="max-w-sm text-center mx-auto">
            <p className="text-lg text-gray-600 pt-2">
              <span className="text-[#2FA4A9] font-semibold block">
                Your Brand,
              </span>
              Everywhere Your Customers Are
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-end pb-10 lg:items-end lg:pt-0 pt-6">
          <div className="lg:max-w-[605px] w-full lg:pr-[101px] lg:px-0 px-6">
            <div className="font-body text-justify  lg:text-[24px] z-20">
              We create strategies, content, and campaigns that not only engage
              your audience but also convert them into loyal customers.
            </div>
            <motion.button
              onClick={() => navigation("/contact-us")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-[#F4C20D] px-6 py-3 rounded-lg shadow-[3px_3px_0px_black]"
            >
              Grow My Brand Online
            </motion.button>
          </div>
        </div>

        <div className="lg:px-20 pb-10">
          <div className="lg:text-[32px] lg:text-left text-center font-body text-[#39AEB9]">
            Why Social Media Marketing Matters?
          </div>
          <div className="pt-4 lg:px-0 px-6 lg:text-[24px] lg:text-left text-justify lg:max-w-[936px] font-body">
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
              src={servicerDetailPerson1}
              alt="Service Detail Person"
              className="h-[512px] w-[275px] object-contain"
            />
          </div>
        </div>

        <div className="text-center pt-10 text-[#39AEB9] lg:px-0 px-6 font-body lg:text-[32px]">
          Why Jugadu Marketers Are the Perfect Social Media Partner?
        </div>

        <div className="text-center pt-4 lg:px-0 px-4 lg:text-[24px] text-[16px] leading-[1] max-w-[936px] mx-auto font-body">
          We don&apos;t just post content, we create{" "}
          <span className="lg:text-[64px] text-[30px] font-bodyItalic">
            campaigns
          </span>{" "}
          that grow your brand, engage your audience, and drive real business
          results. Here&apos;s how{" "}
          <span className="font-bodyItalic lg:text-[48px] text-[30px] text-[#FEC107]">
            we do
          </span>{" "}
          it:
        </div>

        <div className="flex justify-center items-center lg:py-36 py-10 lg:px-20 px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[160px] object-contain"
                src={servicedetailrow1}
                alt="Service Detail Row 1"
              />
              <div className="text-[16px] font-body lg:text-[16px] pt-3">
                Eye-catching graphics, videos, and posts that get noticed
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[160px] object-contain"
                src={servicedetailrow2}
                alt="Service Detail Row 2"
              />
              <div className="text-[16px] font-body lg:text-[16px] pt-3">
                Custom plans for Instagram, Facebook, LinkedIn, and more.
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[160px] object-contain"
                src={servicedetailrow3}
                alt="Service Detail Row 3"
              />
              <div className="text-[16px] font-body lg:text-[16px] pt-3">
                Build relationships, respond fast, keep your audience engaged.
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[160px] object-contain"
                src={servicedetailrow4}
                alt="Service Detail Row 4"
              />
              <div className="text-[16px] font-body lg:text-[16px] pt-3">
                Track, analyze, and optimize every campaign.
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="flex flex-col items-center text-center max-w-xs lg:max-w-[200px]">
              <img
                className="h-[150px] w-[200px] lg:h-[120px] lg:w-[160px] object-contain"
                src={servicedetailrow5}
                alt="Service Detail Row 5"
              />
              <div className="text-[16px] font-body lg:text-[16px] pt-3">
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

export default ServiceDetails;
