import { useState } from "react";
import { BsCheck2, BsChevronRight, BsChevronDown } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Tabs( { atributes }: { atributes: { name: string; value_name: string; }[] }) {
  const [toggleState, setToggleState] = useState(1);
  const [esp, setEsp] = useState(false);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="flex flex-col relative w-full lg:w-4/5 bg-white mt-5 my-auto mb-0 break-all border-opacity-25">
      <div className="flex">
        <Swiper
          spaceBetween={0}
          className="h-full"
          grid={{ rows: 1, fill: "row" }}
          slidesPerView={2}
        >
          <SwiperSlide>
            <button
              className={
                toggleState === 1
                  ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
                  : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
              }
              onClick={() => toggleTab(1)}
            >
              <span
                className={
                  toggleState === 1 ? "text-blue-400" : "text-gray-400"
                }
              >
                Description
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={
                toggleState === 2
                  ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
                  : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
              }
              onClick={() => toggleTab(2)}
            >
              <span
                className={
                  toggleState === 2 ? "text-blue-400" : "text-gray-400"
                }
              >
                Reviews
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={
                toggleState === 3
                  ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
                  : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
              }
              onClick={() => toggleTab(3)}
            >
              <span
                className={
                  toggleState === 3 ? "text-blue-400" : "text-gray-400"
                }
              >
                Shipping
              </span>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={
                toggleState === 4
                  ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 box-content relative border-solid outline-none"
                  : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
              }
              onClick={() => toggleTab(4)}
            >
              <span
                className={
                  toggleState === 4 ? "text-blue-400" : "text-gray-400"
                }
              >
                About
              </span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex-grow bg-white">
        <div
          className={
            toggleState === 1
              ? "p-5 w-full h-full block"
              : "p-5 w-full h-full hidden"
          }
        >
          <h2>Content 1</h2>
          <hr />

          <button className="flex items-center gap-3" onClick={() => setEsp(!esp)}>
            Especificações Técnicas
            {esp ? (<BsChevronDown size={20} />) : <BsChevronRight size={20}/>}
          </button>
          {
            esp &&
            <div className="w-full flex flex-col pt-6">
            {
              atributes.map((atribute) => {
                if(!atribute.value_name || !atribute.name) return null;
                return (
                  <div className="flex border-[1px] items-center border-gray-200">
                  <div className="min-w-[25%] w-1/4 bg-gray-100 ">
                    <h4 className="text-sm p-1">{atribute.name}</h4>
                  </div>
                  <div>
                    <p className="pl-2 text-sm">{atribute.value_name}</p>
                  </div>
                </div>
              )})
            }
          </div>
          }
          <p className="flex items-center gap-1 pt-2">
            <span>
              <BsCheck2 />
            </span>
            Some great feature name here
          </p>
          <p className="flex items-center gap-1 pt-2">
            <span>
              <BsCheck2 />
            </span>
            Some great feature name here
          </p>
          <p className="flex items-center gap-1 pt-2">
            <span>
              <BsCheck2 />
            </span>
            Some great feature name here
          </p>
          <p className="flex items-center gap-1 pt-2">
            <span>
              <BsCheck2 />
            </span>
            Some great feature name here
          </p>
        </div>
        <div
          className={
            toggleState === 2
              ? "p-5 w-full h-full block"
              : "p-5 w-full h-full hidden"
          }
        >
          <h2>Content 2</h2>
          <hr />
          <div className="flex pt-2">
            <div className="avatar gap-2 items-center">
              <div className="w-10 rounded">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <p>User Name</p>
            </div>
              <div className="rating pl-2 items-center">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
          </div>
          <div className="w-full pt-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quos debitis alias ullam assumenda nemo animi exercitationem natus non illum et, 
              ipsa recusandae doloribus rerum doloremque sed vitae dolores provident blanditiis?</p>
          </div>
          <div className="flex pt-2">
            <div className="avatar gap-2 items-center">
              <div className="w-10 rounded">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <p>User Name</p>
            </div>
              <div className="rating pl-2 items-center">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
          </div>
          <div className="w-full pt-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quos debitis alias ullam assumenda nemo animi exercitationem natus non illum et, 
              ipsa recusandae doloribus rerum doloremque sed vitae dolores provident blanditiis?</p>
          </div>
        </div>

        <div
          className={
            toggleState === 3
              ? "p-5 w-full h-full block"
              : "p-5 w-full h-full hidden"
          }
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={
            toggleState === 4
              ? "p-5 w-full h-full block"
              : "p-5 w-full h-full hidden"
          }
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
