import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import group from "../assets/teams.png";
import person1 from "../assets/team-person1.png";
import person2 from "../assets/team-person2.png";
import person3 from "../assets/team-person3.png";
import person4 from "../assets/team-person4.png";
import person5 from "../assets/team-person5.png";
import pupun from "../assets/pupun.png";
import pratyush from "../assets/pratyush.png";
import teamGroup from "../assets/team-group.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};
const OurTeam = () => {
  const [text, setText] = useState("");
  const fullText = "The way we build";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80); // speed

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-full">
      <motion.div
        className="lg:h-[calc(100vh-100px)] h-[250px] w-full relative"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="lg:h-[197px] h-[80px] w-full absolute bottom-0 bg-[linear-gradient(90deg,#000000_0%,#666666_100%)]" />

        {/* <motion.img
          src={group}
          className="w-[810px] z-50 h-[607px] bottom-0 left-1/2 transform -translate-x-1/2 object-contain absolute"
          alt="Team"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        /> */}
        <img
          className="lg:w-[810px] h-[200px] z-50 lg:h-[607px] bottom-0 left-1/2 transform -translate-x-1/2 object-contain absolute"
          src={group}
          alt="Team"
        />

        <div className="lg:w-[274px] w-[100px] h-[100px] left-[20px] bottom-0 lg:left-[161px] absolute lg:h-[274px] rounded-full bg-[#39AEB9]" />

        <motion.div
          className="lg:w-[487px] lg:h-[487px] w-[140px] right-[20px] h-[140px] bottom-0 lg:bottom-[-10px] lg:right-[50px] absolute rounded-full 
bg-[linear-gradient(270deg,#FEC107_0%,#FE6A07_100%)] flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <svg className="absolute w-full h-full" viewBox="0 0 500 500">
            <defs>
              <path
                id="circlePath"
                d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
              />
            </defs>

            <text fill="white" fontSize="28" fontWeight="bold">
              <textPath
                href="#circlePath"
                startOffset="40%"
                textAnchor="middle"
                letterSpacing={10}
              >
                WE BUILD WITH PRIDE
              </textPath>
            </text>
          </svg>
        </motion.div>

        <div className="lg:text-[128px] text-[48px] left-[10px] top-0 lg:top-[30px] z-10 lg:left-[74px] absolute font-heading leading-none">
          OUR <br />
          <span className="text-[#FEC107]">TEAM</span>
        </div>

        <div className="lg:text-[190px] text-[50px] top-[10px] lg:top-[30px] z-0 right-[10px] lg:right-[104px] absolute font-script leading-none">
          {text}
        </div>
      </motion.div>
      <div className="lg:hidden block">
        <div>
          <div className="pt-6">
            <div className="leading-none relative h-[200px] p-4">
              <div className="font-heading text-[46px] leading-none">
                THE <br /> <span className="text-[#FEC107]">BEHIND THE</span>
              </div>
              <div className="text-[100px] font-script top-[0px] absolute left-[160px]">
                minds
              </div>
              <div className="text-[190px] font-script bottom-[-40px] absolute left-[20px] text-[#39AEB9]">
                magic
              </div>
            </div>

            <img src={teamGroup} alt="Team Group" />

            <div className="flex justify-center mt-[-20px]">
              <div>
                <div className="lg:text-[40px] text-center font-body leading-none">
                  Great results aren't <br />
                  accidental.
                </div>
                <div className="font-sans  text-center lg:text-[16px] text-[10px] text-black/70 max-w-[300px]">
                  They're built with strategy, driven by hard work, and
                  delivered through smart execution.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-20">
        <div className="lg:flex justify-between items-start">
          <div>
            <div className="lg:flex items-center">
              {/* CARD */}
              <motion.div
                className="relative lg:w-[320px]   h-[320px] flex items-end justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
                <img
                  src={person1}
                  className="absolute bottom-[0px] z-20 h-[380px] object-contain"
                  alt="logo"
                />
                <h2 className="absolute font-heading bottom-[-20px] text-[48px] font-bold text-[#F6CB12] z-30">
                  AMIT
                </h2>
              </motion.div>

              <motion.div
                className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
                <img
                  src={person2}
                  className="absolute bottom-[0px] z-20 h-[390px] object-contain"
                  alt="logo"
                />
                <h2 className="absolute font-heading bottom-[-20px] text-[48px] font-bold text-[#F6CB12] z-30">
                  ALOK
                </h2>
              </motion.div>
            </div>

            <div className="lg:flex items-center">
              <motion.div
                className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
                <img
                  src={person3}
                  className="absolute bottom-[0px] z-20 h-[390px] object-contain"
                  alt="logo"
                />
                <h2 className="absolute font-heading bottom-[-15px] text-[35px] font-bold text-[#F6CB12] z-30">
                  SAMAYA
                </h2>
              </motion.div>

              <motion.div
                className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
                <img
                  src={person4}
                  className="absolute bottom-[0px] left-[20px] lg:left-0 z-20 h-[490px] object-contain"
                  alt="logo"
                />
                <h2 className="absolute font-heading bottom-[-12px] text-[33px] font-bold text-[#F6CB12] z-30">
                  ARYAN
                </h2>
              </motion.div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div>
              <div>
                <div className="leading-none relative h-[200px] w-[550px]">
                  <div className="font-heading text-[64px] leading-none">
                    THE <br />{" "}
                    <span className="text-[#FEC107]">BEHIND THE</span>
                  </div>
                  <div className="text-[190px] font-script top-[-40px] absolute left-[189px]">
                    minds
                  </div>
                  <div className="text-[190px] font-script bottom-[-80px] absolute left-[0px] text-[#39AEB9]">
                    magic
                  </div>
                </div>

                <img src={teamGroup} alt="Team Group" />

                <div className="flex justify-center mt-[-20px]">
                  <div>
                    <div className="text-[40px] font-body leading-none">
                      Great results aren't <br />
                      accidental.
                    </div>
                    <div className="font-sans text-justify text-[16px] text-black/70 max-w-[400px]">
                      They're built with strategy, driven by hard work, and
                      delivered through smart execution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LAST ROW */}
        <div className=" lg:flex">
          <motion.div
            className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
            <img
              src={pratyush}
              className="absolute bottom-[0px] z-20 h-[300px]"
              alt="logo"
            />
            <h2 className="absolute font-heading bottom-[-12px] text-[28px] font-bold text-[#F6CB12] z-30">
              PRATYUSH
            </h2>
          </motion.div>

          <motion.div
            className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
            <img
              src={pupun}
              className="absolute bottom-[0px] z-20 h-[290px]"
              alt="logo"
            />
            <h2 className="absolute font-heading bottom-[-12px] text-[33px] font-bold text-[#F6CB12] z-30">
              PAPUNU
            </h2>
          </motion.div>

          <motion.div
            className="relative lg:w-[320px] h-[320px] flex items-end justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md z-10"></div>
            <img
              src={person5}
              className="absolute bottom-[0px] left-[32px] lg:left-0 z-20 h-[350px]"
              alt="logo"
            />
            <h2 className="absolute font-heading bottom-[-12px] text-[33px] font-bold text-[#F6CB12] z-30">
              DEBASIS
            </h2>
          </motion.div>
        </div>
      </div>
      <div className="lg:pt-32 pt-20">
        <Banner />
      </div>
    </div>
  );
};

export default OurTeam;
