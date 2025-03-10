"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const ChangeEmail = () => {

  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");


  const isFormValid = () => {
    return email !== "" && newEmail !== "" && password !== "";
  };

  return (
    <div className="md:pt-[64px] md:pb-[58px]">
      <div className="px-[55px] text-center">
        <h1 className="text-[24px] md:text-[32px] font-semibold">
          Change Email Address
        </h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Change your email address.
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="new-email" className={"text-[16px] font-normal"}>
            New Email
          </Label>
          <Input
            className={"rounded-[13px] py-2.5 h-[50px]"}
            type="email"
            id="new-email"
            placeholder="jhondoe2@gmail.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          className="bg-gradient-to-r from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-full md:w-[330px] h-[50px] flex justify-center items-center rounded-[8px]"
          style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
        >
          <Button
            variant="primary"
            className="bg-[#426BFF] w-full md:w-[326px] h-[46px] text-white text-[16px] font-semibold"
            disabled={!isFormValid()} // Disable the button if form is not valid
          >
            <Link href="/loggedIn">Change Email Address</Link>
          </Button>
        </div>
      </div>
      <div className="px-[55px] pt-[25px] flex flex-col items-center gap-[25px]">
        <p className="text-[#595959]">Forgot password?</p>
      </div>
    </div>
  );
};

export default ChangeEmail;
