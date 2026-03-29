import React, { useEffect } from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";

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
    <div className="flex justify-center ">
      <div className="flex items-center gap-24 py-20">
        <div>
          <div className="relative">
            <img
              src={person3}
              alt="Person 1"
              className="h-[501px] w-[385px] object-contain "
            />
            <div className="absolute left-0 top-2/3  font-sm font-semibold text-black text-center">
              creative ideas
            </div>
            <div className="h-[170px] w-[170px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] flex items-center justify-center text-center mx-auto absolute top-[40px] left-[-70px] z-10 rounded-full p-4">
              <p className="text-white text-[20px] text-center leading-tight">
                Ideas Ki Factory – Har Idea Jugadu Style
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-24 pb-24">
            <div className="relative">
              <img
                src={person1}
                alt="Person 2"
                className="h-[469px]  w-[243px] object-contain "
              />
              <div className="absolute bottom-[-30px] left-0 right-0  font-sm font-semibold text-black text-center">
                3+ Years Experience
              </div>
              <div className="h-[170px] w-[170px] bg-[#39AEB9] flex items-center justify-center text-center mx-auto absolute top-[150px] right-[-134px] z-10 rounded-full p-4">
                <p className="text-white text-[20px] text-left leading-tight">
                  Chhota <br /> Packet, <br /> Bada <br /> Dhamaka
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={person2}
                alt="Person 3"
                className="h-[469px]  w-[343px] object-cover"
              />
              <div className="absolute top-[-20px] left-0 right-0  font-sm font-semibold text-black text-center">
                169+ Campaigns
              </div>
              <div className="h-[170px] w-[170px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] flex items-center justify-center text-center mx-auto absolute top-[-40px] right-[-60px] z-10 rounded-full p-4">
                <p className="text-white text-[20px] text-left leading-tight">
                  Picture
                  <br />
                  Abhi Baaki <br />
                  Hai, Boss
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-24">
            <div className="relative">
              <img
                src={person4}
                alt="Person 2"
                className="h-[469px]  w-[243px] object-cover "
              />
              <div className="absolute bottom-[30px] max-w-[100px] text-left right-0  font-sm font-semibold text-black ">
                Cost effective solutions
              </div>
              <div className="h-[170px] w-[170px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] flex items-center justify-center text-center mx-auto absolute bottom-[90px] right-[-90px] z-10 rounded-full p-4">
                <p className="text-white text-[20px] text-center leading-tight">
                  Ideas Ki Factory – Har Idea Jugadu Style
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={person5}
                alt="Person 3"
                className="h-[469px]  w-[343px] object-contain"
              />
              <div className="absolute bottom-[0px] right-0  font-sm font-semibold text-black text-center">
                Data driven results
              </div>
              <div className="h-[170px] w-[170px] bg-[#39AEB9] flex items-center justify-center text-center mx-auto absolute bottom-[90px] right-[-60px] z-10 rounded-full p-4">
                <p className="text-white text-[20px] text-center leading-tight">
                  Numbers Ko Nahi, Results Ko Samjho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;
