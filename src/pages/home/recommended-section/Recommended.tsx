import { useEffect, useState } from "react";
import { getProductsFromCategoryAndQuery } from "../../../services/categories";
import RecommendedCard from "./RecommendedCard";

export default function Recommended() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromCategoryAndQuery("MLB1000").then((data: { results: [] }) => {
      setProducts(data.results);
    });
  }, []);
  return (
    <div>
      <h1 className="font-medium text-xl p-4 lg:px-0">Recommended items</h1>
      <div className="grid gap-3 lg:gap-x-5 w-full grid-auto-fit-[165px] lg:grid-auto-fit-[240px]">
        {products
        .slice(0, 8)
        .map((product, x) => (
          <RecommendedCard product={product} key={`${x}recommended`} />
        ))}
      </div>
    </div>
  );
}
