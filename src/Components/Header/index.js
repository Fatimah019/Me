import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Links = ({ name, url, classname }) => {
  return (
    <NavLink to={url} className={classname} exact>
      {name}
    </NavLink>
  );
};

const Header = () => {
  const [headStyle, setHeadStyle] = useState(Object);
  const [showNavmenu, setShowNavmenu] = useState(false);
  const [showopenicon, setShowopenicon] = useState(true);
  const [active] = useState(false);

  const handleNavBar = () => {
    setShowNavmenu(true);
    setShowopenicon(false);
  };

  const closeNavMenu = () => {
    setShowNavmenu(false);
    setShowopenicon(true);
  };

  const changeHeaderOnScroll = () => {
    if (window.scrollY > 80) {
      setHeadStyle({
        backgroundColor: "rgba(110, 110, 110, 0.7)",
        borderRadius: "30px",
        boxShadow: "0 4px 2px 0 rgb(136, 135, 135)",
        backdropFilter: "blur(20px)",
        padding: "0px 5px",
      });
    } else {
      setHeadStyle({
        backgroundColor: "transparent",
        borderRadius: "0px",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        padding: "0px 0px",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderOnScroll);
  }, []);

  const headerStyle = {
    backgroundColor: headStyle.backgroundColor,
    borderRadius: headStyle.borderRadius,
    boxShadow: headStyle.boxShadow,
    backdropFilter: headStyle.backdropFilter,
    padding: headStyle.padding,
  };

  const style = showNavmenu ? { display: "block" } : {};

  return (
    <header style={headerStyle}>
      <nav>
        <Links url="/" classname="name" name={"Fatimah Davies"} />
        <ul>
          <li>
            <Links
              url="/"
              classname={active ? "active" : "inactive"}
              name={"Me"}
            />
          </li>
          <li>
            <Links
              url="/projects"
              classname={active ? "active" : "inactive"}
              name={"Projects"}
            />
          </li>
          <li>
            <a
              className="inactive"
              href="https://docs.google.com/document/d/16GwKlkmfU3cXcugC2iWao7ysI_90NfpnsEc22Wpxj6w/edit?usp=sharing"
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
            <a href="https://twitter.com/fatimahdavies">
              <i className="fa fa-linkedin">Linkedin</i>
            </a>
          </li>
          <li>
            <a href="tel:+234 7088 78 0115">
              <i className="fa fa-phone"> Phone</i>
            </a>
          </li>
          <li>
            <a href={`mailto:${"daviesfatimah97@gmail.com"}`}>
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="show-mobile">
        {showopenicon ? (
          <i className="fa fa-bars show-mobile" onClick={handleNavBar}></i>
        ) : (
          <i className="fa fa-close show-mobile" onClick={closeNavMenu}></i>
        )}
      </div>
      {/* end right header */}
    </header>
  );
};
export default Header;
