export default function SwiperProducts() {
  return (
    <div className="flex gap-2 flex-col border-t-[1px] lg:border-t-0 justify-center h-56 border-x-[1px] border-gray-200 items-center bg-white">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxXVQVxKwcVaaIh9hdZpF0BVsZjQKt1SmPg&usqp=CAU"
        alt="product"
        className="max-h-24"
      />
      <p className="font-medium text-black text-base">Product Name</p>
      <div className="bg-red-200 px-3 rounded-full">
      <p className="font-bold text-red-400 text-sm">25%</p>
      </div>
    </div>
  );
}
