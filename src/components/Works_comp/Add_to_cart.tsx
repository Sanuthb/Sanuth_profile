"use client";
import React, { useState } from "react";
import Amazon_side_cart from "./Amazon_side_cart";


const Add_to_cart = () => {
  const [sidecart, setsidecart] = useState(false);
  const opencart = () => {
    setsidecart(true);
  };
  return (
    <>
      <button className="bg-[#f7ca00] rounded-full p-2" onClick={opencart}>
        Add to Cart
      </button>
      <button className="bg-[#f7ca00] rounded-full p-2">Buy Now</button>
      {sidecart && <Amazon_side_cart onClose={() => setsidecart(false)} />}
    </>
  );
};

export default Add_to_cart;
