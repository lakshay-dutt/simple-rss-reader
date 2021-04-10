import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import DetailPage from "./views/DetailPage";
import Home from "./views/Home";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail-page" component={DetailPage} />
          <Route path="/" component={Home} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
