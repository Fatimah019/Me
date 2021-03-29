import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../cssfiles/home.css";

export default class Home extends Component {
  render() {
    const email = "daviesfatimah97@gmail.com";
    return (
      <div className="home">
        {/* home-top */}
        <div className="home-top">
          {/* put header */}
          <Header />
          {/* home top content */}
          <div className="home-top-content">
            <div className="home-top-content-inner">
              <div className="home-top-content-inner-l">
                <div className="home-top-content-inner-l-1">
                  <div>
                    <pre>
                      <span className="t-bg-color p-text-col">
                        OPEN TO WORK
                      </span>
                    </pre>
                  </div>

                  <div>
                    <p className="home-top-content-inner-l-1-h">
                      Front End Web Developer
                    </p>
                    <pre>
                      <b>With</b>
                    </pre>
                  </div>
                  <span className="t-text-col">
                    Two years experience of building beautiful and amazing
                    websites.
                  </span>
                  <br />
                  <a
                    href={`mailto:${email}`}
                    className="home-top-chat-link s-text-col"
                  >
                    Let's Chat
                  </a>
                </div>
                <div className="home-top-content-inner-l-2">
                  <div className="flex align-center home-top-content-inner-l-2-n">
                    <p>6</p>
                    <div>
                      <span className="t-text-col">Frontend</span>
                      <br />
                      <span className="t-text-col">projects</span>
                    </div>
                  </div>
                  <div className="flex align-center home-top-content-inner-l-2-n">
                    <p>2</p>
                    <div>
                      <span className="t-text-col">Backend</span>
                      <br />
                      <span className="t-text-col">projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-top-content-inner-r">
                <img
                  src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
                  alt="img"
                  className="img"
                />
              </div>
            </div>
          </div>

          {/* home top content end*/}
        </div>
        {/* home-top */}

        {/* second layer frontend or backend */}
        <div className="home-second-layer flex">
          <div className="home-second-layer-l">
            {/* 1 */}
            <div className="home-second-layer-l-div">
              <div className="flex-col justify-content-center">
                <div className="text-right">
                  <i className="fa fa-folder"></i>
                </div>
                <span>Front End</span>
                <br />
                <span className="t-text-col">
                  See All Frontend Projects Here
                </span>
                <p>
                  {" "}
                  <NavLink to="/projects/frontend" className="s-text-col">
                    See Projects
                  </NavLink>
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="home-second-layer-l-div">
              <div className="flex-col justify-content-center">
                <div className="text-right">
                  <i className="fa fa-folder"></i>
                </div>
                <span>BackEnd</span>
                <br />
                <span className="t-text-col">
                  See All Backend Projects Here
                </span>
                <p>
                  {" "}
                  <NavLink to="/projects/backend" className="s-text-col">
                    See Projects
                  </NavLink>
                </p>
              </div>
            </div>
            {/* 3 */}
          </div>
          <div className="home-second-layer-r">
            <div className="home-second-layer-r-div">
              <span className="t-text-col">About Me</span>
              <p className="about-name">Hello! I'm Fatimah Davies</p>
              <p>Taking every development to the next level</p>
              <div className="t-text-col">
                Paying attention to details and wanting to deliver the best has
                been a thing i keep in mind. Clients satisfaction takes a bigger
                place in my heart and this makes me deliver good stuff
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="skills">
          <div>
            <p>Reactjs</p>
          </div>
          <div>
            <p>VueJs</p>
          </div>
          <div>
            {" "}
            <p>Git</p>
          </div>
          <div>
            <p>MongoDb</p>
          </div>
          <div>
            <p>NodeJs</p>
          </div>
          <div>
            {" "}
            <p>Html</p>
          </div>
          <div>
            <p>Css</p>
          </div>
          <div>
            {" "}
            <p>JavaScript</p>
          </div>
          <div>
            {" "}
            <p>SASS</p>
          </div>
        </div>

        {/* latest works */}
        <div className="latest-works align-center">
          <div className="latest-works-l">
            <div className="latest-works-l-inner">
              <div className="latest-works-l-inner-1 text-center">
                <p>
                  <b>Latest Works</b>
                </p>
                <span className="t-text-col">
                  Recent projects i have been working on.
                </span>
              </div>
              <div className="latest-works-l-img-con latest-works-l-inner-1">
                <div className="latest-works-l-img">
                  <div className="latest-works-l-img-h container-fluid flex space-between align-center">
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
                    <a
                      href="https://parkcar.netlify.app"
                      className="t-text-col"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>

              <div className="latest-works-l-inner-1 flex-col flex-start">
                <p className="contact-link-proj">
                  <b>
                    <NavLink to="/all/projects" className="s-text-col">
                      ALL PROJECTS
                    </NavLink>
                  </b>
                </p>
                <span className="t-text-col">
                  if you have a reason to workk with me then{" "}
                  <a href="tel:07088780115" className="s-text-col">
                    Let's Talk
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="latest-works-r">
            <div className="latest-works-r-inner">
              <div className="latest-works-r-p-2">
                <div className="latest-works-r-p-2-img-con">
                  <div className="latest-works-r-p-2-img-1">
                    <div className="container-fluid flex space-between align-center latest-works-r-p-2-img-2-h">
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
                  </div>
                </div>
              </div>
            </div>
            {/* -------------- */}
            <div className="latest-works-r-inner">
              <div className="latest-works-r-p-2">
                <div className="latest-works-r-p-2-img-con">
                  <div className="latest-works-r-p-2-img-2">
                    <div className="container-fluid flex space-between align-center latest-works-r-p-2-img-2-h">
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
                  </div>
                </div>
              </div>
            </div>
            {/* ---------- */}
          </div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
