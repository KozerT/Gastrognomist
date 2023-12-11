import React from "react";
import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

function App(props) {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
