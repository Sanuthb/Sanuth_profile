import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface journey {
  id: number;
  title: string;
  image: string;
  offer: string;
  price:string;
  rating:string;
}

interface Journey_card_props {
  journey: journey;
}

const Journey_card: React.FC<Journey_card_props> = ({ journey }) => {
  return (
    <Link href={`myjourney/${journey.id}`} className="bg-white rounded-lg shadow-md shadow-gray-300 md:w-[20rem] border-2  border-gray-300">
      <Image src={journey.image} alt={journey.title} width={200} height={0} className="w-[20rem] h-[10rem] rounded-tl-lg rounded-tr-lg object-cover"/>
      <div className="flex flex-col p-4 gap-2">
        <h1 className="font-semibold text-xl">{journey.title}</h1>
        <div className="flex gap-1"><Star size={18} fill="#ffc739" stroke="#ffc739"/>{journey.rating}</div>
        <div className="flex flex-col items-end">
            <span className="text-red-500">{journey.offer}</span>
            <span className="text-red-500 font-medium">{journey.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Journey_card;
