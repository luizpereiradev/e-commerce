import { BsFilterLeft, BsFillGridFill, BsList } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { GrFilter } from "react-icons/gr";
import useWindowDimensions from "../../hooks/useWindowsDimension";
import Categories from "./Categories";
export default function Filters() {
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState<object[]>([]);
  const categories = [
    {
      name: "Categoria 1",
      type: "checkbox",
      options: ["Opção 1", "Opção 2", "Opção 3"],
    },
    {
      name: "Categoria 2",
      type: "radio",
      options: ["Opção 1", "Opção 2", "Opção 3"],
    },
    {
      name: "Categoria 3",
      type: "checkbox",
      options: ["Opção 1", "Opção 2", "Opção 3"],
    },
  ];
  useEffect(() => {
    setCategory(categories);
  }, []);
  console.log(categories);
  return (
    <div>
      {width <= 640 ? (
        <>
          <div className="w-full h-12 border-y-2 m-auto justify-around border-gray-200 flex items-center">
            <div className="pl-1 relative dropdown">
              <button className="rounded-md pl-3 pr-6 border-2 border-gray-200 font-medium">
                Sort: Newest
              </button>
              <BsFilterLeft size={20} className=" absolute top-1 right-0.5" />
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li className="flex items-center flex-row">
                  <a>Item 1</a>
                  <input type="checkbox" className="mr-2" />
                </li>
                <li className="flex items-center flex-row">
                  <a>Item 2</a>
                  <input type="checkbox" className="mr-2" />
                </li>
                <li className="flex items-center flex-row">
                  <a>Item 3</a>
                  <input type="checkbox" className="mr-2" />
                </li>
                <li className="flex items-center flex-row">
                  <a>Item 4</a>
                  <input type="checkbox" className="mr-2" />
                </li>
                <li className="flex items-center flex-row">
                  <a>Item 5</a>
                  <input type="checkbox" className="mr-2" />
                </li>
              </ul>
            </div>
            <div className="relative dropdown px-1">
              <button className="rounded-md pl-3 pr-6 border-2 border-gray-200 font-medium">
                Filter (3)
              </button>
              <GrFilter size={15} className=" absolute top-1.5 right-1.5" />
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="relative w-7 h-7 border-2 border-gray-200 rounded-md">
              <BsFillGridFill size={20} className="absolute top-0.5 left-0.5" />
            </div>
            <div className="relative w-7 h-7 border-2 border-gray-200 rounded-md">
              <BsList size={20} className="absolute top-0.5 left-0.5" />
            </div>
          </div>
        </>
      ) : (
        <>
          {category.map((cat, i) => (
            <div className="w-1/4" key={i}>
              <Categories />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
