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
    return (
      <div className="footer">
        <footer>
          <div className="flex-col space-around">
            <div>
              <p>
                <b>Let's make something amzing together.</b>
              </p>
              <p>
                <b>
                  Start by <span className="s-text-col">saying hi</span>
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
          <div className="flex-col">
            <pre className="t-text-col">Ikotun, Lagos, Nigeria.</pre>
            <pre>
              <b>fatimahdavies97@gmail.com</b>
            </pre>
            <nav>
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
          </div>
        </footer>
      </div>
    );
  }
}
