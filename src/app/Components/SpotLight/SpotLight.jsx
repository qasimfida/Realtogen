import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const SpotLight = () => {
  return (
    <div className=" md:pb-[145px] ">
      <section className="bg-[#141A30] text-white mt-[65px] pt-[58px] pb-[75px] md:pl-[75px] md:rounded-4xl">
        <div className="flex  flex-col md:flex-row gap-[62px]  ">
          <div className="md:w-[437px] py-[18px] flex flex-col gap-[25px]  w-full max-sm:text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1DF615]">
              <span className="text-white">
                Give Your Properties the Spotlight{" "}
              </span>
              They Deserve
            </h2>
            <p className="text-gray-300  leading-9">
              Stop spending thousands on drone shoots and design. Let RealtoGen
              handle both—from AI‐generated aerial views to ready‐to‐post social
              media designs
            </p>
            <p className="text-white font-semibold leading-9">
              You can save time, cut costs, and focus on selling. Start
              transforming your listing designs.
            </p>
            <div className="md:flex gap-4  ">
              <Button
                variant="default"
                className="bg-blue-500 hover:bg-blue-600 border-[#b8b8b8] border-2 font-semibold text-[16px] px-10 py-6 md:my-0 my-4 shadow-lg"
                style={{ boxShadow: "2px 2px 10px #426bff7f" }}
              >
                <span className="text-[#1DF615]">Create</span> Now
              </Button>
              <Button
                variant="outline"
                className="text-white border-white bg-transparent font-semibold text-[16px] px-10 py-6 md:my-0 my-4"
                style={{ textShadow: "2px 2px 6px rgba(255, 255, 255, 0.534)" }}
              >
                Get Free Designs
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-white font-semibold text-[16px]">
                See all plans and
                {""}
                <a href="#" className="text-blue-400">
                  save up to 60% now.
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-end">
          <div className="w-full max-sm:w-[90%] mx-auto md:w-[450px] md:h-[476px] h-[300px] bg-[#D9D9D9] rounded-[46px] md:rounded-r-[0px] flex items-center justify-center">
            <span className="text-3xl"><Image src="/link.svg" alt="Image description" width={28} height={20} className="" /></span>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpotLight;
