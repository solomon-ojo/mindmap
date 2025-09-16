import React from "react";
interface ContainerProp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProp) => {
  return <div className="max-w-[1232px] px-5 xl:px-10 mx-auto">{children}</div>;
};

export default Container;
