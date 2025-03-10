"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-[16px] py-[26px] md:px-[220px] md:py-[10px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex gap-[9px] text-[18px] font-semibold">
            <Link href="/home" className="flex gap-[9px] text-[18px] font-semibold">
            <Image src="/images/logo.png" alt="RealtoGen Logo" width={30} height={30} />
            RealtoGen
            </Link>
          
          </div>
          <div className="hidden md:flex gap-[30px] text-[16px] font-medium">
            <Link href="/gallery">Gallery</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Hamburger Icon */}
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>

        {/* Right-side items */}
        <div className="hidden md:flex items-center text-[16px] font-semibold gap-[28px]">
          <Link href="/login">Log in</Link>
          <button className="text-[#426BFF] bg-[#426BFF40] px-[20px] py-[10px] rounded-4xl">
            <Link href="/free-page">Try For Free Now</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu (when isMenuOpen is true) */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-[20px] px-[30px]`}
      >
        <Link href="/gallery" className="block py-2">Gallery</Link>
        <Link href="/features" className="block py-2">Features</Link>
        <Link href="/pricing" className="block py-2">Pricing</Link>
        <Link href="/blogs" className="block py-2">Blogs</Link>

        <div className="mt-4">
          <Link href="/login" className="block py-2">Log in</Link>
          <button className="block w-full text-[#426BFF] bg-[#426BFF40] px-[20px] py-[10px] rounded-4xl">
            <Link href="/free-page">Try For Free Now</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;
