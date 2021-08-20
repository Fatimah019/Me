import React from "react";
import "./card.css";
// import { NavLink } from "react-router-dom";

const ProjectCard = ({ name, plang, imageurl, linkname, linkurl }) => {
  return (
    <div className="project_card">
      {/* card header */}
      <div className="flex space-between project_card_header">
        <p>{name}</p>
        <p>{plang}</p>
      </div>
      {/* card body */}
      <div className="project_card_body">
        <a href={linkurl} className="project_card_link">
          {linkname}
        </a>
        <img src={imageurl} alt="img" className="project_card_image" />
      </div>
    </div>
  );
};

export default ProjectCard;
