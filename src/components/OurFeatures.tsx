import React from "react";
import Container from "./Container";
import Button from "./Button";
import FeatureCards from "./FeatureCards";

const OurFeatures = () => {
  return (
    <section className="w-full h-full">
      <Container>
        <div className="w-full h-full lg:h-[995px] flex items-center justify-center rounded-4xl lg:rounded-[50px] bg-white">
          <div className="w-[90%] h-full lg:h-[90%] flex flex-col  ">
            <div className="">
              <div className="mt-5 lg:mt-4">
                <Button
                  title="Our Features"
                  className=" border border-primary-100 rounded-4xl font-medium  text-[10px] lg:text-base px-4 lg:px-6 py-2 text-primary-100"
                />
              </div>
              <div className="py-5">
                <h1 className="font-semibold text-xl lg:text-4xl text-black ">
                  Features that help Us achieve the Big &quot;3&quot;
                </h1>
                <h2 className="text-sm lg:text-xl mt-4">
                  Discover expert guidance for a healthier mind and balanced
                  life.
                </h2>
              </div>
            </div>
            {/* cards */}
            <div className=" w-full flex-1 flex  items-center justify-center">
              <FeatureCards />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurFeatures;
