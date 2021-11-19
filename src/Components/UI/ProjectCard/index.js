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
        {name && <p className="project_name">{name}</p>}

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
              className="view_site"
            >
              View Site
            </a>
          )}
          {isMobileVersion && (
            <a href={googlePlayUrl}>
              <img
                src="/assets/images/GooglePlayStore.png"
                alt="img"
                className="project_card_image"
              />
            </a>
          )}
        </div>

        {projectLogo && <img src={projectLogo} alt="projectLogo" />}
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
