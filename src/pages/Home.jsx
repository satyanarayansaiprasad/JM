import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import DiscussSection from "../components/DiscussSection";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <DiscussSection />
      <div className="h-24 bg-white"></div>
    </div>
  );
};

export default Home;
