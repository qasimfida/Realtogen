"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PromoSection() {
  return (
    <section className="bg-[#141A30] text-white mt-[65px] py-12 md:px-0 px-10">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto  ">
       
        <div className="w-full md:w-[440px] md:h-[476px] h-[300px] bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-3xl">🔗</span>
        </div>

      
        <div className="md:w-[430px] w-full ">
          <h2 className="text-xl md:text-2xl font-semibold">
            <span className="text-green-400">Ready</span> to Transform Your Listings?
          </h2>
          <p className="text-gray-300 mt-4 leading-9">
            RealGen AI is your all-in-one real estate marketing platform. Instantly generate aerial-style property videos—just by entering an address or uploading images to create free, ready-to-post listing and social media designs.
          </p>
          <p className="text-white font-semibold mt-2 leading-9">
            No on-site filming, no hefty fees—just ultra-affordable AI-powered videos. Let our AI handle the heavy lifting at the lowest cost!
          </p>

      
          <div className="md:flex gap-4 mt-6 ">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 px-10 py-6 md:my-0 my-4">
            Get Free Designs
            </Button>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 px-10 py-6">
              Generate Drone Shot
            </Button>
          </div>

       
          <p className="text-gray-400 mt-4 text-sm">
            See all plans and <a href="#" className="text-blue-400 underline">save up to 40% now.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
