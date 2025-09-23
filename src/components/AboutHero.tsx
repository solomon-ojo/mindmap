import React from "react";
import Container from "./Container";

const AboutHero = () => {
  return (
    <section className="mb-10">
      <Container>
        <div className="w-full text-primary-100 ">
          <h1 className="hidden lg:block text-[52px] font-bold text-center ">
            About
          </h1>
          <h1 className=" text-[24px] lg:hidden font-bold text-center leading-tight">
            About Us
          </h1>
          <p className="hidden lg:block text-center text-[22px] px-6 leading-tight">
            What and Who we are!
          </p>
          <p className="lg:hidden text-[12px] text-center pt-3">
            What and Who we are!
          </p>
        </div>
      </Container>
      <div className="w-full bg-primary-200">
        <Container>
          <div className="text-white mt-12">
            <h1 className="text-[20px] lg:text-[40px] font-semibold py-3 ">
              MindMap
            </h1>
            <p className="text-[16px] lg:text-[24px] py-3 ">
              Mindmap is 3-fold mental health and wellness platform designed to
              provide the 3 necessities needed for positive mental change.
            </p>
            <p className="text-[16px] lg:text-[24px]  py-3">
              Our aim is to provide a digital platform where individuals can
              connect and interact with individuals who want to share their
              experiences as a collective and be a bridge to connect people to
              solutions, services and resources that are right for them in a
              timely manner.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutHero;
