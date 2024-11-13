import Image from "next/image";
import React from "react";
interface product {
  title: string;
  image: string;
}
interface product_items {
  title: string;
  products: product[];
}

const Products_comp: React.FC<product_items> = ({ title,products }) => {
  return (
    <div className="bg-white p-4 h-[25rem] flex items-center flex-col justify-center gap-9">
      <div className="p-2">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 align-middle">
        {products.map((product, index) => (
          <div key={index}>
            <Image src={product.image} alt={product.title} width={500} height={0} className="w-52"/>
            <h2 className="text-sm">{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_comp;
