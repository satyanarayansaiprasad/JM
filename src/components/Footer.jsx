import React from "react";
import footerPerson from "../assets2/footer-person.webp";
import footerLogo from "../assets2/footer-logo.webp";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { i } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className="w-full bg-[#0f0f0f] text-white relative overflow-hidden">
      <div className="mx-auto pt-10 lg:px-0 px-6">
        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* TOP */}
          <div className="flex justify-between items-start">
            <img src={footerLogo} className="w-24" alt="" />

            <div className="flex flex-col items-end gap-4">
              <button
                onClick={() => navigation("/contact-us")}
                className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium"
              >
                Make an appointment
              </button>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/jugadu_marketers?igsh=Z2Z3NWcybHo4anR3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="https://www.facebook.com/share/18cRTbmRnX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/company/jugadu-marketers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 text-sm text-gray-300 mt-10">
            <div className="flex flex-col gap-2">
              <Link
                to="/our-team"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Our Team
              </Link>
              <Link
                to="/works"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Our Work
              </Link>
              {/* <Link to="/case-studies" className="hover:text-yellow-400">
                Case Studies
              </Link> */}
              <Link to="/services" className="hover:text-yellow-400">
                Our Services
              </Link>
              <span className="hover:text-yellow-400 cursor-pointer">
                Careers
              </span>
              <Link to="/contact-us" className="hover:text-yellow-400">
                Contact Us
              </Link>
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
                <a
                  href="https://www.instagram.com/jugadu_marketers?igsh=Z2Z3NWcybHo4anR3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/share/18cRTbmRnX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/jugadu-marketers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer hover:bg-yellow-500 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <FaLinkedinIn />
                </a>
              </div>

              {/* LINKS */}
              <div className="grid grid-cols-2 gap-10 text-sm text-gray-300">
                <div className="flex flex-col gap-2">
                  <Link
                    to="/our-team"
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/works"
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    Our Work
                  </Link>
                  {/* <Link to="/case-studies" className="hover:text-yellow-400">
                    Case Studies
                  </Link> */}
                  <Link to="/services" className="hover:text-yellow-400">
                    Our Services
                  </Link>
                  <span className="hover:text-yellow-400 cursor-pointer">
                    Careers
                  </span>
                  <Link to="/contact-us" className="hover:text-yellow-400">
                    Contact Us
                  </Link>
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
              <button
                onClick={() => window.open("https://calendly.com/jugadumarketers/30min", "_blank")}
                className="bg-yellow-500 text-black px-6 py-2 rounded-full mb-6"
              >
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
