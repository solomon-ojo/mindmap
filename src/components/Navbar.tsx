"use client";
import React, { useState } from "react";
import Container from "./Container";
import { desktopNavLinks, mobileNavLinks } from "@/utils/navlinks";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIcon = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className=" fixed lg:relative w-full h-full bg-gray-100 pt-8 xl:pt-14 py-[30px] px-5 xl:px-10">
      <Container>
        {/* desktop */}
        <div className="w-full h-[106px]  bg-white hidden lg:flex items-center justify-between px-10 rounded-full">
          <div className="w-[35%] ">
            <span className="w-[122px] h-[27px]  text-3xl text-primary-100 font-extrabold">
              mindmap
            </span>
          </div>
          <div className="flex-1 flex  justify-between ">
            <div className="flex flex-[2] items-center">
              <ul className="flex items-center justify-between gap-5">
                {desktopNavLinks.map((link) => (
                  <li key={link.path} className="px-4 text-black text-xl cursor-pointer">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            <nav className="flex-1 flex justify-between ">
              <Link href={"#"}>
                <Image
                  src={"/icons/linkedin.png"}
                  alt="linkedin_icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/icons/facebook.png"}
                  alt="facebook_icon"
                  width={24}
                  height={24}
                />
              </Link>{" "}
              <Link href={"#"}>
                <Image
                  src={"/icons/instagram.png"}
                  alt="instagram_icon"
                  width={24}
                  height={24}
                />
              </Link>
            </nav>
          </div>
        </div>
        {/* mobile */}
        <div className="w-full flex lg:hidden ">
          <div className="w-full flex justify-between items-center h-[56px] rounded-full bg-white px-5 py-3 ">
            <div className="flex-1 text-2xl font-extrabold text-primary-100">
              mindmap
            </div>
            <div
              onClick={handleToggleIcon}
              className="flex-1 flex justify-end cursor-pointer "
            >
              {isOpen ? (
                <Image
                  src={"/icons/open.png"}
                  width={32}
                  height={32}
                  alt="open_icon"
                />
              ) : (
                <Image
                  src={"/icons/close.png"}
                  width={20}
                  height={20}
                  alt="close_icon"
                />
              )}
            </div>
          </div>
          <nav
            className={` ${
              isOpen ? "hidden" : "block"
            } absolute left-0 top-[82px] right-0 h-screen flex flex-col space-y-10  px-8`}
          >
            <ul className="flex  flex-col space-y-8 mt-10 py-4">
              {mobileNavLinks.map((link) => (
                <li
                  key={link.path}
                  className="text-2xl text-primary-100 font-bold cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
            {/* mobile socials */}
            <div className="flex items-center gap-5">
              <Image
                src={"/icons/linkedin2.png"}
                width={24}
                height={24}
                alt="linkedin_icon"
              />
              <Image
                src={"/icons/facebook2.png"}
                width={24}
                height={24}
                alt="facebook_icon"
              />
              <Image
                src={"/icons/instagram2.png"}
                width={24}
                height={24}
                alt="instagram_icon"
              />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
