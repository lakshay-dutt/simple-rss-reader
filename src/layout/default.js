import React, { Fragment } from "react";
import Header from "../components/Header";

export default function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Header />
          <div className="container mx-auto">
            <WrappedComponent {...this.props} />
          </div>
        </Fragment>
      );
    }
  };
}
