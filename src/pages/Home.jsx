import React, { useState } from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { searchBusinesses } from "../utils/yelpAPI";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    console.log(
      "Searching Yelp with term:",
      term,
      "location:",
      location,
      "sortBy:",
      sortBy
    );
    searchBusinesses(term, location, sortBy).then((businesses) => {
      setBusinesses(businesses);
    });
  };

  return (
    <>
      <Header />
      <SearchBar searchYelp={searchYelp} />
      {/* <BusinessList businesses={businesses} /> */}
      <Footer />
    </>
  );
};

export default Home;
