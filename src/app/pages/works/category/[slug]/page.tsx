import React from 'react'
import { items } from '@/app/Utils/MyWorks';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  var category_name = (await params).slug;

  category_name=category_name.replace('%20'," ")  

  const filteredItems = items.filter(item => item.category === category_name)
  return (
    <div>
        <div className="mt-4 flex flex-wrap gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4 bg-white rounded-md w-[20rem] flex flex-col gap-2">
            <Image src={item.image} alt={item.title}  width={350} height={100} />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.description.length > 100 ? item.description.slice(0,80).concat("...") : item.description}</p>
            <Link href={`/pages/works/${item.id}`} className='bg-[#ffc739] p-2 rounded-lg text-center font-medium'>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
