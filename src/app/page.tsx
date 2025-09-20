import CommunityBanner from "@/components/CommunityBanner";
import ContactForm from "@/components/ContactForm";
import FrequentQuestions from "@/components/FrequentQuestions";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import OurMethodology from "@/components/OurMethodology";
import Testimonials from "@/components/Testimonials";
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
      <FrequentQuestions />
      <Testimonials />
      <GetInTouch />
      <ContactForm />
    </main>
  );
};

export default Home;
