import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../cssfiles/home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavmenu: false,
      active: false,
      backgroundColor: "transparent",
      borderRadius: "0px",
      boxShadow: "none",
      backdropFilter: "blur(0px)",
      padding: "0px 0px",
      width: "85%",
    };
  }
  changeClass = () => {
    this.setState({
      active: true,
    });
  };
  handleNavBar = () => {
    this.setState({
      showNavmenu: true,
    });
  };
  closeNavMenu = () => {
    this.setState({
      showNavmenu: false,
    });
  };
  changeHeaderOnScroll = (e) => {
    if (window.scrollY > 80) {
      this.setState({
        backgroundColor: "rgba(110, 110, 110, 0.7)",
        borderRadius: "30px",
        boxShadow: "0 4px 2px 0 rgb(136, 135, 135)",
        backdropFilter: "blur(20px)",
        padding: "0px 5px",
      });
    } else {
      this.setState({
        backgroundColor: "transparent",
        borderRadius: "0px",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        padding: "0px 0px",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeHeaderOnScroll);
  }
  render() {
    const style = this.state.showNavmenu ? { display: "block" } : {};
    const headerStyle = {
      backgroundColor: this.state.backgroundColor,
      borderRadius: this.state.borderRadius,
      boxShadow: this.state.boxShadow,
      backdropFilter: this.state.backdropFilter,
      padding: this.state.padding,
    };

    return (
      <div className="home">
        {/* home-top */}
        <div className="home-top">
          <header style={headerStyle}>
            <nav>
              <p className="name">
                Fatimah<span>Davies</span>
              </p>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    className={this.state.active ? "active" : "inactive"}
                  >
                    Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={this.state.active ? "active" : "inactive"}
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* right header */}
            <div className="socials hide-mobile" style={style}>
              <i className="fa fa-github"> Github</i>
              <i className="fa fa-twitter"> Twitter</i>
              <i className="fa fa-phone"> Phone</i>
            </div>
            <div className="show-mobile">
              <i className="fa fa-bars" onClick={() => this.handleNavBar()}></i>
              {/* {!this.showNavmenu ? (
                  <i className="fa fa-bars" onClick={() => this.handleNavBar()}>
                    open
                  </i>
                ) : (
                  <i className="fa fa-close" onClick={() => this.closeNavMenu()}>
                    close
                  </i>
                )} */}
            </div>
            {/* end right header */}
          </header>

          {/* home top content */}
          <div className="home-top-content">
            <div className="home-top-content-inner">
              <div className="home-top-content-inner-l">
                <div className="home-top-content-inner-l-1">
                  <div>
                    <span className="t-bg-color p-text-col">
                      some texts here
                    </span>
                  </div>

                  <div>
                    <p className="home-top-content-inner-l-1-h">
                      Talk is cheap come lets talkssssssssssssss
                    </p>
                  </div>
                  <span className="t-text-col">
                    some texts some texts some texts some texts
                    sssssssssssssssssssss
                  </span>
                  <br />
                  <p className="home-top-chat-link s-text-col">Let's Chat</p>
                </div>
                <div className="home-top-content-inner-l-2">
                  <div className="flex align-center home-top-content-inner-l-2-n">
                    <p>12</p>
                    <div>
                      <span className="t-text-col">sssss</span>
                      <br />
                      <span className="t-text-col">sssss</span>
                    </div>
                  </div>
                  <div className="flex align-center home-top-content-inner-l-2-n">
                    <p>20</p>
                    <div>
                      <span className="t-text-col">sssss</span>
                      <br />
                      <span className="t-text-col">sssss</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-top-content-inner-r">
                <img
                  src="https://res.cloudinary.com/dycyotaya/image/upload/v1572175377/my-photo_puy5gn.jpg"
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
                <span className="t-text-col">All frontend projects here</span>
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
                <span className="t-text-col">All backend projects here</span>
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
            <span className="t-text-col">About Me</span>
            <p className="about-name">Hello! I'm Fatimah Davies</p>
            <p>Taking every development to the next level</p>
            <div className="t-text-col">
              avout me avout mevvavout meavout meavout me v avout me avout me
              avout me avout me v avout me avout me avout meavout me avout mev
              avout me avout me avout me avout me avout mev avout me avout
              mevvavout meavout meavout me v avout me avout me avout me avout me
              v avout me avout avout me avout mevvavout meavout meavout me v
              avout me avout me avout me avout me v avout me avout
            </div>
          </div>
        </div>

        {/* skills */}
        {/* <div className="skills">
          <p>Reactjs</p>
          <p>VueJs</p>
          <p>Git</p>
          <p>MongoDb</p>
          <p>NodeJs</p>
          <p>Html</p>
          <p>Css</p>
          <p>JavaScript</p>
          <p>SASS</p>
        </div> */}

        {/* latest works */}
        <div className="latest-works align-center">
          <div>ww</div>
          <div className="latest-works-r">
            <div className="latest-works-r-p-2">
              <div className="flex space-between align-center latest-works-r-p-2-p">
                <p>ParkCar</p>
                <a href="www">
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="visit-site">
                <a href="ll" className="visit-site-link">
                  View Site
                </a>
              </div>
            </div>
            <div className="latest-works-r-p-2">
              <div className="flex space-between align-center latest-works-r-p-2-p">
                <p>ParkCar</p>
                <a href="www">
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="visit-site">
                <a href="ll" className="visit-site-link">
                  View Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
