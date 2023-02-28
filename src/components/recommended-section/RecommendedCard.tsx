import { useNavigate } from "react-router-dom";

export default function RecommendedCard({ product }: { product: {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
}}) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${product.id}`);
  };

  return (
    <div onClick={handleClick} className="bg-white cursor-pointer h-60 w-[85%] m-auto border-2 rounded p-2 pb-5 lg:w-full lg:h-[300px] lg:m-0">
      <div className="flex flex-col justify-between h-full">
        <img
          src={product.thumbnail}
          alt="product"
          className="max-h-28 lg:max-h-32 m-auto"
        />
        <div className="flex flex-col gap-1 px-2">
        <p className="text-black font-bold">R${product.price}</p>
        <p className="text-gray-400 truncate"> {product.title} </p>
        </div>
      </div>
    </div>
  );
}
