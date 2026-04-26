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

// Video Data for Case Studies (Ordered to match Works.jsx IDs)
const VIDEO_CASE_STUDIES = [
  {
    id: 1,
    brand: "Odisha KhoKho HPC",
    description: "Empowering traditional sports through high-performance training and dynamic digital storytelling. This initiative brings Kho Kho into the modern era with professional-grade content and strategic brand building.",
    videos: ["UOv5nNK90iE", "bozlYxuQzNo", "BYkuZ-7k0J4"],
    layout: "landscape"
  },
  {
    id: 2,
    brand: "Deomali Coffee",
    description: "Crafting a premium lifestyle experience around Odisha's finest coffee. By optimizing digital touchpoints and running targeted performance campaigns, we turned a product into a community favorite.",
    videos: ["xwsgTErfZiA", "YTJyCZoaKk4", "8Zs-DGjyB98", "jSQHO7eFYhU"],
    layout: "portrait"
  },
  {
    id: 3,
    brand: "DialUrbano",
    description: "Revolutionizing urban mobility and real estate marketing. We transformed scattered campaigns into a cohesive performance ecosystem that drives high-quality leads and brand trust through interactive content.",
    videos: ["d5JfT4XdsMw", "qubHwBb3mXg", "ncRlW_o56Pg", "ZOA8veXLsrs", "08Cyv8EukEU", "CDwpTKZN6qc"],
    layout: "portrait"
  },
  {
    id: 4,
    brand: "Khaiba Junction",
    description: "Redefining the digital food destination. Through consistent storytelling and relatable content, we moved beyond one-time cravings to build lasting customer loyalty and a thriving online food community.",
    videos: ["NbXZmP_vE80", "60BbAagWF5o", "6Pgjjunvqfg", "Gwo7O5PFZwQ"],
    layout: "portrait"
  }
];

// Video Gallery Component showing all videos for a brand
const VideoGallery = ({ videoIds, brand, layout }) => {
  const [playingIndex, setPlayingIndex] = React.useState(0);
  const isPortrait = layout === "portrait";

  // Use the YouTube IFrame API to detect when a video ends
  React.useEffect(() => {
    // Load YouTube IFrame API script if not already present
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Function to handle player state changes
    const onPlayerStateChange = (event) => {
      if (event.data === 0) { // 0 is the code for ENDED
        setPlayingIndex((prev) => (prev + 1) % videoIds.length);
      }
    };

    // Initialize players when the API is ready or if it's already loaded
    let players = [];
    const initPlayers = () => {
      videoIds.forEach((id, index) => {
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
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
    }
  }, [brand, videoIds.length]); // Re-init if brand or count changes

  // Trigger play on the next video when playingIndex changes
  React.useEffect(() => {
    const playNext = () => {
      const iframe = document.getElementById(`player-${brand}-${playingIndex}`);
      if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
    };
    
    // Small delay to ensure player is ready
    const timer = setTimeout(playNext, 500);
    return () => clearTimeout(timer);
  }, [playingIndex, brand]);

  return (
    <div className={`grid gap-6 ${
      isPortrait 
        ? "grid-cols-2 md:grid-cols-3" 
        : "grid-cols-1 md:grid-cols-2"
    }`}>
      {videoIds.map((vid, idx) => (
        <motion.div 
          key={`${vid}-${idx}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden rounded-2xl shadow-lg bg-black group border-2 ${
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
            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider animate-pulse z-10">
              Playing Now
            </div>
          )}
        </motion.div>
      ))}
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

      {/* VIDEO CASE STUDIES SECTION */}
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
                Visual journeys of how we bring brands to life through strategic content and creative performance.
              </p>
            </motion.div>

            <div className="space-y-32">
              {currentBrandVideos.map((category) => (
                <div 
                  key={category.brand}
                  className="flex flex-col gap-12"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                  >
                    <h4 className="text-4xl font-bold mb-6 text-black flex items-center gap-4">
                      <span className="text-yellow-500 text-5xl">01</span>
                      {category.brand}
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {category.description}
                    </p>
                  </motion.div>

                  <VideoGallery 
                    videoIds={category.videos} 
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
