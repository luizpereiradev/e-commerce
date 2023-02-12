import React, {useEffect, useState} from "react";
import Countdown from "./Countdown";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SwiperProducts from "./SwiperProducts";
import useWindowDimensions  from "../../hooks/useWindowsDimension";


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
        <div className="lg:flex sm:text-xl">
            <div className="lg:w-1/5 lg:flex-col flex items-center bg-white px-3 sm:px-10">
                <div className="lg:w-full flex w-1/2 h-24 flex-col justify-center">
                    <p className="font-bold lg:text-lg">Deals and Offer</p>
                    <h1 className="font-light lg:text-base">Second Section</h1>
                </div>
                <Countdown />
            </div>
            <div className="lg:w-4/5">
            <Swiper
                slidesPerView={slidesPerView}
                modules={[Pagination]}
                className="mySwiper"
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