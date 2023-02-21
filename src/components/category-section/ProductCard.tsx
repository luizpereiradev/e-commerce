function ProductCard({ product } : { product: {
  thumbnail: string;
  title: string;
  price: number;
}}) {
  return (
    <article className="h-56 lg:h-1/2 lg:w-48 flex flex-col lg:gap-2 lg:flex-row-reverse lg:flex-wrap items-center justify-center p-1 lg:px-[8.8px] bg-white border-[1px] ">
      <img className="max-h-24 lg:max-h-16" src={product.thumbnail} alt="forniture" />
      <div>
        <h5 className="font-normal text-black">{product.title}</h5>
        <p className="font-light text-gray-500">Price R$ {product.price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
