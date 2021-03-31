import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../cssfiles/header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavmenu: false,
      showopenicon: true,
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
      showopenicon: false,
    });
  };

  closeNavMenu = () => {
    this.setState({
      showNavmenu: false,
      showopenicon: true,
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
    const headerStyle = {
      backgroundColor: this.state.backgroundColor,
      borderRadius: this.state.borderRadius,
      boxShadow: this.state.boxShadow,
      backdropFilter: this.state.backdropFilter,
      padding: this.state.padding,
    };
    const style = this.state.showNavmenu ? { display: "block" } : {};
    const email = "daviesfatimah97@gmail.com";
    return (
      <div>
        <header style={headerStyle}>
          <nav>
            <NavLink to="/" className="name">
              Fatimah<span>Davies</span>
            </NavLink>
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
                  to="/projects/frontend"
                  className={this.state.active ? "active" : "inactive"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <a
                  className="inactive"
                  href="https://docs.google.com/document/d/1xjRTvnBZaZpyuHITkeP1uIemFB5z7YvN7DEiqSeX10g/edit?usp=drivesdk"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>

          {/* right header */}
          <div className="socials hide-mobile" style={style}>
            <ul>
              <li>
                <a href="https://github.com/Fatimah019">
                  <i className="fa fa-github"> Github</i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/codewithfatimah">
                  <i className="fa fa-twitter"> Twitter</i>
                </a>
              </li>
              <li>
                <a href="tel:+234 7088 78 0115">
                  <i className="fa fa-phone"> Phone</i>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`}>
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="show-mobile">
            {this.state.showopenicon ? (
              <i
                className="fa fa-bars show-mobile"
                onClick={() => this.handleNavBar()}
              ></i>
            ) : (
              <i
                className="fa fa-close show-mobile"
                onClick={() => this.closeNavMenu()}
              ></i>
            )}
          </div>
          {/* end right header */}
        </header>
      </div>
    );
  }
}
