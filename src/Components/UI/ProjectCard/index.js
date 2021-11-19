import React from "react";
import "./card.css";

const ProjectCard = ({
  name,
  appType,
  plang,
  description,
  linkUrl,
  projectLogo,
  imageurl,
  projectImg,
  title,
  linkName,
  screenshots,
  isMobileVersion,
  googlePlayUrl,
}) => {
  return (
    <div className="project_card">
      <div className="project_card_left">
        <div className="name_logo">
          {name && <p className="project_name">{name}</p>}
          {projectLogo && (
            <img src={projectLogo} alt="projectLogo" className="project_logo" />
          )}
        </div>

        {appType && (
          <div className="app_type">
            {appType?.map((app, index) => (
              <p key={index}>{app}</p>
            ))}
          </div>
        )}

        <div className="pg_langs">
          {plang?.map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
        </div>

        {description && <p className="description">{description}</p>}

        <div className="project_links">
          {linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view_site project_card_link"
            >
              View Site{" "}
              <img
                src="/assets/icons/arrow.png"
                alt=""
                className="visit_site_arrow"
              />
            </a>
          )}
          {isMobileVersion && (
            <a href={googlePlayUrl} className="project_card_link">
              <img
                src={isMobileVersion}
                alt="img"
                className="project_card_image"
              />
            </a>
          )}
        </div>
      </div>
      <div className="project_card_right">
        {projectImg &&
          projectImg?.map((img, index) => (
            <img src={img} key={index} alt="project-img" />
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
