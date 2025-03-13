import React from "react";
import Image from "next/image"; // Import Image from next/image
import CommaIcon from "../../../../public/icons/CommaIcon";
import CoustomerData from "@/app/Data/CoustomerData";

const CoustomerServices = () => {
  return (
    <>
      <div className="text-center pb-[56px] pt-[36px] md:pt-[115px]">
      <h3 className="text-[20px] md:text-[32px] font-semibold">Customer Success Stories</h3>
      <div className="max-sm:px-[36px] md:text-start pt-[19px] text-center">
      <p className="text-[14px] md:text-[24px] font-sans">What<span className="font-semibold text-[#141A30]"> 2,000+ </span>real estate agents are saying?</p>
      <p className="text-[14px] md:text-[24px] pt-[13px]">See how <span className="font-semibold text-[#141A30]"> real estate professionals</span> save time and money while boosting sales with <span className="font-semibold text-[#141A30]"> RealtoGen.ai.</span> Directly from our satisfied clients.</p>
      </div>
      </div>
    <div className=" pb-[36px] md:pb-[138px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-[82px]">
      {CoustomerData.map((item) => (
        <div
          key={item.id}
          className="flex gap-[6px] justify-center bg-white w-full h-auto rounded-[12px] px-[15px] py-[36px] md:py-[27px] shadow-lg"
        >
          <div className="flex gap-[10px] relative top-[-46px] md:top-[-39px] bottom-0">
            <CommaIcon />
            <CommaIcon />
          </div>

          <div className="flex flex-col w-[327px] gap-[6px] items-start sm:items-start">
            <p className="text-start text-[14px] font-medium md:text-[16px] md:font-medium leading-[18px] text-[#141A30]">
              {item.text}
            </p>
            <div className="flex items-start gap-[10px] sm:gap-[15px] ">
              <span className="font-normal text-[16px]">
                {item.title}
              </span>
            </div>
          </div>

          <div className="md:relative w-auto md:left-[42px]">
            <Image
              src={item.img}
              alt="customer image"
              className="object-cover rounded-full"
              width={"auto"}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CoustomerServices;
