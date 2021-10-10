import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProjectCard from "../UI/ProjectCard";
import "./projects.css";
import { projectData } from "../../data";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="home-top proj-top">
        <Header />
        {/* list of projects */}
        <div className="project-list">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              plang={project.plang}
              linkName={project.linkName}
              linkUrl={project.linkUrl}
              imageurl={project.imageurl}
              title={project.title}
              description={project.description}
            />
          ))}

          {/* end of projrcts */}
        </div>
      </div>
      <div className="proj-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
