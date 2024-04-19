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

  useEffect(() => {
    console.log("Term updated:", term);
  }, [term]);

  useEffect(() => {
    console.log("Location updated:", location);
  }, [location]);

  // const getSortByClass = (sortOption) => {
  //   if (sortBy === sortOption) {
  //     return "active";
  //   }
  //   return "";
  // };

  const handleSortChange = (sortOption) => {
    setSortBy((prevSort) => (prevSort === sortOption ? "" : sortOption));
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
    console.log("setted term", term);
  };

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
    console.log("setted location", location);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      console.log("Searching Yelp API...");
      const businesses = await searchBusinesses(term, location, sortBy);
      console.log("Received data from Yelp API:", businesses);
      searchYelp(term, location, sortBy);
    } catch (error) {
      console.error("Error fetching businesses:", error);
      console.error("Request URL:", error.config.url);
      console.error("Request Headers:", error.config.headers);
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

      <form className="flex justify-around w-8/12 gap-16 rounded-md ">
        <input
          type="search"
          value={term}
          onChange={handleTermChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="Pizza, tapas, mexican"
        />
        <input
          type="search"
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none "
          placeholder="City"
        />
      </form>
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
