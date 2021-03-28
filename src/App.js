import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Backend from "./Components/Projects/backend";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/frontend" component={Projects} />
          <Route path="/projects/backend" component={Backend} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
