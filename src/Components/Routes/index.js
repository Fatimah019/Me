import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Header from "../Header";
import Contact from "../Contact";
import Footer from "../Footer";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <div style={{ marginTop: "5rem" }}>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
