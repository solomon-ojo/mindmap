import React from "react";
import Container from "./Container";

const AboutStory = () => {
  return (
    <section className="mt-16">
      <Container>
        <div className="w-full h-full lg:h-[454px] flex flex-col">
          <div className="lg:flex-1 mb-8 lg:mb-0">
            <h1 className="text-center text-[24px] lg:text-[52px] text-primary-100 font-bold">
              Our Story so far
            </h1>
            <h2 className=" text-[12px] lg:text-[22px] text-primary-100 text-center">
              What and Who we are!
            </h2>
          </div>
          <div className=" w-full lg:flex-1 lg:h-[268px] text-primary-100 bg-white rounded-[50px] p-4 lg:p-10">
            <p className="text-[12px] lg:text-[20px] py-3">
              Our Founder David has had a vision for the last 5 years to change
              the landscape of the mental health industry across the world. At
              Mindmap we believe that support for a person’s mental health is
              more than a single instance of mindfulness but rather a continuous
              journey that encapsulates community, access and information
            </p>
            <p className="text-[12px] lg:text-[20px] py-3">
              Over the last year, we have been building and creating a solution
              that gives people the opportunity to go on that end of end journey
              and we look forward to releasing it in the future!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
