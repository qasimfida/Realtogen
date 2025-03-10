import React from "react";
import Image from "next/image"; // Import Image from next/image
import CommaIcon from "../../../../public/icons/CommaIcon";
import CoustomerData from "@/app/Data/CoustomerData";

const CoustomerServices = () => {
  return (
    <div className="pt-[56px] px-[19px] md:px-[208px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-[82px]">
      {CoustomerData.map((item) => (
        <div
          key={item.id}
          className="flex gap-[6px] justify-center bg-white w-full h-auto rounded-[12px] px-[15px] py-[36px] md:py-[27px] shadow-lg"
        >
          <div className="flex gap-[10px] relative top-[-11px] md:top-[-39px] bottom-0">
            <CommaIcon />
            <CommaIcon />
          </div>

          <div className="flex flex-col gap-[6px] items-start sm:items-start">
            <p className="text-start text-[14px] font-medium md:text-[16px] md:font-bold text-[#141A30]">
              {item.text}
            </p>
            <div className="flex items-start gap-[10px] sm:gap-[15px] ">
              <span className="font-normal text-[16px]">
                {item.title}
              </span>
            </div>
          </div>

          <div className="md:relative md:left-[42px]">
            <Image
              src={item.img}
              alt="customer image"
              className="md:w-[227px] w-[140px] h-[61px] md:h-[100px] object-cover rounded-full"
              width={227}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoustomerServices;
