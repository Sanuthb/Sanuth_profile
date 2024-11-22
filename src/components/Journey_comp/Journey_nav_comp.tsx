import Image from "next/image";
import React from "react";
import { Ellipsis, ShoppingCart, AlignJustify } from "lucide-react";

const  Journey_nav_comp = () => {
  const intems = [
    { title: "Flight + Hotel", lable: "Bundel and save" },
    { title: "Hotel & Homes" },
    { title: "Transport", lable: "new" },
    { title: "Activities", lable: "new" },
    { title: "Coupons & Deals", lable: "new" },
  ];
  return (
    <div className="bg-white px-5 py-3 flex items-center justify-between">
      <Image src='/assets/Journey/logo.png' width={100} height={0} alt="logo" className="w-28" />
      <div className="flex gap-4">
        {intems.map((item, index) => (
          <div key={index} className="flex gap-4 relative">
            <a href={`/${item.title.toLowerCase()}`}>{item.title}</a>
            {item.lable && (
              <span className="bg-red-600 text-white absolute -top-3 left-0 text-xs px-1 ">
                {item.lable}
              </span>
            )}
          </div>
        ))}
      </div>
      <button>
        <Ellipsis />
      </button>
      <div>
        <Image src='/assets/Journey/flag.png' alt="flags" className="w-7" width={300} height={0}/>
      </div>
      <h1>Rs</h1>
      <button className="text-blue-600 font-semibold text-lg">Sign in</button>
      <button className="text-blue-600 font-semibold text-lg border-2 border-blue-200 rounded-2xl p-2">Create Account</button>
      <button className="text-blue-200">
        <ShoppingCart />
      </button>
      <button className="text-blue-200">
        <AlignJustify />
      </button>
    </div>
  );
};

export default Journey_nav_comp;
