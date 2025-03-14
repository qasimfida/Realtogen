
import HomeHero from "../Components/HomeHeroSec/HomeHero";
import HowItWorks from "../Components/howWork/HowItsWork";
import VirtualDroneSection from "../Components/VirtualDroneSection/VirtualDroneSection";
import PromoSection from "../Components/PromoSection/PromoSection";
import Comparison from "../Components/comparison/Comparison";
import HomeSlider from "../Components/HomeSlider/HomeSlider";
import { Faqs } from "../Components/Faqs/Faqs";
import SpotLight from "../Components/SpotLight/SpotLight";
import CoustomerServices from "../Components/CoustomerServices/CoustomerServices";


export default function Home() {
  return (
    <div className="bg-[#EFF5FD] ">
      <div className=" w-full md:w-[1024px] mx-auto">
      <HomeHero />
      <HomeSlider />
      </div>
      <PromoSection/>
      <CoustomerServices />
      <div className="w-full md:w-[1024px] mx-auto ">
      <VirtualDroneSection />    
      </div>
      <Comparison/>   
      <div className="w-full md:w-[1024px] mx-auto">
      <HowItWorks/>
      <Faqs/>
      <SpotLight/>
      </div>
    </div>
  );
}
