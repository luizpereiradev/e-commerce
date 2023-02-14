function ProductCard() {
  return (
    <article className="flex flex-col lg:gap-2 lg:flex-row-reverse lg:flex-wrap items-center justify-center p-1 lg:px-[0.79rem] bg-white border-grey-400 border-[1px] ">
      <img className='max-h-24 lg:max-h-20' src='http://http2.mlstatic.com/D_854001-MLB51230324147_082022-O.jpg' alt='forniture' />
      <div>
        <h5 className='font-light text-black'>Product Name</h5>
        <p className='font-light'>Price R$ 499</p>
      </div>
    </article>
  );
}

export default ProductCard;
