import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./home.css";
import { skills } from "../../data";

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
                  <p className="home-top-content-inner-l-1-h">FrontEnd Engineer</p>
                  <pre>
                    <b>With</b>
                  </pre>
                </div>
                <span className="t-text-col">
                  Years of experience, building functional, beautiful and amazing websites
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
        {skills.map((skill, index)=>(
          <p key={index}>{skill.name}</p>
        ))}
      </div>

      {/* latest work */}
      <div className="latest-works-o">
        <div className="latest-works-o-l">
          <div className="latest-works-l-inner-1 text-center">
            <p>
              <b>Latest Works</b>
            </p>
            <p className="t-text-col">
              Recent projects I have built.
            </p>
          </div>
          <ProjectCard
            name="Startup Lagos"
            plang="ReactJs, MaterialUi, Redux"
            linkName="Visit Site"
            linkUrl="https://www.startuplagos.net/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393280/startup_rc6paa.png"
            title="Startup Lagos"
            description="Startup Lagos targets being the largest tech ecosystem, to offer retail and institutional investors the huge opportunities of tapping into the vast potential of early-stage tech-driven startup initiatives to blossom into regional and continental scale solutions to Africa’s diverse challenges"
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
              If there is a reason to work with me then{" "},
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
            linkName=" Visit Site"
            linkUrl="https://googledocs-clone-davies.vercel.app/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1633696440/googledocsscreenshot_ff9ath.png"
            title="Google Docs Clone"
            description="Google Docs Clone is aimed at mimicking some of the features of Google Docs such as; Login in to your google docs with your google account, creating a new document, saving and accessing documents created"
          />
          <ProjectCard
            name="Github Repo Clone"
            plang="Html, CSS, JS, GraphQl"
            linkName="Visit Site"
            linkUrl="https://buycoinstest1.netlify.app/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393267/githubrepo_sjhg5t.png"
            title="Github Repo Clone"
            description="Github Repo Clone aims at demonstrating the features on the github repo. A field where you can put your gthub username appears and when you procees, you get to see the list of repositories you have created as a user. "
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
