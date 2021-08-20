import React, { Component } from "react";
import "./neumorphism.css";
import { switchTheme } from "./theme";

export default class Neumorphism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultThemeText: "Light",
    };
  }

  toggleTheme = () => {
    // this.setState({
    //   defaultThemeText: "Dark",
    // });
    document.body.classList.toggle("dark");
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    switchTheme();
  }

  render() {
    const themeText = this.state.defaultThemeText ? "Dark" : "Light";
    return (
      <div className="neumorphism-body">
        <div className="neumorphism-container">
          <label>
            <button onClick={() => this.toggleTheme()}>{themeText}</button>
          </label>

          <form>
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="password" placeholder="Secret Code" />
            <br />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}
