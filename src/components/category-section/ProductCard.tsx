function ProductCard() {
  return (
    <article className="
    flex flex-col lg:gap-1 lg:flex-row-reverse lg:flex-wrap items-center justify-center p-1 lg:px-2 bg-white border-[1px] ">
      <img className="max-h-24 lg:max-h-20 lg:w-[59px]" src="http://http2.mlstatic.com/D_854001-MLB51230324147_082022-O.jpg" alt="forniture" />
      <div className="lg:w-[113px]">
        <h5 className="lg:w-full md:w-48 w-28 font-normal text-black text-sm truncate">Samsung Galaxy A13 Dual SIM 128 GB preto 4 GB RAM
</h5>
        <p className="text-center font-light text-gray-500 text-sm">Price R$ 499</p>
      </div>
    </article>
  );
}

export default ProductCard;
