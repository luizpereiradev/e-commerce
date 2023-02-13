import { TfiEmail } from 'react-icons/tfi'

export default function Newsletter () {
  return (
    <div className="bg-gray-200 h-48 flex">
      <div className='md:w-1/2 lg:gap-4 gap-2 w-full m-auto flex flex-col items-center'>
        <h2 className='font-semibold text-xl'>Subscribe on our newsletter</h2>
        <p className='text-center text-gray-600 text-base font-normal'>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className=''>
          <form className='flex gap-1 items-center flex-col md:flex-row px-2 md:w-full w-10/12 m-auto'>
            <div className='relative'>
              <input className='input-sm pl-8' type="email" placeholder="Email Address" />
              <TfiEmail className='absolute text-gray-400 left-0 top-0 m-2' />
            </div>
            <button className=' hover:bg-blue-400 bg-blue-500 w-1/2 md:w-full rounded-md px-2 text-white h-8' type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
