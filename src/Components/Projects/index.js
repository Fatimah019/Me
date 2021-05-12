import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../cssfiles/projects.css";
import { NavLink } from "react-router-dom";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="home-top proj-top">
          <Header />
          {/* nav links to all, frontend, and backend projects each */}
          {/* <div className="projects-header">
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
          </div> */}
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
                <video autoplay loop>
                  <source
                    src="https://res.cloudinary.com/dycyotaya/video/upload/v1618816394/Untitled_8_1080p_1_nr0qes.3gp"
                    type="video/mp4"
                  ></source>
                </video>
                <a
                  href="https://findaseller.herokuapp.com/"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="eightyperc text-center">80%</div>
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
            <div className="proj-3">
              <div className="container-fluid flex align-center space-between">
                <span>Dev Portfolio</span>
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
                  href="https://d-porfolio.herokuapp.com/"
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
                <div className="complete text-center">100%</div>
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
                <span>ToDo App</span>
                <div>ReactJs, Nodejs and Css</div>
                <a
                  href="https://github.com/Fatimah019/ToDoApp"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://todoappbyme.herokuapp.com/"
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
                <span>Covid Cases</span>
                <div>ReactJs, CSS</div>

                <a
                  href="https://github.com/Fatimah019/covidcasesN"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://covidcasesbyfatimah.netlify.app/"
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
                <span>Dev Portfolio</span>
                <div>ReactJs, CSS</div>

                <a
                  href="https://github.com/Fatimah019/NafeesahJimoh"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://nofeesahjimoh.herokuapp.com/"
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
                <span>Task Manager</span>
                <div>ReactJs, NodeJs, CSS</div>

                <a
                  href="https://github.com/Fatimah019/TaskManager"
                  className="g-text-col"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="text-center visit-site-link">
                <a
                  href="https://taskmanagerbyme.herokuapp.com/"
                  className="t-text-col"
                >
                  Visit Site
                </a>
              </div>
              <div className="container progress-con">
                <div className="complete text-center">100%</div>
              </div>
            </div>

            {/* end of projrcts */}
          </div>
        </div>
        <div className="proj-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
