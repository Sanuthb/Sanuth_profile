import React from 'react'
import { Pen,MoveRight } from "lucide-react";

const Service_comp = () => {
  return (
    <div className='w-[50rem] bg-[#1b1f23] rounded-lg px-8 py-3'>
     <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Service</h1>
        <button className='hover:bg-[#2c2f33] p-2 rounded-full'>
            <Pen size={18}/>
        </button>
      </div>
      <div className='mt-4 text-white'>
        <h1>Web design and development</h1>
      </div>
      <div className='text-white mt-2 border-t-2 border-gray-700'>
        <button className='hover:bg-[#2c2f33] w-full flex gap-2 items-center justify-center p-2 mt-3'>Show all services <MoveRight/></button>
      </div>
    </div>
  )
}

export default Service_comp
