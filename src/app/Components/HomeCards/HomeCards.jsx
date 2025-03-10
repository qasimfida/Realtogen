import React from 'react';
import CommaIcon from '../../../../public/icons/CommaIcon';

const HomeCards = ({ text, img }) => {
  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="flex gap-[10px] relative top-[10px]">
          <CommaIcon />
          <CommaIcon />
        </div>
        
        {/* Card */}
        <div className="flex gap-4 sm:gap-8 justify-center bg-white w-full sm:w-[233px] h-auto rounded-[8px] px-[15px] py-4 sm:py-6">
          <div className="flex flex-col justify-between items-center sm:items-start">
            <p className="text-[14px] sm:text-[16px] font-normal pt-4 sm:pt-[26px] h-[84px] text-center sm:text-left">
              {text}
            </p>
            <img 
              src={img.src} 
              alt="card image" 
              className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover" 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCards;
