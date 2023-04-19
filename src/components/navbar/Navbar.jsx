import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 bg-blue-800 flex justify-center'>
        <div className="w-full max-w-7xl text-white flex items-center justify-between">
            <span className='font-medium text-3xl'>HotelBooking</span>
            <div className="">
                <button className='ml-5 border-none py-1 px-2 cursor-pointer bg-sky-800'>Register</button>
                <button className='ml-5 border-none py-1 px-2 cursor-pointer bg-sky-800'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar