import React from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Header from "../components/navigation/Header";
import { SearchProvider } from "../contexts/SearchContext";

const Home = () => {
  const navigate = useNavigate();

  const searchYelp = (term, location, sortBy) => {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    const urlEncodedSortBy = encodeURI(sortBy);

    const searchUrl = `/search-results?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}&sort_by=${urlEncodedSortBy}`;

    navigate(searchUrl);
  };

  return (
    <SearchProvider>
      <Header />
      <SearchBar searchYelp={searchYelp} />
    </SearchProvider>
  );
};

export default Home;
