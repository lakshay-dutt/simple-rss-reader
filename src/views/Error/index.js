import React, { Fragment } from "react";

const Error = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>
          Not found <span>:(</span>
        </h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>

        <i>404</i>
      </div>
    </Fragment>
  );
};

export default Error;
