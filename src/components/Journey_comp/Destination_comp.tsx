"use client";
import {
  Search,
  CalendarArrowDown,
  CalendarArrowUp,
  UsersRound,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Popup from "./Popup";

const Destination_comp = () => {
  const [count, setCount] = useState(0);
  const [searchData, setsearchData] = useState("");
  const [buttonclick, setButtonClick] = useState(false);
  const [pop,setpop] = useState(false);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setButtonClick(true);
      }
    },
    []
  );

  return (
    <div className="flex flex-col gap-5 ">
      <div className="w-full bg-white border-2 border-gray-300 rounded-lg flex ">
        <button
          className="font-normal text-gray-400 p-3"
          onClick={() => {
            setButtonClick(true);
          }}
        >
          <Search />
        </button>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your nearest international airport"
          className="w-full p-3 outline-none text-black"
          value={searchData}
          onChange={(e) => {
            setsearchData(e.target.value);
            if (searchData.length > 0) {
              setButtonClick(false);
            }
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className=" flex gap-5 ">
        <div className="bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between w-1/2">
          <div className="p-5 flex gap-4">
            <CalendarArrowUp className="text-gray-400" />
            {buttonclick && (
              <div>
                <h1>{searchData}</h1>
              </div>
            )}
            {!buttonclick && (
              <div>
                <h1>Delhi</h1>
              </div>
            )}
          </div>
          <div className="p-5 flex gap-4 border-l-2 border-gray-300">
            <CalendarArrowDown className="text-gray-400" />
            <div>
              <h1>Bangalore</h1>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded-lg flex items-center  gap-10 justify-between w-1/2 p-5">
          <UsersRound className="text-gray-400" />
          <div>
            <h1 className="text-center">No travellers</h1>
            <div className="flex gap-1">
              <button
                onClick={() =>
                  count != 0 ? setCount((prev) => prev - 1) : setCount(0)
                }
                className="bg-red-500 rounded-full p-1 text-white"
              >
                <Minus size={15} />
              </button>

              <div className="px-5 font-medium">{count}</div>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-green-500 rounded-full p-1 text-white"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
     {
        (buttonclick && count > 0) && (
            <div>
            <Link
              href="journey/myjourney"
              className="bg-blue-500 rounded-full w-fit text-white p-3"
            >
              Book Now
            </Link>
          </div>
        ) 
     }
          {
        !(buttonclick && count > 0) && (
            <div>
            <button
              className="bg-blue-500 rounded-full w-fit text-white p-3 "
              onClick={()=>{setpop(true)}}
            >
              Book Now
            </button>
          </div>
        ) 
     }
     <div className="flex items-center justify-center">
        <Popup buttonclick={buttonclick} count={count} pop={pop}/>
     </div>
    </div>
  );
};

export default Destination_comp;
