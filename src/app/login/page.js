"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "@/app/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="md:py-40 py-20 ">
      <div className="px-[55px] text-center md:mt-0 mt-20">
        <h1 className="text-[24px] md:text-[32px] font-semibold">
          Login to your account
        </h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Welcome! Please log in to continue.
        </p>
      </div>
      <div className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]">
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="jhondoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid max-w-sm items-center gap-1.5 w-full md:w-[330px]">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="****************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          className="bg-[#426BFF] w-full md:w-[326px] h-[46px] text-white"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>

        <Button variant="outline" className="w-full md:w-[326px] h-[46px]">
          <FaGoogle />
          <span className="ml-2">Continue with Google</span>
        </Button>
      </div>
      <div className="px-[55px] pt-[25px] flex flex-col items-center gap-[25px]">
        <p className="text-[#595959]">
          <a href="/forgetPassword">Forgot password?</a>
        </p>
        <p className="text-[#595959] md:py-0 py-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#5378FE]">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
