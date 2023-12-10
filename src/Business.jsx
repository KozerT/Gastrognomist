import React from "react";
import "./App.css";

const Business = () => {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow-md shadow-slate-200 w-3/12">
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg"
          alt="pizza"
          className="aspect-video w-full"
        />
      </figure>
      <div className=" p-6 w-full ">
        <h3 class="text-xl font-semibold text-start text-black mb-3">
          Pizza Margarita
        </h3>
        <div className="inline-flex w-full">
          <address className="w-1/2  text-left not-italic  ">
            <p>City</p>
            <p>State</p>
            <p>Zipcode</p>
          </address>
          <div className="  w-1/2 text-right">
            <p className="text-yellow-600 uppercase font-medium">Category</p>
            <p className="text-yellow-600 font-medium">Rating</p>
            <p>Review count</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
