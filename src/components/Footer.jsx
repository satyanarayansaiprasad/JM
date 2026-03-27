import React from "react";
import footerPerson from "../assets/footer-person.png";
import footerLogo from "../assets/footer-logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#0f0f0f] text-white relative overflow-hidden">
      <div className="mx-auto pt-10 lg:px-0 px-6">
        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* TOP */}
          <div className="flex justify-between items-start">
            <img src={footerLogo} className="w-24" alt="" />

            <div className="flex flex-col items-end gap-4">
              <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium">
                Make an appointment
              </button>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaInstagram size={14} />
                </div>
                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaFacebookF size={14} />
                </div>
                <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaLinkedinIn size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 text-sm text-gray-300 mt-10">
            <div className="flex flex-col gap-2">
              <span>Our Team</span>
              <span>Our Work</span>
              <span>Case Studies</span>
              <span>Our Services</span>
              <span>Careers</span>
              <span>Contact Us</span>
            </div>

            <div className="flex flex-col gap-2">
              <span>Testimonials</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-10">
            <img src={footerPerson} className="w-[200px]" alt="" />
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex ps-10 justify-between items-start">
          {/* LEFT */}
          <div className="flex gap-20 items-start">
            {/* LOGO */}
            <img src={footerLogo} className="w-36" alt="" />

            {/* LINKS + SOCIAL */}
            <div className="flex flex-col gap-6">
              {/* SOCIAL */}
              <div className="flex gap-4">
                <div className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaInstagram />
                </div>
                <div className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaFacebookF />
                </div>
                <div className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center">
                  <FaLinkedinIn />
                </div>
              </div>

              {/* LINKS */}
              <div className="grid grid-cols-2 gap-10 text-sm text-gray-300">
                <div className="flex flex-col gap-2">
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Our Team
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Our Work
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Case Studies
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Our Services
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Careers
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Contact Us
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Testimonials
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Privacy Policy
                  </span>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Terms & Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end">
            <div className="pr-10">
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-full mb-6">
                Make an appointment
              </button>
            </div>

            <img src={footerPerson} className="w-[300px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
