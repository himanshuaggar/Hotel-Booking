import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Heaader = ({type}) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("")
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  }

  return (
    <div className="bg-blue-800 text-white flex justify-center relative">
      <div className={ type ==="list" ? "w-full max-w-7xl mt-5 mb-4 ml-24 mr-0":"w-full max-w-7xl mt-5 mb-8 ml-24 mr-0"}>
        <div className="flex gap-10">
          <div className="flex items-center gap-2 border border-solid border-white p-2 rounded-2xl">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && 
          <>
            <h1 className="text-4xl">A lifetime of discounts? It's Genius.</h1>
            <p className="my-4 mx-0">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="bg-blue-600 text-white p-2 border-none font-medium rounded-md cursor-pointer">
              Sign in / Register
            </button>
            <div className="h-10 bg-white border-4 border-solid border-yellow-400 flex items-center justify-around py-2 px-0 rounded absolute w-full max-w-5xl -bottom-6">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none outline-none text-black"
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray-500"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="cursor-pointer text-gray-300 z-[2]"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    minDate={new Date()}
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-12"
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="text-gray-500 text-g"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="cursor-pointer text-gray-300"
                >
                  {`${options.adult} adult . ${options.children} childrens . ${options.room} rooms .`}
                </span>
                {openOptions && (
                  <div className="absolute top-12 bg-white text-gray-400 rounded shadow-3xl">
                    <div className="flex w-52 justify-between m-3">
                      <span className="">Adults</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.adult <= 1}
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="">{options.adult}</span>
                        <button
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex w-52 justify-between m-3">
                      <span className="">Childrens</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.children <= 0}
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="">{options.children}</span>
                        <button
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex w-52 justify-between m-3">
                      <span className="">Rooms</span>
                      <div className="flex items-center gap-2 text-xs text-black">
                        <button
                          disabled={options.room <= 1}
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="">{options.room}</span>
                        <button
                          className="cursor-pointer w-8 h-8 border border-solid bg-white text-blue-600 border-blue-600"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleSearch} className="bg-blue-600 text-white p-2 border-none font-medium cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Heaader;
