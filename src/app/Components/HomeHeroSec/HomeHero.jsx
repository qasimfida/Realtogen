import React from 'react'
import CardCompo from '../CardCompo/CardCompo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HomeCards from '../HomeCards/HomeCards'
import img from "/public/images/homeBg.png"
import CardsData from '@/app/Data/HomeCardsData'

const HomeHero = () => {
  return (
    <>
<div className="flex py-[14px] flex-col-reverse md:flex-row md:px-[208px] gap-[32px] px-[17px] bg-cover bg-[url('/images/homeBg.png')]">

      <div className='flex flex-col items-cente md:items-start'>
        <h2 className='text-[#426BFF] font-semibold leading-[60px] text-[48px] md:text-[64px]'>Generate Drone Videos Instantly</h2>
        <div className='pt-[32px]'>
          <p className='text-[16px]'>📍 Turn Any Address into Stunning 3D Drone Videos for <span className='font-bold text-[#141A30]'>Real Estate</span> <span className='text-[#426BFF] font-bold'>-within minutes!</span></p>
          <p className='pt-[16px]'>No filming. No hassle. Save time and money with Realtogen AI drone shots.</p>
        </div>
        <div
            className="bg-gradient-to-r mt-[32px] from-[#ffffff] via-[#5959595e] to-[#f8f8f8] w-[209px] md:w-[152px] h-[50px] flex justify-center items-center rounded-[8px]"
            style={{ boxShadow: "0 3px 14px 3px rgba(66, 107, 255, 0.3)" }}
          >
            <Button
              variant="primary"
              className="bg-[#426BFF] w-[207px] md:w-[150px] h-[46px] text-white text-[16px] font-semibold"
            >
              <Link href="/loggedIn">Generate Now</Link>
            </Button>
          </div>
          <p className='pt-[17px] text-[#5278FE] text-[17px] font-normal'>Try Our <span className='font-bold'> Free Listing Designer</span></p>
      </div>
      <div>
        <CardCompo/>
      </div>
    </div> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[23px] px-[19px] md:px-[208px] pt-[48px]">
  {CardsData.map((card) => (
    <HomeCards key={card.id} text={card.text} img={card.img} />
  ))}
</div>
      </>
  )
}

export default HomeHero
