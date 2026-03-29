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
    <div>
      <div className=" text-justify p-4 lg:hidden block top-[20px] left-[20px] uppercase font-heading text-[44px] leading-none">
        Chalo <span className="text-[#FEC107]">Discuss</span> <br />
        Karein
        <br />
        <span className="text-[30px] font-script leading-none">
          why Jugadu Marketers{" "}
        </span>
      </div>
      <div className="flex justify-center relative ">
        <div className="lg:flex items-center gap-24 py-20">
          <div>
            <div className="relative">
              <img
                src={person3}
                alt="Person 1"
                className="lg:h-[501px] h-[370px] lg:w-[385px] object-contain "
              />
              <div className="absolute lg:block hidden left-0 top-2/3  font-sm font-semibold text-black text-center">
                creative ideas
              </div>
              <div className="absolute lg:hidden block right-[20px] top-2/3  font-sm font-semibold text-black text-center">
                creative ideas
              </div>
              <div className="h-[170px] w-[170px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] hidden lg:flex items-center justify-center text-center mx-auto absolute top-[40px] left-[-70px] z-10 rounded-full p-4">
                <p className="text-white text-[20px] text-center leading-tight">
                  Ideas Ki Factory – Har Idea Jugadu Style
                </p>
              </div>
              <div className="h-[150px] w-[150px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07]  lg:hidden flex items-center justify-center text-center mx-auto absolute top-[0px] right-[-10px] z-10 rounded-full p-4">
                <p className="text-white text-[15px] text-center leading-tight">
                  Ideas Ki Factory – Har Idea Jugadu Style
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex gap-24 lg:pb-24">
              <div className="relative lg:pb-0 pb-6 lg:pt-0 pt-10 lg:overflow-visible">
                <img
                  src={person1}
                  alt="Person 2"
                  className="h-[469px]  w-[243px] object-contain "
                />
                <div className="absolute bottom-[-30px] lg:block hidden left-0 right-0  font-sm font-semibold text-black text-center">
                  3+ Years Experience
                </div>
                <div className="absolute bottom-[0px] lg:hidden block left-0 right-0  font-sm font-semibold text-black text-center">
                  3+ Years Experience
                </div>
                <div className="h-[170px] w-[170px] bg-[#39AEB9] hidden lg:flex items-center justify-center text-center mx-auto absolute top-[150px] right-[-134px] z-10 rounded-full p-4">
                  <p className="text-white text-[20px] text-left leading-tight">
                    Chhota <br /> Packet, <br /> Bada <br /> Dhamaka
                  </p>
                </div>
                <div className="h-[150px] w-[150px] bg-[#39AEB9] lg:hidden flex items-center justify-center text-center mx-auto absolute top-[200px] right-[-10px] z-10 rounded-full p-4">
                  <p className="text-white text-[15px] text-left leading-tight">
                    Chhota <br /> Packet, <br /> Bada <br /> Dhamaka
                  </p>
                </div>
              </div>
              <div className="relative lg:pt-0 pt-10">
                <img
                  src={person2}
                  alt="Person 3"
                  className="h-[469px]  w-[343px] object-cover"
                />
                <div className="absolute lg:block hidden top-[-20px] left-0 right-0  font-sm font-semibold text-black text-center">
                  169+ Campaigns
                </div>
                <div className="absolute lg:hidden block bottom-[80px] left-0  font-sm font-semibold text-black text-center">
                  169+ Campaigns
                </div>
                <div className="h-[170px] hidden w-[170px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] lg:flex items-center justify-center text-center mx-auto absolute top-[-40px] right-[-60px] z-10 rounded-full p-4">
                  <p className="text-white text-[20px] text-left leading-tight">
                    Picture
                    <br />
                    Abhi Baaki <br />
                    Hai, Boss
                  </p>
                </div>
                <div className="h-[150px] lg:hidden w-[150px] bg-gradient-to-l from-[#FEC107] to-[#FE6A07] flex items-center justify-center text-center mx-auto absolute top-[128px] right-[-20px] z-10 rounded-full p-4">
                  <p className="text-white text-[15px] text-left leading-tight">
                    Picture
                    <br />
                    Abhi Baaki <br />
                    Hai, Boss
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex gap-24">
              <div className="relative lg:pb-0 pb-10">
                <img
                  src={person4}
                  alt="Person 2"
                  className="h-[469px]  w-[243px] object-cover "
                />
                <div className="absolute bottom-[30px] max-w-[100px] lg:block hidden text-left right-0  font-sm font-semibold text-black ">
                  Cost effective solutions
                </div>
                <div className="absolute bottom-[90px] lg:max-w-[100px] lg:hidden block text-left right-0  font-sm font-semibold text-black ">
                  Cost effective solutions
                </div>
                <div className="h-[170px] w-[170px] bg-gradient-to-l hidden from-[#FEC107] to-[#FE6A07] lg:flex items-center justify-center text-center mx-auto absolute bottom-[130px] left-[-130px] z-10 rounded-full p-4">
                  <p className="text-white text-[20px] text-center leading-tight">
                    Ideas Ki Factory – Har Idea Jugadu Style
                  </p>
                </div>
                <div className="h-[150px] w-[150px] bg-gradient-to-l lg:hidden from-[#FEC107] to-[#FE6A07] flex items-center justify-center text-center mx-auto absolute bottom-[160px] right-[20px] z-10 rounded-full p-4">
                  <p className="text-white text-[15px] text-center leading-tight">
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
                <div className="absolute bottom-[0px] lg:block hidden right-0  font-sm font-semibold text-black text-center">
                  Data driven results
                </div>
                <div className="absolute bottom-[0px]  lg:hidden right-[20px]  font-sm font-semibold text-black text-center">
                  Data driven results
                </div>
                <div className="h-[170px] w-[170px] bg-[#39AEB9] hidden lg:flex items-center justify-center text-center mx-auto absolute bottom-[90px] right-[-60px] z-10 rounded-full p-4">
                  <p className="text-white text-[20px] text-center leading-tight">
                    Numbers Ko Nahi, Results Ko Samjho
                  </p>
                </div>
                <div className="h-[150px] w-[150px] bg-[#39AEB9] lg:hidden flex items-center justify-center text-center mx-auto absolute bottom-[160px] right-[-20px] z-10 rounded-full p-4">
                  <p className="text-white text-[15px] text-center leading-tight">
                    Numbers Ko Nahi, Results Ko Samjho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:block hidden top-[20px] left-[20px] uppercase font-heading text-[64px] leading-none">
          Chalo <span className="text-[#FEC107]">Discuss</span> <br />
          Karein
          <br />
          <span className="text-[30px] font-script leading-none">
            why Jugadu Marketers{" "}
          </span>
        </div>

        <div className="absolute lg:bottom-[20px] bottom-[-30px] left-[20px] uppercase leading-none">
          <div className="text-[34px] flex items-end gap-2">
            <span>OUR</span>
            <span className="text-[40px] font-bold italic">PROUD</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[34px]">CLIENTS</span>

            {/* Yellow bar */}
            <div className="w-[120px] h-[22px] bg-[#FEC107] skew-x-[-20deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;
