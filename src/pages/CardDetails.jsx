/* eslint-disable default-case */
import React from "react";

import Card2 from "../assets2/card2.webp";
import Card2top from "../assets2/card2-top.webp";
import Crad2Logo from "../assets2/card2-logo.webp";
import Card3bg from "../assets2/card3bg.webp";
import Card3Logo from "../assets2/card3logo.webp";
import Card4bg from "../assets2/card4bg.webp";
import Card4Logo from "../assets2/card4logo.webp";
import Card1logo from "../assets2/card1logo.webp";
import Card1bg from "../assets2/card1bg.webp";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// Import Images for Kho Kho
import KhoKhoImg1 from "../assets/kho kho/60985.jpg";
import KhoKhoImg2 from "../assets/kho kho/60995.jpg";
import KhoKhoImg3 from "../assets/kho kho/60998.jpg";

// Import Images for Deomali Coffee
import DeomaliImg1 from "../assets/deomali coffee/70996.jpg";
import DeomaliImg2 from "../assets/deomali coffee/70997.jpg";
import DeomaliImg3 from "../assets/deomali coffee/70998.jpg";
import DeomaliImg4 from "../assets/deomali coffee/70999.jpg";
import DeomaliImg5 from "../assets/deomali coffee/71000.jpg";
import DeomaliImg6 from "../assets/deomali coffee/71001.jpg";
import DeomaliImg7 from "../assets/deomali coffee/71002.jpg";

// Import Images for DialUrbano
import DialUrbanoImg1 from "../assets/dialurbano/71003.jpg";
import DialUrbanoImg2 from "../assets/dialurbano/71004.jpg";
import DialUrbanoImg3 from "../assets/dialurbano/71005.jpg";
import DialUrbanoImg4 from "../assets/dialurbano/71006.jpg";
import DialUrbanoImg5 from "../assets/dialurbano/71007.jpg";
import DialUrbanoImg6 from "../assets/dialurbano/71008.jpg";

// Import Images for Khaiba Junction
import KhaibaImg1 from "../assets/khiba junction/70994.jpg";
import KhaibaImg2 from "../assets/khiba junction/70995.jpg";

// Video and Image Data for Case Studies (Ordered to match Works.jsx IDs)
const VIDEO_CASE_STUDIES = [
  {
    id: 1,
    brand: "Odisha KhoKho HPC",
    description: "Empowering traditional sports through high-performance training and dynamic digital storytelling. This initiative brings Kho Kho into the modern era with professional-grade content and strategic brand building.",
    videos: ["UOv5nNK90iE", "bozlYxuQzNo", "BYkuZ-7k0J4"],
    images: [KhoKhoImg1, KhoKhoImg2, KhoKhoImg3],
    layout: "landscape"
  },
  {
    id: 2,
    brand: "Deomali Coffee",
    description: "Crafting a premium lifestyle experience around Odisha's finest coffee. By optimizing digital touchpoints and running targeted performance campaigns, we turned a product into a community favorite.",
    videos: ["xwsgTErfZiA", "YTJyCZoaKk4", "8Zs-DGjyB98", "jSQHO7eFYhU"],
    images: [DeomaliImg1, DeomaliImg2, DeomaliImg3, DeomaliImg4, DeomaliImg5, DeomaliImg6, DeomaliImg7],
    layout: "portrait"
  },
  {
    id: 3,
    brand: "DialUrbano",
    description: "Revolutionizing urban mobility and real estate marketing. We transformed scattered campaigns into a cohesive performance ecosystem that drives high-quality leads and brand trust through interactive content.",
    videos: ["d5JfT4XdsMw", "qubHwBb3mXg", "ncRlW_o56Pg", "ZOA8veXLsrs", "08Cyv8EukEU", "CDwpTKZN6qc"],
    images: [DialUrbanoImg1, DialUrbanoImg2, DialUrbanoImg3, DialUrbanoImg4, DialUrbanoImg5, DialUrbanoImg6],
    layout: "portrait"
  },
  {
    id: 4,
    brand: "Khaiba Junction",
    description: "Redefining the digital food destination. Through consistent storytelling and relatable content, we moved beyond one-time cravings to build lasting customer loyalty and a thriving online food community.",
    videos: ["NbXZmP_vE80", "60BbAagWF5o", "6Pgjjunvqfg", "Gwo7O5PFZwQ"],
    images: [KhaibaImg1, KhaibaImg2],
    layout: "portrait"
  }
];

// Unified Gallery Component showing both images and videos
const BrandGallery = ({ videoIds, images, brand, layout }) => {
  const [playingIndex, setPlayingIndex] = React.useState(0);
  const isPortrait = layout === "portrait";

  // Use the YouTube IFrame API to detect when a video ends
  React.useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const onPlayerStateChange = (event) => {
      if (event.data === 0) { // ENDED
        setPlayingIndex((prev) => (prev + 1) % videoIds.length);
      }
    };

    const initPlayers = () => {
      videoIds.forEach((id, index) => {
        const el = document.getElementById(`player-${brand}-${index}`);
        if (el) {
          new window.YT.Player(`player-${brand}-${index}`, {
            events: {
              onStateChange: onPlayerStateChange,
              onReady: (event) => {
                if (index === playingIndex) {
                  event.target.mute();
                  event.target.playVideo();
                }
              }
            }
          });
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
    }
  }, [brand, videoIds]);

  React.useEffect(() => {
    const playNext = () => {
      const iframe = document.getElementById(`player-${brand}-${playingIndex}`);
      if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
    };
    const timer = setTimeout(playNext, 500);
    return () => clearTimeout(timer);
  }, [playingIndex, brand]);

  return (
    <div className="flex flex-col gap-12">
      {/* IMAGES MASONRY/GRID */}
      <div className={`grid gap-6 ${isPortrait ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3"}`}>
        {images.map((img, idx) => (
          <motion.div
            key={`img-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl shadow-lg bg-gray-100 ${isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}
          >
            <img src={img} alt={`${brand} study ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>

      {/* VIDEOS GRID */}
      <div className={`grid gap-6 ${isPortrait ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
        {videoIds.map((vid, idx) => (
          <motion.div 
            key={`${vid}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl shadow-xl bg-black group border-2 ${
              playingIndex === idx ? "border-yellow-500" : "border-transparent"
            } ${isPortrait ? "aspect-[9/16]" : "aspect-video"}`}
          >
            <iframe
              id={`player-${brand}-${idx}`}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${vid}?enablejsapi=1&autoplay=${idx === 0 ? 1 : 0}&mute=1&controls=1&modestbranding=1&rel=0`}
              title={`${brand} video ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            {playingIndex === idx && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse z-10">
                Live
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 🔥 parent container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// 🔥 item animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CaseStudies = () => {
  const location = useLocation();
  const caseStudy = location.state?.caseStudy?.description;
  const id = location.state?.id;
  const text = "Studies";

  // Filter videos for the current client
  const currentBrandVideos = VIDEO_CASE_STUDIES.filter(v => v.id === id);

  const renderCard = (id) => {
    switch (id) {
      case 1:
        return (
          <motion.div
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
        );

      case 2:
        return (
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative w-full max-w-[488px] mx-auto"
          >
            <div className="h-[300px] lg:h-[412px] w-full bg-[#EBEBEB] rounded-3xl flex flex-col items-center pt-6 relative z-10">
              <img
                src={Crad2Logo}
                className="h-32 lg:h-44 object-contain"
                alt="img"
              />
            </div>

            {/* 🌿 flower animation */}
            <motion.img
              src={Card2top}
              alt="flower"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-0 w-full bottom-[150px] lg:bottom-[260px] z-30 object-contain pointer-events-none"
            />

            <div className="w-[280px] h-[280px] lg:w-[470px] lg:h-[470px] bg-[#472E00] rounded-full mx-auto -mt-[80px] lg:-mt-[110px] relative z-20 flex items-end justify-center">
              <img
                src={Card2}
                className="w-[180px] lg:w-[307px] object-contain"
                alt="img"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
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
        );

      case 4:
        return (
          <motion.div
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
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full px-6 lg:px-20 lg:py-20 py-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div variants={item}>
            <h2 className="text-7xl lg:text-[128px] font-bold leading-tight">
              Case{" "}
              <span className="font-script text-yellow-500 text-7xl lg:text-[128px] font-normal inline-block">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-justify font-body text-base max-w-xl">
              {caseStudy || "Explore our detailed impact and strategic transformation across various industries."}
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <div className="flex justify-center">
            {renderCard(id)}
          </div>
        </div>
      </motion.div>

      {/* VIDEO AND IMAGE CASE STUDIES SECTION */}
      {currentBrandVideos.length > 0 && (
        <div className="w-full bg-[#f8f8f8] py-24 lg:py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="text-5xl lg:text-7xl font-bold mb-6">Our Impact in Motion</h3>
              <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
              <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
                Visual journeys of how we bring brands to life through strategic content, creative imagery, and performance storytelling.
              </p>
            </motion.div>

            <div className="space-y-32">
              {currentBrandVideos.map((category) => (
                <div 
                  key={category.brand}
                  className="flex flex-col gap-12"
                >
                  <BrandGallery 
                    videoIds={category.videos} 
                    images={category.images}
                    brand={category.brand} 
                    layout={category.layout}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
