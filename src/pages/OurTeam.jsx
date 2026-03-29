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
import team2bg from "../assets/team-card-2-bg.png";
import card3bg1 from "../assets/card3bg1.png";
import card3bg2 from "../assets/card3bg2.png";
import card4bg1 from "../assets/card3-bg1.png";
import card4bg2 from "../assets/card3-bg-2.png";
import colorBall from "../assets/colorBall.png";
import redCloth from "../assets/red-cloth.png";
import greenBall from "../assets/greenBall.png";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
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
    <div className="h-full w-full overflow-x-hidden overflow-y-hidden">
      <motion.div
        className="lg:h-[calc(100vh-100px)] h-[260px] w-full relative"
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
          className="lg:w-[487px] lg:h-[487px] w-[140px] right-[20px] h-[140px] bottom-0 lg:bottom-[-10px] lg:right-[50px] absolute rounded-full overflow-hidden 
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

        <div className="lg:text-[128px] text-[48px] left-[10px] top-0 lg:top-[80px] z-10 lg:left-[74px] absolute font-heading leading-none">
          OUR <br />
          <span className="text-[#FEC107]">TEAM</span>
        </div>

        <div className="lg:text-[190px] text-[50px] top-[10px] lg:top-[80px] z-0 right-[10px] lg:right-[104px] absolute font-script leading-none">
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
            <div className="lg:flex lg:gap-20 lg:pb-20 items-center">
              {/* CARD */}
              <div className="relative group lg:w-[320px] h-[320px]">
                {/* SMALL CARD */}
                <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
                  <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

                  <img
                    src={person1}
                    className="absolute bottom-0 z-20 h-[380px]"
                    alt=""
                  />

                  <h2 className="absolute bottom-[-20px] text-[48px] font-heading text-[#F6CB12] z-30">
                    AMIT
                  </h2>
                </div>
                {/* 🔥 BIG EXPANDED CARD */}
                <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
                  {/* LEFT TEXT */}
                  <div className="w-1/2 p-6 flex flex-col  text-justify">
                    <p className="text-[14px] text-black/70 leading-relaxed">
                      When ideas start flying in every direction and campaigns
                      get a little chaotic, Amit quietly becomes the compass.
                      <br />
                      <br />
                      He’s the one asking the bigger questions — Where should
                      this brand go next? Are we thinking big enough?
                      <br />
                      <br />
                      At Jugadu Marketers, he isn’t just leading the team. He’s
                      making sure everyone is moving toward the right horizon.
                    </p>

                    <p className="mt-4 font-bold text-[12px]">FOUNDER</p>
                  </div>

                  {/* RIGHT IMAGE AREA */}
                  <div className="w-1/2 relative flex items-center justify-center bg-[linear-gradient(180deg,#39AEB9_0%,#1A4E53_100%)]">
                    {/* Circle */}
                    <div className="absolute top-[10px] right-0 z-40  w-[100px] h-[100px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                    {/* Image */}
                    <img
                      src={person1}
                      className="h-[380px] object-contain z-10"
                      alt=""
                    />
                    {/* Background text */}
                    <div className="bg-white absolute h-[200px] w-[300px]"></div>
                    <div className="absolute text-[180px] font-bold text-[#35AA3A]">
                      NS
                    </div>
                  </div>
                  <div className="absolute left-[20px] w-full bottom-0 font-heading text-[50px] leading-none z-30 ">
                    The Nort<span className="text-white">h Star</span>
                  </div>
                </div>
              </div>
              {/* card-2 */}
              <div className="relative group lg:w-[320px] h-[320px]">
                {/* SMALL CARD */}
                <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
                  <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

                  <img
                    src={person2}
                    className="absolute bottom-0 z-20 h-[390px] object-contain"
                    alt=""
                  />

                  {/* FONT SAME */}
                  <h2 className="absolute bottom-[-20px] text-[48px] font-heading text-[#F6CB12] z-30">
                    ALOK
                  </h2>
                </div>

                {/* 🔥 BIG EXPANDED CARD */}
                <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
                  {/* LEFT CONTENT */}
                  <div className="w-1/2 p-6 flex flex-col ">
                    <p className="text-[14px] text-black/70 leading-relaxed">
                      Momentum is his default setting.
                      <br />
                      <br />
                      Campaigns go live, numbers get tracked, and optimisations
                      keep happening — that’s Alok’s zone. From campaign
                      management to performance marketing, he keeps the Jugadu
                      machine running smoothly and moving forward.
                    </p>

                    <p className="mt-4 font-bold text-[12px]">CO-FOUNDER</p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-1/2 relative flex items-center justify-center ">
                    {/* Circle */}
                    {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                    {/* Image */}
                    <img
                      src={person2}
                      className="h-full  object-contain z-10"
                      style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />
                    <img
                      src={team2bg}
                      className="h-[600px] absolute right-[-80px] object-contain z-0"
                      alt=""
                    />

                    {/* Background Text */}
                    {/* <div className="absolute text-[120px] font-bold text-white/20">
                      NS
                    </div> */}
                  </div>
                  <div className="absolute left-[20px] w-full bottom-0 font-heading text-[50px] leading-none z-30 ">
                    The Engine
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:gap-20 lg:pb-20 items-center">
              {/* card3 */}
              <div className="relative group lg:w-[320px] h-[320px]">
                {/* SMALL CARD */}
                <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
                  <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

                  <img
                    src={person3}
                    className="absolute bottom-0 z-20 h-[390px] object-contain"
                    alt=""
                  />

                  {/* FONT SAME */}
                  <h2 className="absolute bottom-[-15px] text-[35px] font-heading text-[#F6CB12] z-30">
                    SAMAYA
                  </h2>
                </div>

                {/* 🔥 BIG EXPANDED CARD */}
                <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
                  {/* LEFT TEXT */}
                  <div className="w-1/2 p-6 flex flex-col ">
                    <p className="text-[14px] text-black/70 leading-relaxed">
                      Samay believes two things make work better: urgency and a
                      well-timed “gali”.
                      <br />
                      <br />
                      Between building hype, handling media, and pushing
                      conversations forward, he brings the kind of energy that
                      keeps Jugadu Marketers active.
                      <br />
                      <br />
                      Things may start slow… but once Samay gets going, the room
                      usually gets a lot more lively.
                    </p>

                    <p className="mt-4 font-bold text-[12px]">STRATEGIST</p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-b ">
                    {/* Circle */}
                    {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                    {/* Image */}
                    <img
                      src={person3}
                      className="h-[380px] object-contain z-30 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />
                    <img
                      src={card3bg1}
                      className="h-[380px] right-[-120px] top-[-20px] absolute object-contain z-10 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />
                    <img
                      src={card3bg2}
                      className=" h-[300px] top-[0px] left-0 absolute object-contain z-10 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />

                    {/* Background Text */}
                    <div className="absolute text-[120px] font-bold text-white/20">
                      NS
                    </div>
                  </div>
                  <div className="absolute left-[20px] w-full bottom-0 font-heading text-[50px] leading-none z-30 ">
                    The Hype Specialist
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="relative group lg:w-[320px] h-[320px]">
                {/* SMALL CARD */}
                <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
                  <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

                  <img
                    src={person4}
                    className="absolute bottom-0 left-[20px] lg:left-0 z-20 h-[490px] object-contain"
                    alt=""
                  />

                  {/* FONT SAME */}
                  <h2 className="absolute bottom-[-12px] text-[33px] font-heading text-[#F6CB12] z-30">
                    ARYAN
                  </h2>
                </div>

                {/* 🔥 BIG EXPANDED CARD */}
                <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
                  {/* LEFT TEXT */}
                  <div className="w-1/2 p-6 flex flex-col ">
                    <p className="text-[14px] text-black/70 leading-relaxed">
                      A perfect example of Gen-Z — moody sometimes, childish
                      occasionally, and randomly announcing “Break chahiye.”
                      <br />
                      <br />
                      But when he sits down to edit or direct, something
                      interesting usually happens.
                      <br />
                      <br />
                      Because once Aryan enters his creative zone, the visuals
                      tend to come out fantastic.
                    </p>

                    {/* <p className="mt-4 font-bold text-[12px]">STRATEGIST</p> */}
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-b ">
                    {/* Circle */}
                    {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                    {/* Image */}
                    <img
                      src={person4}
                      className=" w-full  z-30 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />
                    <img
                      src={card4bg1}
                      className="h-[380px] right-[-0px] top-[-20px] absolute object-contain z-10 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />
                    <img
                      src={card4bg2}
                      className="  bottom-[-15px] right-[-90px] absolute object-contain z-0 "
                      // style={{ transform: "scaleX(-1)" }}
                      alt=""
                    />

                    {/* Background Text */}
                    {/* <div className="absolute text-[120px] font-bold text-white/20">
                      NS
                    </div> */}
                  </div>
                  <div className="absolute left-[20px] w-full bottom-0 font-heading text-[50px] leading-none z-30 ">
                    The Visual Alchemist
                  </div>
                </div>
              </div>
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
        <div className=" lg:flex gap-20">
          <div className="relative group lg:w-[320px] h-[320px]">
            {/* SMALL CARD */}
            <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
              <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

              <img
                src={pratyush}
                className="absolute bottom-0 z-20 h-[300px]"
                alt=""
              />

              {/* FONT SAME */}
              <h2 className="absolute font-heading bottom-[-12px] text-[28px] font-bold text-[#F6CB12] z-30">
                PRATYUSH
              </h2>
            </div>

            {/* 🔥 BIG EXPANDED CARD */}
            <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
              {/* LEFT TEXT */}
              <div className="w-1/2 p-6 flex flex-col ">
                <p className="text-[14px] text-black/70 leading-relaxed">
                  In the internet economy, attention is the real currency.
                  <br />
                  <br />
                  Pratyosh spends his days making sure brands earn it. From
                  shaping social media presence to managing client
                  relationships, he ensures brands don’t just appear on feeds —
                  they stay in people’s minds.
                </p>

                {/* <p className="mt-4 font-bold text-[12px]">STRATEGIST</p> */}
              </div>

              {/* RIGHT SIDE */}
              <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-b ">
                {/* Circle */}
                {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                {/* Image */}
                <img
                  src={pratyush}
                  className="h-[390px] object-contain w-full  z-30 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={card3bg1}
                  className="h-[380px] right-[-90px] top-[-20px] absolute object-contain z-0 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={colorBall}
                  className=" bottom-[-50px] right-[-20px] absolute object-contain z-10 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
              </div>
              <div className="absolute max-w-[70%] left-[20px] w-full bottom-0 font-heading text-[50px] leading-none z-30 ">
                The Attention Architect
              </div>
            </div>
          </div>

          <div className="relative group lg:w-[320px] h-[320px]">
            {/* SMALL CARD */}
            <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
              <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

              <img
                src={pupun}
                className="absolute bottom-0 z-20 h-[290px]"
                alt=""
              />

              {/* FONT SAME */}
              <h2 className="absolute font-heading bottom-[-12px] text-[33px] font-bold text-[#F6CB12] z-30">
                PAPUNU
              </h2>
            </div>

            {/* 🔥 BIG EXPANDED CARD */}
            <div className="absolute bottom-[-10px] left-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
              {/* LEFT TEXT */}
              <div className="w-1/2 p-6 flex flex-col ">
                <p className="text-[14px] text-black/70 leading-relaxed">
                  Some people notice details. Papun notices the details inside
                  the details.
                  <br />
                  <br />
                  That obsession keeps Jugadu creatives clean, balanced, and
                  visually sharp.
                  <br />
                  <br />
                  And sometimes, in the middle of a design discussion, he ends
                  up dropping insights about the market that make the whole team
                  rethink things.
                </p>

                {/* <p className="mt-4 font-bold text-[12px]">STRATEGIST</p> */}
              </div>

              {/* RIGHT SIDE */}
              <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-b ">
                {/* Circle */}
                {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                {/* Image */}
                <img
                  src={pupun}
                  className="h-[375px] object-contain w-full  z-30 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={card4bg2}
                  className="h-[380px] right-[-40px] top-[10px] absolute object-contain z-0 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={redCloth}
                  className=" top-[10px] right-[-20px] absolute object-contain z-10 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
              </div>
              <div className="absolute max-w-[70%] left-[20px] w-full bottom-0 font-heading text-[40px] leading-none z-30 ">
                The Chief Aesthetic Officer
              </div>
            </div>
          </div>

          <div className="relative group lg:w-[320px] h-[320px]">
            {/* SMALL CARD */}
            <div className="relative w-full h-full flex items-end justify-center transition duration-300 group-hover:scale-105 z-10">
              <div className="absolute bottom-0 w-[200px] h-[260px] bg-[#d9d9d9] rounded-md"></div>

              <img
                src={person5}
                className="absolute bottom-0 left-[32px] lg:left-0 z-20 h-[350px]"
                alt=""
              />

              {/* FONT SAME */}
              <h2 className="absolute font-heading bottom-[-12px] text-[33px] font-bold text-[#F6CB12] z-30">
                DEBASIS
              </h2>
            </div>

            {/* 🔥 BIG EXPANDED CARD */}
            <div className="absolute bottom-[-10px] right-0 w-[700px] h-[380px] bg-white shadow-xl rounded-xl opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 transition duration-300 z-50 flex overflow-hidden pointer-events-none">
              {/* LEFT TEXT */}
              <div className="w-1/2 p-6 flex flex-col ">
                <p className="text-[14px] text-black/70 leading-relaxed">
                  In a world where most creatives follow trends, Debasis studies
                  them… then quietly bends them.
                  <br />
                  <br />
                  From trending audio to the right font and frame, nothing in
                  his process is random — it’s researched, tested, and refined.
                  <br />
                  <br />
                  He may get confused sometimes, but instead of following
                  others, he finds his own answers.
                </p>

                {/* <p className="mt-4 font-bold text-[12px]">STRATEGIST</p> */}
              </div>

              {/* RIGHT SIDE */}
              <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-b ">
                {/* Circle */}
                {/* <div className="absolute top-4 right-4 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div> */}

                {/* Image */}
                <img
                  src={person5}
                  className="h-[375px] object-contain w-full  z-30 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={card4bg2}
                  className="h-[380px] right-[-40px] top-[20px] absolute object-contain z-0 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
                <img
                  src={greenBall}
                  className=" top-[10px] right-[-20px] absolute object-contain z-10 "
                  // style={{ transform: "scaleX(-1)" }}
                  alt=""
                />
              </div>
              <div className="absolute max-w-[70%] left-[20px] w-full bottom-0 font-heading text-[40px] leading-none z-30 ">
                The Visual Designer
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

export default OurTeam;
