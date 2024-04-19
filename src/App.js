import React, { useState } from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { searchBusinesses } from "./utils/yelpAPI";

function App() {
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
    <div className="App">
      <Header />
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
      <Footer />
    </div>
  );
}

export default App;
