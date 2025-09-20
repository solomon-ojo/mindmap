import Image from "next/image";
import React from "react";

const FeatureCards = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-6">
      {/* first card */}
      <div className="flex-1 bg-gray-100 h-full rounded-4xl">
        <div className="m-5 h-full ">
          <div className="w-full lg:w-[310px] h-[241px] bg-white rounded-lg"></div>
          <div className="flex-1  pt-10">
            <h2 className="font-semibold  text-xl lg:text-[30px] leading-tight">
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
      {/* second card */}
      <div className="flex-1 flex flex-col gap-6  h-full   ">
        <div className="bg-[#E6DEF6] flex-1 rounded-2xl p-3 relative">
          <h1 className="font-semibold text-[30px] mt-10 pt-3 leading-tight">
            Information Hub (Learn)
          </h1>
          <p className=" text-sm lg:text-[18px] mt-8">
            User&apos;s go-to place for easy-to-understand, reliable mental
            health information, serving as a foundational resource within the
            MindMap ecosystem
          </p>
          <div className="absolute bottom-0 right-0 w-[46px] h-[46px] lg:w-[82px] lg:h-[82px]">
            <div className="w-full h-full relative">
              <Image fill src="/icons/info_icon.png" alt="info_icon" />
            </div>{" "}
          </div>
        </div>

        <div className="bg-[#FFDBDB] text-[#FF0000] flex-1 rounded-2xl p-3 relative">
          {/* center image on desktop */}
          <div className="absolute top-[-70px]  right-10 w-[137px] h-[134px] hidden lg:block">
            <div className="w-full h-full relative">
              <Image fill src="/icons/spiral_icon.png" alt="spiral_icon" />
            </div>
          </div>
          <h1 className="font-semibold text-[30px] mt-6 pt-3 leading-tight">
            MindAi: Universal Chat Assistant
          </h1>
          <p className=" text-sm lg:text-[18px] mt-5">
            Enhance user navigation, provide immediate answers, and offer
            personalized conversational support throughout their MindMap journey
          </p>
          <div className="absolute bottom-0 right-0 w-[46px] h-[46px] lg:w-[82px] lg:h-[82px]">
            <div className="w-full h-full relative">
              <Image fill src="/icons/ai_icon.png" alt="ai_icon" />
            </div>{" "}
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="flex-1 flex flex-col gap-6  h-full relative  ">
        <div className="bg-[#FBF7D4] h-[310px] lg:h-[414px] rounded-2xl p-3">
          <h1 className="font-semibold text-[30px] text-[#726915] mt-10 pt-3 leading-tight">
            Community and Events
          </h1>
          <p className=" text-sm lg:text-[18px] mt-8 ">
            User&apos;s go-to place for easy-to-understand, reliable mental
            health information, serving as a foundational resource within the
            MindMap ecosystem
          </p>
        </div>

        {/* center image on mobile */}
        <div className="absolute bottom-52 right-0 w-[137px] h-[134px] block lg:hidden z-20">
          <div className="w-full h-full relative">
            <Image fill src="/icons/spiral_icon.png" alt="spiral_icon" />
          </div>
        </div>
        <div className=" flex-1 pb-8 lg:pb-0">
          <div className="bg-gray-100 text-[#53A06E]  h-full relative rounded-2xl p-3">
            <h1 className="font-semibold text-[30px]  mt-10 pt-3 leading-tight">
              Book a Therapist
            </h1>
            <p className=" text-sm lg:text-[18px] mt-5 ">
              Book sessions with vetted professionals, work at your own pace
            </p>
            <div className="absolute bottom-0 right-0 w-[46px] h-[46px] lg:w-[82px] lg:h-[82px]">
              <div className="w-full h-full relative">
                <Image fill src="/icons/therapist.png" alt="therapist_icon" />
              </div>{" "}
            </div>
            <div className="w-[128px] h-[32px] mt-5 lg:w-[128px] lg:h-[32px]">
              <div className="w-full h-full relative">
                <Image fill src="/icons/group.png" alt="group_icon" />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
