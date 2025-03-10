"use client";
import { MapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import img from "../../../../public/images/worldMap.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import LocationIcon from "../../../../public/icons/LocationIcon";

const Data = [
  {
    id: 1,
    text: "USA, New York",
  },
  {
    id: 2,
    text: "Canada, Alberta",
  },
  {
    id: 3,
    text: "Türkiye, Aydın",
  },
  {
    id: 4,
    text: "USA, Florida",
  },
  {
    id: 5,
    text: "USA, New York",
  },
];

const HomeSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="flex flex-col items-center md:pt-[67px]">
        <div className="flex max-sm:pt-[34px] flex-row md:flex-col gap-[16px] items-center px-[13px]">
          <Image src={img} width={64} height={64} />
          <h1 className="md:w-[617px] w-[auto] font-semibold text-[20px] md:text-[32px]">
            Fly Over Listings Anywhere in the World - No Drone, No Filming, No
            Hassle!
          </h1>
        </div>
        <p className="max-sm:px-[23px] text-[14px] md:text-[16px] max-sm:text-center pt-[40px] text-[#595959]">
          Transform your property address into a stunning aerial video{" "}
          <span className="font-bold">
            with RealtoGen AI—no filming, all AI.
          </span>
        </p>

        <div className="pt-[60px] overflow-hidden max-sm:w-full w-[auto]">
          <Carousel
            className="w-full max-w-[1024px] max-h-[434px] h-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="flex gap-[40px]">
              {Data.map((item) => (
                <CarouselItem key={item.id} className="flex justify-center">
                  <div className="p-1 flex flex-col items-center">
                    <Card className="w-[216px] h-[384px] flex items-center justify-center bg-[#D9D9D9]">
                      <CardContent className="p-6">
                        <span className="text-2xl font-semibold text-[#D9D9D9]">
                          🔗
                        </span>
                      </CardContent>
                    </Card>
                    <div className="flex items-center gap-2 mt-2">
                      <LocationIcon />
                      <p className="text-[16px] font-semibold">{item.text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
