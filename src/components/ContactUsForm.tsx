import React from "react";
import Container from "./Container";

const ContactUsForm = () => {
  return (
    <section className="w-full pt-10 my-10">
      <Container>
        <div className="w-full min-h-[909px] rounded-[50px] text-primary-100 bg-white p-16 border-2 border-[#B1B1B1] ">
          <h1 className="text-[32px] font-bold pb-5">
            Name <span className="font-normal text-[20px]">(required)</span>
          </h1>
          {/* name */}
          <div className="w-full flex items-center gap-6 h-[119px]">
            <div className=" flex-1 h-full">
              <h1 className="text-[24px] font-medium py-3">First Name</h1>
              <div className="h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full  rounded-xl bg-[#F7F6F4]"
                />
              </div>
            </div>
            <div className=" flex-1 h-full">
              <h1 className="text-[24px] font-medium py-3">Last Name</h1>
              <div className="h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full rounded-xl bg-[#F7F6F4]"
                />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className=" flex-1 h-full ">
            <h1 className="text-[24px] font-medium py-3">
              Email <span className="font-normal text-[20px]">(required)</span>
            </h1>
            <div className="h-[70px] w-full pt-2">
              <input
                type="text"
                className="w-full h-full  rounded-xl bg-[#F7F6F4]"
              />
            </div>
          </div>
          {/* Message */}
          <div className=" flex-1 h-full ">
            <h1 className="text-[24px] font-medium py-3">
              Message
              <span className="font-normal text-[20px]">(required)</span>
            </h1>
            <div className=" w-full pt-2">
              <textarea className="w-full min-h-[289px]  rounded-xl bg-[#F7F6F4]"></textarea>
            </div>
          </div>
          <div className="w-[225px] h-[54px] mt-12">
            <button className="bg-primary-100 text-white text-[20px] font-semibold rounded-4xl w-full h-full cursor-pointer">
              Send Message
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsForm;
