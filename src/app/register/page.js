"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"; 

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked); 
  };

  return (
    <div className="md:pt-[64px] md:pb-[58px]">
      <div className="px-[55px] text-center">
        <h1 className="text-[24px] md:text-[32px] font-semibold">
          Create account
        </h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Create an account to continue
        </p>
      </div>
      <div className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]">
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className={"text-[16px] font-normal"}>
            Email
          </Label>
          <Input
            className={"rounded-[13px] py-2.5 h-[50px]"}
            type="email"
            id="email"
            placeholder="jhondoe@gmail.com"
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5 w-full md:w-[330px]">
          <Label htmlFor="password" className={"text-[16px] font-normal"}>
            Password
          </Label>
          <Input
            className={"rounded-[13px] py-2.5 h-[50px]"}
            type="password"
            id="password"
            placeholder="****************"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm text-[#595959] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the{" "}
            <Link href={"#"} className="text-[#5177FE]">
              Terms of Service
            </Link>
          </label>
          <Checkbox
            id="terms"
            checked={isChecked} 
            onCheckedChange={handleCheckboxChange} 
          />
        </div>
        <div
          className="bg-gradient-to-r from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-full md:w-[330px] h-[50px] flex justify-center items-center rounded-[8px]"
          style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
        >
          <Button
            variant="primary"
            className="bg-[#426BFF] w-full md:w-[326px] h-[46px] text-white text-[16px] font-semibold"
            disabled={!isChecked} // Disable the button until checkbox is checked
          >
            Create account
          </Button>
        </div>
        <Button
          variant="outline"
          className="w-full md:w-[326px] h-[46px] text-black text-[16px] font-semibold"
        >
          <FaGoogle />
          <Link href="/loggedIn" className="">
            Continue with google
          </Link>
        </Button>
      </div>
      <div className="px-[55px] pt-[25px] flex flex-col items-center gap-[25px]">
        <p className="text-[#595959]">
          Already got an account?{" "}
          <Link href={"/login"} className="text-[#5378FE]">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
