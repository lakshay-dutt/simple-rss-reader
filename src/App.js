import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Fragment key={route.path + i}>
              <Route exact path={route.path} component={route.Component} />
            </Fragment>
          ))}
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
