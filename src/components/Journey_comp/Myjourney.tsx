import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface ItemProps {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

interface MyJourneyProps {
  items: ItemProps[];
}

const Myjourney: React.FC<MyJourneyProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="flex gap-3 flex-col bg-[#f8f7f9] w-fit p-4 rounded-md shadow-md shadow-gray-400"
        >
          <Image src={item.image} alt={item.title} className="rounded-md w-[20rem]" />
          <div className="text-center">
            <h1 className="font-medium">{item.title}</h1>
            <span className="text-sm text-gray-500">
              {item.description}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Myjourney;
