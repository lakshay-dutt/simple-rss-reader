import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import Error from "./views/Error";
import Settings from "./views/Settings";
import DetailPage from "./views/DetailPage";
import { connect } from "react-redux";
import { fetchFeeds } from "./redux/helpers";
import { store } from "./redux/store";
const App = props => {
  useEffect(() => {
    const temp = (store.getState().feed || {}).feeds;
    if (props && props.feed.urls && Array.isArray(props.feed.urls) && Object.keys(temp).length < 1) {
      fetchFeeds(props.feed.urls);
    }
  }, []);
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/detail-page/:id" component={DetailPage} />
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
