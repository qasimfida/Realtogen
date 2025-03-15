"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CommaIcon from "../../../../public/icons/CommaIcon";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerSlider = ({ CoustomerData }) => {
    const swiperRef = useRef(null);

    const groupedData = [];
    for (let i = 0; i < CoustomerData.length; i += 6) {
        groupedData.push(CoustomerData.slice(i, i + 6));
    }

    return (
        <div
            className="flex justify-center pb-[36px] md:pb-[138px]"
            onMouseEnter={() => swiperRef.current?.swiper?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.swiper?.autoplay.start()}
        >
            <div className="w-[100%] max-w-[1400px]">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="sm:w-full"
                >
                    {groupedData.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid mx-auto sm:grid-cols-3 max-sm:grid-cols-1 gap-[80px] gap-y-5 sm:w-[1440px] w-[90%] sm:mx-auto">
                                {group.map((item) => (
                                    <div
                                        key={item.id}
                                        className="mx-auto cursor-pointer flex gap-[6px] justify-center max-w-[450px] w-[90%] max-sm:px-[17px] max-sm:py-[36px] relative bg-white h-auto mt-[20px] sm:pl-[36px] sm:pr-[64px] sm:pt-[27px] sm:pb-[23px] rounded-[12px]"
                                    >
                                        <div className="flex gap-[10px] absolute top-[-8px] left-[19px] z-10 ">
                                            <CommaIcon />
                                            <CommaIcon />
                                        </div>

                                        <div className="flex flex-col sm:w-[427px] gap-[6px] items-start">
                                            <p className="text-start text-[16px] font-medium md:text-[16px] md:font-medium leading-[18px] text-[#141A30]">
                                                {item.text}
                                            </p>
                                            <div className="flex items-start gap-[10px] sm:gap-[15px]">
                                                <span className="font-normal text-[16px] text-[#595959]">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sm:absolute sm:w-auto sm:-right-[50px] sm:top-[10px] max-sm:flex max-sm:justify-center max-sm:items-center w-full">
                                            <Image
                                                src={item.img}
                                                alt="customer image"
                                                className="sm:object-cover rounded-full max-sm:w-auto max-sm:h-[60px]"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerSlider;
