"use client";

import PropTypes from "prop-types";
import Image from "next/image";

const StepCard = ({ step, title, description, imageSrc }) => {
  return (
    <div
    className="relative bg-[#426BFF] rounded-2xl shadow-md max-w-sm h-[351px] pb-4 text-center border flex flex-col"
    style={{ backgroundColor: "rgba(66, 107, 255, 0.3)" }}
  >
    <div className="absolute md:top-[-40px] top-[-14px] md:left-[-24px] left-[-14px] flex items-center justify-center md:w-[63px] md:h-[63px] w-12 h-12 bg-black text-white rounded-full text-3xl font-semibold mx-auto">
      {step}
    </div>
    
    <h3 className="text-2xl font-semibold text-[#141A30] mt-2 md:py-0 py-4">{title}</h3>
    
    <p className="text-[#141A30] px-4 text-base mt-2 w-[274px] flex-grow">{description}</p>
  
    <div className="mt-auto">
      <Image
        src={imageSrc}
        alt={title}
        width={390}
        height={161}
        className="rounded-b-lg object-cover w-full"
      />
    </div>
  </div>
  
  );
};

StepCard.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default StepCard;
