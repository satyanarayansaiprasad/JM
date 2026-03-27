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
const Contact = () => {
  return (
    <div className="h-full">
      <div className="lg:ps-[80px] px-[20px] py-10 lg:py-14">
        <div className="flex lg:h-[300px] relative ">
          <div>
            <div className="lg:text-[100px] text-4xl font-heading">
              CONTACT <br />
              {/* <span className="text-yellow-500">US</span> */}
            </div>
            <div className="lg:text-[100px] lg:pt-14 text-yellow-400 text-4xl font-heading">
              US
              {/* <span className="text-yellow-500">US</span> */}
            </div>
          </div>
          <div className="text-[70px] absolute top-10 lg:top-0 right-0 md:text-[250px] font-script text-[#39AEB9] leading-none tracking-wide">
            Just Write
          </div>
        </div>
      </div>
      <div className="text-center text-[#717171] lg:pb-0 pb-10 text-sm font-regular">
        Any question or remarks? Just write us a message!
      </div>
      <div className="flex justify-center items-center pb-20 lg:pt-0 pt-10 lg:px-[90px] px-3 relative z-0 overflow-visible">
        {/* Main Card */}
        <div className="bg-white shadow-xl z-50  p-2 rounded-2xl lg:flex w-full  overflow-hidden">
          {/* LEFT PANEL */}
          <div className="bg-black text-white p-10 lg:w-1/3 flex flex-col justify-between relative lg:rounded-l-2xl overflow-hidden">
            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-400 text-sm mb-10">
                Say something to start a live chat!
              </p>

              <div className="space-y-8 text-sm">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-white text-sm" />
                  <p>+1012 3456 789</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-white text-sm" />
                  <p>demo@gmail.com</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-white text-sm" />
                  <p className="max-w-[200px] leading-relaxed">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <div className="w-9 h-9 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                <FaTwitter size={14} />
              </div>

              <div className="w-9 h-9 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                <FaInstagram size={14} />
              </div>

              <div className="w-9 h-9 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                <FaDiscord size={14} />
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 bg-gray-700/30 rounded-full"></div>
            <div className="absolute bottom-[40px] right-[20px] w-24 h-24 bg-gray-700/30 rounded-full"></div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:p-10 p-2 lg:w-2/3">
            {/* Inputs */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="text-xs text-gray-500">First Name</label>
                <input className="w-full border-b border-gray-300 focus:border-black outline-none py-2" />
              </div>

              <div>
                <label className="text-xs text-gray-500">Last Name</label>
                <input className="w-full border-b border-gray-300 focus:border-black outline-none py-2" />
              </div>

              <div>
                <label className="text-xs text-gray-500">Email</label>
                <input className="w-full border-b border-gray-300 focus:border-black outline-none py-2" />
              </div>

              <div>
                <label className="text-xs text-gray-500">Phone Number</label>
                <input className="w-full border-b border-gray-300 focus:border-black outline-none py-2" />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-10">
              <p className="text-sm mb-4 font-medium">Select Subject?</p>

              <div className=" lg:flex gap-1 lg:gap-6 text-sm items-center lg:space-y-0 space-y-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="s" className="accent-black" />
                  General Inquiry
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="s" className="accent-black" />
                  General Inquiry
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="s" className="accent-black" />
                  General Inquiry
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="s" className="accent-black" />
                  General Inquiry
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="mt-10">
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                rows={2}
              />
            </div>

            {/* Button */}
            <div className="flex justify-end mt-10">
              <button className="bg-black text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
        {/* Background Shapes */}
        <div className="absolute lg:top-[-40px] z-10 top-[-20px] left-[-25px] w-48 h-48 rounded-full bg-gradient-to-l from-[#FEC107] to-[#FE6A07]"></div>
        <div className="absolute bottom-0 lg:right-0 right-[-50px] w-48 h-48 bg-[#39AEB9] rounded-full"></div>
      </div>
      <Banner />
    </div>
  );
};

export default Contact;
