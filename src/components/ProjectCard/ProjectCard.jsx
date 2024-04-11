import React from 'react';
import './ProjectCard.scss'; // Assurez-vous d'avoir le fichier CSS correspondant

export default function ProjectCard({ id, title, description, cover, link }) {
  return (
    <div className="project-card">
      <img src={cover} alt={title} className="project-cover" />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet sur GitHub</a>
      </div>
    </div>
  );
}
