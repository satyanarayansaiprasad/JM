import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import DiscussSection from "../components/DiscussSection";
import ClientsMarquee from "../components/ClientLogo";
import Testimonials from "../components/ChatBubble";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <DiscussSection />
      <ClientsMarquee />
      <Testimonials />
    </div>
  );
};

export default Home;
