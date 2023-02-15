import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowsDimension";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
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
    <section className="lg:flex lg:flex-row lg:w-full mt-3 lg:h-64 overflow-hidden rounded-lg">
      <div className="hidden relative lg:block w-[47.4%] bg-[url('./img/electronics.png')] bg-cover">

        <div className="flex flex-col w-[70%] p-4 gap-5 relative z-10">
          <h2 className="text-black font-medium text-xl">
            Consumer electronics and gadgets
          </h2>
          <button className="bg-white text-black rounded-xl w-32 py-2">Source now</button>
        </div>
        <div className="absolute w-full h-full bg-white opacity-30 top-0"></div>
      </div>
      <div className="lg:flex">
        <div className="bg-white lg:hidden">
          <h2 className="text-black font-medium p-3 text-xl">
            Consumer electronics
          </h2>
        </div>
        <div className="hidden lg:flex flex-wrap">
          {Array(8)
            .fill("")
            .map((item, x) => (
              <ProductCard />
            ))}
        </div>
        <div className="lg:hidden">
          <Swiper slidesPerView={slidesPerView}>
            {Array(8)
              .fill("")
              .map((item, x) => (
                <SwiperSlide key={x}>
                  <ProductCard />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="bg-white border-b-[1px] lg:hidden">
          <h3 className="text-blue-500 p-3 text-lg">Source now →</h3>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
