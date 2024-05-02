import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-10 bg-white shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
              <Link
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                to="/"
              >
                <FontAwesomeIcon icon={faBurger} className="mx-2" />
                Gastronomist
              </Link>
            </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://github.com/KozerT" className="hover:underline">
              Kozer-T
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
