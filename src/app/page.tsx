import CommunityBanner from "@/components/CommunityBanner";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import OurMethodology from "@/components/OurMethodology";
import WhatWeHaveBuilt from "@/components/WhatWeHaveBuilt";
import React from "react";

const Home = () => {
  return (
    <main className="bg-gray-100 w-full min-h-screen pt-[120px] lg:pt-3">
      <Hero />
      <WhatWeHaveBuilt />
      <OurFeatures />
      <CommunityBanner />
      <OurMethodology />
    </main>
  );
};

export default Home;
