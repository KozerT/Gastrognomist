import React from "react";
import Business from "./Business";

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
];

const BusinessList = () => {
  return (
    <section className="flex flex-wrap justify-center gap-24">
      {testData.map((business, index) => (
        <Business key={index} {...business} />
      ))}
    </section>
  );
};

export default BusinessList;
