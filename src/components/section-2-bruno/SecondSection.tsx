import React from "react";
import Countdown from "./Countdown";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SwiperProducts from "./SwiperProducts";

export default function SecondSection() {
    return (
        <div>
            <div className="flex items-center bg-white pr-3 pl-1">
                <div className="flex w-1/2 h-24 flex-col justify-center">
                    <p className="font-bold">Deals and Offer</p>
                    <h1 className="font-light">Second Section</h1>
                </div>
                <Countdown />
            </div>
            <div>
            <Swiper
                slidesPerView={2}
                modules={[Pagination]}
                className="mySwiper"
            >
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