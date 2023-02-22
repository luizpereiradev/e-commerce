function ProductCard({ product } : { product: {
  thumbnail: string;
  title: string;
  price: number;
}}) {
  return (
    <article className="
    flex flex-col lg:gap-1 lg:flex-row-reverse lg:flex-wrap items-center justify-center p-1 lg:px-2 bg-white border-[1px] ">
      <img className="max-h-24 lg:max-h-20 lg:w-[59px]" src={product.thumbnail} alt="forniture" />
      <div className="lg:w-[113px]">
        <h5 className="lg:w-full md:w-48 w-28 font-normal text-black text-sm truncate">{product.title}
</h5>
        <p className="text-center lg:text-start font-light text-gray-500 text-sm">Preço R$ {product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
