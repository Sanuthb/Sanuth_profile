"use client";
import { Search, History } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";

const Search_comp = () => {
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
      className={`flex-1 flex items-center bg-white px-2 py-3 w-[40rem] relative ${
        searchclicked ? "rounded-tl-lg rounded-tr-lg" : "rounded-full"
      }`}
    >
      <Search size={16} className="text-gray-700 mr-2" />
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="bg-transparent w-full focus:outline-none text-sm"
        onClick={() => setSearchClicked(true)}
        onChange={(e) => setsearcheditem(e.target.value)}
        value={searcheditem}
        onKeyDown={handleKeyDown}
      />
      {searchclicked && (
        <div className="absolute bg-white top-full left-0 h-[15rem] w-full z-10 rounded-bl-lg rounded-br-lg p-3 flex flex-col gap-5 text-black">
          <h1 className="text-gray-700 text-sm">click links below to view</h1>
          <Link
            href="/pages/profile"
            className=" flex gap-10 items-center  w-full"
          >
            <History size={15} className="text-gray-700" /> My Profile
          </Link>
          <Link
            href="/pages/profile"
            className=" flex gap-10 items-center  w-full "
          >
            <History size={15} className="text-gray-700" /> My Works
          </Link>
          <Link
            href="/pages/profile"
            className="flex gap-10 items-center  w-full "
          >
            <History size={15} className="text-gray-700" /> My Journey
          </Link>
        </div>
      )}
    </div>
  );
};



export default Search_comp
