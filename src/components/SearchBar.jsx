import React, { useState } from "react";
import mainImage from "../assets/mainImage.png";

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (term && location) {
      searchYelp(term, location, sortBy);
    }
  };

  const renderSortByOptions = () => {
    const sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };

    return Object.keys(sortByOptions).map((option) => {
      let optionValue = sortByOptions[option];
      return (
        <li
          key={optionValue}
          onClick={() => handleSortByChange(optionValue)}
          className={`w-16 text-center cursor-pointer ${
            sortBy === optionValue
              ? "text-yellow-500 font-bold"
              : "text-white hover:font-bold"
          }`}
        >
          {option}
        </li>
      );
    });
  };

  return (
    <section
      className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover gap-y-7 py-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage})`,
        opacity: 0.86,
      }}
    >
      <ul className="flex justify-center w-9/12 max-w-screen-xl px-4 text-white gap-x-32">
        {renderSortByOptions()}
      </ul>
      <hr className="w-[80%] border-1 border-white max-w-screen-xl" />
      <form
        className="flex justify-around w-8/12 max-w-screen-xl gap-16 rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder="Pizza, tapas, mexican"
          value={term}
          onChange={handleTermChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none"
        />
        <input
          type="search"
          placeholder="City"
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-4 py-2 bg-white border rounded-md text-slate-950 focus:outline-none"
        />
      </form>
      <button
        onClick={handleSubmit}
        className="px-8 py-2 mt-3 font-semibold text-white bg-yellow-500 rounded"
      >
        Let's go
      </button>
    </section>
  );
};

export default SearchBar;
