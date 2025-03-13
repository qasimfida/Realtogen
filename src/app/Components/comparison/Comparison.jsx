'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, AlertTriangle, DollarSign, Clock } from "lucide-react";

const Comparison = () => {
  return (
    <div className="pt-[68px] md:pb-[80px] md:px-0 px-4 flex items-center">
      <div className=" py-10 w-full md:px-12 px-6 text-center bg-white rounded-4xl">
        <h2 className="text-3xl font-extrabold mb-5 text-[#141A30]">
          Why Choose Us? <span className="font-medium ">- Learn Our Advantages</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[16px]">
          {/* Realtogen.ai Section */}
          <div className="flex flex-col items-center">
            <Card className="bg-[#2545B7] text-white rounded-2xl p-6 md:w-md shadow-xl">
              <CardContent className="px-0">
                <h3 className="text-xl font-semibold mb-4">Realtogen.ai</h3>
                <ul className="space-y-3 text-sm text-white text-left">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <span><strong>Instant Results:</strong> Generate aerial-style videos in minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <span><strong>No On-Site Filming:</strong> AI handles everything - no pilot, no crew</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <span><strong>Cost-Effective:</strong> Pay only a fraction of what real drone shoots cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <span><strong>Brand Customization:</strong> Easily add logos, colors, voiceovers, and subtitles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-white mt-1" />
                    <span><strong>Anytime, Anywhere:</strong> Create videos on demand from any device</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          
            <div className="mt-3 flex flex-col space-y-2 text-sm bg-[#2545B7] p-4 rounded-xl text-white w-full py-6 px-10">
              <div className="flex items-center gap-2">
                <DollarSign className="text-white" />
                <span><strong className="font-semibold text-2xl">16.90$</strong> pro plan price</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-white" />
                <span><strong className="font-semibold text-2xl">8 min</strong> average delivery time</span>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="text-xl font-bold text-gray-600">VS</div>

          
          <div className="flex flex-col items-center">
            <Card className="bg-[#FEF2F2] text-[#141A30] rounded-2xl p-6 md:w-md shadow-none">
              <CardContent className="px-0">
                <h3 className="text-2xl font-semibold mb-4 text-[#141A30]">Traditional Drone Filming</h3>
                <ul className="space-y-3 text-sm text-[#141A30] text-left">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-[#141A30] mt-1" />
                    <span><strong>Time-Consuming:</strong> Schedule shoots, wait for pilot availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-[#141A30] mt-1" />
                    <span><strong>On-Site Requirements:</strong> Equipment, perfect weather, and filming crew</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-[#141A30] mt-1" />
                    <span><strong>Higher Costs:</strong> Hourly pilot rates, travel fees, and editing expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-[#141A30] mt-1" />
                    <span><strong>Permits & Insurance:</strong> Strict regulations and added paperwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-[#141A30] mt-1" />
                    <span><strong>Long Drives & Travel:</strong> Costs and time skyrocket for remote locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Small box outside the card */}
            <div className="mt-3 flex flex-col space-y-2 text-sm bg-[#FEF2F2]  rounded-xl text-[#141A30] w-full py-6 px-10">
              <div className="flex items-center gap-2">
                <DollarSign className="text-[#141A30]" />
                <span><strong className="font-semibold text-2xl">450$</strong> average cost in US</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-[#141A30]" />
                <span><strong className="font-semibold text-2xl">3 days</strong> average delivery time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
