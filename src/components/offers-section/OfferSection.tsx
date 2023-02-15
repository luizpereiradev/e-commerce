import { useEffect, useState } from "react";
import Countdown from "./Countdown";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import useWindowDimensions from "../../hooks/useWindowsDimension";
import SwiperProducts from "./SwiperProducts";


export default function SecondSection() {
    const {width} = useWindowDimensions();
    const getSlidesPerViews = () => {
        if(width <= 320) return 2;
        if(width <= 640) return 3;
        if(width <= 1024) return 4;
        if(width > 1024) return 5;
    }
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerViews());
    useEffect(() => {
        setSlidesPerView(getSlidesPerViews());
        console.log(slidesPerView)
    }, [width])

    return (
        <div className="lg:flex rounded-lg overflow-hidden border-gray-200 border-[1px] w-full lg:h-56 sm:text-xl">
            <div className="lg:w-[256px] lg:flex-col flex items-center bg-white px-3 sm:px-10 lg:px-4 lg:gap-2 ">
                <div className=" flex w-1/2 lg:w-full h-24 flex-col justify-center">
                    <p className="font-bold text-black lg:text-lg">Deals and Offer</p>
                    <h1 className="font-light text-base text-gray-500">Second Section</h1>
                </div>
                <Countdown />
            </div>
            <div className="lg:w-[780px] h-56">
              <Swiper
                  slidesPerView={slidesPerView}
              >
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
                  <SwiperSlide><SwiperProducts/></SwiperSlide>
              </Swiper>
            </div>
        </div>
    );
    }