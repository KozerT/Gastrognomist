import React from "react";
import "./App.css";

const Business = () => {
  return (
    <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*Q_6G0ZKpLPMUrtgMNFoKNA.jpeg"
          alt="pizza"
          className="aspect-video w-full"
        />
      </figure>
      <div className=" p-6">
        <header class="mb-4">
          <h3 class="text-xl font-medium text-slate-700">name</h3>
        </header>
        <address className=" ">
          <p>City</p>
          <p>State</p>
          <p>Zipcode</p>
        </address>
      </div>
      <div>
        <p>Category</p>
        <p>Rating</p>
        <p>Review count</p>
      </div>
    </div>
  );
};

export default Business;
