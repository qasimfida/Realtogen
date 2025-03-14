import React from 'react';
import Image from "next/image";


const CardCompo = () => {
  return (
    <div
      style={{ boxShadow: 'box-shadow: 4px 4px 11px 0px #aba8a8;' }}
      className="w-full h-[243px] md:w-[495px] md:h-[278px] bg-[#d9d9d99a] flex items-center justify-center rounded-2xl"
    >
      <Image src="/link.svg" alt="Image description" width={28} height={20} className="" />
    </div>
  );
};

export default CardCompo;
