import React from "react";
import InstaIcon from "../../../../public/icons/InstaIcon";
import FacebookIcon from "../../../../public/icons/FacebookIcon";
import YoutubeIcon from "../../../../public/icons/YoutubeIcon";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col pb-[18px] bg-[#141A30] lg:pl-[220px] lg:pr-[196px] px-[14px]">
      <div className="flex flex-col-reverse sm:flex-col sm:items-center lg:flex-row max-sm:items-center lg:gap-[208px] sm:gap-[28px]  pt-[38px] pb-[19px] ">
        <div className="max-sm:pt-[64px] w-full">
          <div className="max-sm:pb-[32px] max-sm:flex max-sm:flex-col max-sm:gap-[32px] ">
            <p className="text-[#ffffff83]">Social Media</p>
            <h1 className="font-semibold text-[32px] text-white">
              Join our community!
            </h1>
          </div>
          <div className="flex gap-[16px] md:pt-[63px]">
            <div className="bg-[#F241AE26] w-[100px] md:w-[123px] h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <InstaIcon />{" "}
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Insta
              </Link>
            </div>
            <div className="bg-[#426BFF26]  w-[100px] md:w-[123px]  h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <FacebookIcon />
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Facebook
              </Link>
            </div>
            <div className="bg-[#D83E3E26] w-[100px] md:w-[123px]  h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <YoutubeIcon />
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Youtube
              </Link>
            </div>
          </div>
          <div className="max-sm:flex pt-[29px] justify-between">
            <div className="">
              <h1 className="text-[#ffffff83] max-sm:mb-[23px]">Quick Links</h1>
              <div className="flex max-sm:flex-col gap-[32px] text-[16px] font-semibold text-white">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Gallery</Link>
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Blogs</Link>
              </div>

            </div>

            <div className="hidden max-sm:flex flex-col gap-[25px] text-[16px] font-semibold text-white">
              <h1 className="text-[#ffffff83]"> Terms & Conditions</h1>
              <Link href={"/"}>Terms of Service</Link>
              <Link href={"/"}>Refund Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookie Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-[14px]">
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-[32px] max-sm:px-[13px]">
            <p className="text-[#ffffff83]">Newsletter</p>
            <h1 className="font-semibold text-[24px] md:text-[32px] text-white py-[11px] max-sm:py-[32px]">
              Stay connected
            </h1>
            <p className="text-[16px] font-normal text-white">
              Get the scoop on real estate trends and Realtogen.ai updates
              directly in your inbox.
            </p>
          </div>
          <div className="mt-[32px] max-sm:gap-[13px] md:mt-[47px] flex justify-between px-[7px] items-center rounded-2xl  bg-white h-[63px] w-[95%] mx-auto md:w-[413px] max-sm:px-[13px]">
            <Input
              placeholder="Enter your email address"
              className={"w-auto md:w-[78%] shadow-none  bg-white focus-visible:ring-0 focus:ring-0 focus:border-transparent border-none outline-none"}
            ></Input>
            <Button variant="primary" className="px-4 py-6">
              <Link href="#">Sign up</Link>
            </Button>
          </div>
          <div className="pt-[42px] max-sm:hidden">
            <h1 className="text-[#ffffff83]">Terms & Conditions</h1>
            <div className="flex gap-[25px] text-[16px] font-semibold text-white">
              <Link href={"/"}>Terms of Service</Link>
              <Link href={"/"}>Refund Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center md:flex-row flex-col-reverse">
        <div className="flex gap-[30px] md:flex-row flex-col">
          <div className="flex text-[18px] font-semibold text-white gap-[9px]">
            <Image
              src="/images/logo.png"
              alt="RealtoGen Logo"
              width={24}
              height={24}
            />
            RealtoGen
          </div>
          <p className="text-[16px] font-medium text-white">
            All rights reserved
          </p>
        </div>
        <div className="pb-[32px]">
          <Button variant={"primary"} className={"rounded-full"}>
            Language:
            <Image
              src={"/images/usa.png"}
              alt="USA Logo"
              width={20}
              height={20}
            ></Image>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
