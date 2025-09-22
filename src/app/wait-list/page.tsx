import WaitlistForm from "@/components/WaitlistForm";
import WaitlistHero from "@/components/WaitlistHero";
import React from "react";

const Waitlist = () => {
  return (
    <main className="lg:mb-10">
      <WaitlistHero />
      <WaitlistForm />
    </main>
  );
};

export default Waitlist;
