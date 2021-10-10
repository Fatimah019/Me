import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default Routes;
