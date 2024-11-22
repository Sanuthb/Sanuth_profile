"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Products_comp from "./Products_comp";

const Slider_comp = () => {
  const productitems = [
    {
      title: "Appliances for your home | Up to 55% off",
      products: [
        {
          title: "Air Conditioner",
          image: "/assets/Works/products/p1.jpg",
        },
        {
          title: "Refrigerators",
          image: "/assets/Works/products/p2.jpg",
        },
        {
          title: "Microwaves",
          image: "/assets/Works/products/p3.jpg",
        },
        {
          title: "Washing Machines",
          image: "/assets/Works/products/p4.jpg",
        },
      ],
    },
    {
      title: "Starting ₹149 | Headphones",
      products: [
        {
          title: "Starting ₹149 | BoAt",
          image: "/assets/Works/products/p5.jpg",
        },
        {
          title: "Starting ₹349 | boult",
          image: "/assets/Works/products/p6.jpg",
        },
        {
          title: "Starting ₹649 | Noise",
          image: "/assets/Works/products/p7.jpg",
        },
        {
          title: "Starting ₹149 | Zebronics",
          image: "/assets/Works/products/p8.jpg",
        },
      ],
    },
    {
      title: "Up to 60% off | Styles for women",
      products: [
        {
          title: "Womens Clothing",
          image: "/assets/Works/products/p9.jpg",
        },
        {
          title: "Footware+Handbags",
          image: "/assets/Works/products/p10.jpg",
        },
        {
          title: "Watches",
          image: "/assets/Works/products/p11.jpg",
        },
        {
          title: "Fashion Accessories",
          image: "/assets/Works/products/p12.jpg",
        },
      ],
    },
    {
      title: "Starting ₹99 | Amazon Brands & more",
      products: [
        {
          title: "Home Storage & Organization",
          image: "/assets/Works/products/p13.jpg",
        },
        {
          title: "Storage & racks",
          image: "/assets/Works/products/p14.jpg",
        },
        {
          title: "Toys & Games",
          image: "/assets/Works/products/p15.jpg",
        },
        {
          title: "Jackets,dress & more",
          image: "/assets/Works/products/p16.jpg",
        },
      ],
    },
  ];

  const banners = [
    "/assets/Works/banner1.jpg",
    "/assets/Works/banner2.jpg",
    "/assets/Works/banner3.jpg",
  ];
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
    <div className="relative h-fit md:h-screen">
      <Image
        src={banners[count]}
        alt="Amazon banner"
        className="hidden md:block w-full object-cover -z-10"
        width={1000}
        height={0}
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 50%, transparent)",
          maskImage: "linear-gradient(to bottom, #000 50%, transparent)",
        }}
      />
      <div className=" absolute top-0 left-0 w-full h-fit md:h-screen">
        <div className="hidden w-full md:flex items-center justify-between md:h-[17rem] h-fit">
          <button className=" px-4 py-2" onClick={previous}>
            <ArrowLeft size={40} className="text-white" />
          </button>
          <button className="  px-4 py-2" onClick={next}>
            <ArrowRight size={40} className="text-white" />
          </button>
        </div>
        <div className="hidden md:flex gap-2 p-3">
          {productitems.map((item, index) => (
            <Products_comp
              key={index}
              title={item.title}
              products={item.products}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:hidden p-3">
          {productitems.length > 0 && (
            <Products_comp
              key={0}
              title={productitems[0].title}
              products={productitems[0].products}
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:hidden p-3">
          {productitems.length > 0 && (
            <Products_comp
              key={1}
              title={productitems[1].title}
              products={productitems[1].products}
            />
          )}
        </div>
    </div>
  );
};

export default Slider_comp;
