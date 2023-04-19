import React from 'react'

const SearchItem = () => {
  return (
    <div className=" border border-solid border-gray-400 flex justify-between gap-5 mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-52 h-52 object-cover"
      />
      <div className=" flex flex-col gap-2 flex-[2]">
        <h1 className="text-xl text-blue-800 font-bold">Tower Street Apartments</h1>
        <span className="text-sm">500m from center</span>
        <span className=" text-sm bg-green-600 text-white w-max p-1 rounded ">Free airport taxi</span>
        <span className=" text-sm font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className=" text-sm">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-sm text-green-600 font-bold">Free cancellation </span>
        <span className="text-sm text-green-600">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-[1] flex-col justify-between">
        <div className="flex justify-between">
          <span className=' font-medium'>Excellent</span>
          <button className='bg-green-600 text-white p-1 font-bold border-none m-1'>8.9</button>
        </div>
        <div className=" text-right flex flex-col gap-1">
          <span className=" text-2xl">$112</span>
          <span className=" text-sm text-gray-600">Includes taxes and fees</span>
          <button className=" bg-blue-800 text-white font-bold py-3 px-1 border-none cursor-pointer rounded-md m-2">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem