"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Read_doc = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); 
  
      return () => clearTimeout(timer); 
    }, []);
  
    const handleClose = () => {
      setIsVisible(false);
    };
  return (
    <div>
      {isVisible && (
        <div className="bg-black md:bg-white/10 text-white absolute bottom-4 left-0 md:left-5 rounded-lg md:w-1/3 p-3 flex flex-col gap-2">
          <p className="text-sm font-normal text-justify">
            For detailed instructions on how to navigate my profile, explore my works, and learn about my journey, please read the full documentation below. It will guide you step-by-step to find exactly what you&apos;re looking for!
          </p>
            <div className="flex gap-2">
            <Link href="/pages/docs" className="bg-white text-black px-2 py-1 rounded-lg w-fit font-medium flex items-center justify-center"> Docs</Link>
          <button
            onClick={handleClose}
            className="bg-white text-black rounded-lg px-2 py-1  font-medium"
          >
            Close
          </button>
            </div>
        </div>
      )}
    </div>
  )
}

export default Read_doc
