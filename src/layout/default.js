import React, { Fragment } from "react";
import Header from "../components/Header";

const withLayout = (WrappedComponent) => {
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
