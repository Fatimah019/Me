import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Socials = ({ classname, url, icon, link_name }) => {
  return (
    <li>
      <a href={url} className={(classname = "t-text-col")}>
        <i className={icon}></i>
        <span>{link_name}</span>
      </a>
    </li>
  );
};

const Footer = () => {
  const email = "daviesfatimah97@gmail.com";

  return (
    <div className="footer">
      <footer>
        <ul className="flex footer-social">
          <Socials
            url="https://www.linkedin.com/in/fatimahdavies"
            classname
            icon="fa fa-linkedin"
            link_name="Linkedin"
          />
          <Socials
            url="https://github.com/Fatimah019"
            classname
            icon="fa fa-github"
            link_name="Github"
          />
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
              alt="logo"
              className="img"
            />
          </Link>
          <Socials
            url="tel:+234 7088 78 0115"
            classname
            icon="fa fa-phone"
            link_name="Phone"
          />
          <Socials
            url={`mailto:${email}`}
            classname
            icon="fa fa-envelope"
            link_name="Email"
          />
        </ul>

        <div className="copy-right">
          <Socials
            url={`mailto:${email}`}
            classname
            link_name="daviesfatimah97@gmail.com"
          />

          {/* <pre className="t-text-col">2021 all rights reserved</pre> */}
        </div>

        {/* <div className="flex-col space-around">
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
            <pre className="t-text-col">2021 all rights reserved</pre>
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
                <Links
                  url="/"
                  classname={active ? "active" : "inactive"}
                  name={"Me"}
                />
              </li>
              <br />
              <li>
                <Links
                  url="/projects"
                  classname={active ? "active" : "inactive"}
                  name={"Projects"}
                />
              </li>
              <br />
            </ul>
          </nav>
          <div>
            <ul className="flex footer-social">
              <Socials
                url="https://github.com/Fatimah019"
                classname
                icon="fa fa-github"
              />
              <Socials
                url="https://twitter.com/codewithfatimah"
                classname
                icon="fa fa-twitter"
              />
              <Socials
                url="tel:+234 7088 78 0115"
                classname
                icon="fa fa-phone"
              />
              <Socials
                url={`mailto:${email}`}
                classname
                icon="fa fa-envelope"
              />
            </ul>
          </div>
        </div> */}
      </footer>
    </div>
  );
};
export default Footer;
