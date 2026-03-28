import React, { useEffect } from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";

import { motion } from "framer-motion";

const DiscussSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative w-full lg:h-[130vh]  md:py-20 py-6 overflow-hidden">
      {/* TITLE */}
      <div className="md:block hidden">
        <div className="top-10 left-20 absolute ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 z-20"
          >
            <h2 className="text-4xl w-[650px] md:text-6xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter font-heading">
              Chalo <span className="text-[#FEC107]">Discuss</span>
              <br />
              Karein
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap mt-2 overflow-hidden"
            >
              {["why", "Jugadu", "Marketers"].map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5 + wordIndex * 0.2,
                        duration: 0.5,
                      },
                    },
                  }}
                  className="text-xl md:text-4xl font-['Kensington_Setalise','Dancing_Script',cursive] text-[#1A1A1A] mr-3 -rotate-1 subtitle inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CIRCLES */}
        <div className="absolute top-20 animate-on-scroll right-[280px] z-10 w-40 h-40 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          PICTURE ABHI BAAKI HAI, BOSS
        </div>

        <div className="absolute top-[200px] animate-on-scroll right-[485px] z-10 w-40 h-40 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          CHHOTA PACKET, BADA DHAMAKA
        </div>

        <div className="absolute bottom-[300px] animate-on-scroll left-10 w-40 h-40 z-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          IDEAS KI FACTORY – HAR IDEA JUGADU STYLE
        </div>

        <div className="absolute bottom-20 animate-on-scroll left-[650px] w-40 h-40 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          BUDGET SE SMART SOLUTIONS TAK KA SAFAR
        </div>

        <div className="absolute bottom-20 right-10 animate-on-scroll z-10 w-52 h-52 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-6 font-bold">
          NUMBERS KO NAHI, RESULTS KO SAMJHO
        </div>

        {/* IMAGES */}

        {/* CENTER */}
        <img
          src={person1}
          className="absolute top-20  left-1/2 -translate-x-1/2 w-52"
          alt="img"
        />
        <p className="absolute top-[485px] left-1/2 -translate-x-1/2 text-sm">
          3+ Years Experience
        </p>

        {/* LEFT */}
        <img
          src={person3}
          className="absolute bottom-36 left-[150px] w-52"
          alt="img"
        />
        <p className="absolute bottom-[240px] left-[100px] text-sm">
          creative ideas
        </p>

        {/* RIGHT TOP */}
        <img
          src={person2}
          className="absolute top-32 right-16 w-[300px]"
          alt="img"
        />
        <p className="absolute top-[100px] right-[150px] text-sm">
          169+ Campaigns
        </p>

        {/* BOTTOM CENTER */}
        <img
          src={person4}
          className="absolute bottom-0 left-[500px]  w-48"
          alt="img"
        />
        <p className="absolute bottom-10 left-[610px] text-sm">
          Cost effective solutions
        </p>

        {/* RIGHT BOTTOM */}
        <img
          src={person5}
          className="absolute bottom-0 right-[200px] w-48"
          alt="img"
        />
        <p className="absolute bottom-4 right-36 text-sm">
          Data driven results
        </p>

        {/* FOOTER TEXT */}
        <div className=" ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-0 left-10 z-20 pb-10"
          >
            <div className="flex flex-col select-none">
              <h3 className="text-4xl md:text-3xl font-black text-black uppercase leading-[0.8] tracking-tight font-heading">
                OUR <span className="italic">PROUD</span>
              </h3>
              <div className="flex items-center mt-2">
                <h3 className="text-4xl md:text-3xl font-black text-black uppercase tracking-tight font-heading">
                  CLIENTS
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
                  className="h-6 md:h-6 bg-[#FEC107] ml-6 skew-x-[-30deg] origin-left"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:hidden ">
        <div className="flex flex-col items-center gap-4 justify-center px-6">
          <div className="top-4 left-4 absolute ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 z-20"
            >
              <h2 className="text-4xl w-[650px] md:text-6xl font-black text-[#1A1A1A] leading-[0.9] tracking-tighter font-heading">
                Chalo <span className="text-[#FEC107]">Discuss</span>
                <br />
                Karein
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap mt-2 overflow-hidden"
              >
                {["why", "Jugadu", "Marketers"].map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.5 + wordIndex * 0.2,
                          duration: 0.5,
                        },
                      },
                    }}
                    className="text-xl md:text-4xl font-['Kensington_Setalise','Dancing_Script',cursive] text-[#1A1A1A] mr-3 -rotate-1 subtitle inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="relative h-[400px] mt-20 w-full ">
            <img src={person1} className=" w-48" alt="img" />
            <p className="text-center font-semibold text-sm">
              3+ Years Experience
            </p>
            <div className="absolute top-[105px] right-[39px] z-10 w-36 h-36 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
              CHHOTA PACKET, BADA DHAMAKA
            </div>
          </div>
          <div className="relative h-[400px] flex flex-col items-end justify-end w-full">
            <div className="absolute top-10 text-sm left-[2px] z-10 w-36 h-36 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
              PICTURE ABHI BAAKI HAI, BOSS
            </div>
            <img
              src={person2}
              className="absolute top-10 right-[-60px]"
              alt="img"
            />
            <p className="absolute font-semibold top-6 right-[10px] text-sm">
              169+ Campaigns
            </p>
          </div>
          <div className="relative h-[450px] w-full flex flex-col items-center justify-center">
            <img src={person3} className="w-[300px]" alt="img" />
            <p className="absolute bottom-[160px] font-semibold right-[50px] text-sm">
              creative ideas
            </p>
            <div className="absolute top-[27px] text-sm right-[-30px] w-36 h-36 z-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
              IDEAS KI FACTORY – HAR IDEA JUGADU STYLE
            </div>
          </div>
          <div className="relative h-[400px] w-full ">
            <img src={person5} className=" ml-6 w-48" alt="img" />
            <p className="absolute top-10 font-semibold right-[55px] text-sm">
              Data driven results
            </p>
            <div className="absolute top-28 right-10 z-10 w-36 h-36 text-sm bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-6 font-bold">
              NUMBERS KO NAHI, RESULTS KO SAMJHO
            </div>
          </div>
          <div className="relative h-[400px] w-full flex flex-col items-end justify-end">
            <img src={person4} className=" w-[250px]" alt="img" />
            <div className="absolute top-24 left-[0px] w-36 h-36 text-sm bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
              BUDGET SE SMART SOLUTIONS TAK KA SAFAR
            </div>
            <p className="absolute bottom-28 font-semibold left-[0px] text-sm">
              Cost effective
              <br /> solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;
