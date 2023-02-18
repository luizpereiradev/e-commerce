import backgroundImgFull from "../../assets/bg-full.png"

export default function Form() {
  return (
    <>
    <div className="relative">
      <img src= { backgroundImgFull } alt="background-img-form" className="min-w-[280px] min-h-[160px] z-0"/>
      <h5 className="w-[217px] h-[44px] top-6 left-6 font-[600] text-lg leading-5 text-white absolute md:w-[380px] md:h-[78px] md:top-6 md:left-6 md:font-[600] md:text-[32px] md:leading-[39px] md:absolute md:tracking-tight">
        An easy way to send request to all suppliers
      </h5>
      <h6 className="hidden md:block md:w-[380px] md:h-[78px] md:top-28 md:left-6 md:font-[400] md:text-[16px] md:leading-[24px] md:absolute md:tracking-tight md:text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
      </h6>
      <button className="absolute top-24 left-6 bg-blue-600 w-[98px] h-[30px] rounded-[6px] md:hidden"><span className="w-[78px] h-[16px] not-italic text-white text-sm leading-4 text-center font-medium">Send inquiry</span></button>
    <form className="hidden md:block md:w-[340px] md:h-[235px] md:top-5 md:right-6
    md:font-[400] md:text-[16px] md:leading-[24px] md:absolute md:tracking-tight md:text-white md: bg-white md:shadow-md md:rounded-[6px]  lg:block lg:w-[490px] lg:h-[309px] lg:top-5 lg:right-5
    lg:font-[600] lg:text-[20px] lg:leading-[28px] lg:absolute lg:tracking-tight lg:text-white lg: lg:shadow-lg lg:rounded-[6px]"> 
      <h4 className="w-[332-px] h-[28px] top-2 left-2 font-[500] text-[18px] leading-[28px] tracking-tight text-black absolute lg:h-[28px] lg:top-4 lg:left-4 lg:font-[800] lg:text-[22px] lg:leading-[30px]">Send quote to suppliers</h4>
      <label htmlFor="item-input">
        <input
            className="absolute top-10 left-2 border-[1px] border-gray rounded-[6px] w-[324px] placeholder-black placeholder-opacity-80 py-1 px-1 lg:top-12 lg:left-4 lg:border-[1px] lg:border-gray lg:rounded-[6px] lg:h-[40px] lg:w-[457px] lg:pl-[10px] lg:pb-[10px]"
            name="item-input"
            type="text"
            placeholder="What item you need?"
        />
      </label>
        <label htmlFor="description-input">
          <input
            className="absolute top-20 left-2 border-[1px] border-gray rounded-[6px] w-[324px] h-[55px] py-1 px-1 lg:top-24 lg:left-4 lg:border-[1px] lg:border-gray lg:rounded-[6px] lg:h-[80px] lg:w-[457px] lg:pl-[10px] lg:pb-[50px]" 
            name="description-input"
            type="textarea"
            placeholder="Type more details"
          />
        </label>
        <label htmlFor="quantity-input">
          <input
          className="absolute top-[142px] left-2 border-[1px] border-gray rounded-[6px] w-[150px] placeholder-black placeholder-opacity-80 py-1 px-1 lg:top-[185px] lg:left-4 lg:border-[1px] lg:border-gray lg:rounded-[6px] lg:h-[40px] lg:w-[220px] lg:py-1 lg:px-1"
            name="quantity-input"
            type="number"
            placeholder="Quantity"
          />
        </label>
        <label htmlFor="pcs-input">
          <select
            className="absolute top-[142px] right-24 h-[34px] border-[1px] border-gray rounded-[6px] w-[80px] py-1 px-1 text-black bg-white lg:top-[185px] lg:right-32 lg:h-[41px] lg:border-[1px] lg:border-gray lg:rounded-[6px] lg:w-[110px] lg:py-1 lg:px-1"
            name="pcs-input"
          >
            <option value="0">Pcs</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="1">3</option>
            <option value="2">4</option>
            <option value="1">5</option>
            <option value="2">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="1">9</option>
            <option value="2">10</option>
          </select>
        </label>
        <button className="absolute bg-blue-600 w-[120px] h-[40px] rounded-[6px] top-[186px] left-2 lg:top-[240px] lg:left-4"><span className="w-[78px] h-[16px] not-italic text-white text-sm text-center font-medium text-[18.1px]">Send inquiry</span></button>
      </form>
      </div>
    </>
  )
}



