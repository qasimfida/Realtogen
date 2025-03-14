"use client";

import VirtualDroneCard from "./VirtualDroneCard";
import LayerIcon from "../../../../public/icons/LayerIcon";

export default function VirtualDroneSection() {
  return (
    <section className="max-sm:pt-[62px] text-center md:text-start">
      <div className="">
        <h2 className="md:text-[32px] text-[20px] max-sm:text-center font-bold text-[#141A30]">
          Effortless Selling with One-Click 
          <span className="text-[#426BFF]"> Virtual Drone Shoot</span>
        </h2>
        <p className="text-[#141A30] text-[24px] pt-[34px] max-sm:hidden">
          See why we're the <span className="font-semibold">fastest</span> growing virtual drone company.
        </p>
      </div>

      <div className="mt-[58px] md:px-[32px] flex flex-col md:flex-row justify-center gap-6">
        <VirtualDroneCard
          imageSrc="/images/ARSA .png"
          title="Elevate Your Listings with Professional Designs"
          description="Upload your images to instantly generate eye-catching listing designs."
          icon={<LayerIcon />}
        />

        <VirtualDroneCard
          imageSrc="/images/ARSA .png"
          title="Elevate Your Listings with Professional Designs"
          description="Upload your images to instantly generate eye-catching listing designs."
          icon={<LayerIcon />}
        />
      </div>
    </section>
  );
}
