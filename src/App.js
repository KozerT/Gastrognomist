import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList />
      <Footer />
    </div>
  );
}

export default App;
