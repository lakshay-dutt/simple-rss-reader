import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Fragment>
      <div className="antialiased font-sans md:flex">
        <div className="w-full md:h-screen bg-white flex items-center justify-center ">
          <div className="max-w-sm m-8">
            <div className="text-black text-5xl md:text-15xl font-black">404</div>
            <div className="w-16 h-1 bg-blue-dark my-3 md:my-6"></div>
            <p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">Sorry, the page you are looking for could not be found.</p>
            <Link
              to="/"
              className="bg-transparent text-grey-darkest font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-grey rounded-lg"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
