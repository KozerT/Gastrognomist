import React from "react";

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
    <div className="w-3/12 overflow-hidden bg-white rounded-md shadow-md shadow-slate-200 ">
      <img
        src={imageSrc}
        alt="pizza"
        className="w-full object-cover max-h-[22rem]"
      />
      <div className="w-full p-6 ">
        <h3 className="mb-3 text-xl font-semibold text-black text-start">
          {name}
        </h3>
        <div className="inline-flex w-full">
          <address className="w-1/2 not-italic text-left ">
            <p>{address}</p>
            <p>{city}</p>
            <span>{state}&nbsp;</span>
            <span>{zipCode}</span>
          </address>
          <div className="w-1/2 text-right ">
            <p className="font-medium text-yellow-600 uppercase">{category}</p>
            <p className="font-medium text-yellow-600">{rating}</p>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
