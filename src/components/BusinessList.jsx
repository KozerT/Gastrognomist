import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  return (
    <section className="flex flex-wrap justify-center gap-24">
      {businesses.map((business) => (
        <Business key={business.name} business={business} />
      ))}
    </section>
  );
};

export default BusinessList;
