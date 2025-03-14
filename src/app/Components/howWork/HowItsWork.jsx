import StepCard from './StepForm';
import NewStepCard from './NewStepCard';
import { Button } from '@/components/ui/button';
import { Icon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Enter the Address",
      description: "Provide the property address, and our AI automatically locates the closest aerial views—no onsite filming needed.",
      imageSrc: "/images/step-1.png",
      imageIcon: "/images/Address.png",
    },
    {
      step: 2,
      title: "Upload Details & Branding",
      description: "Upload Details & BrandingAdd your logo, images, and key property info. Our system then generates text, voiceovers, and subtitles tailored to your brand.",
      imageSrc: "/images/step-2.png",
      imageIcon: "/images/Upload.png",
    },
    {
      step: 3,
      title: "Finalize and Generate",
      description: "Preview and adjust any elements before clicking Generate to produce your fully customized real estate video.",
      imageSrc: "/images/step-3.png",
      imageIcon: "/images/Finalize.png",
    }
  ];

  return (
    <div className="pb-12 text-center sm:w-[1224] ">
      <h2 className="text-[32px] text-[#141A30] font-semibold py-3">How It Works?</h2>
      <p className="text-[#141A30] font-normal md:text-[24px] text-[14px] my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex flex-col md:flex-row px-[27px] items-center justify-center gap-4 mt-16 md:mx-0 mx-2 max-sm:hidden">
        {steps.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16 md:mx-0 mx-2 sm:hidden px-[40px]">
        {steps.map((step) => (
          <NewStepCard key={step.step} {...step} />
        ))}
      </div>
      <Button className="mt-6 px-10 py-2 bg-[#426BFF] text-white border-white rounded-lg">Try Now</Button>

      <div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
