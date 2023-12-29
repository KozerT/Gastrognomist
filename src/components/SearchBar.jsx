import React, { useState, useEffect } from "react";
import mainImage from "../assets/mainImage.png";
import { searchBusinesses } from "../utils/yelpAPI";

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const getSortByClass = (sortOption) => {
    if (sortBy === sortOption) {
      return "active";
    }
    return "";
  };

  const handleSortChange = (sortOption) => {
    setSortBy((prevSort) => (prevSort === sortOption ? "" : sortOption));
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const businesses = await searchBusinesses(term, location, sortBy);
      console.log(businesses);
    } catch (error) {
      console.error("Error fetching businesses:", error); // Log the full error details for debugging
      if (error.message.includes("403")) {
        console.error(
          "The request was forbidden. Check your API key or request frequency."
        );
      } else {
        console.error("An unknown error occurred:", error.message);
      }
    }
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((option) => {
      let optionValue = sortByOptions[option];
      return (
        <li
          key={optionValue}
          onClick={() => handleSortChange(optionValue)}
          className={`w-16 text-center cursor-pointer hover:font-bold ${
            sortBy === optionValue ? "text-yellow-500 font-bold" : "text-white"
          }`}
        >
          {option}
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
        {renderSortByOptions()}
      </ul>
      <hr className="w-[80%] border-1 border-white" />

      <div className="flex justify-around w-8/12 gap-16 rounded-md ">
        <input
          type="text"
          value={term}
          onChange={handleTermChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="Pizza, tapas, mexican"
        />
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="City"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-8 py-2 mt-3 font-semibold text-white bg-yellow-500 rounded"
      >
        Let's go
      </button>
    </section>
  );
};

export default SearchBar;
