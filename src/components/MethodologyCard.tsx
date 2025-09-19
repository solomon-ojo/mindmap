import React from "react";
interface MethodologyButtonProp {
  heading: string;
  body: string;
  text1: string;
  text2: string;
  divClass: string;
  spanClass: string;
  spanStyle2:string
}

const spanStyle = " w-[2px] lg:w-1 h-[2px] lg:h-1 bg-white ";

const MethodologyCard = ({
  heading,
  body,
  text1,
  text2,
  divClass,
  spanClass,
  spanStyle2
}: MethodologyButtonProp) => {
  return (
    <div className={divClass}>
      <div className="px-3 lg:px-10 ">
        <div className="">
          <h1 className="text-xl font-bold lg:text-[40px] lg:font-semibold py-2">
            {heading}
          </h1>
          <p className="text-[12px] lg:text-xl py-3">{body}</p>
        </div>
        <div className="w-full flex items-center gap-2 lg:gap-5  py-2 ">
          <span className={spanStyle2}>{text1}</span>
          <span className={spanStyle2}>{text2}</span>
          <span className={spanClass}>
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
            <span className={spanStyle}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MethodologyCard;
