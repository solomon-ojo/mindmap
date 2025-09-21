import React from "react";
import Container from "./Container";
import MethodologyCard from "./MethodologyCard";
import ConnectionCard from "./ConnectionCard";

const OurMethodology = () => {
  return (
    <section className="py-10 my-10">
      <Container>
        <div className="w-full h-full">
          <div className="w-full flex flex-col items-center text-primary-100">
            <h1 className=" text-2xl lg:text-[52px] font-bold">
              How we do what we do
            </h1>
            <h3 className="text-[12px] lg:text-[22px]">
              Information, Access, Connection
            </h3>
          </div>
          {/* cards */}
          <div className="mt-10 pb-5 pt-10 flex flex-col lg:flex-row w-full items-center justify-between gap-5 lg:gap-8 ">
            <MethodologyCard
              heading="Information"
              body="We aim to provide workshops, forums and events where you can connect and interact with individuals who want to share their experiences as a collective."
              text1="MindAi"
              text2="Learn Hub"
              divClass="bg-white text-primary-100  w-full  lg:w-[591px] h-auto lg:h-[340px] flex items-center justify-center rounded-2xl lg:rounded-[50px]"
              spanClass="h-[30px] w-[30px] lg:h-[54px] lg:w-[54px] flex items-center justify-center  gap-1 bg-primary-100  rounded-full"
              spanStyle2="text-[12px] lg:text-xl font-semibold px-4 py-2 lg:px-[39px] lg:py-[15px]   bg-primary-100 text-white rounded-4xl"
            />
            <MethodologyCard
              heading="Access"
              body="We aim to provide workshops, forums and events where you can connect and interact with individuals who want to share their experiences as a collective."
              text1="Learn"
              text2="Book a Therapist"
              divClass="bg-white text-tertiary-100  w-full  lg:w-[591px] h-auto lg:h-[340px] flex items-center justify-center rounded-2xl lg:rounded-[50px]"
              spanClass="h-[30px] lg:h-[54px] w-[30px]  lg:w-[54px] flex items-center justify-center bg-tertiary-100  gap-1 bg-primary-100  rounded-full"
              spanStyle2="text-[12px] lg:text-xl font-semibold px-4 py-2 lg:px-[39px] lg:py-[15px]   bg-tertiary-100 text-white rounded-4xl"
            />
          </div>
          <div className="w-full lg:mt-5">
            <ConnectionCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMethodology;
