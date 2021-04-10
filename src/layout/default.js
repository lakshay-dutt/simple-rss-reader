import React, { Fragment } from "react";
import Header from "../components/Header/index";

const withLayout = (WrappedComponent) => {
  debugger
  return (
    <Fragment>
      <Header />
      <div className="container mx-auto">
        <WrappedComponent />
      </div>
    </Fragment>
  );
};

export default withLayout;
