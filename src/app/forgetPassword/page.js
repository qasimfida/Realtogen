"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    try {
      const response = await forgotPassword(email);
      alert(response.message || "Password reset link sent successfully!");
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to send password reset link.");
    }
  };
  

  return (
    <div className="md:py-40 py-20">
      <div className="px-[55px] text-center">
        <h1 className="text-[24px] md:text-[32px] font-semibold">
          Forgot Your Password?
        </h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Don't worry, change it with just one click.
        </p>
      </div>
      <div className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]">
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-[16px] font-normal">
            Email
          </Label>
          <Input
            className="rounded-[13px] py-6"
            type="email"
            id="email"
            placeholder="jhondoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className="bg-gradient-to-r from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-full md:w-[330px] h-[50px] flex justify-center items-center rounded-[8px]"
          style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
        >
          <Button
            variant="primary"
            className="bg-[#426BFF] w-full md:w-[326px] py-6 text-white text-[16px] font-semibold"
            onClick={handleForgotPassword}
          >
            Send Code
          </Button>
        </div>
      </div>
      <div className="px-[55px] pt-[25px] flex flex-col items-center gap-[25px]">
        <p className="text-[#595959] font-bold text-[16px]">
          I don’t have access{" "}
          <Link href="/register" className="text-[#595959] font-normal">
            to this e-mail address.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
