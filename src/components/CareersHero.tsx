import React from "react";
import Container from "./Container";

const CareersHero = () => {
  return (
    <section className=" w-full pt-[120px] lg:pt-5">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className=" text-[24px] lg:text-[52px] font-bold text-center">
            Careers
          </h1>
          <p className="hidden lg:block text-center text-[22px] px-6">
            We are currently recruiting for open roles in the product, marketing
            and operations team. If you are interested in joining the team
            please submit your details below
          </p>
          <p className="lg:hidden text-[12px] text-center pt-3">
            We are currently recruiting for open roles in the product, marketing
            and operations team. If you are interested in joining the team
            please submit your details below
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CareersHero;
