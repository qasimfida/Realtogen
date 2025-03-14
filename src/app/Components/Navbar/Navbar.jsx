"use client";

import Link from "next/link";
import usa from "../../../../public/images/usa.png"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="flex justify-center">
    <div
        className={`fixed top-0 max-sm:px-[14px] w-full max-w-[1000px] mx-auto md:pr-[20px] py-4 flex items-center justify-between transition-all duration-300 z-50 ${
          isScrolled ? "bg-white shadow-md border-b rounded-full mt-2  w-full max-w-[1018px] mx-auto px-4 md:px-[20px]" : "bg-transparent"
        }`}
      >

        <div className="flex items-center gap-8">
          <Link href="/home" className="flex items-center gap-2 text-[18px] font-bold">
            <Image src="/images/rlatogen.png" alt="RealtoGen Logo" width={30} height={30} />
            RealtoGen
          </Link>

          <div className="hidden md:flex gap-8 text-[16px] font-medium">
            <Link href="/gallery">Gallery</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>

        
        <div className="hidden md:flex items-center text-[16px] font-semibold gap-6">
          <Link href="/login">Log in</Link>
          <Link href="/free-page">
            <button className="text-[#426BFF] bg-[#426BFF40] px-5 py-2 rounded-full">
              Try For Free Now
            </button>
          </Link>
      
           
            <Image
              src={usa}
              alt="USA Logo"
              width={20}
              height={20}
            ></Image>
      
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>
      </div>
    </div>
      

      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 mt-16 shadow-md">
          <Link href="/gallery" className="block py-2">
            Gallery
          </Link>
          <Link href="/features" className="block py-2">
            Features
          </Link>
          <Link href="/pricing" className="block py-2">
            Pricing
          </Link>
          <Link href="/blogs" className="block py-2">
            Blogs
          </Link>

          <div className="mt-4">
            <Link href="/login" className="block py-2">
              Log in
            </Link>
            <Link href="/free-page">
              <button className="block w-full text-[#426BFF] bg-[#426BFF40] px-5 py-2 rounded-full">
                Try For Free Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
