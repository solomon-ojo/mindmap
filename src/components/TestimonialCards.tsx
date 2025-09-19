import Image from "next/image";
import React from "react";
interface TestimonialCardProp {
  className: string;
  name: string;
  content: string;
  src: string;
}

const TestimonialCards = ({
  className,
  name,
  content,
  src,
}: TestimonialCardProp) => {
  return (
    <div className={className}>
      <div className="w-full h-full p-2 lg:p-8  rounded-2xl flex flex-col justify-between">
        {/* Upper Section */}
        <div className="flex items-center gap-4  p-4 rounded-xl">
          <div className="relative w-[59px] lg:w-[90px] h-[59px] lg:h-[90px] rounded-full overflow-hidden">
            <Image src={src} alt="Billy" fill className="object-cover" />
          </div>
          <div className=" text-xl font-semibold">
            <div className="">
              <p className=" text-[20px] lg:text-[32px] font-semibold">
                {name}
              </p>
            </div>
            <div className="">
              <p className=" text-[12px] lg:text-xl">MindMapper</p>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="p-2 lg:p-4 rounded-xl mt-2 lg:mt-4  text-[12px] lg:text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
