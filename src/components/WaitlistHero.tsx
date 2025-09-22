import React from "react";
import Container from "./Container";

const WaitlistHero = () => {
  return (
    <section className="pt-[120px] lg:pt-0">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className="hidden lg:block text-[52px] font-bold text-center">
            Waitlist
          </h1>
          <h1 className="text-[24px] lg:hidden  font-bold text-center">
            Join the Waitlist
          </h1>
          <p className="hidden lg:block text-center text-[22px] px-6">
            Sign up to stay up to date with all things Mindmap
          </p>
          <p className="lg:hidden text-[12px] text-center pt-3">
            Sign up to stay up to date with all things Mindmap
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WaitlistHero;
