import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

import Card2 from "../assets2/card2.webp";
import Card2top from "../assets2/card2-top.webp";
import Crad2Logo from "../assets2/card2-logo.webp";
import Card3bg from "../assets2/card3bg.webp";
import Card3Logo from "../assets2/card3logo.webp";
import Card4bg from "../assets2/card4bg.webp";
import Card4Logo from "../assets2/card4logo.webp";
import Card1logo from "../assets2/card1logo.webp";
import Card1bg from "../assets2/card1bg.webp";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

const socialLinks = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/jugadu_marketers?igsh=Z2Z3NWcybHo4anR3/",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/18cRTbmRnX/",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/jugadu-marketers/",
  },
];

const Works = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!name || !email) {
      alert("Please fill in both name and email.");
      return;
    }

    setIsLoading(true);

    const emailDetails = {
      from_name: name,
      from_email: email,
      subject: "New Work Inquiry",
      message: `Work inquiry from ${name} (${email})`,
      type: "Portfolio Work Inquiry",
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
          setIsLoading(false);
          setFormData({ name: "", email: "" });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          throw new Error(data.error || "Failed to send email");
        }
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsLoading(false);
        alert("Something went wrong. Make sure your back-end server is running!");
      });
  };

  // 🔥 animation configs
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="h-full">
      {/* HERO */}
      <div className="relative w-full lg:h-[600px] h-[250px] overflow-hidden flex items-center justify-center ">
        <div className="absolute lg:left-[-200px] lg:bottom-[-70px] left-[-30px] bottom-[-40px] w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] bg-[#39AEB9] rounded-full"></div>

        <div className="absolute lg:right-[-50px] top-10 right-[-50px] lg:top-10 lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] bg-[#39AEB9] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center relative z-10"
        >
          <div className="w-[135px] h-[135px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-b from-[#FEC107] to-[#FE6A07] flex items-center justify-center">
            <span className="font-script text-3xl lg:text-[200px] text-black translate-y-2 lg:translate-y-6">
              Works
            </span>
          </div>

          <div className="ml-2 lg:ml-8 text-[100px] md:text-[180px] lg:text-[600px] font-bold leading-none">
            UR
          </div>
        </motion.div>
      </div>

      {/* CARDS */}
      <div className="flex justify-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-[200px] gap-16 px-4 lg:px-20"
        >
          {/* CARD 1 */}
          <motion.div
            onClick={() =>
              navigate("/case-studies", {
                state: {
                  caseStudy: {
                    description:
                      "Kho Kho carries deep cultural roots, but translating that into digital relevance required a fresh perspective. We introduced structure where there was fragmentation, building a consistent voice, visual identity, and storytelling approach. By blending tradition with modern content formats, we made the sport more engaging for today’s audience. The transformation wasn’t just in numbers, but in perception, Kho Kho started feeling alive, relatable, and digitally relevant again.",
                  },
                  id: 1,
                },
              })
            }
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex flex-col items-center pt-6">
              <img
                src={Card1logo}
                className="object-contain px-6 pt-10"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#E42425] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img src={Card1bg} className="object-contain" alt="img" />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            onClick={() =>
              navigate("/case-studies", {
                state: {
                  caseStudy: {
                    description:
                      "Deomali Coffee came to us as more than just a beverage brand, it had the potential to become an experience. Instead of treating it like a typical D2C product, we built an ecosystem around it. From crafting a strong digital presence across platforms to optimizing its social media and running performance campaigns, every touchpoint was designed to tell a consistent story. The real shift happened when the brand stopped “selling coffee” and started creating a lifestyle around it. The result was not just visibility, but recall a brand that people don’t just see, but connect with and return to.",
                  },
                  id: 2,
                },
              })
            }
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex flex-col items-center pt-6 relative z-10">
              <img
                src={Crad2Logo}
                alt="logo"
                className="h-32 lg:h-44 object-contain"
              />
            </div>

            <img
              src={Card2top}
              alt="flower"
              className="absolute left-0 w-full bottom-[150px] lg:bottom-[260px] z-30 object-contain pointer-events-none"
            />

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#472E00] rounded-full mx-auto -mt-[80px] lg:-mt-[110px] relative z-20 flex items-end justify-center">
              <img
                src={Card2}
                alt="coffee"
                className="w-[180px] lg:w-[307px] object-contain"
              />
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            onClick={() =>
              navigate("/case-studies", {
                state: {
                  caseStudy: {
                    description:
                      "In an industry where most brands compete for attention, Dialurbano needed something deeper, credibility and intent. We restructured their marketing approach from scattered campaigns to a cohesive system where every ad, post, and message had a purpose. By aligning content with buyer psychology and building full-funnel performance strategies, we transformed casual viewers into serious prospects. The outcome wasn’t just more leads, it was better leads, driven by trust, clarity, and decision-focused communication.",
                  },
                  id: 3,
                },
              })
            }
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex pt-6 justify-center">
              <img
                src={Card3Logo}
                className="h-[120px] lg:h-[150px]"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#18B400] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img
                src={Card3bg}
                className="h-[300px] lg:h-[563px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            onClick={() =>
              navigate("/case-studies", {
                state: {
                  caseStudy: {
                    description:
                      "For Khaiba Junction, the challenge wasn’t getting noticed, it was staying remembered. Food brands often win on impulse, but lose on retention. We shifted the narrative from one-time cravings to everyday comfort. Through consistent, relatable content and subtle brand storytelling, we made the brand feel like a part of people’s daily lives. Over time, Khaiba Junction evolved from being “another food option” to becoming a familiar choice, where repeat orders weren’t forced, but natural.",
                  },
                  id: 4,
                },
              })
            }
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex pt-6 justify-center">
              <img
                src={Card4Logo}
                className="h-[120px] lg:h-[147px]"
                alt="img"
              />
            </div>

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#25517E] rounded-full mx-auto -mt-[100px] lg:-mt-[140px] flex items-end justify-center">
              <img
                src={Card4bg}
                className="h-[250px] lg:h-[389px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="lg:pt-32 pt-20">
        <Banner />
      </div>

      {/* BOTTOM */}
      <div className="w-full py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
              Lets work together
            </h2>

            <p className="text-gray-600 max-w-md mb-10">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com This is a template Figma file, turned into
              code using Anima. Learn more at AnimaApp.com
            </p>

            <div className="flex gap-6 text-xl">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-md lg:ml-auto">
            <input
              name="name"
              className="w-full bg-[#dcdcdc] p-4 mb-4"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              className="w-full bg-[#dcdcdc] p-4 mb-6"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 font-medium mb-4"
              >
                Form submitted successfully!
              </motion.p>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#2f2f2f] text-white px-10 py-4 hover:bg-black w-full disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
