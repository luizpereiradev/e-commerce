export default function SwiperProducts() {
  return (
    <div className="flex flex-col border-[1px] border-gray-200 items-center bg-white">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxXVQVxKwcVaaIh9hdZpF0BVsZjQKt1SmPg&usqp=CAU"
        alt="product"
        className="max-h-24"
      />
      <p className="font-bold">Product Name</p>
      <p className="font-light">25%</p>
    </div>
  );
}
