
import HomeHero from "../Components/HomeHeroSec/HomeHero";
import HowItWorks from "../Components/howWork/HowItsWork";
import VirtualDroneSection from "../Components/VirtualDroneSection/VirtualDroneSection";
import PromoSection from "../Components/PromoSection/PromoSection";
import Comparison from "../Components/comparison/Comparison";
import HomeSlider from "../Components/HomeSlider/HomeSlider";
import { Faqs } from "../Components/Faqs/Faqs";
import SpotLight from "../Components/SpotLight/SpotLight";


export default function Home() {
  return (
    <div className="bg-[#EFF5FD]">
      <HomeHero />
      <HomeSlider />
      <PromoSection/>
      <Comparison/>
      <HowItWorks/>
      <VirtualDroneSection />
      <Faqs/>
      <SpotLight/>
    </div>
  );
}
