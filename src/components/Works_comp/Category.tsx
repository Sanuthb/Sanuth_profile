'use client';
import React, { useState } from 'react';
import { categories, items } from '@/app/Utils/MyWorks';
import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState('Client Projects');

  const filteredItems = items.filter(item => item.category === selectedCategory);


  return (
    <div>
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 m-2 rounded ${selectedCategory === category ? 'bg-[#ffc739] text-black font-medium' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4 bg-white rounded-md w-[20rem] flex flex-col gap-2">
            <Image src={item.image} alt={item.title}  width={350} height={100} />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.description.length > 100 ? item.description.slice(0,80).concat("...") : item.description}</p>
            <Link href={`works/${item.id}`} className='bg-[#ffc739] p-2 rounded-lg text-center font-medium'>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
