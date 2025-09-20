import React from "react";
import Container from "./Container";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="w-full h-full mb-10">
      <Container>
        <div className="w-full h-full flex  flex-col lg:flex-row lg:h-[600px] bg-[#FDF7F1] border border-[#D9C7B5] rounded-4xl ">
          {/* upper part */}
          <div className=" flex-1 p-10 text-primary-100">
            <h1 className=" text-sm lg:text-[30px] font-semibold py-3 lg:py-5">
              Contact Details:
            </h1>
            <p className="text-[13px]   lg:text-[20px] py-3 lg:py-5">
              <span className="font-semibold">Email:</span>{" "}
              contact@mind-map.co.uk
            </p>
            <p className="text-[12px]   lg:text-[20px] py-3 lg:py-5">
              <span className="font-semibold">Phone:</span> +449 (322) 766 099
            </p>
            <p className="text-[12px]   lg:text-[20px] py-3 lg:py-5">
              <span className="font-semibold">Address:</span> 63/66 Hatton
              Garden EC1N 8LE
            </p>
            <div className="flex items-center gap-4 py-3 lg:py-5">
              <Image
                src={"/icons/instagram2.png"}
                height={24}
                width={24}
                alt="instagram"
              />
              <Image
                src={"/icons/facebook2.png"}
                height={24}
                width={24}
                alt="facebook"
              />
              <Image
                src={"/icons/linkedin2.png"}
                height={24}
                width={24}
                alt="linkedin"
              />
              <Image
                src={"/icons/whatsap.png"}
                height={24}
                width={24}
                alt="whatsapp"
              />
            </div>
            <p className=" text-[12px]  lg:text-[20px] pt-6 lg:pt-20">
              We aim to reply within 24 hours.
            </p>
          </div>
          {/* lower part */}
          <div className=" flex-1 p-10 text-primary-100">
            <div className="lg:hidden border border-gray-400 border-dashed w-full"></div>
            <h1 className="text-[30px] font-semibold py-3 pt-10  lg:py-5">
              Send Us a Message
            </h1>
            <div className="flex flex-col gap-2 py-3 lg:py-4">
              <label
                className="text-[13px] font-semibold lg:text-[20px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full lg:w-[450px] h-[50px] lg:h-[60px]  bg-white border border-[#D9C7B5] rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2 py-3 lg:py-4">
              <label
                className="text-[13px] font-semibold lg:text-[20px]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea className="w-full lg:w-[450px] h-[98px]  bg-white border border-[#D9C7B5] rounded-2xl"></textarea>
            </div>
            <div className="w-full lg:w-[450px] h-[40px] lg:h-[54px] my-4 mt-8 ">
              <button className="hidden lg:block w-full h-full rounded-4xl text-white bg-primary-100">
                Send Message
              </button>
              <button className="lg:hidden w-full h-full rounded-4xl text-sm font-semibold text-white bg-primary-100">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
