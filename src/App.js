import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import Error from "./views/Error";
import Settings from "./views/Settings";
import DetailPage from "./views/DetailPage";
import { connect } from "react-redux";
import fetchFeedXml from "./api";
const App = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    if (props && props.feed.urls && Array.isArray(props.feed.urls)) {
      [...props.feed.urls].forEach(async url => {
        try {
          const respoonse = await fetchFeedXml(url);
          console.log(respoonse, data);
          debugger;
        } catch (err) {
          debugger;
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/detail-page" component={DetailPage} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </Fragment>
  );
};

function mapStateToProps(state) {
  const { feed = {} } = state;
  return { feed };
}

export default connect(mapStateToProps, {})(App);
