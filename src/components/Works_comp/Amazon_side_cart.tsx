"use client";
import { items } from "@/app/Utils/MyWorks";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const Amazon_side_cart = ({ onClose }: { onClose: () => void }) => {
  const { id } = useParams();
  const product = items.find((item) => item.id === id);

  return (
    <div className="bg-white w-full h-full md:w-1/2 md:h-1/2 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10 rounded-lg border-[.15rem] border-gray-500">
      <div className="p-2 text-gray-600 flex flex-col gap-10">
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-black">Cart</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black">Your Items</h2>
          {product ? (
            <div className="p-2 mt-2 border-[.1rem] border-gray-400 flex justify-between items-center">
              <p>{product.title}</p>
              <div className="flex gap-4 items-center">
                <p>
                  Qty:
                  <span className="border-[.1rem] border-gray-400 px-2 ml-2">1</span>
                </p>
                <p>Price: ₹1000</p>
              </div>
            </div>
          ) : (
            <p>No items in the cart</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Total: ₹1000</h3>
          <button className="p-2 bg-[#f7ca00] text-black rounded-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amazon_side_cart;
