import React from "react";
import Container from "./Container";

const WhatWeHaveBuilt = () => {
  return (
    <section className="my-2 lg:my-4 py-8 lg:py-16">
      <Container>
        <div className="w-full flex  items-center justify-center ">
          <div className="max-w-[767px] text-primary-100">
            <h1 className="text-2xl lg:text-[52px] text-center font-bold py-3">
              What We Have built
            </h1>
            <p className=" text-xs lg:text-[22px] text-center px-10">
              We make resources available in different forms and aid you connect
              with communities over shared experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeHaveBuilt;
