import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./views/Home";
import Error from "./views/Error";
import Settings from "./views/Settings";
import DetailPage from "./views/DetailPage";

const App = () => {
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

export default App;
