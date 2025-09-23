import React from "react";
import Container from "./Container";

const WaitlistForm = () => {
  return (
    <section className=" mt-5">
      <Container>
        <form className=" w-full h-full lg:h-[585px] rounded-4xl text-primary-100 bg-inherit lg:bg-white p-4 lg:p-16 border border-[#B1B1B1] ">
          <h1 className="text-[16px] lg:text-[32px] font-bold pb-5">
            Sign Up, we respect your privacy
          </h1>
          {/* name */}
          <div className="w-full h-full lg:h-[119px] flex  flex-col lg:flex-row lg:items-center lg:gap-6  ">
            <div className=" flex-1 ">
              <h1 className="text-[13px] lg:text-[24px] lg:font-medium font-semibold py-1 lg:py-3">
                First Name{" "}
                <span className="lg:hidden font-normal text-[10px]">(required)</span>
              </h1>
              <div className="h-[50px] lg:h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full  rounded-xl bg-white lg:bg-[#F7F6F4]"
                />
              </div>
            </div>
            <div className=" flex-1 ">
              <h1 className="text-[13px] lg:text-[24px] lg:font-medium font-semibold py-1 lg:py-3">
                Last Name
                <span className="lg:hidden font-normal text-[10px]">(required)</span>
              </h1>
              <div className="h-[50px] lg:h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full rounded-xl bg-white lg:bg-[#F7F6F4]"
                />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className=" flex-1 py-2  ">
            <h1 className="text-[13px] font-semibold lg:text-[24px] lg:font-medium py-1 lg:py-3">
              Email <span className="lg:hidden font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[50px] lg:h-[70px] w-full pt-2">
              <input
                type="text"
                className="w-full h-full  rounded-xl bg-white lg:bg-[#F7F6F4]"
              />
            </div>
          </div>

          <div className=" w-full lg:w-[156px] h-[40px] lg:h-[54px] mt-4 mb-2 lg:mb-0 lg:mt-14">
            <button className="bg-primary-100 text-white text-[14px] lg:text-[20px] font-semibold rounded-4xl w-full h-full cursor-pointer">
              Sign Up
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default WaitlistForm;
