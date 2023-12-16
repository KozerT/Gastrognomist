import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  return (
    <section className="flex flex-wrap justify-center gap-24">
      {businesses.map((business, index) => (
        <Business key={index} {...business} />
      ))}
    </section>
  );
};

export default BusinessList;
