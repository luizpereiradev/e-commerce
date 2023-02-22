export default function SwiperProducts({product, percentage}: {product: {
  thumbnail: string;
  title: string;
  price: number;
}, percentage : number}) {
  return (
    <div className="flex gap-2 flex-col border-t-[1px] lg:border-t-0 justify-center h-56 border-x-[1px] border-gray-200 items-center bg-white">
      <img
        src={product.thumbnail}
        alt="product"
        className="max-h-24"
      />
      <p className="font-medium text-black text-base truncate w-[90%]">{product.title}</p>
      <div className="bg-red-200 px-3 rounded-full">
      <p className="font-bold text-red-400 text-sm ">{percentage}%</p>
      </div>
    </div>
  );
}
