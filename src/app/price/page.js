import { Button } from "@/components/ui/button";
import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import CheckboxIcon from "../../../public/icons/CheckboxIcon";

const Price = () => {
  return (
    <div className="pt-[50px] pb-[77px] px-[24px] md:px-[208px] bg-[#141A30]">
      <div className="pt-[47px] text-white">
        <h1 className="font-semibold text-[24px] md:text-[64px]">
          Our <span className="text-[#1DF615]">Pricing</span> Plans
        </h1>
        <p className="text-[16px] md:text-[24px]">
          Choose the right Realtogen.ai plan for you
        </p>
      </div>
      <div className="flex gap-[12px] md:gap-[141px] mt-[66px] text-white max-sm:bg-[#34447F] max-sm:rounded-full">
        <div className="flex flex-col justify-center gap-[5px] max-sm:px-[22px] max-sm:py-[12px] max-sm:bg-white max-sm:rounded-full max-sm:text-black">
          <h1 className="text-[16px] md:text-[32px] font-semibold">Monthly</h1>
          <div className="md:block hidden w-[100%] h-[2px] bg-white"></div>
        </div>
        <div className="flex items-center gap-[12px]">
          <p className="text-[16px] md:text-[32px] font-semibold">Yearly</p>
          <div className="text-[#1DF615] bg-[#31959D] px-[15px] py-[4px] rounded-full">
            up to 30% off
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="pt-[32px] flex flex-col items-center gap-[61px] md:flex-row ">
        <div className="bg-[white] rounded-4xl w-[341px] md:w-[270px] h-[720px] px-[8px] pt-[6px] ">
          <div className="bg-[#EDF1F8] rounded-4xl">
            <div className="pt-[23px] px-[48px]">
              <h1 className="text-[24px] font-semibold text-[#141A30]">
                Starter Plan
              </h1>
              <p className="text-[#595959] text-[16px] font-normal">
                to try it out
              </p>
            </div>
            <div className="px-[50px]">
              <h2 className="text-[#141A30] text-[32px] pt-[15px] font-semibold w-[170px]">
                Get Started for Free
              </h2>
              <p className="text-[#595959] w-[170px]">
                3 Free AI-Generated Listing Designs
              </p>
              <p className="pt-[38px] text-[#595959]">$39 / video</p>
            </div>
            <div className="flex items-center justify-center pt-[15px] pb-[32px]">
              <Button
                variant="primary"
                className="rounded-full h-[49px] px-[23px] py-[15px] text-[16px] font-semibold !important"
              >
                <a>Get Started Now for FREE</a>
              </Button>
            </div>
          </div>
          <div className="w-[] px-[16px]">
          <p className="text-[#595959] pt-[28px]">
              💡<span className="font-extrabold text-red-950"> Try it out for free! </span>Get professionally designed listing
              visuals for your properties, completely free. <span> No credit card
              required.</span>
            </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          3 Free AI-Generated Listing Designs
          </p>
          </div>
        </div>
        {/* card2 */}
        <div className="bg-[white] rounded-4xl w-[341px] md:w-[270px] h-[720px] px-[8px] pt-[6px]">
          <div className="bg-[#EDF1F8] rounded-4xl">
            <div className="pt-[23px] px-[48px]">
              <h1 className="text-[24px] font-semibold text-[#141A30]">
              Standart
              </h1>
              <p className="text-[#595959] text-[16px] font-normal">
              Perfect for agents and small teams
              </p>
            </div>
            <div className="px-[50px] pt-[24px]">
              <div className="flex gap-[10px] items-center">
              <h2 className="text-[#141A30] text-[48px] font-semibold">
                5
              </h2>
                <span className="text-[14px] font-medium"> videos / month</span>
              </div>
              <p className="text-[#141A30] pt-[16px] w-[170px]">
              <span className="text-[24px] "> $129</span>  per month
              </p>
              <p className="pt-[16px] text-[#595959]">$25.80 / video</p>
            </div>
            <div className="flex items-center justify-center pt-[24px] pb-[32px]">
              <Button
                variant="primary"
                className="rounded-full h-[49px] px-[23px] py-[15px] text-[16px] font-semibold !important"
              >
                <a>Get Started Now for FREE</a>
              </Button>
            </div>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          3 Free AI-Generated Listing Designs
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          20 AI-Generated Listing Designs
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          Delivered in 10 Minutes
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          Avaliable Worldwide
          </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-[white] rounded-4xl w-[341px] md:w-[270px] px-[8px]  h-[720px] pt-[6px]">
          <div className="bg-[#C9FDAB] rounded-4xl">
            <div className="pt-[23px] px-[48px]">
              <h1 className="text-[24px] font-semibold text-[#141A30]">
              Premium
              </h1>
              <p className="text-[#595959] text-[16px] font-normal">
              For high-volume realtors and agencies
              </p>
            </div>
            <div className="px-[50px] pt-[24px]">
              <div className="flex gap-[10px] items-center">
              <h2 className="text-[#141A30] text-[48px] font-semibold">
                15
              </h2>
                <span className="text-[14px] font-medium"> videos / month</span>
              </div>
              <p className="text-[#141A30] pt-[16px] w-[170px]">
              <span className="text-[24px] "> $129</span>  per month
              </p>
              <p className="pt-[16px] text-[#595959]">$25.80 / video</p>
            </div>
            <div className="flex items-center justify-center pt-[15px] pb-[32px]">
              <Button
                variant="primary"
                className="rounded-full h-[49px] px-[23px] py-[15px] text-[16px] font-semibold !important"
              >
                <a>Get Started Now for FREE</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center relative bottom-[20px] ">
            <div className="bg-white px-[23px] py-[10px] rounded-full">Best Value</div>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          15 RealtoGen Drone Videos
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          Unlimited AI-Generated Listing Designs
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          Priority Processing for Faster Turnaround
          </p>
          </div>
          <div className="flex gap-[6px] px-[16px] pt-[18px] items-center">
          <CheckboxIcon />
          <p className="text-[#595959]">
          Avaliable Worldwide
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
