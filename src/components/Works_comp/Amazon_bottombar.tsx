import React from 'react'
import {AlignJustify} from 'lucide-react'

const Amazon_bottombar = () => {
    const items =['Personal Projects', 'Client Projects', 'Services', 'Help', 'FAQs',]
  return (
    <div className='bg-[#232f3e] text-white flex gap-2'>
      <div className='flex items-end gap-2 p-2 hover:border-2 hover:border-white cursor-pointer'>
        <AlignJustify/>
       <span>All</span>
      </div>
        <div className='flex itmes-center gap-2'>
            {items.map((item, index)=>(
                <div key={index} className='p-2 flex gap-2 items-center text-sm hover:border-2 hover:border-white cursor-pointer'>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Amazon_bottombar
