import React from "react";
import { items } from "@/app/Utils/MyWorks";
import Image from "next/image";
import Link from "next/link";
const Suggestions_comp = () => {
  const rand_numbers = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * (items.length - 1)) + 1
  );
  
  const filtered_items = items.filter((_, index) =>
    rand_numbers.includes(index)
  );

  return (
    <div className="p-3">
      <h1 className="text-2xl font-medium">Similar products</h1>
      <div className="flex flex-wrap gap-10 mt-5">
        {filtered_items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 flex-col w-[20rem] p-2 bg-white rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={0}
              className="w-[20rem]  object-cover"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-sm">
                {item.description.length > 100
                  ? item.description.slice(0, 100).concat("...")
                  : item.description}
              </p>
            </div>
            <Link
              href={`${item.id}`}
              className="bg-[#f7ca00] p-2 rounded-full w-full text-center"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions_comp;
