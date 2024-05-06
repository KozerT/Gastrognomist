import React from "react";

const Business = ({ business }) => {

  console.log(business, 'This is data :')
  const firstCategory = business.categories.length > 0 ? business.categories[0].title : '';

  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <img
          src={business.image_url}
          alt={business.name}
          className="object-cover w-full h-40"
        />

        <div className="p-4 mb-4 ">
          <div className="flex items-center justify-between mb-2 text-lg font-semibold">
      <h3 className="text-gray-800 ">{business.name}</h3>
      <span className="text-yellow-600 ">{business.rating} ⭐️</span>
          </div>

          <address className="mb-4 text-gray-600">
            <p>{business.location.address1},<span className="ml-2">{business.location.city}</span></p>

          </address>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-yellow-600 uppercase">{firstCategory}</p>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">{business.review_count} reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
