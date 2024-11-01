import React from "react";
import Slider_comp from "./Slider_comp";
import Myworks from "./Myworks";

const Amazon_hero = () => {
  return (
    <div className="bg-[#e3e6e6]">
      <Slider_comp />
      <div className="mt-10 p-5">
        <Myworks/>
      </div>
    </div>
  );
};

export default Amazon_hero;
