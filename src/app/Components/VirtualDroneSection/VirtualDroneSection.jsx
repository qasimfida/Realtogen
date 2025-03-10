"use client";

import VirtualDroneCard from "./VirtualDroneCard";
import LayerIcon from "../../../../public/icons/LayerIcon";

export default function VirtualDroneSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Effortless Selling with{" "}
        <span className="text-blue-500">One-Click Virtual Drone Shoot</span>
      </h2>
      <p className="text-gray-600 mt-2">
        See why we're the <span className="font-bold">fastest</span> growing virtual drone company.
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
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
