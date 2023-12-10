import "./App.css";
import React from "react";
import testData from "./BusinessList";

const Business = ({
  imageSrc,
  name,
  address,
  city,
  state,
  zipCode,
  category,
  rating,
  reviewCount,
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow-md shadow-slate-200 w-3/12 ">
      <img
        src={imageSrc}
        alt="pizza"
        className="w-full object-cover max-h-[22rem]"
      />
      <div className=" p-6 w-full ">
        <h3 className="text-xl font-semibold text-start text-black mb-3">
          {name}
        </h3>
        <div className="inline-flex w-full">
          <address className="w-1/2  text-left not-italic  ">
            <p>{address}</p>
            <p>{city}</p>
            <span>{state}&nbsp;</span>
            <span>{zipCode}</span>
          </address>
          <div className="  w-1/2 text-right">
            <p className="text-yellow-600 uppercase font-medium">{category}</p>
            <p className="text-yellow-600 font-medium">{rating}</p>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
