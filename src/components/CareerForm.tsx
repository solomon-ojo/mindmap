"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import Image from "next/image";

const CareerForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="w-full pt-10  lg:my-10">
      <Container>
        <form className=" relative hidden lg:block w-full min-h-[1236px] rounded-[50px] text-primary-100 bg-white p-16 border border-[#B1B1B1] ">
          <div className="w-[444px] h-[297px] absolute top-[-8%] right-6">
            <div className="w-full h-full relative">
              <Image src={"/images/career.png"} fill alt="career_image" />
            </div>
          </div>
          <h1 className="text-[32px] font-bold pb-5">
            Name <span className="font-normal text-[20px]">(required)</span>
          </h1>
          {/* name */}
          <div className="w-full flex items-center gap-6 h-[119px] py-3">
            <div className=" flex-1 h-full">
              <h1 className="text-[24px] font-medium py-3">First Name</h1>
              <div className="h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full p-2  rounded-xl bg-[#F7F6F4]"
                />
              </div>
            </div>
            <div className=" flex-1 h-full">
              <h1 className="text-[24px] font-medium py-3">Last Name</h1>
              <div className="h-[70px] w-full pt-2">
                <input
                  type="text"
                  className="w-full h-full p-2 rounded-xl bg-[#F7F6F4]"
                />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className=" flex-1 h-full py-3">
            <h1 className="text-[24px] font-medium py-3">
              Email <span className="font-normal text-[20px]">(required)</span>
            </h1>
            <div className="h-[70px] w-full pt-2">
              <input
                type="text"
                className="w-full h-full  p-2 rounded-xl bg-[#F7F6F4]"
              />
            </div>
          </div>
          {/* area of interest */}

          <div className=" flex-1 h-full py-3 ">
            <h1 className="text-[24px] font-medium py-3">
              Area of Interest{" "}
              <span className="font-normal text-[20px]">(required)</span>
            </h1>
            <div className="h-[70px] w-full pt-2">
              <input
                type="text"
                className="w-full h-full p-2  rounded-xl bg-[#F7F6F4]"
              />
            </div>
            {/* phone number */}
            <div className="py-3">
              <h1 className="text-[24px] font-medium py-3">
                Phone Number{" "}
                <span className="font-normal text-[20px]">(required)</span>
              </h1>
              <div className="h-[70px] w-full pt-2">
                <input
                  type="number"
                  className="w-full h-full p-2  rounded-xl bg-[#F7F6F4]"
                />
              </div>
            </div>
          </div>
          {/* upload cv */}

          <div className="py-3">
            <h1 className="text-[24px] font-medium py-3">
              Upload CV{" "}
              <span className="font-normal text-[20px]">(required)</span>
            </h1>
            <div className="h-[261px] w-full pt-2">
              <div
                onClick={handleFileUpload}
                className="w-full h-full border-2  border-dashed cursor-pointer flex justify-center items-center rounded-xl border-[#AEAEAE] bg-[#F7F6F4]"
              >
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-[50px] h-[50px] relative flex justify-center">
                    <Image src={"/icons/upload.png"} fill alt="upload_icon" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[24px] items-center font-medium text-[#AEAEAE]">
                      {fileName ? (
                        <span className="text-primary-100">{fileName}</span>
                      ) : (
                        "Click to Upload"
                      )}
                      {!fileName && (
                        <span className="font-normal text-[20px]">
                          (5mb Max file size)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[150px] h-[54px] mt-12">
            <button className="bg-primary-100 text-white text-[20px] font-semibold rounded-4xl w-full h-full cursor-pointer">
              Submit
            </button>
          </div>
        </form>
        {/* mobile */}
        <form className="lg:hidden h-full w-full text-primary-100 p-5 rounded-4xl border border-[#B1B1B1]">
          <h1 className="text-[16px] font-bold pb-5">
            Name <span className="font-normal text-[10px]">(required)</span>
          </h1>
          {/* fullname */}
          <div className=" ">
            <h1 className="text-[13px] font-semibold py-3">
              Fullname{" "}
              <span className="font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[50px] w-full pt-1">
              <input
                type="text"
                className="w-full h-full p-2 rounded-xl bg-white"
              />
            </div>
          </div>
          {/* email */}
          <div className=" ">
            <h1 className="text-[13px] font-semibold py-3">
              Email Address{" "}
              <span className="font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[50px] w-full pt-1">
              <input
                type="text"
                className="w-full h-full p-2  rounded-xl bg-white"
              />
            </div>
          </div>
          {/* area of interest */}
          <div className=" ">
            <h1 className="text-[13px] font-semibold py-3">
              Area of Interest{" "}
              <span className="font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[50px] w-full pt-1">
              <input
                type="text"
                className="w-full h-full p-2  rounded-xl bg-white"
              />
            </div>
          </div>
          {/* phone number */}
          <div className=" ">
            <h1 className="text-[13px] font-semibold py-3">
              Phone Number{" "}
              <span className="font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[50px] w-full pt-1">
              <input
                type="tel"
                className="w-full h-full p-2  rounded-xl bg-white"
              />
            </div>
          </div>
          {/* upload */}
          <div className="">
            <h1 className="text-[13px] font-semibold py-3">
              Upload CV{" "}
              <span className="font-normal text-[10px]">(required)</span>
            </h1>
            <div className="h-[194px] w-full pt-2">
              <div
                onClick={handleFileUpload}
                className="w-full h-full cursor-pointer border-2  border-dashed flex justify-center items-center rounded-xl border-[#AEAEAE] bg-white"
              >
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-[50px] h-[50px] relative flex justify-center">
                    <Image src={"/icons/upload.png"} fill alt="upload_icon" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[14px] items-center font-medium text-[#AEAEAE]">
                      {fileName ? (
                        <span className="text-primary-100">{fileName}</span>
                      ) : (
                        "Click to Upload"
                      )}
                      {!fileName && (
                        <span className="font-normal text-[12px]">
                          (5mb Max file size)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[125px] h-[40px] mt-6">
            <button className="bg-primary-100 text-white text-[14px] font-semibold rounded-4xl w-full h-full cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default CareerForm;
