'use client';

import StepCard from './StepForm';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Enter the Address",
      description: "Provide the property address, and our AI automatically locates the closest aerial views—no on‐site filming needed.",
      imageSrc: "/images/step-1.png"
    },
    {
      step: 2,
      title: "Upload Details & Branding",
      description: "Upload Details & Branding Add your logo, images, and key property info. Our system then generates text, voiceovers, and subtitles tailored to your brand.",
      imageSrc: "/images/step-2.png"
    },
    {
      step: 3,
      title: "Finalize and Generate",
      description: " Preview and adjust any elements before clicking “Generate” to produce your fully customized real estate video.",
      imageSrc: "/images/step-3.png"
    }
  ];

  return (
    <div className=" pb-12 text-center md:px-0 px-6">
      <h2 className="text-3xl text-[#141A30] font-semibold py-3">How It Works?</h2>
      <p className="text-[#141A30] font-normal text-2xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16 md:mx-0 mx-2">
        {steps.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>

      <Button className="mt-6 px-10 py-2 bg-[#426BFF] text-white rounded-xl">Try Now</Button>
    </div>
  );
};

export default HowItWorks;
