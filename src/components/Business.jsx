import React from "react";

const Business = (props) => {
  return (
    <div className="w-3/12 overflow-hidden bg-white rounded-md shadow-md shadow-slate-200 ">
      <img
        src={props.business.imageSrc}
        alt=""
        className="w-full object-cover max-h-[22rem]"
      />
      <div className="w-full p-6 ">
        <h3 className="mb-3 text-xl font-semibold text-black text-start">
          {props.business.name}
        </h3>
        <div className="inline-flex w-full ">
          <address className="flex flex-col w-1/2 gap-2 not-italic text-left ">
            <p>{props.business.address}</p>
            <p>{props.business.city}</p>
            <p>{`${props.business.state} ${props.business.zipCode}`}</p>
          </address>
          <div className="flex flex-col w-1/2 gap-2 text-right ">
            <p className="font-medium text-yellow-600 uppercase ">
              {props.business.category}
            </p>
            <p className="font-medium text-yellow-600 ">
              {props.business.rating}
            </p>
            <p>{props.business.reviewCount} reviews </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
