import React, { useState } from "react";
import "./card.css";
import Modal from "../../Constant/Modal";

const ProjectCard = ({ 
  name, 
  plang, 
  imageurl, 
  title, 
  description, 
  linkUrl, 
  linkName 
}) => {
  const [modal, setModal] = useState(false)

  return (
    <div className="project_card">
      <Modal 
        open={modal} 
        close={()=> setModal(false)} 
        title={title} 
        description={description} 
        linkUrl={linkUrl}
        linkName={linkName}
      />
      {/* card header */}
      <div className="flex space-between project_card_header">
        <p>{name}</p>
        <p>{plang}</p>
      </div>
      {/* card body */}
      <div className="project_card_body">
        <button 
          className="project_card_link"
          onClick={()=> setModal(true)}
        >
          See More
        </button>
        {/* <a href={linkurl} className="project_card_link">
          {linkname}
        </a> */}
        <img src={imageurl} alt="img" className="project_card_image" />
      </div>
    </div>
  );
};

export default ProjectCard;
