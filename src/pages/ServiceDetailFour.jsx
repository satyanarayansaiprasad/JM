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
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full overflow-hidden px-6 py-12 lg:px-20"
        >
          <div className="relative mx-auto max-w-7xl">
            {/* LEFT BLUE CIRCLE */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-[-95px] top-[210px] z-0 h-[120px] w-[120px] rounded-full bg-[#39AEB9] lg:left-[-120px] lg:top-[220px] lg:h-[165px] lg:w-[165px]"
            />

            {/* RIGHT ORANGE CIRCLE */}
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute right-[-35px] top-[210px] z-0 h-[120px] w-[120px] rounded-full bg-gradient-to-l from-[#FEC107] to-[#FE6A07] lg:right-[10px] lg:top-[235px] lg:h-[140px] lg:w-[140px]"
            />

            <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
              {/* LEFT CONTENT */}
              <div className="pt-4 lg:pt-10">
                <h1 className="font-heading text-[38px] leading-[0.95] text-black lg:text-[64px]">
                  SEARCH ENGINE
                  <span className="block text-[#FEC107]">OPTIMIZATION</span>
                </h1>

                <div className="mt-3 max-w-[360px]">
                  <p className="text-[18px] leading-[1.2] text-black lg:text-[20px]">
                    Climb the Rankings Like a
                  </p>
                  <p className="text-[18px] font-semibold leading-[1.2] text-[#2FA4A9] lg:text-[20px]">
                    Digital Rockstar.
                  </p>
                </div>

                <div className="mt-16 max-w-[520px] lg:mt-20">
                  <div className="font-body text-[18px] leading-[1.7] text-black/80 lg:text-[20px]">
                    Be Visible Where Your Customers Are Searching
                    <br />
                    We help your business dominate search results
                    <br />
                    with strategies that drive organic traffic, quality
                    <br />
                    leads, and long-term growth. Rank Us Higher
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full max-w-[360px] rounded-lg border-2 border-black bg-[#F4C20D] px-6 py-3 text-sm font-bold uppercase text-black shadow-[3px_3px_0px_black]"
                  >
                    Build My Profile
                  </motion.button>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="relative flex justify-center lg:justify-end">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative mt-4 w-full max-w-[560px]"
                >
                  {/* Gray card */}
                  <div className="relative h-[240px] overflow-hidden rounded-[20px] bg-[#e9e9e9] lg:h-[300px] lg:w-[600px] ">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(152.97deg,rgba(21,21,21,0.08)_0%,rgba(21,21,21,0)_100%)]"></div>
                  </div>

                  {/* Person image */}
                  <motion.img
                    src={servicePerson1}
                    alt="person"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute bottom-0 left-[38%] z-20 h-[290px] -translate-x-1/2 object-contain lg:left-[25%] lg:h-[360px]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

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
          We don’t believe in shortcuts, we build SEO strategies that put your
          business on top and keep it there. From visibility to credibility,
          here’s how we make
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
