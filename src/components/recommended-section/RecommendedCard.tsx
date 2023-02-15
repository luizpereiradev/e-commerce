export default function RecommendedCard() {
  return (
    <div className="bg-white h-60 w-[85%] m-auto border-2 rounded p-2 pb-5 lg:w-full lg:h-[300px] lg:m-0">
      <div className="flex flex-col justify-between h-full">
        <img
          src="http://http2.mlstatic.com/D_854001-MLB51230324147_082022-O.jpg"
          alt="product"
          className="max-h-28 lg:max-h-32 m-auto"
        />
        <div className="flex flex-col gap-1 px-2">
        <p className="text-black font-bold">$499.90</p>
        <p className="text-gray-400"> Iphone black blue wallet travel</p>
        </div>
      </div>
    </div>
  );
}
