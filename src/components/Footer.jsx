import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { path: "/about", label: "About" },
    { path: "/contacts", label: "Contact" }
  ];

  return (
    <footer className="w-full bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="flex flex-wrap items-center justify-between">
          <p className="flex items-center mb-4 space-x-3 rtl:space-x-reverse">
            <Link
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              to="/"
            >
              <FontAwesomeIcon icon={faBurger} className="mx-2" />
              Gastronomist
            </Link>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className={`hover:underline ${index < links.length - 1 ? 'me-4 md:me-6' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a href="https://github.com/KozerT" className="hover:underline">
            Kozer-T
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;


