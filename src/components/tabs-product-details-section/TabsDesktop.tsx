import { useState } from "react";
import {BsCheck2} from "react-icons/bs";
export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="flex flex-col relative w-full lg:w-4/5 h-80 bg-white mt-24 my-auto mb-0 break-all border-opacity-25">
      <div className="flex">
        <button
          className={
            toggleState === 1
              ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
              : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
          }
          onClick={() => toggleTab(1)}
        >
          <span
            className={toggleState === 1 ? "text-blue-400" : "text-gray-400"}
          >
            Description
          </span>
        </button>
        <button
          className={
            toggleState === 2
              ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
              : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
          }
          onClick={() => toggleTab(2)}
        >
          <span
            className={toggleState === 2 ? "text-blue-400" : "text-gray-400"}
          >
            Reviews
          </span>
        </button>
        <button
          className={
            toggleState === 3
              ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 relative border-solid outline-none"
              : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
          }
          onClick={() => toggleTab(3)}
        >
          <span
            className={toggleState === 3 ? "text-blue-400" : "text-gray-400"}
          >
            Shipping
          </span>
        </button>
        <button
          className={
            toggleState === 4
              ? "w-full py-4 text-center px-5 bg-white cursor-pointer border-b-2 border-blue-400 box-content relative border-solid outline-none"
              : "w-full py-4 text-center px-5 bg-white-300 cursor-pointer border-b-2 border-opacity-25 relative border-solid outline-none"
          }
          onClick={() => toggleTab(4)}
        >
          <span
            className={toggleState === 4 ? "text-blue-400" : "text-gray-400"}
          >
            About Company
          </span>
        </button>
      </div>

      <div className="flex-grow">
        <div
          className={
            toggleState === 1
              ? "p-5 w-full h-full block"
              : "p-5 w-full h-full hidden"
          }
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
          <div className="w-full flex flex-col pt-6">
            <div className="flex border-[1px] items-center border-gray-200">
              <div className="w-1/4 bg-gray-100 ">
                <h4 className=" p-1">Text</h4>
              </div>
              <div>
                <p className="pl-2 ">Lorem Ipsum dolor</p>
              </div>
            </div>
            <div className="flex border-[1px] items-center border-gray-200">
              <div className="w-1/4 bg-gray-100 ">
                <h4 className=" p-1">Text</h4>
              </div>
              <div>
                <p className="pl-2 ">Lorem Ipsum dolor</p>
              </div>
            </div>
            <div className="flex border-[1px] items-center border-gray-200">
              <div className="w-1/4 bg-gray-100 ">
                <h4 className=" p-1">Text</h4>
              </div>
              <div>
                <p className="pl-2 ">Lorem Ipsum dolor</p>
              </div>
            </div>
            <div className="flex border-[1px] items-center border-gray-200">
              <div className="w-1/4 bg-gray-100 ">
                <h4 className=" p-1">Text</h4>
              </div>
              <div>
                <p className="pl-2 ">Lorem Ipsum dolor</p>
              </div>
            </div>
          </div>
          <p className="flex items-center gap-1 pt-2"><span><BsCheck2/></span>Some great feature name here</p>
          <p className="flex items-center gap-1 pt-2"><span><BsCheck2/></span>Some great feature name here</p>
          <p className="flex items-center gap-1 pt-2"><span><BsCheck2/></span>Some great feature name here</p>
          <p className="flex items-center gap-1 pt-2"><span><BsCheck2/></span>Some great feature name here</p>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
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
