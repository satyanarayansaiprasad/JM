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
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT GRID */}
          <div className="grid grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative bg-gray-300 p-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full object-contain grayscale"
                />

                {/* NAME */}
                <h2 className="absolute bottom-2 left-2 text-yellow-500 font-extrabold text-xl">
                  {member.name}
                </h2>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            {/* HEADING */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                THE <span className="italic font-light">minds</span>
                <br />
                <span className="text-yellow-500">BEHIND THE</span>
                <br />
                <span className="text-teal-500 italic">magic</span>
              </h2>
            </div>

            {/* GROUP IMAGE */}
            <img src={group} alt="group" className="w-full max-w-lg mb-6" />

            {/* TEXT */}
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
      </div>
      <Banner />
    </div>
  );
};

export default OurTeam;
