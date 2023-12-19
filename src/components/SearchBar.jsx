import React, { useState, useEffect } from "react";
import mainImage from "../assets/mainImage.png";

const sortByMode = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortClick = (sortOption) => {
    setSelectedSort((prevSort) => (prevSort === sortOption ? "" : sortOption));
  };

  const handleSearchTermChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleClear = (field) => {
    if (field === "searchTerm") {
      setSearchTerm("");
    } else if (field === "location") {
      setLocation("");
    }
  };

  const renderSortByMode = () => {
    return Object.keys(sortByMode).map((mode) => {
      let modeValue = sortByMode[mode];
      return (
        <li
          key={modeValue}
          onClick={() => handleSortClick(modeValue)}
          className={`w-16 text-center cursor-pointer hover:font-bold ${
            selectedSort === modeValue
              ? "text-yellow-500 font-bold"
              : "text-white"
          }`}
        >
          {mode}
        </li>
      );
    });
  };

  return (
    <section
      className="flex flex-col flex-wrap items-center justify-center bg-fixed bg-center bg-cover gap-y-7 py-36 mb-36 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage})`,
      }}
    >
      <ul className="flex flex-row justify-center w-9/12 px-4 text-white gap-x-32">
        {renderSortByMode()}
      </ul>
      <hr className="w-[80%] border-1 border-white" />

      <div className="flex justify-around w-8/12 gap-16 rounded-md ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="Search Business"
        />
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="Where?"
        />
      </div>
      <button className="px-8 py-2 mt-3 font-semibold text-white bg-yellow-500 rounded">
        Let's go
      </button>
    </section>
  );
};

export default SearchBar;
