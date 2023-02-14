function ProductCard() {
  return (
    <article className="flex flex-col items-center justify-center p-2 bg-white border-grey-400 border-[1px] ">
      <img className='max-h-24' src='http://http2.mlstatic.com/D_854001-MLB51230324147_082022-O.jpg' alt='forniture' />
      <h5 className='font-light text-black'>Product Name</h5>
      <p className='font-light'>Price R$ 499</p>
    </article>
  );
}

export default ProductCard;
