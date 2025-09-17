"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import ContactButton from "./ContactButton";
import WaitlistButton from "./WaitlistButton";
import { useUiStore } from "@/zustand/uiStore";

const Hero = () => {
  const { isMobileNavOpen } = useUiStore();

  return (
    <section className="w-full h-full mt-4 lg:mt-[250px]">
      <Container>
        {/* desktop */}
        <div className="w-full h-full hidden lg:block">
          <div className=" w-full h-[668px]  bg-primary-200 rounded-4xl flex flex-col items-center justify-center overflow-hidden relative">
            <div className=" w-[731px] h-[266px]   ">
              <h1 className="text-5xl font-bold text-white flex flex-col items-center">
                <span className=" ">Information, Access, Connection</span>
                <span className=""> - the three necessities for</span>
                <span className="">positive mental change.</span>
              </h1>
              <p className="text-white text-2xl flex flex-col items-center mt-8 ">
                <span className="">
                  Connect with licensed therapists, counselors, and
                </span>{" "}
                <span className="">
                  wellness coaches to support your journey.
                </span>{" "}
              </p>
            </div>
            <div className="w-full flex justify-center pt-5 ">
              <div className="w-[506px] h-[54px] flex items-center gap-6">
                <ContactButton />
                <WaitlistButton />
              </div>
            </div>
            <div className="w-[349px] h-[349px] absolute  left-0 bottom-44">
              <Image
                src={"/icons/hero_img1.png"}
                width={349}
                height={349}
                alt="hero_image"
              />
            </div>
            <div className="w-[349px] h-[349px] absolute  right-0 bottom-[-43px]">
              <Image
                src={"/icons/hero_img2.png"}
                width={349}
                height={349}
                alt="hero_image"
              />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div
          className={` ${
            isMobileNavOpen ? "hidden" : "block"
          } lg:hidden w-full h-[402px] bg-primary-200/100 p-5 text-white rounded-4xl z-0   relative `}
        >
          <div className="w-[122px] h-[122px] absolute right-0 top-[-30px]">
            <Image
              src={"/icons/hero_img4.png"}
              width={122}
              height={122}
              alt="hero_image"
            />
          </div>
          <div className="w-[140px] h-[240px] absolute overflow-hidden right-0 bottom-0 rounded-4xl ">
            <Image
              src={"/icons/hero_img3.png"}
              width={140}
              height={220}
              alt="hero_image"
            />
          </div>
          <div className=" h-full mt-6 ">
            <div className="">
              <h2 className="text-2xl font-bold  pr-16">
                Information, Access, Connection - the three necessities for
                positive mental change.
              </h2>
            </div>
            <p className="pr-16 text-[14px] mt-4">
              Connect with licensed therapists, counselors, and wellness coaches
              to support your journey.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <ContactButton />
              <WaitlistButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
