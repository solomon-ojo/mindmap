import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";

const CommunityBanner = () => {
  return (
    <section className="w-full h-full mt-30">
      <Container>
        <div className="w-full h-[604px] lg:h-[587px] bg-primary-100 rounded-4xl flex items-center justify-center">
          <div className="w-[90%] h-[85%] flex items-center ">
            {/* left */}
            <div className="flex-1 h-full lg:mt-10  ">
              <div className="flex-1 h-[256px] w-full relative  block lg:hidden">
                <Image
                  src={"/icons/community_banner.svg"}
                  fill
                  alt="community_banner"
                  className="bg-inherit"
                />
              </div>
              <div className="mt-0 lg:mt-4">
                <h2 className="text-white font-medium text-[12px] lg:text-sm uppercase">
                  Community
                </h2>
                <div className="pt-2 lg:pt-5 mt-3 lg:mt-8">
                  <p className=" w-full lg:w-[431px] h-[20px] lg:h-[124px] text-[20px] lg:text-5xl font-bold flex flex-col text-white">
                    <span className="lg:pb-1">You’re Not Alone</span>{" "}
                    <span className="lg:pt-1">on This Journey</span>
                  </p>
                </div>
                <div className="mt-6 pt-5">
                  <p className="text-[12px] lg:text-[22px] text-white">
                    Connect with others, share experiences, and find
                    encouragement in a safe, supportive space.
                  </p>
                </div>
                <div className="w-full lg:w-auto">
                  <Button
                    title="Get The App"
                    className="bg-white w-full lg:w-auto text-primary-100 text-xl font-semibold rounded-full px-[39px] py-[15px] mt-10"
                  />
                </div>
              </div>
            </div>
            {/* right for desktop */}
            <div className="flex-1 h-full  relative hidden lg:block">
              <Image
                src={"/icons/community_banner.svg"}
                fill
                alt="community_banner"
                className="bg-inherit"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityBanner;
