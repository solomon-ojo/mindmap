import React from "react";
import Container from "./Container";
import TestimonialCards from "./TestimonialCards";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className=" my-2 lg:my-10 pt-5">
      <Container>
        <div className="w-full h-full">
          <div className="w-full h-full text-primary-100 pb-8">
            <h3 className="text-[12px] text-sm font-medium  text-start lg:text-center py-4 my-5">
              TESTIMONIALS
            </h3>
            <h1 className=" font-semibold lg:font-bold text-[20px] lg:text-[40px] w-[60%] lg:w-full text-start lg:text-center pb-5">
              What our community members are saying
            </h1>
            <p className=" text-[12px] lg:text-[22px] lg:text-center">
              Explore inspiring feedback from individuals who transformed their
              lives through therapy and holistic wellness.
            </p>
          </div>
        </div>
        <TestimonialSlider />
      </Container>
    </section>
  );
};

export default Testimonials;
