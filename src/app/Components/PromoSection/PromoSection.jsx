"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PromoSection() {
  return (
    <section className="bg-[#141A30] text-white mt-[65px] py-[66px] md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[47px] px-[32px] md:px-[208px] ">
       <div className="md:pl-[55px] w-full">
        <div className="w-auto md:w-[440px] md:h-[476px] h-[300px] bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-3xl"><Image src="/link.svg" alt="Image description" width={28} height={20} /></span>
        </div>
        </div>
        <div className="md:w-[479px] w-full max-sm:text-center">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#1DF615]">Ready</span> to Transform Your Listings?
          </h2>
          <p className="text-gray-300 mt-4 leading-9">
            RealGen AI is your all-in-one real estate marketing platform. Instantly generate aerial-style property videos—just by entering an address or uploading images to create free, ready-to-post listing and social media designs.
          </p>
          <p className="text-white font-semibold mt-2 leading-9">
            No on-site filming, no hefty fees—just ultra-affordable AI-powered videos. Let our AI handle the heavy lifting at the lowest cost!
          </p>

          <div className="flex flex-col md:flex-row  gap-4 mt-6 ">
              <Button
                variant="outline"
                className="text-white border-white bg-transparent font-semibold text-[16px] px-10 py-6 md:my-0 my-4"
                style={{ textShadow: "2px 2px 6px rgba(255, 255, 255, 0.534)" }}
              >
                Get Free Designs
              </Button>
             <Button
                variant="default"
                className="bg-blue-500 hover:bg-blue-600 border-[#b8b8b8] border-2 font-semibold text-[16px] px-10 py-6 md:my-0 my-4 shadow-lg"
                style={{ boxShadow: "2px 2px 10px #426bff7f" }}
              >
                Generate Drone Shot 
              </Button>
          </div>

       
          <p className="text-[#FFFFFF] mt-4 text-sm">
            See all plans and <a href="#" className="text-[#426BFF]">save up to 40% now.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
