import React from "react";
import { items } from "@/app/Utils/MyWorks";
import Amazon_navbar from "@/components/Works_comp/Amazon_navbar";
import Amazon_bottombar from "@/components/Works_comp/Amazon_bottombar";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Suggestions_comp from "@/components/Works_comp/Suggestions_comp";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const product_id = (await params).id;
  const product = items.find((item) => item.id === product_id);

  return (
    <div className="bg-[#e3e6e6]">
      <Amazon_navbar />
      <Amazon_bottombar />
      <div className="p-5 flex items-center justify-center gap-10 bg-white">
        {product?.image ? (
          <Image
            src={product.image}
            alt={product.title}
            className="w-1/3"
            width={300}
            height={300}
          />
        ) : (
          <div className="w-1/3 h-64 bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
        <div className="w-1/3">
          <p className="text-justify">{product?.description}</p>
          <h1 className="text-xl font-bold mt-10">My Role: {product?.role}</h1>
          {product?.collabors && (
            <div>
              <h1 className="text-xl font-bold mt-10">Collaborators:</h1>
              <div className="flex gap-1 flex-col">
                {product.collabors.map((collaborator) => (
                  <span key={collaborator} className="text-lg font-medium">
                    {collaborator}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex border-2 border-gray-500 w-[20rem] rounded-lg flex-col p-3 bg-white gap-5">
          <h2>{product?.title}</h2>
          <p>
            {product?.description && product.description.length > 100
              ? `${product.description.slice(0, 100)}...`
              : product?.description}
          </p>
          <span className="flex gap-2 text-sm text-blue-500">
            <MapPin size={20} className="text-black" />
            Deliver to India
          </span>
          <div className="flex flex-col gap-2">
            <button className="bg-[#f7ca00] rounded-full p-2">
              Add to Cart
            </button>
            <button className="bg-[#f7ca00] rounded-full p-2">Buy Now</button>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <span>Ships From</span>
              <span>Sold by</span>
              <span>Returns</span>
              <span>Support</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Amazon.com</span>
              <span>Amazon.com</span>
              <span>30-day refund/replacement</span>
              <span>Product Support included</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Suggestions_comp/>
      </div>
    </div>
  );
};

export default page;
