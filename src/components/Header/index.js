import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
const Header = () => {
  return (
    <Fragment>
      <header className="text-gray-700 body-font border-b border-gray-200 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Simple RSS Reader</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {routes.map(function (item, i) {
              return item.header && item.header.include ? (
                <Fragment key={i}>
                  <Link to={item.path} className="mr-5 hover:text-gray-900">
                    {item.header.label}
                  </Link>
                </Fragment>
              ) : (
                <Fragment key={i} />
              );
            })}
          </nav>
          {/* <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
