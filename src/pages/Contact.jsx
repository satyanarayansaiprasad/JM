import React from "react";
import Banner from "../components/Banner";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  // 🔥 Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="h-full">
      <div className="lg:ps-[80px] px-[20px] pt-10 pb-6 lg:pt-28 lg:pb-10">
        <div className="flex lg:h-[300px] relative   ">
          {/* LEFT TEXT */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="lg:text-[100px] text-4xl font-heading"
            >
              CONTACT <br />
            </motion.div>

            <motion.div
              variants={item}
              className="lg:text-[100px] lg:pt-14 text-yellow-400 text-4xl font-heading"
            >
              US
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[70px] absolute top-10 lg:top-0 right-0 md:text-[250px] font-script text-[#39AEB9] leading-none tracking-wide"
          >
            Just Write
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-[#717171] lg:pb-0 pb-10 text-sm font-regular"
      >
        Any question or remarks? Just write us a message!
      </motion.div>

      <div className="flex justify-center items-center pb-20 lg:pt-0 pt-10 lg:px-[90px] px-3 relative z-0 overflow-hidden lg:overflow-visible">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl z-50 p-2 rounded-2xl lg:flex w-full overflow-hidden"
        >
          {/* LEFT PANEL */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-10 lg:w-1/3 flex flex-col justify-between relative lg:rounded-l-2xl overflow-hidden"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-400 text-sm mb-10">
                Say something to start a live chat!
              </p>

              <div className="space-y-8 text-sm">
                {[FaPhoneAlt, FaEnvelope, FaMapMarkerAlt].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <Icon className="text-white text-sm" />
                    <p>
                      {i === 0
                        ? "+1012 3456 789"
                        : i === 1
                          ? "demo@gmail.com"
                          : "132 Dartmouth Street Boston, Massachusetts 02156 United States"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              {[FaTwitter, FaInstagram, FaDiscord].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="w-9 h-9 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition"
                >
                  <Icon size={14} />
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 bg-gray-700/30 rounded-full"></div>
            <div className="absolute bottom-[40px] right-[20px] w-24 h-24 bg-gray-700/30 rounded-full"></div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:p-10 p-2 lg:w-2/3"
          >
            {/* Inputs */}
            <div className="grid grid-cols-2 gap-10">
              {["First Name", "Last Name", "Email", "Phone Number"].map(
                (label, i) => (
                  <motion.div key={i} variants={item}>
                    <label className="text-xs text-gray-500">{label}</label>
                    <input className="w-full border-b border-gray-300 focus:border-black outline-none py-2" />
                  </motion.div>
                ),
              )}
            </div>

            {/* Subject */}
            <motion.div variants={item} className="mt-10">
              <p className="text-sm mb-4 font-medium">Select Subject?</p>

              <div className="lg:flex gap-1 lg:gap-6 text-sm items-center lg:space-y-0 space-y-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input type="radio" name="s" className="accent-black" />
                    General Inquiry
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={item} className="mt-10">
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                rows={2}
              />
            </motion.div>

            {/* Button */}
            <motion.div variants={item} className="flex justify-end mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute lg:top-[-40px] z-10 top-[-20px] left-[-25px] w-48 h-48 rounded-full bg-gradient-to-l from-[#FEC107] to-[#FE6A07]"
        ></motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute bottom-0 lg:right-0 right-[-50px] w-48 h-48 bg-[#39AEB9] rounded-full"
        ></motion.div>
      </div>

      <Banner />
    </div>
  );
};

export default Contact;
