import React from "react";

const Business = ({business}) => {


  return (
    <div className="w-3/12 overflow-hidden bg-white rounded-md shadow-md shadow-slate-200 ">
      <img
        src={business.image_url}
        alt=""
        className="w-full object-cover max-h-[22rem]"
      />
      <div className="w-full p-6 ">
        <h3 className="mb-3 text-xl font-semibold text-black text-start">
          {business.name}
        </h3>
        <div className="inline-flex w-full ">
          <address className="flex flex-col w-1/2 gap-2 not-italic text-left ">
            <p>{business.location.address1}</p>
            <p>{business.location.city}</p>
            <p>{`${business.location.state} ${business.location.zip_code}`}</p>
          </address>
          <div className="flex flex-col w-1/2 gap-2 text-right ">
          {business.categories.map((category) => (
              <p key={category.alias} className="font-medium text-yellow-600 uppercase">
                {category.title}
              </p>
            ))}
            <p className="font-medium text-yellow-600 ">
              {business.rating}
            </p>
            <p>{business.review_count} reviews </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
