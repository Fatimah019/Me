import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
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
            <div className="proj-1">
              <div className="container-fluid flex align-center space-between">
                <span>Find A Seller</span>
                <div>ReactJs/Css/NodeJs</div>
                <a
                  href="https://github.com/Fatimah019/FindASeller"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://findaseller.herokuapp.com/"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="half-complete text-center">50%</div>
              </div>
            </div>
            <div className="proj-2">
              <div className="container-fluid flex align-center space-between">
                <span>CarPark Booking</span>
                <div>ReactJs/Css/NodeJs</div>
                <a
                  href="https://github.com/Fatimah019/CarParkSpace/"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a href="https://parkcar.netlify.app" className="t-text-col">
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="half-complete text-center">50%</div>
              </div>
            </div>
            <div className="proj-3">
              <div className="container-fluid flex align-center space-between">
                <span>Dev Website</span>
                <div>ReactJs/Css</div>
                <a
                  href="https://github.com/Fatimah019/FatimahDaviesO"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://fatimah-davies.herokuapp.com/"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="complete text-center">100%</div>
              </div>
            </div>
            <div className="proj-4">
              <div className="container-fluid flex align-center space-between">
                <span>Image Search</span>
                <div>VueJs/SASS</div>

                <a
                  href="https://github.com/Fatimah019/ImagesSearch"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a href="https://getimage.netlify.app/" className="t-text-col">
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="eightyperc text-center">80%</div>
              </div>
            </div>
            <div className="proj-5">
              <div className="container-fluid flex align-center space-between">
                <span>Quiz App</span>
                <div>HTML/Css/Js</div>
                <a
                  href="https://github.com/Fatimah019/quiz-app"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://fatimah019.github.io/quiz-app/quiz"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="complete text-center">100%</div>
              </div>
            </div>
            <div className="proj-6">
              <div className="container-fluid flex align-center space-between">
                <span>Terms In Tech</span>
                <div>HTML/Css/Js</div>
                <a
                  href="https://github.com/Fatimah019/Fatimah019.github.io/tree/master/technologyterms"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://fatimah019.github.io/technologyterms/"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="complete text-center">100%</div>
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
