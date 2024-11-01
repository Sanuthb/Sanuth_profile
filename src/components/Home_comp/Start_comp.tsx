"use client"
import React, { useState } from "react";
import {Star} from "lucide-react";
const Start_comp = () => {

    const [isClicked, setIsClicked] = useState(false);;

 return (
    <>
      <button className="p-2 hover:bg-gray-700 rounded-full" onClick={()=>{isClicked?setIsClicked(false):setIsClicked(true)}}>
        <Star size={16} style={{color:isClicked?"yellow":""}}/>
      </button>
    </>
  );
};

export default Start_comp;
