import Image from "next/image";
import React from "react";

const spanStyle = " w-[2px] lg:w-1 h-[2px] lg:h-1 bg-white ";

const ConnectionCard = () => {
  return (
    <div className="bg-white text-[#53A06E]  w-full  h-auto lg:h-[340px] flex items-center justify-center rounded-2xl lg:rounded-[50px] relative">
      <div className=" px-3 lg:px-10 w-full ">
        <div className="w-full">
          <h1 className="text-xl font-bold lg:text-[40px] lg:font-semibold py-2">
            Connection
          </h1>
          <p className="text-[12px] lg:text-xl py-3 max-w-[90%] md:max-w-[80%] lg:max-w-[718px]">
            We foster a vibrant community through engaging events, collaborative
            journaling, and shared experiences. Our aim is to create meaningful
            connections that empower individuals to express themselves and learn
            from one another.
          </p>
        </div>
        <div className="w-full flex items-center gap-2 lg:gap-5  py-2 ">
          <span className="text-[12px] lg:text-xl font-semibold px-4 py-2 lg:px-[39px] lg:py-[15px]   bg-[#53A06E] text-white rounded-4xl">
            Community
          </span>
          <span className="text-[12px] lg:text-xl font-semibold px-4 py-2 lg:px-[39px] lg:py-[15px]   bg-[#53A06E] text-white rounded-4xl">
            Events
          </span>
          <span className="h-[30px] w-[30px] lg:h-[54px] lg:w-[54px] flex items-center justify-center  gap-1 bg-[#53A06E]  rounded-full">
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
          </span>
        </div>
      </div>
      <div className="absolute right-[-9%] bottom-[-57%] lg:top-[-37%]">
        <div className="relative w-[200px] h-[250px] sm:w-[300px]  md:w-[400px]  lg:w-[564px] lg:h-[650px]">
          <Image
            src="/icons/connection_icon.svg"
            fill
            alt="connection_icon"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
