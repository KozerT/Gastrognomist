import { faBurger, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-2 text-white bg-yellow-500">
      <div className="text-2xl font-semibold">
        <FontAwesomeIcon icon={faBurger} className="mx-2" />
        <span> Gastronomist</span>
      </div>
      <div>
        <span className="mx-4 hover:text-blue-600">Login</span>
        <button className="px-4 py-2 underline duration-300 rounded-lg hover:text-blue-600 ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
