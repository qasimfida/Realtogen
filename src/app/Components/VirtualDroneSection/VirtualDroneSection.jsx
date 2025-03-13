"use client";

import VirtualDroneCard from "./VirtualDroneCard";
import LayerIcon from "../../../../public/icons/LayerIcon";

export default function VirtualDroneSection() {
  return (
    <section className="px-4 text-center md:text-start">
      <h2 className="text-2xl font-bold text-gray-900">
        Effortless Selling with{" "}
        <span className="text-blue-500">One-Click Virtual Drone Shoot</span>
      </h2>
      <p className="text-[#141A30] text-[24px] pt-[34px]">
        See why we're the <span className="font-bold">fastest</span> growing virtual drone company.
      </p>

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
