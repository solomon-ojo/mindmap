import CommunityBanner from "@/components/CommunityBanner";
import FrequentQuestions from "@/components/FrequentQuestions";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import OurMethodology from "@/components/OurMethodology";
import WhatWeHaveBuilt from "@/components/WhatWeHaveBuilt";
import React from "react";

const Home = () => {
  return (
    <main className="bg-gray-100 w-full min-h-screen pt-[120px] lg:pt-3 overflow-hidden">
      <Hero />
      <WhatWeHaveBuilt />
      <OurFeatures />
      <CommunityBanner />
      <OurMethodology />
      <FrequentQuestions/>
    </main>
  );
};

export default Home;
