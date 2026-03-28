import React from "react";
import teamImage from "../assets/our-team.svg";
import Banner from "../components/Banner";
import group from "../assets/team-group.png";
import person1 from "../assets/team-person1.png";
import person2 from "../assets/team-person2.png";
import person3 from "../assets/team-person3.png";
import person4 from "../assets/team-person4.png";
import person5 from "../assets/team-person5.png";
const OurTeam = () => {
  const team = [
    { img: person1, name: "AMIT" },
    { img: person2, name: "ALOK" },
    { img: person3, name: "SAMAY" },
    { img: person4, name: "ARYAN" },
    { img: person5, name: "PRATYOSH" },
    // { img: person6, name: "PAPUN" },
    // { img: person7, name: "DEBASIS" },
  ];
  return (
    <div>
      <div>
        <img src={teamImage} className="w-full" alt="Team" />
      </div>

      <div>
        <div>
          <section className="w-full  px-6 py-10 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* LEFT SIDE GRID */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]">
                        <img
                          src={person1}
                          alt="AMIT"
                          className="w-full object-contain grayscale"
                        />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>

                    {/* Right text block */}
                    <div className="flex flex-col justify-start pt-2">
                      {/* <h1 className="leading-none">
                        <span className="block text-[52px] font-black uppercase text-black">
                          THE
                        </span>
                        <span className="ml-2 inline-block rotate-[-6deg] text-[54px] font-semibold italic text-black">
                          minds
                        </span>
                        <span className="block text-[52px] font-black uppercase text-[#f4b400]">
                          BEHIND THE
                        </span>
                        <span className="text-[56px] font-medium italic text-[#56c7d9]">
                          magic
                        </span>
                      </h1> */}

                      {/* <div className="mt-6 h-[90px] w-full max-w-[320px] bg-[#d9d9d9]"></div> */}

                      <div className="mt-6 max-w-[320px]">
                        {/* <h3 className="text-[22px] font-semibold italic leading-tight text-black">
                          Great results aren’t accidental.
                        </h3>
                        <p className="mt-2 text-[12px] leading-[1.5] text-black/70">
                          They’re built with strategy, driven by hard work, and
                          delivered through smart execution.
                        </p> */}
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>

                    {/* Empty space under right block */}
                    <div></div>

                    {/* Card 5 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>

                    {/* Card 7 */}
                    <div className="flex flex-col items-start">
                      <div className="h-[230px] w-full max-w-[180px] bg-[#d9d9d9]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div>
        <div className="grid md:grid-cols-2 gap-10">
         
          <div className="grid grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative bg-gray-300 p-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full object-contain grayscale"
                />

               
                <h2 className="absolute bottom-2 left-2 text-yellow-500 font-extrabold text-xl">
                  {member.name}
                </h2>
              </div>
            ))}
          </div>

        
          <div className="flex flex-col justify-center">
       
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                THE <span className="italic font-light">minds</span>
                <br />
                <span className="text-yellow-500">BEHIND THE</span>
                <br />
                <span className="text-teal-500 italic">magic</span>
              </h2>
            </div>

           
            <img src={group} alt="group" className="w-full max-w-lg mb-6" />

         
            <div>
              <h3 className="text-2xl font-semibold">
                Great results aren’t accidental.
              </h3>
              <p className="text-gray-600 mt-2 max-w-md">
                They’re built with strategy, driven by hard work, and delivered
                through smart execution.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Banner />
    </div>
  );
};

export default OurTeam;
