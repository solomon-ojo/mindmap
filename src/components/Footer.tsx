import React from "react";
import Container from "./Container";
import Image from "next/image";
import { navLinks, policy, socialLinks } from "@/utils/navlinks";
const styles = "text-[18px] text-primary-100 py-2";

const Footer = () => {
  return (
    <footer className="py-10 mb-10 w-full bg-gray-100">
      <Container>
        <div className="w-full h-full lg:h-[460px] flex flex-col lg:flex-row gap-5 lg:gap-16 ">
          {/* left */}
          <div className="bg-white flex-1 rounded-4xl p-10">
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
              <div className=" flex-1">
                <ul className="">
                  {navLinks.map((link) => (
                    <li key={link.name} className={styles}>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-1">
                <ul className="">
                  {socialLinks.map((link) => (
                    <li key={link.name} className={styles}>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex-1">
                <ul className="">
                  {policy.map((link) => (
                    <li key={link.name} className={styles}>
                      {link.name}
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
          <div className="bg-primary-100 flex-1 rounded-4xl p-8 relative">
            <div className="w-[55%] mt-16">
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
            <div className="h-[54px] w-[480px] mt-24">
              <button className="capitalize bg-white text-[20px]  font-semibold text-primary-100 rounded-4xl h-full w-full ">reach out to us</button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
