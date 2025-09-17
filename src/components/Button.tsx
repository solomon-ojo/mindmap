import React from "react";
interface ButtonProp {
  title: string;
  className: string;
}

const Button = ({ title, className }: ButtonProp) => {
  return <button className={className}>{title}</button>;
};

export default Button;
