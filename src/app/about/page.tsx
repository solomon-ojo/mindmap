import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTeam from "@/components/AboutTeam";
import React from "react";

const About = () => {
  return (
    <main className=" min-h-screen pt-[120px] lg:pt-0">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
    </main>
  );
};

export default About;
