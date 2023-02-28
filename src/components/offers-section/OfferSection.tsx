import { useEffect, useState } from "react";
import Countdown from "./Countdown";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
// import required modules
import useWindowDimensions from "../../hooks/useWindowsDimension";
import SwiperProducts from "./SwiperProducts";
import { getProductsFromCategoryAndQuery } from "../../services/categories";

export default function SecondSection() {
  const { width } = useWindowDimensions();
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    getProductsFromCategoryAndQuery("MLB3937").then((data) => {
      setProducts(data.results);
    });
  }, []);

  const percentages = [30, 20, 20, 30, 40, 50, 40, 50]

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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {products
            .map((product, x) => (
              <SwiperSlide key={`${x}Offer`}>
                <SwiperProducts percentage={percentages[x % percentages.length]} product={product}/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
