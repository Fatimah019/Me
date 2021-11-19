/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from "react";
import "./home.css";

import ProjectCard from "../UI/ProjectCard";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const email = "daviesfatimah97@gmail.com";
  return (
    <div>
      <div className="home-top">
        <img
          src="https://res.cloudinary.com/dycyotaya/image/upload/v1629367382/IMG_20210819_110222_651_j5xmfs.jpg"
          alt="my avatar"
          className="my-avatar"
        />
        <p className="home-top-about">
          Hello! 👋🏼 My name is Fatimah Davies. I’m a{" "}
          <span>FrontEnd Engineer</span> and I am passionate about developing
          beautiful products.
        </p>
        <p className="go-to-selected-projects">Selected Projects</p>
      </div>

      {/*selected projects */}

      <div className="selected-projects">
        <ProjectCard
          name="Wellness Plus"
          plang={["ReactJs", "Redux", "Material-Ui"]}
          linkName="Visit Site"
          linkUrl="https://wellnessplus-admin.herokuapp.com/"
          description="Wellness Plus is a health care application that is aimed at bridging the gap between the average nigerian and the exorbiant health prices. Making health care benefits accessible and affordable to the masses."
          googlePlayUrl="https://play.google.com/store/apps/details?id=com.hazonholdings.android.wellnesspatientapp"
          isMobileVersion
          appType={["Web App", "Android App"]}
          projectImg={[
            "/assets/images/wellness-hmo-enrollees.png",
            "/assets/images/wellness-plus-dental.png",
          ]}
        />
        <ProjectCard
          name="Startup Lagos"
          plang={["ReactJs", "MaterialUi", "Redux"]}
          linkName="Visit Site"
          linkUrl="https://www.startuplagos.net/"
          description="Startup Lagos targets being the largest tech ecosystem, to offer retail and institutional investors the huge opportunities of tapping into the vast potential of early-stage tech-driven startup initiatives to blossom into regional and continental scale solutions to Africa’s diverse challenges"
          appType={["Web App"]}
          projectImg={[
            "/assets/images/startup-profile.png",
            "/assets/images/startup-investor.png",
          ]}
        />
        <ProjectCard
          name="MePlayList"
          plang={["ReactJs", "CSS", "NodeJs"]}
          linkName="Visit Site"
          linkUrl="https://app.meplaylist.com/"
          description="MePlaylist is a digital entertainment and streaming service that grants music lovers access to stream and download unlimited music. MePlaylist studies your tastes and preferences, creates custom-curated playlists on your feeds"
          appType={["Web App", "Android App"]}
          projectImg={[
            "/assets/images/meplaylist-one.png",
            "/assets/images/meplaylist-two.png",
          ]}
        />
      </div>
      {/* latest work */}
      {/* <div className="latest-works-o">
        <div className="latest-works-o-l">
          <div className="latest-works-l-inner-1 text-center">
            <p>
              <b>Latest Works</b>
            </p>
            <p className="t-text-col">Recent projects I have built.</p>
          </div>
          <ProjectCard
            name="Startup Lagos"
            plang="ReactJs, MaterialUi, Redux"
            linkName="Visit Site"
            linkUrl="https://www.startuplagos.net/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393280/startup_rc6paa.png"
            title="Startup Lagos"
            description="Startup Lagos targets being the largest tech ecosystem, to offer retail and institutional investors the huge opportunities of tapping into the vast potential of early-stage tech-driven startup initiatives to blossom into regional and continental scale solutions to Africa’s diverse challenges"
            screenshots={[
              "/assets/images/startup-profile.png",
              "/assets/images/startup-investor.png",
              "/assets/images/startup-payment.png",
            ]}
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
              If there is a reason to work with me then ,
              <a href="tel:07088780115" className="s-text-col">
                Let's Talk
              </a>
            </span>
          </div>
        </div>
        <div>
          <ProjectCard
            name="Wellness Plus"
            plang="ReactJs, Redux, Material-Ui"
            linkName="Visit Site"
            linkUrl="https://wellnessplus-admin.herokuapp.com/"
            imageurl="/assets/images/wellness-login.png"
            title="Wellness Plus"
            description="Wellness Plus is a health care application that is aimed at bridging the gap between the average nigerian and the exorbiant health prices. Making health care benefits accessible and affordable to the masses."
            screenshots={[
              "/assets/images/wellness-home.png",
              "/assets/images/wellness-hmo-dashboard.png",
              "/assets/images/wellness-hmo-enrollees.png",
              "/assets/images/wellness-plus-dental.png",
            ]}
            googlePlayUrl="https://play.google.com/store/apps/details?id=com.hazonholdings.android.wellnesspatientapp"
            isMobileVersion="/assets/images/GooglePlayStore.png"
          />
          <ProjectCard
            name="MePlayList"
            plang="ReactJs, CSS, NodeJs"
            linkName="Visit Site"
            linkUrl="https://app.meplaylist.com/"
            imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393291/meplaylist_nf8sdy.png"
            title="Meplaylist"
            description="MePlaylist is a digital entertainment and streaming service that grants music lovers access to stream and download unlimited music. MePlaylist studies your tastes and preferences, creates custom-curated playlists on your feeds"
            screenshots={[
              "/assets/images/meplaylist-one.png",
              "/assets/images/meplaylist-two.png",
              "/assets/images/meplaylist-three.png",
              "/assets/images/meplaylist-five.png",
            ]}
          />
        </div>
      </div> */}

      {/* latest works edns */}
      {/* home-top */}
      {/* <div className="home-top">
        <div className="home-top-content">
          <div className="home-top-content-inner">
            <div className="home-top-content-inner-l">
              <div className="home-top-content-inner-l-1">
                <div>
                  <pre>
                    <span className="t-bg-color p-text-col">
                      Hello, I am Fatimah
                    </span>
                  </pre>
                </div>

                <div>
                  <p className="home-top-content-inner-l-1-h">
                    FrontEnd Engineer
                  </p>
                  <pre>
                    <b>With</b>
                  </pre>
                </div>
                <span className="t-text-col">
                  Years of experience, building functional, beautiful and
                  amazing websites and web applications.
                </span>
                <br />
                <a
                  href={`mailto:${email}`}
                  className="home-top-chat-link s-text-col"
                >
                  Let's Chat
                </a>
              </div> */}
      {/* <div className="home-top-content-inner-l-2">
                <div className="flex align-center home-top-content-inner-l-2-n">
                  <p>N</p>
                  <sup>th</sup>
                  <div>
                    <span className="t-text-col">Personal</span>
                    <br />
                    <span className="t-text-col">projects</span>
                  </div>
                </div>
                <div className="flex align-center home-top-content-inner-l-2-n">
                  <p>N</p> <sup>th</sup>
                  <div>
                    <span className="t-text-col">Featured</span>
                    <br />
                    <span className="t-text-col">projects</span>
                  </div>
                </div>
              </div> */}
      {/* </div>
            <div className="home-top-content-inner-r">
              <img
                src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
                alt="img"
                className="img"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="home-second-layer flex">
        <div className="home-second-layer-l">
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
      </div> */}

      {/* skills */}
      {/* <div className="skills">
        {skills.map((skill, index) => (
          <p key={index}>{skill.name}</p>
        ))}
      </div> */}
    </div>
  );
};
export default Home;
