import { useState } from "react";
import { categories } from "./categories";
import Image from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import { Swiper as TypeSwiper } from "swiper/types";


function MainSection() {
  const [actualCategory, setActualCategory] = useState(0);
  const [swiper, setSwiper] = useState<TypeSwiper>();
  const slideTo = (index: number) => swiper?.slideTo(index);

  return (
    <>
      <div
        className="container-main
        flex
        flex-row
        sm:bg-white
        sm:h-96
        sm:mb-3
        p-3
        gap-5
        xs:mb-[17%]
        xxs:mb-[6%]
        sm:border-2
        border-gray-200
        rounded-lg
        "
      >
        <ul
          className="container-categories-list
            sm:flex
            sm:h-full
            flex-col
            flex-start
            hidden
            "
        >
          {categories.map((category, i) => (
            <li
              onClick={() => {
                setActualCategory(i);
                slideTo(i)
              }}
              key={`${i}main`}
              className={`
                    cursor-pointer
                    text-base
                    flex
                    flex-start
                    hover:text-black
                    py-[10px]
                    lg:w-52
                    sm:w-52
                    pl-[5px]
                    rounded-lg
                    ${actualCategory === i ? 'bg-blue-300 text-black' : 'hover:bg-blue-100 text-gray-600'}
                    `}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActualCategory(swiper.activeIndex)
          }}
          initialSlide={actualCategory}
          spaceBetween={30}
          centeredSlides={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          watchSlidesProgress={true}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          {categories.map((category, i) => (
            <SwiperSlide key={`${i}mainn`}>
              <Image category={category}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MainSection;
