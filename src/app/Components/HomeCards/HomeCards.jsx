import React from 'react';
import CommaIcon from '../../../../public/icons/CommaIcon';

const HomeCards = ({ text, img }) => {
  return (
    <>
      <div className="px-[16px]">
        <div className="flex gap-[10px] relative top-[10px]">
          <CommaIcon />
          <CommaIcon />
        </div>
        
        {/* Card */}
        <div className="flex gap-[20px] justify-center bg-white w-full sm:w-[233px] h-auto rounded-[12px] px-[15px] py-[21px]">
          <div className="flex flex-col justify-between items-center sm:items-start">
            <p className="text-[14px] sm:text-[16px] font-normal h-[84px] text-center sm:text-left">
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
