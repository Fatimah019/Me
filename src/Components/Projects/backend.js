import React, { Component } from "react";
import Header from "../Header";
import "../../cssfiles/home.css";
import "../../cssfiles/projects.css";
import { NavLink } from "react-router-dom";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <div>
        <div className="home-top">
          <Header />
          {/* nav links to all, frontend, and backend projects each */}
          <div className="projects-header">
            <nav>
              <NavLink
                to="/projects/frontend"
                exact
                className={this.state.active ? "active" : "inactive"}
              >
                FrontEnd
              </NavLink>
              <NavLink
                to="/projects/backend"
                className={this.state.active ? "active" : "inactive"}
              >
                Backend
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
