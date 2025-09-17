import React from "react";

const FeatureCards = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center">
      <div className="flex-1 bg-[#F5F4F6] h-full rounded-4xl">
        <div className="m-5 h-full ">
          <div className="w-full lg:w-[310px] h-[241px] bg-white rounded-lg"></div>
          <div className="flex-1  pt-10">
            <h2 className="font-semibold  text-xl lg:text-[30px]">
              MindSense: AI Copilot & Proactive Care System
            </h2>
            <p className=" text-sm lg:text-[18px] pt-6">
              A proactive AI that learns from a user&apos;s data to offer
              personalized insights and detect early signs of distress, acting
              as a personal safety net. Operates as both a distinct dashboard
              for holistic insights and safety net management, and as an
              integrated AI assistant within features like Journaling
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-red-500 h-full">second</div>
      <div className="flex-1 bg-green-500 h-full">third</div>
    </div>
  );
};

export default FeatureCards;
