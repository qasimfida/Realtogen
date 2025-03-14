import React from "react";
import CardCompo from "../CardCompo/CardCompo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeCards from "../HomeCards/HomeCards";
import img from "/public/images/homeBg.png";
import CardsData from "@/app/Data/HomeCardsData";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <div className="flex pt-[15px] md:pt-[78px] pl-[16px]">
      <div className="flex  relative pt-[15px] md:pt-[78px] overflow-hidden flex-col-reverse md:flex-row gap-[32px]">
      <div className="  absolute top-0 left-[250px] max-sm:left-0 max-sm:top-[300px]">
      <Image src="/images/homeBg.png" alt="Image description" width={500} height={300} className="sm:w-[800px] max-sm:w-[400px]" />
      </div>
        <div className="flex flex-col items-cente md:items-start z-10">
          <h2 className="text-[#426BFF] font-bold leading-[60px] text-[8px] md:text-[60px] max-sm:text-[48px]">
            Generate Drone Videos Instantly
          </h2>
          <div className="pt-[24px] md:pt-[32px] w-auto md:w-[406px] ">
            <p className="text-[16px] font-medium ">
              📍 Turn Any Address into Stunning 3D Drone Videos for{" "}
              <span className="font-bold text-[#141A30]">Real Estate</span>{" "}
              <span className="text-[#426BFF] font-bold">-within minutes!</span>
            </p>
            <p className="pt-[16px]">
              No filming. No hassle. <span className="font-bold text-[#141A30]">Save time and money</span> with Realtogen
              AI drone shots.
            </p>
          </div>
          <div
            className="bg-gradient-to-r mt-[24px] md:mt-[32px] from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-[209px] md:w-[152px] h-[50px] flex justify-center items-center rounded-[8px]"
            style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
          >
            <Button
              variant="primary"
              className="bg-[#426BFF] w-[207px] md:w-[150px] h-[46px] text-white text-[16px] font-semibold"
            >
              <Link href="/loggedIn">Generate Now</Link>
            </Button>
          </div>
          <p className="pt-[17px] text-[#5278FE] text-[17px] font-normal">
            Try Our <span className="font-bold"> Free Listing Designer</span>
          </p>
        </div>
        <div className="pt-[17px] md:pr-[20px]">
          <CardCompo />
        </div>
        </div>
      </div>
      <div className="px-[16px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[23px] pt-[40px] md:pt-[101px]">
        {CardsData.map((card) => (
          <HomeCards key={card.id} text={card.text} img={card.img} />
        ))}
      </div>
    </>
  );
};

export default HomeHero;
