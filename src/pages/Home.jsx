import React from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Header from "../components/navigation/Header";
import { SearchProvider } from "../contexts/SearchContext";
import mainImage from "../assets/mainImage.png";

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
      <div  
        className="h-screen bg-fixed bg-center bg-no-repeat bg-cover "
           style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${mainImage})`,
            opacity: 0.86,
          }}
          
      >
      <Header />
      <SearchBar searchYelp={searchYelp} />
      </div>
    </SearchProvider>
  );
};

export default Home;
