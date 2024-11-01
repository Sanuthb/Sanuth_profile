"use client";
import React, { useState, useEffect } from "react";
import banner1 from "@/assets/Works/banner1.jpg";
import banner2 from "@/assets/Works/banner2.jpg";
import banner3 from "@/assets/Works/banner3.jpg";
import Image from "next/image";
import { ArrowRight,ArrowLeft } from "lucide-react";
import Products_comp from "./Products_comp";
import p1 from "@/assets/Works/products/p1.jpg"
import p2 from "@/assets/Works/products/p2.jpg"
import p3 from "@/assets/Works/products/p3.jpg"
import p4 from "@/assets/Works/products/p4.jpg"
import p5 from "@/assets/Works/products/p5.jpg"
import p6 from "@/assets/Works/products/p6.jpg"
import p7 from "@/assets/Works/products/p7.jpg"
import p8 from "@/assets/Works/products/p8.jpg"
import p9 from "@/assets/Works/products/p9.jpg"
import p10 from "@/assets/Works/products/p10.jpg"
import p11 from "@/assets/Works/products/p11.jpg"
import p12 from "@/assets/Works/products/p12.jpg"
import p13 from "@/assets/Works/products/p13.jpg"
import p14 from "@/assets/Works/products/p14.jpg"
import p15 from "@/assets/Works/products/p15.jpg"
import p16 from "@/assets/Works/products/p16.jpg"

const Slider_comp = () => {

  const productitems =[
    {
      title: "Appliances for your home | Up to 55% off",
      products:[
        {
          title:"Air Conditioner",
          image:p1
        },
        {
          title:"Refrigerators",
          image:p2
        },
        {
          title:"Microwaves",
          image:p3
        },
        {
          title:"Washing Machines",
          image:p4
        },
      ]
    },
    {
      title: "Starting ₹149 | Headphones",
      products:[
        {
          title:"Starting ₹149 | BoAt",
          image:p5
        },
        {
          title:"Starting ₹349 | boult",
          image:p6
        },
        {
          title:"Starting ₹649 | Noise",
          image:p7
        },
        {
          title:"Starting ₹149 | Zebronics",
          image:p8
        },
      ]
    },
    {
      title: "Up to 60% off | Styles for women",
      products:[
        {
          title:"Womens Clothing",
          image:p9
        },
        {
          title:"Footware+Handbags",
          image:p10
        },
        {
          title:"Watches",
          image:p11
        },
        {
          title:"Fashion Accessories",
          image:p12
        },
      ]
    },
    {
      title: "Starting ₹99 | Amazon Brands & more",
      products:[
        {
          title:"Home Storage & Organization",
          image:p13
        },
        {
          title:"Storage & racks",
          image:p14
        },
        {
          title:"Toys & Games",
          image:p15
        },
        {
          title:"Jackets,dress & more",
          image:p16
        },
      ]
    },
    
    
  ]



  const banners = [banner1, banner2, banner3];
  const [count, setCount] = useState(0);

  const previous = () => {
    setCount(count === 0 ? banners.length - 1 : count - 1);
  };

  const next = () => {
    setCount(count === banners.length - 1 ? 0 : count + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative h-screen">
      <Image
        src={banners[count]}
        alt="Amazon banner"
        className="w-full object-cover -z-10"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 50%, transparent)",
          maskImage: "linear-gradient(to bottom, #000 50%, transparent)",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="w-full flex items-center justify-between h-[17rem]">
          <button className=" px-4 py-2" onClick={previous}>
            <ArrowLeft size={40} className="text-white" />
          </button>
          <button className="  px-4 py-2" onClick={next}>
            <ArrowRight size={40} className="text-white" />
          </button>
        </div>
        <div className="flex gap-2 p-3">
        {productitems.map((item, index) => (
        <Products_comp key={index} title={item.title} products={item.products} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default Slider_comp;
