"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

const API_URL = "https://06p1dxq3c5.execute-api.us-east-1.amazonaws.com/dev/auth/register"; 

const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const handleCheckboxChange = (checked) => setIsChecked(checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) return alert("Please accept the Terms of Service.");

    setLoading(true);
    setError(null);

    const payload = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed.");

      alert("Registration successful! Please log in.");
      // Redirect to login page
      window.location.href = "/login";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError(null);

    const googlePayload = {
      name,
      email,
  
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(googlePayload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Google Sign-up failed.");

      alert("Google Registration successful!");
      window.location.href = "/loggedIn";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:pt-[64px] md:pb-[58px]">
      <div className="px-[55px] text-center md:mt-0 mt-20">
        <h1 className="text-[24px] md:text-[32px] font-semibold">Create account</h1>
        <p className="text-[16px] text-[#3141A30] font-normal">
          Create an account to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]"
      >
        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="name" className="text-[16px] font-normal">Full Name</Label>
          <Input
            className="rounded-[13px] py-2.5 h-[50px]"
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="grid w-full md:w-[330px] max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-[16px] font-normal">Email</Label>
          <Input
            className="rounded-[13px] py-2.5 h-[50px]"
            type="email"
            id="email"
            placeholder="jhondoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="grid max-w-sm items-center gap-1.5 w-full md:w-[330px]">
          <Label htmlFor="password" className="text-[16px] font-normal">Password</Label>
          <Input
            className="rounded-[13px] py-2.5 h-[50px]"
            type="password"
            id="password"
            placeholder="****************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <label
            htmlFor="terms"
            className="text-sm text-[#595959] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the{" "}
            <Link href="#" className="text-[#5177FE]">Terms of Service</Link>
          </label>
          <Checkbox id="terms" checked={isChecked} onCheckedChange={handleCheckboxChange} />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div
          className="bg-gradient-to-r from-[#ffffff] via-[#5959595e] to-[#f8f8f8] 
          w-full md:w-[330px] h-[50px] flex justify-center items-center rounded-[8px]"
          style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
        >
          <Button
            type="submit"
            variant="primary"
            className="bg-[#426BFF] w-full md:w-[326px] h-[46px] text-white text-[16px] font-semibold"
            disabled={!isChecked || loading}
          >
            {loading ? "Registering..." : "Create account"}
          </Button>
        </div>
      </form>

      <div className="flex flex-col items-center px-[55px] pt-[25px] gap-[25px]">
        <Button
          variant="outline"
          className="w-full md:w-[326px] h-[46px] text-black text-[16px] font-semibold flex gap-2 items-center justify-center"
          onClick={handleGoogleRegister}
          disabled={loading}
        >
          <FaGoogle /> {loading ? "Signing up..." : "Continue with Google"}
        </Button>
        <p className="text-[#595959] md:py-0 py-2">
          Already got an account?{" "}
          <Link href="/login" className="text-[#5378FE]">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
