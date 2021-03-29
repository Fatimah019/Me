import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../cssfiles/footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  changeClass = () => {
    this.setState({
      active: true,
    });
  };
  render() {
    const email = "daviesfatimah97@gmail.com";
    return (
      <div className="footer">
        <footer>
          <div className="flex-col space-around">
            <div>
              <p>
                <b>Let's make something amazing together.</b>
              </p>
              <p>
                <b>
                  Start by{" "}
                  <a href={`mailto:${email}`} className="s-text-col">
                    saying hi
                  </a>
                </b>
              </p>
            </div>
            <div>
              <span>
                {" "}
                <b>Fatimah</b>Davies
              </span>
              <pre className="t-text-col">2020 all rights reserved</pre>
            </div>
          </div>
          <div className="flex-col footer-r">
            <pre className="t-text-col">Ikotun, Lagos, Nigeria.</pre>
            <pre>
              <b>
                <a href={`mailto:${email}`} className="g-text-col">
                  daviesfatimah97@gmail.com
                </a>
              </b>
            </pre>
            <nav>
              <ul className="footer-nav">
                <li>
                  <NavLink
                    to="/"
                    exact
                    className={this.state.active ? "active" : "inactive"}
                  >
                    Me
                  </NavLink>
                </li>
                <br />
                <li>
                  <NavLink
                    to="/projects/frontend"
                    className={this.state.active ? "active" : "inactive"}
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* socials */}
            <div>
              <ul className="flex footer-social">
                <li>
                  <a
                    href="https://github.com/Fatimah019"
                    className="t-text-col"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/codewithfatimah"
                    className="t-text-col"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:+234 7088 78 0115" className="t-text-col">
                    <i className="fa fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className="t-text-col">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
