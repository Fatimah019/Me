import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./home.css";

import ProjectCard from "../UI/ProjectCard";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const email = "daviesfatimah97@gmail.com";
  return (
    <div>
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
                    <span className="t-bg-color p-text-col">OPEN TO WORK</span>
                  </pre>
                </div>

                <div>
                  <p className="home-top-content-inner-l-1-h">Web Developer</p>
                  <pre>
                    <b>With</b>
                  </pre>
                </div>
                <span className="t-text-col">
                  Years experience of building beautiful and amazing websites
                  and web applications.
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
                  <p>7</p>
                  <div>
                    <span className="t-text-col">Personal</span>
                    <br />
                    <span className="t-text-col">projects</span>
                  </div>
                </div>
                <div className="flex align-center home-top-content-inner-l-2-n">
                  <p>2</p>
                  <div>
                    <span className="t-text-col">Featured</span>
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
              <span> All Projects</span>
              <br />
              <span className="t-text-col">
                See All Personal and Featured Projects Here
              </span>
              <p>
                {" "}
                <NavLink to="/projects" className="s-text-col">
                  See Projects
                </NavLink>
              </p>
            </div>
          </div>
          {/* 2 */}
          {/* <div className="home-second-layer-l-div">
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
        </div> */}
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
              place in my heart and this makes me deliver good stuff.
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
          <p>Next.Js</p>
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
          <p>Redux</p>
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
          <p>TypeScript</p>
        </div>
        <div>
          {" "}
          <p>SASS</p>
        </div>
        <div><p>Material-Ui</p></div>
        <div><p>Tailwind Css</p></div>
      </div>

      {/* latest work */}
      <div className="latest-works-o">
        <div className="latest-works-o-l">
          <div className="latest-works-l-inner-1 text-center">
            <p>
              <b>Latest Works</b>
            </p>
            <p className="t-text-col">
              Recent projects i have been working on.
            </p>
          </div>
          <ProjectCard
            name="StartupLagos"
            plang="ReactJs, MaterialUi, Redux"
            linkname="Visit Site"
            linkurl="https://www.startuplagos.net/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393280/startup_rc6paa.png"
          />
          <div className="latest-works-l-inner-1 flex-col flex-start">
            <p className="contact-link-proj">
              <b>
                <NavLink to="/projects" className="s-text-col">
                  ALL PROJECTS
                </NavLink>
              </b>
            </p>
            <span className="t-text-col">
              if you have a reason to work with me then{" "}
              <a href="tel:07088780115" className="s-text-col">
                Let's Talk
              </a>
            </span>
          </div>
        </div>
        <div>
          <ProjectCard
            name="Google Docs Clone"
            plang="Next.Js, TailwindCss, Firebase"
            linkname=" Visit Site"
            linkurl="https://googledocs-clone-davies.vercel.app/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1633696440/googledocsscreenshot_ff9ath.png"
          />
          <ProjectCard
            name="FormPlus Templates"
            plang="ReactJs, CSS, Redux"
            linkname="Visit Site"
            linkurl="https://formpluss.netlify.app/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393266/formplus_bkyg7w.png"
          />
        </div>
      </div>

      {/* latest works edns */}

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
