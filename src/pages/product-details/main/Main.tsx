import { MdOutlineMessage, MdOutlineShoppingBasket, MdOutlineFavoriteBorder } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Main() {
  return (
    <section className="flex flex-col">
      <div className="">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mainSwiper"
        >
          <SwiperSlide className="flex items-center justify-center bg-white"><img className="h-72 mb-5" src="https://http2.mlstatic.com/D_690274-MLA48158423061_112021-O.jpg" alt="Product Image" /></SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-white"><img className="h-72 mb-5" src="https://http2.mlstatic.com/D_970860-MLA48158406393_112021-O.jpg" alt="Product Image" /></SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-white"><img className="h-72 mb-5" src="https://http2.mlstatic.com/D_917911-MLA48158357875_112021-O.jpg" alt="Product Image" /></SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-white"><img className="h-72 mb-5" src="https://http2.mlstatic.com/D_693754-MLA48158406397_112021-O.jpg" alt="Product Image" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="p-3 bg-white shadow">
        <div className="flex items-center justify-start gap-7">
          <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div><p className="flex items-center gap-1 text-sm font-light text-gray-500"><MdOutlineMessage size={18} />32 reviews</p></div>
          <div><p className="flex items-center gap-1 text-sm font-light text-gray-500"><MdOutlineShoppingBasket size={18} />154 sold</p></div>
        </div>
        <h3 className="text-gray-700 pt-2">Samsung Galaxy A32 Dual Sim 128 Gb Branco 4 Gb Ram</h3>
        <span className="flex items-center gap-2 pt-1"><h3 className="text-red-500 font-medium">R$1.471,08</h3><p className="font-light text-sm text-gray-400">(50-100 un)</p></span>
        <div className="flex items-center gap-2 pt-2">
          <button className="bg-blue-500 rounded-md py-1 px-auto w-full text-white">Adicionar ao carrinho</button>
          <div className="border-solid border-gray-200 border-[1.5px] p-1.5 rounded-md "><MdOutlineFavoriteBorder color="#0086ff" size={20} /></div>
        </div>
        <div className="flex items-center justify-start gap-12">
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
          <p className="text-gray-700 font-light line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit cum beatae iste, expedita aliquid qui facere tempore praesentium nulla quibusdam nesciunt distinctio nisi iure incidunt esse et nobis accusamus.
          </p>
          <span className="text-blue-500 block pt-1 font-medium">Ler mais</span>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Main;
