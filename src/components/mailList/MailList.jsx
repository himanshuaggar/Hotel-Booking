import React from 'react'

const MailList = () => {
  return (
    <div className=" w-full mt-12 bg-blue-800 text-white flex flex-col items-center gap-5 p-12">
      <h1 >Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input className=" w-80 h-12 p-3 border-none mr-2 rounded" type="text" placeholder="Your Email" />
        <button className=' p-2 h-12 bg-blue-600 text-white font-medium border-none rounded cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList