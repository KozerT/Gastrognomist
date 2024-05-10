import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    term: "",
    location: "",
    sortBy: "",
  });

  const updateSearchParams = (newParams) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }));
  };



  return (
    <SearchContext.Provider value={{ searchParams, setSearchParams,updateSearchParams  }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
