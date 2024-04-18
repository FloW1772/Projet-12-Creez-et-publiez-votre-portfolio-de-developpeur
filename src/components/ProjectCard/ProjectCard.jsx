import React from 'react';

const ProjectCard = ({ id, cover, title, description, link }) => {
  return (
    <div className="project-card">
      <img src={cover} alt={title} className="project-cover" />
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-link">
          <button onClick={() => window.open(link, '_blank')} className="btn">
            Voir le projet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
