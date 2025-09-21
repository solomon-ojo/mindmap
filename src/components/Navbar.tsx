"use client";
import React from "react";
import Container from "./Container";
import { desktopNavLinks, mobileNavLinks, navPaths } from "@/utils/navlinks";
import Link from "next/link";
import Image from "next/image";
import { useUiStore } from "@/zustand/uiStore";

const Navbar = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();

  return (
    <header className=" fixed lg:relative  w-full backdrop-blur-md lg:backdrop-blur-none  bg-white/10 lg:bg-gray-100 pt-8 xl:pt-14 py-[30px] z-50 ">
      <Container>
        {/* desktop */}
        <div className="w-full h-[106px]  bg-white hidden lg:flex items-center justify-between px-10 rounded-full">
          <div className="w-[35%] ">
            <Image
              src="/images/logo.png"
              width={122}
              height={27}
              alt="footer_icon"
            />
          </div>
          <div className="flex-1 flex  justify-between ">
            <div className="flex flex-[2] items-center">
              <ul className="flex items-center justify-between gap-5">
                {desktopNavLinks.map((link) => (
                  <li
                    key={link.path}
                    className="px-4 text-black text-xl cursor-pointer"
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <nav className="flex-1 flex justify-between ">
              <a href={navPaths.linkedin}>
                <Image
                  src={"/icons/linkedin.png"}
                  alt="linkedin_icon"
                  width={24}
                  height={24}
                />
              </a>
              <a href={navPaths.facebook}>
                <Image
                  src={"/icons/facebook.png"}
                  alt="facebook_icon"
                  width={24}
                  height={24}
                />
              </a>{" "}
              <a href={navPaths.instagram}>
                <Image
                  src={"/icons/instagram.png"}
                  alt="instagram_icon"
                  width={24}
                  height={24}
                />
              </a>
            </nav>
          </div>
        </div>
        {/* mobile */}
        <div className="w-full flex lg:hidden   ">
          <div className="w-full flex justify-between items-center h-[56px] rounded-full bg-white px-5 py-3 ">
            <div className="flex-1  cursor-pointer">
              <Image
                src="/images/logo.png"
                width={87}
                height={22}
                alt="footer_icon"
              />
            </div>
            <div
              onClick={toggleMobileNav}
              className="flex-1 flex justify-end cursor-pointer "
            >
              {isMobileNavOpen ? (
                <Image
                  src={"/icons/close.png"}
                  width={20}
                  height={20}
                  alt="close_icon"
                />
              ) : (
                <Image
                  src={"/icons/open.png"}
                  width={32}
                  height={32}
                  alt="open_icon"
                />
              )}
            </div>
          </div>
          <nav
            className={` ${
              isMobileNavOpen ? "left-0 right-0" : "left-[-100%]"
            } absolute  top-[90px]  h-screen flex flex-col space-y-10  px-8 bg-gray-100 z-50`}
          >
            <ul className="flex  flex-col space-y-8 mt-10 py-4">
              {mobileNavLinks.map((link) => (
                <li
                  key={link.path}
                  className="text-2xl text-primary-100 font-bold cursor-pointer"
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            {/* mobile socials */}
            <div className="flex items-center gap-5">
              <a href={navPaths.linkedin} className="">
                <Image
                  src={"/icons/linkedin2.png"}
                  width={24}
                  height={24}
                  alt="linkedin_icon"
                />
              </a>
              <a href={navPaths.facebook} className="">
                <Image
                  src={"/icons/facebook2.png"}
                  width={24}
                  height={24}
                  alt="facebook_icon"
                />
              </a>
              <a href={navPaths.instagram} className="">
                <Image
                  src={"/icons/instagram2.png"}
                  width={24}
                  height={24}
                  alt="instagram_icon"
                />
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
