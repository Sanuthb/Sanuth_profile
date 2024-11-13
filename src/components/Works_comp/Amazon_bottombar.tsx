import React from 'react'
import {AlignJustify} from 'lucide-react'
import Link from 'next/link'

const Amazon_bottombar = () => {
    const items =['Personal Projects', 'Client Projects','others']
  return (
    <div className='bg-[#232f3e] text-white flex gap-2'>
      <div className='flex items-end gap-2 p-2 hover:border-2 hover:border-white cursor-pointer'>
        <AlignJustify/>
       <span>All</span>
      </div>
        <div className='flex itmes-center gap-2'>
            {items.map((item, index)=>(
                <Link href={`/pages/works/category/${item}`} key={index} className='p-2 flex gap-2 items-center text-sm hover:border-2 hover:border-white cursor-pointer'>
                    <span>{item}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Amazon_bottombar
