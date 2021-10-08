import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProjectCard from "../UI/ProjectCard";
import "./projects.css";
// import { NavLink } from "react-router-dom";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="home-top proj-top">
          <Header />
          {/* list of projects */}
          <div className="project-list">
            <ProjectCard
              name="MePlayList"
              plang="ReactJs, CSS, NodeJs"
              linkname=" Visit Site"
              linkurl="https://app.meplaylist.com/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393291/meplaylist_nf8sdy.png"
            />
            <ProjectCard
              name="Startup Lagos"
              plang="ReactJs, CSS"
              linkname="Visit Site"
              linkurl="https://startuplagos.net/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393280/startup_rc6paa.png"
            />
            <ProjectCard
              name="Github Repo Clone"
              plang="Html, CSS, JS"
              linkname=" Visit Site"
              linkurl="https://buycoinstest1.netlify.app/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393267/githubrepo_sjhg5t.png"
            />
            <ProjectCard
              name="Google Docs Clone"
              plang="NextJs, TailwindCss, Firebase"
              linkname=" Visit Site"
              linkurl="https://googledocs-clone-davies.vercel.app/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1633696440/googledocsscreenshot_ff9ath.png"
            />

            <ProjectCard
              name="Quiz App"
              plang="Html, CSS, Js"
              linkname=" Visit Site"
              linkurl="https://fatimah019.github.io/quiz-app/quiz"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393272/quiz_nimejg.png"
            />
            <ProjectCard
              name="COVID CASES"
              plang="ReactJs, CSS"
              linkname=" Visit Site"
              linkurl="https://covidcasesbyfatimah.netlify.app/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393270/covid_rzrxdo.png"
            />
            <ProjectCard
              name="Task Tracker"
              plang="ReactJs, NodeJs"
              linkname=" Visit Site"
              linkurl="https://taskmanagerbyme.herokuapp.com"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393266/tasktracker_no0h1m.png"
            />
            <ProjectCard
              name="Image Search"
              plang="VueJs/SASS"
              linkname=" Visit Site"
              linkurl="https://getimage.netlify.app/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393272/images_gw6fht.png"
            />
            <ProjectCard
              name="FormPlus Templates"
              plang="ReactJs, CSS"
              linkname=" Visit Site"
              linkurl="https://formpluss.netlify.app/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393266/formplus_bkyg7w.png"
            />
       
            {/* <ProjectCard
              name="Dev Portfolio"
              plang="ReactJs, CSS"
              linkname=" Visit Site"
              linkurl="https://d-porfolio.herokuapp.com/"
              imageurl="https://res.cloudinary.com/dycyotaya/image/upload/v1629393297/portfolio_bfbfpc.png"
            /> */}
        
            {/* end of projrcts */}
          </div>
        </div>
        <div className="proj-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
