import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import disText from "../assets/dis-text.png";
import disSubTExt from "../assets/dis-subtext.png";
import mobileTexthero from "../assets/mobile-text-hero.png";
const DiscussSection = () => {
  return (
    <div className="relative w-full md:h-dvh  md:py-20 py-6 overflow-hidden">
      {/* TITLE */}
      <div className="md:block hidden">
        <div className="top-10 left-20 absolute ">
          <img src={disText} className="w-[400px] mx-auto" alt="img" />
          <img src={disSubTExt} className="w-[300px] mx-auto mt-4" alt="img" />
        </div>

        {/* CIRCLES */}
        <div className="absolute top-20 right-[280px] z-10 w-40 h-40 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          PICTURE ABHI BAAKI HAI, BOSS
        </div>

        <div className="absolute top-[200px] right-[485px] z-10 w-40 h-40 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          CHHOTA PACKET, BADA DHAMAKA
        </div>

        <div className="absolute bottom-[300px] left-10 w-40 h-40 z-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          IDEAS KI FACTORY – HAR IDEA JUGADU STYLE
        </div>

        <div className="absolute bottom-20 left-[650px] w-40 h-40 bg-orange-500 text-white rounded-full flex items-center justify-center text-center p-4 font-bold">
          BUDGET SE SMART SOLUTIONS TAK KA SAFAR
        </div>

        <div className="absolute bottom-20 right-10 z-10 w-52 h-52 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-6 font-bold">
          NUMBERS KO NAHI, RESULTS KO SAMJHO
        </div>

        {/* IMAGES */}

        {/* CENTER */}
        <img
          src={person1}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-52"
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
        <div className=" absolute left-10 px-6 bottom-[10px]">
          <h2 className="text-4xl font-bold">
            OUR <span className="italic font-extrabold">PROUD</span>
          </h2>
          <div className="w-24 h-2 bg-yellow-500 mt-2"></div>
          <p className="text-2xl">CLIENTS</p>
        </div>
      </div>
      <div className="md:hidden ">
        <div className="flex flex-col items-center gap-4 justify-center px-6">
          <div>
            <img
              src={mobileTexthero}
              alt="Mobile Hero Text"
              className="w-full"
            />
          </div>

          <div className="relative h-[400px] w-full ">
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
