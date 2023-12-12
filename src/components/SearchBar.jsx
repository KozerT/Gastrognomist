import React from "react";
import mainImage from "./mainImage.png";

const SearchBar = () => {
  return (
    <section
      className="flex items-center flex-wrap justify-center flex-col gap-y-7 py-36 mb-36 bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage})`,
      }}
    >
      <div className="flex flex-row gap-x-32 px-4  text-white">
        <span className="block w-full text-center">
          Best
          <br /> Match
        </span>
        <span className="block w-full text-center">
          Highest
          <br /> Rated
        </span>
        <span className="block w-full  text-center">
          Most <br />
          Reviewed
        </span>
      </div>
      <hr className="w-[80%] border-1 border-white" />

      <div className="flex rounded-md gap-16 w-8/12 justify-around ">
        <input
          type="text"
          className="block w-full px-4 py-2 text-slate-950 bg-white border rounded-md  focus:outline-none  "
          placeholder="Search Business"
        />
        <input
          type="text"
          className="block w-full px-4 py-2  text-slate-950 bg-white border rounded-md  focus:outline-none "
          placeholder="Where?"
        />
      </div>
      <button className="px-8 py-2 text-white font-semibold bg-yellow-500  rounded mt-3">
        Let's go
      </button>
    </section>
  );
};

export default SearchBar;
