import { MdOutlineMessage, MdOutlineShoppingBasket, MdOutlineFavoriteBorder, MdArrowForwardIos, MdVerified, MdOutlineLocalShipping } from "react-icons/md";
import { GiBrazilFlag } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Pagination, Navigation, FreeMode } from "swiper";
import React, { useState } from "react";
import { Swiper as TypeSwiper } from "swiper/types";

function Main({ product } : { product: {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  pictures:{url: string}[];
}}) {
  const [readMore, setReadMore] = useState(false);
  const [actualImg, setActualImg] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<TypeSwiper>();
  const slideTo = (index: number) => thumbsSwiper?.slideTo(index);

  return (
    <section className="flex flex-col lg:justify-between md:mx-3 lg:mx-1 md:flex-row md:shadow md:rounded-lg md:overflow-hidden bg-white">
      <div className="md:hidden select-none">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mainSwiper"
        >
          { product.pictures.map(({url}) => url).map((img) => (
            <SwiperSlide className="flex items-center justify-center bg-white"><img className="h-72 mb-5" src={img} alt="Product Image" /></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden bg-white md:block w-72 p-2 select-none">
        <Swiper
          style={{
            "--swiper-navigation-color": "#aaa",
            "--swiper-pagination-color": "#aaa",
          } as React.CSSProperties}
          spaceBetween={10}
          navigation={true}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation]}
          className="mySwiper bg-white h-72"
          onNavigationNext={ () => setActualImg(actualImg + 1)}
          onNavigationPrev={ () => setActualImg(actualImg - 1)}
        >
          { product.pictures.map(({url}) => url).map((img) => (
            <SwiperSlide className="flex items-center justify-center"><img className="h-64" src={img} alt="Product Image" /></SwiperSlide>
          ))}
        </Swiper>
        <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper mt-3"
      >
          { product.pictures.map(({url}) => url).map((img, i) => (
            <SwiperSlide onClick={() => { setActualImg(i); slideTo(i); }} className={` bg-white rounded-md py-1.5 flex justify-center border-solid border-[1px] ${actualImg === i && 'border-blue-500 boder-[2px]'}`}><img className="h-12" src={img} alt="Product Image" /></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-3 bg-white shadow md:shadow-none lg:w-[45%]">
        <div className="md:flex md:flex-col-reverse">
          <div className="flex items-center justify-start gap-7">
          <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div><p className="flex items-center gap-1 text-sm font-light text-gray-500"><MdOutlineMessage size={18} />32 avaliações</p></div>
          <div><p className="flex items-center gap-1 text-sm font-light text-gray-500"><MdOutlineShoppingBasket size={18} />154 vendidos</p></div>
          </div>
          <h3 className="text-gray-700 pt-2">{product.title}</h3>
        </div>
        <span className="flex items-center gap-2 pt-1"><h3 className="text-red-500 font-medium">R${product.price}</h3><p className="font-light text-sm text-gray-400">(50-100 un)</p></span>
        <div className="flex items-center gap-2 pt-2">
          <button className="bg-blue-500 rounded-md py-1 px-auto w-full text-white">Adicionar ao carrinho</button>
          <div className="border-solid border-gray-200 border-[1.5px] p-1.5 rounded-md"><MdOutlineFavoriteBorder color="#0086ff" size={20} /></div>
        </div>
        <div className={`flex items-center justify-start gap-12 ${readMore && 'hidden'}`}>
          <p className="flex flex-col pt-4 gap-1">
            <span className="text-gray-400 font-light">Condição</span>
            <span className="text-gray-400 font-light">Material</span>
            <span className="text-gray-400 font-light">Categoria</span>
            <span className="text-gray-400 font-light">ID do Produto</span>
          </p>
          <p className="flex flex-col pt-4 gap-1">
            <span className="text-gray-700 font-light">Novo</span>
            <span className="text-gray-700 font-light">Plastico</span>
            <span className="text-gray-700 font-light">Eletrônicos, Smartphones</span>
            <span className="text-gray-700 font-light">MLB2081672291</span>
          </p>
        </div>
        <div className="pt-4">
          <p className={`text-gray-700 font-light overflow-auto h-[194px] ${!readMore && 'line-clamp-3 h-[70px]'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia iusto pariatur ducimus sequi dolor, sit commodi temporibus. Repudiandae iste ex repellat animi quod commodi nisi tenetur consequuntur, qui eligendi earum dolores nemo eaque vero sequi impedit veritatis cumque sit debitis error ea sapiente! Facilis aspernatur id tenetur magnam, iusto praesentium mollitia. Aut minus facilis dicta dolores quibusdam a, cum sequi. ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia iusto pariatur ducimus sequi dolor, sit commodi temporibus. Repudiandae iste ex repellat animi quod commodi nisi tenetur consequuntur, qui eligendi earum dolores nemo eaque vero sequi impedit veritatis cumque sit debitis error ea sapiente! Facilis aspernatur id tenetur magnam, iusto praesentium mollitia. Aut minus facilis dicta dolores quibusdam a, cum sequi.
          </p>
          <span onClick={() => setReadMore(!readMore)} className="text-blue-500 block pt-1 font-medium cursor-pointer hover:text-blue-800 select-none">{!readMore ? 'Ler mais' : 'Ler menos'}</span>
        </div>
      </div>
      <div className="flex flex-col bg-white p-3 m-3 lg:h-max border-solid border-gray-200 border-[1px] rounded-lg md:hidden lg:flex">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            <picture className="bg-teal-100 text-teal-300 text-3xl rounded-md py-3 px-4">N</picture>
            <p className="font-light text-gray-700"><span>Vendedor</span><br /><span>Next Smartphones</span></p>
          </div>
          <MdArrowForwardIos className="md:hidden" size={20} />
        </div>
        <hr className="w-full my-3" />
        <div className="flex md:flex-col md:items-start items-center md:gap-2 justify-between text-gray-700 font-light">
          <p className="flex items-center gap-1"><GiBrazilFlag size={22} /><span>Tubarão - SC</span></p>
          <p className="flex items-center gap-1"><MdVerified size={22} /><span>Verificado</span></p>
          <p className="flex items-center gap-1"><MdOutlineLocalShipping size={22} /><span>Frete grátis</span></p>
        </div>
      </div>
    </section>
  );
}

export default Main;
