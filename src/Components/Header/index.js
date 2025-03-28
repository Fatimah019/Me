import React, { useState } from "react";
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
  const closeNavItem = () => {
    closeNavMenu();
    window.scrollTo(0, 0);
  };

  // const changeHeaderOnScroll = () => {
  //   if (window.scrollY > 80) {
  //     setHeadStyle({
  //       backgroundColor: "rgba(110, 110, 110, 0.7)",
  //       borderRadius: "30px",
  //       boxShadow: "0 4px 2px 0 rgb(136, 135, 135)",
  //       backdropFilter: "blur(20px)",
  //       padding: "0px 5px",
  //     });
  //   } else {
  //     setHeadStyle({
  //       backgroundColor: "transparent",
  //       borderRadius: "0px",
  //       boxShadow: "none",
  //       backdropFilter: "blur(0px)",
  //       padding: "0px 0px",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeHeaderOnScroll);
  // }, []);

  // const headerStyle = {
  //   backgroundColor: headStyle.backgroundColor,
  //   borderRadius: headStyle.borderRadius,
  //   boxShadow: headStyle.boxShadow,
  //   backdropFilter: headStyle.backdropFilter,
  //   padding: headStyle.padding,
  // };

  const style = showNavmenu ? { display: "block" } : {};

  return (
    <header>
      <Links url="/" classname="name" name={"Fatimah Davies"} />
      <nav className="socials hide-mobile" style={style}>
        <ul>
          <li onClick={closeNavItem}>
            <Links
              url="/"
              classname={active ? "active" : "inactive"}
              name={"Home"}
            />
          </li>
          <li onClick={closeNavItem}>
            <Links
              url="/about"
              classname={active ? "active" : "inactive"}
              name={"About Me"}
            />
          </li>
          <li onClick={closeNavItem}>
            <Links
              url="/projects"
              classname={active ? "active" : "inactive"}
              name={"Projects"}
            />
          </li>
          <li onClick={closeNavItem}>
            <Links
              url="/contact"
              classname={active ? "active" : "inactive"}
              name={"Contact"}
            />
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inactive"
              href="https://docs.google.com/document/d/1pKYFxrlNoxOxl-S7N9XJG9J09h7Z89wop4g9LdePrT4/edit?tab=t.0"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

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
