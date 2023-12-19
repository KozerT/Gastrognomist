import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const testData = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: " Kebab-pizza",
    address: "1000 Solna Stadd",
    city: "Solna",
    state: "Stockholm",
    zipCode: "17288",
    category: "Swedish",
    rating: 4.7,
    reviewCount: 61,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: " Kebab-pizza",
    address: "1000 Solna Stadd",
    city: "Solna",
    state: "Stockholm",
    zipCode: "17288",
    category: "Swedish",
    rating: 4.7,
    reviewCount: 61,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: " Kebab-pizza",
    address: "1000 Solna Stadd",
    city: "Solna",
    state: "Stockholm",
    zipCode: "17288",
    category: "Swedish",
    rating: 4.7,
    reviewCount: 61,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: " Kebab-pizza",
    address: "1000 Solna Stadd",
    city: "Solna",
    state: "Stockholm",
    zipCode: "17288",
    category: "Swedish",
    rating: 4.7,
    reviewCount: 61,
  },
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: " Kebab-pizza",
    address: "1000 Solna Stadd",
    city: "Solna",
    state: "Stockholm",
    zipCode: "17288",
    category: "Swedish",
    rating: 4.7,
    reviewCount: 61,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList businesses={testData} />
      <Footer />
    </div>
  );
}

export default App;
