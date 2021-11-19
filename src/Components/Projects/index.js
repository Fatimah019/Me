import React, { useEffect } from "react";
import ProjectCard from "../UI/ProjectCard";
import "./projects.css";
import { projectData } from "../../data";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div>
    <div className="proj-top">
      <h3>Here are some projects I’ve worked on</h3>
      <div className="projects">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            plang={project?.plang}
            linkName={project.linkName}
            linkUrl={project.linkUrl}
            imageurl={project.imageurl}
            title={project.title}
            description={project.description}
            projectImg={project.projectImg}
            isMobileVersion={project.mobileVersion}
            googlePlayUrl={project.googlePlayUrl}
            appType={project.appType}
            projectLogo={project.projectLogo}
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Projects;
