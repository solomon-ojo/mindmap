import React from "react";
import Container from "./Container";
import Image from "next/image";
import {
  firstCol,
  navLinks,
  policy,
  secondCol,
  socialLinks,
} from "@/utils/navlinks";
import Link from "next/link";
const styles = "text-[18px] text-primary-100 py-2";

const Footer = () => {
  return (
    <footer className="py-10 mb-10 w-full bg-gray-100">
      <Container>
        {/* desktop */}
        <div className=" hidden w-full h-full lg:h-[460px] lg:flex flex-col lg:flex-row gap-5 lg:gap-16 ">
          {/* left */}
          <div className="bg-white flex-1 rounded-4xl p-14">
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  src="/icons/footer_icon.png"
                  width={30}
                  height={30}
                  alt="footer_icon"
                />
              </div>
              <div className="">
                <Image
                  src="/images/logo.png"
                  width={118}
                  height={27}
                  alt="footer_icon"
                />
              </div>
            </div>
            <div className="w-full flex  mt-13">
              <div className=" flex-1 ">
                <ul className="">
                  {navLinks.map((link) => (
                    <li key={link.name} className={styles}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-1 flex justify-center">
                <ul className="">
                  {socialLinks.map((link) => (
                    <li key={link.name} className={styles}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-1 flex justify-end">
                <ul className="">
                  {policy.map((link) => (
                    <li key={link.name} className={styles}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-lg text-black/50">
                &copy; [{new Date().getFullYear()}] MindMap. All Rights
                Reserved.{" "}
              </p>
            </div>
          </div>
          <div className="bg-primary-100 flex-1 rounded-4xl p-10 relative">
            <div className="w-[55%] mt-24">
              <h1 className="text-[44px] font-bold text-white leading-tight">
                Reach out to Us and let us talk!
              </h1>
            </div>
            <div className="absolute top-[-110px] right-[-70px] w-[300px] h-[499px]">
              <div className="w-full h-full relative">
                <Image
                  src={"/images/footer_image.png"}
                  fill
                  alt="brain_image"
                />
              </div>{" "}
            </div>
            <div className="h-[54px] w-[480px] mt-16">
              <button className="capitalize bg-white text-[20px]  font-semibold text-primary-100 rounded-4xl h-full w-full ">
                reach out to us
              </button>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden w-full h-[750px] flex flex-col gap-5 mb-10">
          <div className="bg-white flex-1 p-8 rounded-4xl relative">
            <div className="mt-10 w-full text-primary-100">
              <h1 className="font-bold text-[32px] leading-tight ">
                Reach out
              </h1>
              <h1 className="font-bold text-[32px] leading-tight ">to Us</h1>
              <h1 className="font-bold text-[32px] leading-tight ">and</h1>
              <h1 className="font-bold text-[32px] leading-tight ">
                let us talk!
              </h1>
            </div>
            <div className="h-[40px] w-full mt-10">
              <button className="capitalize bg-primary-100 text-[14px]  font-semibold text-white rounded-4xl h-full w-full ">
                reach out to us
              </button>
            </div>
            <div className="absolute top-[-50px] right-[-10px] w-[100px] h-[259px]">
              <div className="w-full h-full relative">
                <Image
                  src={"/images/footer_image.png"}
                  fill
                  alt="brain_image"
                />
              </div>{" "}
            </div>
          </div>
          <div className="bg-primary-100 flex-1 p-8 rounded-4xl">
            {/* upper */}

            <div className="flex items-center  gap-4">
              <div className="w-[30px] h-[30px]">
                <Image
                  src="/icons/logo2.png"
                  width={30}
                  height={30}
                  alt="footer_icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-[81px] h-[18px]">
                <Image
                  src="/icons/footer_icon2.png"
                  width={30}
                  height={30}
                  alt="footer_icon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* lower */}
            <div className="flex justify-between mt-15 text-white text-[12px]">
              <div className="">
                <ul className="flex flex-col">
                  {firstCol.map((link) => (
                    <li key={link.name} className="py-3 ">
                      <Link
                        className="text-[12px] text-white underline  underline-offset-4"
                        href={link.path}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col">
                  {secondCol.slice(0, secondCol.length - 1).map((link) => (
                    <li key={link.name} className="py-3">
                      <a
                        className="text-[12px] text-white  underline  underline-offset-4"
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="">
                  {secondCol.slice(-1).map((link) => (
                    <li key={link.name} className="py-3">
                      <Link className="text-[12px] text-white underline  underline-offset-4" href={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 w-full flex justify-center">
              <p className="text-[15px] text-white/50 pt-10">
                &copy; [{new Date().getFullYear()}] MindMap. All Rights
                Reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
