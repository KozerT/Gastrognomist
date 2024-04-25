import React, { useState } from "react";
// import BusinessList from "./components/BusinessList";
// import SearchBar from "./components/SearchBar";
// import Footer from "./components/Footer";
// import { searchBusinesses } from "./utils/yelpAPI";
// import Header from "./components/navigation/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/navigation/Header";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
