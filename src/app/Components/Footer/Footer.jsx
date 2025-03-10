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
    <div className="flex flex-col pb-[18px] bg-[#141A30] md:pl-[220px] md:pr-[196px] px-[14px]">
      <div className="flex flex-col-reverse md:flex-row max-sm:items-center md:gap-[208px] pt-[38px] pb-[19px] ">
        <div className="max-sm:pt-[64px]">
          <div className="max-sm:pb-[32px] max-sm:flex max-sm:flex-col max-sm:gap-[32px]">
            <p className="text-[#ffffff83]">Social Media</p>
            <h1 className="font-semibold text-[32px] text-white">
              Join our community!
            </h1>
          </div>
          <div className="flex gap-[16px] md:pt-[63px]">
            <div className="bg-[#f241ae4d] w-[100px] md:w-[123px] h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <InstaIcon />{" "}
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Insta
              </Link>
            </div>
            <div className="bg-[#426bff5d] w-[100px] md:w-[123px]  h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <FacebookIcon />
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Facebook
              </Link>
            </div>
            <div className="bg-[#d83e3e71] w-[100px] md:w-[123px]  h-[100px] md:h-[123px] rounded-2xl flex flex-col items-center justify-center">
              <YoutubeIcon />
              <Link
                href={"#"}
                className="text-[16px] pt-[12px] font-semibold text-white"
              >
                Youtube
              </Link>
            </div>
          </div>
          <div className="pt-[29px]">
            <h1 className="text-[#ffffff83]">Quick Links</h1>
            <div className="flex max-sm:flex-col gap-[25px] text-[16px] font-semibold text-white">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Gallery</Link>
              <Link href={"/"}>Features</Link>
              <Link href={"/"}>Pricing</Link>
              <Link href={"/"}>Blogs</Link>
            </div>
          </div>
        </div>
        <div >
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-[32px]">
            <p className="text-[#ffffff83]">Newsletter</p>
            <h1 className="font-semibold text-[24px] md:text-[32px] text-white">
              Stay connected
            </h1>
            <p className="text-[16px] font-normal text-white">
              Get the scoop on real estate trends and Realtogen.ai updates
              directly in your inbox.
            </p>
          </div>
          <div className="mt-[32px] max-sm:gap-[13px] md:mt-[47px] flex justify-center items-center rounded-2xl bg-white h-[63px] w-auto md:w-[413px]">
            <Input
              placeholder="Enter your email address"
              className={"w-auto md:w-[78%] border-white bg-white"}
            ></Input>
            <Button variant={"primary"}>
              <Link href={"#"}>Sign up</Link>
            </Button>
          </div>
          <div className="pt-[42px] hidden">
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
