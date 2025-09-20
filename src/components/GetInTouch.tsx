import React from "react";
import Container from "./Container";

const GetInTouch = () => {
  return (
    <section className="my-5 lg:my-10 py-5">
      <Container>
        <div className="w-full h-full text-primary-100">
          <h3 className=" text-[12px] lg:text-sm font-medium w-full lg:text-center pb-5 uppercase">
            Get in Touch
          </h3>
          <div className="flex lg:justify-center">
            <h1 className=" w-[55%] lg:w-[440px] font-semibold lg:font-bold text-[20px] px-0 lg:px-5 lg:text-[52px] lg:text-center">
              Your Well-Being is Our Priority
            </h1>
          </div>{" "}
          <div className="flex lg:justify-center py-5">
            <p className=" text-[12px] lg:text-[22px] w-[563px] lg:text-center">
              If you have any inquiries, require assistance or wish to explore
              more about our services, feel free to reach out at any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
