import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center flex-wrap justify-center flex-col gap-y-7 py-36 ">
      <div className="flex flex-row gap-x-32 px-4">
        <span className="block w-full text-center ">
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
      <hr className="w-[80%] border-1 border-black" />

      <div className="flex  bg-white rounded-md  shadow-slate-200 w-8/12 gap-36 justify-around">
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
      <div>
        <button className="px-6 py-2 text-white font-semibold bg-yellow-500  border-l rounded ">
          Let's go
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
