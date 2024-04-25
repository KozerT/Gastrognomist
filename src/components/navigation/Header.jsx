import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ showSearchFields }) => {
  const location = useLocation();

  const showAdditionalFields = location.pathname === "/search-results";

  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-2 text-white bg-yellow-500">
      <div className="text-2xl font-semibold">
        <FontAwesomeIcon icon={faBurger} className="mx-2" />
        <span>Gastronomist</span>
      </div>

      {showAdditionalFields && (
        <div className="justify-center ">
          <input
            type="search"
            placeholder="Search Term"
            className="px-2 py-1 mx-4 rounded"
          />
          <input
            type="search"
            placeholder="Location"
            className="px-2 py-1 mx-4 rounded"
          />
        </div>
      )}
      <div className="flex justify-end">
        {showAdditionalFields && (
          <>
            <Link to="/" className="flex items-center">
              <span>Back to Main Page</span>
            </Link>
          </>
        )}
        <button className="px-4 py-2 underline duration-300 rounded-lg hover:text-blue-600 ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
