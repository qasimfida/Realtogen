"use client";

import PropTypes from "prop-types";
import Image from "next/image";

const NewStepCard = ({ step, title, description, imageSrc, imageIcon }) => {
  return (
    <div
      className="relative rounded-lg shadow-lg max-w-sm h-auto pt-[11px] px-[17px] pb-[26px] flex flex-col border-4 md:border-[5px] border-white  "
      style={{
        background: "conic-gradient(from 0deg at 50% 50%, #426BFF 0deg, #284099 360deg)",
      }}
    >
      <div className="absolute md:top-[-40px] top-[-14px] md:left-[-24px] left-[-14px] flex items-center justify-center md:w-[63px] md:h-[63px] w-12 h-12 bg-black text-white rounded-full text-3xl font-semibold mx-auto">
        {step}
      </div>


      <div >
        <Image
          src={imageIcon} 
          alt="Step Icon"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-white mt-[10px] text-[20px] font-cal mb-[20px]">{title}</h3>


      <p className="text-white px-4 md:text-base mt-2 w-full flex-grow font-inter font-normal text-[14px]">
        {description}
      </p>
    </div>
  );
};

NewStepCard.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageIcon: PropTypes.string.isRequired, // ✅ Now added
};

export default NewStepCard;
