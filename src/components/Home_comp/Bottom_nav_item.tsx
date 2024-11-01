import Image from "next/image";
import Link from "next/link";
import React from "react";
interface items_props {
  title: string;
  image: string;
  link: string;
}
const Bottom_nav_item: React.FC<items_props> = ({ title, image, link }) => {
  return (
      <Link href={link} className="flex w-fit gap-1">
        <Image src={image} alt={title} width={5} height={5}  className="bg-white rounded-sm object-cover  w-4"/>
        <span className="lg:text-xs">{title}</span>
      </Link>
  );
};

export default Bottom_nav_item;
