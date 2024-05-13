import { faBurger, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSearchContext } from "../../contexts/SearchContext";

const Header = ({ performSearch }) => {
  const { setSearchParams } = useSearchContext();
  const termRef = useRef('');
  const locationRef = useRef('');
  const page = useLocation();

  const showAdditionalFields = page.pathname === "/search-results";

  const handleSubmit=(event)=>{
    event.preventDefault();
    const term = termRef.current?.value;
    const location = locationRef.current?.value;
    setSearchParams({ term, location });
    performSearch(term, location); 
    

  }

  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-2 text-white bg-yellow-500">
      <Link className="text-2xl font-semibold" to="/">
        <FontAwesomeIcon icon={faBurger} className="mx-2" />
        <span>Gastronomist</span>
      </Link>

      {showAdditionalFields &&   (
        <form className="justify-center " onSubmit={handleSubmit}>
          <input
            type="search"
            ref={termRef}
            placeholder="Pizza, tapas, mexican"
            className="px-2 py-1 mx-1 bg-white border rounded text-slate-950 focus:outline-none"
          />
          <input
            placeholder="City"
            type="search"
            ref={locationRef}
            className="px-2 py-1 mx-1 bg-white border rounded text-slate-950 focus:outline-none"
          />
          <button className="px-2 mx-1 py-[2.9px] bg-white border rounded" >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-neutral-400 hover:text-slate-950"
            />
          </button>
        </form>
      )}
      <div className="flex justify-end">
        {page.pathname !== "/" && (
          <>
            <Link
              to="/"
              className="flex items-center px-4 duration-300 hover:text-blue-600"
            >
              <span>Main Page</span>
            </Link>
          </>
        )}
        <button className="px-4 underline duration-300 rounded-lg hover:text-blue-600 ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
