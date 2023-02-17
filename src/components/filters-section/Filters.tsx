import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowsDimension";
import Categories from "./Categories";
import CategoriesMobile from "./CategoriesMobile";
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
        <CategoriesMobile />
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
