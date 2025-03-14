"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ShieldCheck,
  AlertTriangle,
  DollarSign,
  Clock,
} from "lucide-react";
import DollerIcon from "../../../../public/icons/DollerIcon";
import SpeedIcon from "../../../../public/icons/SpeedIcon";

const Comparison = () => {
  return (
    <div className="pt-[68px] md:pb-[80px] md:px-0 sm:px-4 flex items-center sm:w-[1024px] mx-auto w-full">
      <div
        className="py-[50px] w-full max-sm:px-[22px] md:px-[40px] text-center bg-white rounded-4xl"
        style={{
          boxShadow: "0px -15px 8px rgb(0 0 0 / 10%);",
        }}
      >
        <h2 className="text-[32px] font-bold mb-5 text-[#141A30]">
          Why Choose Us?{" "}
          <span className="font-medium ">- Learn Our Advantages</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[16px]">
          {/* Realtogen.ai Section */}
          <div className="flex flex-col items-center">
            <Card className="bg-[#2545B7] text-white rounded-2xl pl-[40px] pr-[30px] pt-[30px] pb-[45px] md:w-md shadow-xl">
              <CardContent className="px-0">
                <h3 className="text-[32px] pl-[7px] text-start font-semibold mb-4">
                  Realtogen.ai
                </h3>
                <ul className="space-y-3 text-sm text-white text-left">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Instant Results:</span>{" "}
                      Generate aerial-style videos in minutes
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">No On‐Site Filming:</span> AI
                      handles everything-no pilot, no crew
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Cost‐Effective: </span>Pay
                      only a fraction of what real drone shoots cost
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold"> Brand Customization: </span>
                      Easily add logos, colors, voiceovers, and subtitles
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Anytime, Anywhere: </span>
                      Create videos on demand from any device
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-3 flex flex-col space-y-2 text-sm bg-[#2545B7] p-4 rounded-xl text-white w-full py-6 px-10">
              <div className="flex items-center gap-[38px]">
                <div className="flex items-center gap-[38px]">
                  <DollerIcon />
                  <h3 className="font-semibold text-2xl">16.90$</h3>
                </div>
                <div className="flex items-center gap-2">
                  <p>pro plan price</p>
                </div>
              </div>
              <div className="flex items-center gap-[44px]">
                <div className="flex items-center gap-[48px]">
                  <SpeedIcon />
                  <h3 className="font-semibold text-2xl">8 min</h3>
                </div>
                <div className="flex items-center gap-2">
                  <p>average delivery time</p>
                </div>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="text-[32px] font-semibold text-[#141A30]">VS</div>

          <div className="flex flex-col items-center">
          <Card className="bg-[#FEF2F2] text-white rounded-2xl pl-[40px] pr-[30px] pt-[30px] pb-[45px] md:w-md shadow-xl">
              <CardContent className="px-0">
                <h3 className="text-[32px] pl-[7px] text-start font-semibold mb-4">
                Traditional Drone Filming
                </h3>
                <ul className="space-y-3 text-sm text-white text-left">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Instant Results:</span>{" "}
                      Generate aerial-style videos in minutes
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">No On‐Site Filming:</span> AI
                      handles everything-no pilot, no crew
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Cost‐Effective: </span>Pay
                      only a fraction of what real drone shoots cost
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold"> Brand Customization: </span>
                      Easily add logos, colors, voiceovers, and subtitles
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <p className=" text-[16px] font-normal">
                      <span className="font-bold">Anytime, Anywhere: </span>
                      Create videos on demand from any device
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Small box outside the card */}
            <div className="mt-3 flex flex-col space-y-2 text-sm bg-[#FEF2F2]  rounded-xl text-[#141A30] w-full py-6 px-10">
              <div className="flex items-center gap-2">
                <DollarSign className="text-[#141A30]" />
                <span>
                  <strong className="font-semibold text-2xl">450$</strong>{" "}
                  average cost in US
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-[#141A30]" />
                <span>
                  <strong className="font-semibold text-2xl">3 days</strong>{" "}
                  average delivery time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
