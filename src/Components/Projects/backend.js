import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../cssfiles/projects.css";
import { NavLink } from "react-router-dom";

export default class Backend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <div>
        <div className="home-top proj-top">
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
          {/* list of projects */}
          <div className="project-list">
            <div className="proj-b-1">
              <div className="container-fluid flex align-center space-between">
                <span>Ecommerce Api</span>
                <div>NodeJs/MonoDb</div>
                <a
                  href="https://github.com/Fatimah019/RevieApi"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://documenter.getpostman.com/view/11223454/Tz5s4wUj"
                  className="t-text-col"
                >
                  See Documentation
                </a>
              </div>
              <div className="container progress-con">
                <div className="complete text-center">100%</div>
              </div>
            </div>
            <div className="proj-b-2">
              <div className="container-fluid flex align-center space-between">
                <span>Blog Site</span>
                <div>NodeJs/MonoDb</div>
                <a
                  href="https://github.com/Fatimah019/RevieApi"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://documenter.getpostman.com/view/11223454/Tz5s4wUj"
                  className="t-text-col"
                >
                  See Documentation
                </a>
              </div>
              <div className="container progress-con">
                <div className="eightyperc text-center">80%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="proj-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
