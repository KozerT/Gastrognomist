import React, { useState } from "react";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { searchBusinesses } from "./utils/yelpAPI";
import Header from "./components/navigation/Header";

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
    <div className="flex flex-col min-h-screen App">
      <Header />
      <SearchBar searchYelp={searchYelp} />
      {/* <BusinessList businesses={businesses} /> */}
      <Footer />
    </div>
  );
}

export default App;
