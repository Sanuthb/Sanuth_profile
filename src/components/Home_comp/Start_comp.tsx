"use client"
import React, { useState } from "react";
import { Star } from "lucide-react";

const Start_comp = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button className="p-2 hover:bg-gray-700 rounded-full" onClick={handleClick}>
            <Star size={16} style={{ color: isClicked ? "yellow" : "" }} />
        </button>
    );
};

export default Start_comp;
