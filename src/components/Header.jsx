import { faBurger, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center py-2 text-2xl font-semibold text-white bg-yellow-500 ">
      <FontAwesomeIcon icon={faBurger} className="mx-2" />
      Gastronomist
    </div>
  );
};

export default Header;
