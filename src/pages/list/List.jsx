import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Heaader from '../../components/header/Heaader'
import Featured from '../../components/featured/Featured'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Heaader type="list" />
      <div className="flex content-center mt-5">
        <div className="w-full max-w-5xl flex gap-5">
          <div className=" flex-[1] bg-yellow-400 p-2 rounded-lg sticky top-2 ml-8 mt-4 h-max">
            <h1 className=' text-4xl text-[#555] mb-2'>Search</h1>
            <div className="flex flex-col gap-1 mb-3">
              <label className=' text-sm'>Destination</label>
              <input className=' h-8 border-none p-1' type="text" placeholder={destination}/>
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className=' text-sm'>Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className=' h-8 border-none p-1 bg-white flex items-center cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}}`}</span>
              {openDate &&(<DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} />)}
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label>Options</label>
              <div className=" p-3">
                <div className="flex justify-between mb-2 text-sm text-gray-800">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-800">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="flex mb-2 text-sm justify-between text-gray-800">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-800">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-12"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-800">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.room}
                  />
                </div>
              </div>
            <button className=' p-2 bg-blue-800 text-white border-none w-full font-medium cursor-pointer'>Search</button>
          </div>
          </div>
          <div className=" flex-[3]">
          <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    
    </div>
  
  )
}

export default List