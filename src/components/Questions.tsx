import Image from "next/image";
import React from "react";
interface QuestionProp {
  text: string;
}

const Questions = ({ text }: QuestionProp) => {
  return (
    <div className="h-[50px] lg:h-[92px] w-full rounded-2xl bg-white">
      <div className="w-full h-full flex justify-between px-5 lg:px-10 items-center">
        <div className="text-[12px] font-medium lg:text-xl text-primary-100">{text}</div>
        <div className="">
          <span className="w-[25px] h-[25px] md:w-[42px] md:h-[42px]">
            <Image
              src="/icons/plus_icon.svg"
              width={42}
              height={42}
              alt="plus_icon"
              className="w-full h-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Questions;
