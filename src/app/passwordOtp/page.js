"use client"
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PasswordOtp = () => {
  const [timer, setTimer] = useState(120);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); 
    } else {
      setIsDisabled(false);
    }
  }, [timer]);

  return (
    <div className="pt-[128px] md:pb-[58px]">
      <div className="px-[55px] text-center">
        <h1 className="text-[24px] md:text-[32px] font-semibold">
          Forgot Your Password?
        </h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Enter the 6-digit code sent to your e-mail address.
        </p>
      </div>
      <div className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]">
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className={"text-[16px] font-normal"}>
            Code
          </Label>
          <Input
            className={"rounded-[13px] py-2.5 h-[50px]"}
            type="number"
            id="email"
            placeholder="*******"
          />
        </div>
        <div
          className="bg-gradient-to-r from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-full md:w-[330px] h-[50px] flex justify-center items-center rounded-[8px]"
          style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
        >
          <Button
            variant="primary"
            className="bg-[#426BFF] w-full md:w-[326px] h-[46px] text-white text-[16px] font-semibold"
            disabled={isDisabled}
          >
            <Link href="/loggedIn">Send Code</Link>
            {timer > 0 ? ` ${timer}s` : ""}
          </Button>
        </div>
      </div>
      <div className="px-[55px] pt-[25px] flex flex-col items-center gap-[25px]">
        <p className="text-[#595959] font-bold text-[16px]">
          I don’t have access{" "}
          <Link href={"/register"} className="text-[#595959] font-normal">
            to this e-mail address.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordOtp;
