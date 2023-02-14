import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowsDimension";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
// import required modules

function CategorySection() {
  const { width } = useWindowDimensions();
  const getSlidesPerViews = () => {
    if (width <= 320) return 2;
    if (width <= 640) return 3;
    if (width <= 1024) return 4;
    if (width > 1024) return 5;
  };
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerViews());
  useEffect(() => {
    setSlidesPerView(getSlidesPerViews());
  }, [width]);

  return (
    <section className='mt-5'>
      <div className='bg-white'>
        <h2 className='text-black font-medium p-3 text-xl'>Consumer electronics</h2>
      </div>
      <div className="lg:w-4/5">
        <Swiper slidesPerView={slidesPerView}>
          { Array(10).fill('').map((item, x) => (
          <SwiperSlide key={ x }>
            <ProductCard />
          </SwiperSlide>
          )) }
        </Swiper>
      </div>
      <div className='bg-white border-b-[1px]'>
        <h3 className='text-blue-500 p-3 text-lg'>Source now →</h3>
      </div>
    </section>
  );
}

export default CategorySection;
