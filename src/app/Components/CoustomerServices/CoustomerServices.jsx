"use client";

import React, { useState, useContext } from "react";
import Image from "next/image"; 
import CommaIcon from "../../../../public/icons/CommaIcon"; 
import CoustomerData from "@/app/Data/CoustomerData";
import CustomerSlider from "./CustomerSlider";


const CoustomerServices = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center pb-[56px] pt-[36px] md:pt-[115px] sm:w-[1024px] mx-auto">
        <h3 className="text-[20px] md:text-[32px] font-semibold">
          Customer Success Stories
        </h3>
        <div className="max-sm:px-[36px] md:text-start pt-[19px] text-center">
          <p className="text-[14px] sm:text-[24px] font-cal">
            What
            <span className="font-bold text-[#141A30]"> 2,000+ </span>
            real estate agents are saying?
          </p>
          <p className="pt-[13px] font-inter text-[16px] font-normal">
            See how
            <span className="font-bold text-[#141A30]">
              {" "}
              real estate professionals
            </span>{" "}
            save time and money while boosting sales with
            <span className="font-bold text-[#141A30]"> RealtoGen.ai.</span>{" "}
            Directly from our satisfied clients.
          </p>
        </div>
      </div>

      <CustomerSlider CoustomerData={CoustomerData} />
    </>
  );
};

export default CoustomerServices;
