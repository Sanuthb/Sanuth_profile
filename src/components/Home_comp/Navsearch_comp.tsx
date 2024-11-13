"use client";
import { Search, History } from "lucide-react";
import React, { useEffect } from "react";
import Start_comp from "./Start_comp";
import Link from "next/link";

const Navsearch_comp = () => {
  const [searchclicked, setSearchClicked] = React.useState(false);
  const items = [
    "MY PROFILE",
    "MY WORKS",
    "MY JOURNEY",
    "AMAZON",
    "AGODA",
    "LINKEDIN",
    "WORKS",
    "PROFILE",
    "JOURNEY",
  ];
  const [searcheditem, setsearcheditem] = React.useState("");
  const [searchButtonClick, setSearchButtonClick] = React.useState(false);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setSearchButtonClick(true);
      }
    },
    []
  );

  useEffect(() => {
    if (searchButtonClick) {
      const searchQuery = searcheditem.toUpperCase();
      const isPresent = items.includes(searchQuery);
      if (
        isPresent &&
        (searchQuery === "MY PROFILE" ||
          searchQuery === "LINKEDIN" ||
          searchQuery === "PROFILE")
      ) {
        window.location.href = "/pages/profile";
      } else if (
        isPresent &&
        (searchQuery === "MY WORKS" ||
          searchQuery === "AMAZON" ||
          searchQuery === "WORKS")
      ) {
        window.location.href = "/pages/works";
      } else if (
        isPresent &&
        (searchQuery === "MY JOURNEY" ||
          searchQuery === "AGODA" ||
          searchQuery === "JOURNEY")
      ) {
        window.location.href = "/pages/journey";
      } else {
        alert("No results found for " + searchQuery);
      }
      setSearchButtonClick(false);
    }
  }, [searchButtonClick, searcheditem]);

  return (
    <div
      className={` z-20 flex-1 flex items-center bg-gray-800 px-2 py-1 max-w-full relative ${
        searchclicked ? "rounded-tl-lg rounded-tr-lg" : "rounded-full"
      }`}
    >
      <Search size={16} className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="bg-transparent w-full focus:outline-none text-sm"
        onClick={() => setSearchClicked(true)}
        onChange={(e) => setsearcheditem(e.target.value)}
        value={searcheditem}
        onKeyDown={handleKeyDown}
      />
      <Start_comp />
      {searchclicked && (
        <div className="absolute bg-gray-800 top-full left-0 h-[15rem] w-full z-10 rounded-bl-lg rounded-br-lg p-3 flex flex-col gap-5">
          <h1 className="text-gray-400 text-sm">click links below to view</h1>
          <Link
            href="/pages/profile"
            className="hover:bg-gray-700 p-1 hover:rounded-tr-full hover:rounded-br-full flex gap-10 items-center  w-full text-gray-300"
          >
            <History size={15} className="text-gray-500" /> My Profile
          </Link>
          <Link
            href="/pages/profile"
            className="hover:bg-gray-700 p-1 hover:rounded-tr-full hover:rounded-br-full flex gap-10 items-center  w-full text-gray-300"
          >
            <History size={15} className="text-gray-500" /> My Works
          </Link>
          <Link
            href="/pages/profile"
            className="hover:bg-gray-700 p-1 hover:rounded-tr-full hover:rounded-br-full flex gap-10 items-center  w-full text-gray-300"
          >
            <History size={15} className="text-gray-500" /> My Journey
          </Link>

          <div className="flex items-center justify-end">
            <button className="text-gray-500" onClick={()=>{setSearchClicked(false)}}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navsearch_comp;
