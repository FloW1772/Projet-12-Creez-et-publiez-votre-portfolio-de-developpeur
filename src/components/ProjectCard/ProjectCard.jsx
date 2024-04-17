// import React from 'react';
// import './ProjectCard.scss';

// export default function ProjectCard({ id, title, description, cover, link }) {
//   return (
//     <div className="project-card">
//       <img src={cover} alt={title} className="project-cover" />
//       <div className="project-info">
//         <h2 className="project-title">{title}</h2>
//         <p className="project-description">{description}</p>
//         <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet sur GitHub</a>
//       </div>
//     </div>
//   );
// }
import React from 'react';

const ProjectCard = ({ id, title, description, cover, link }) => {
  const ouvrirLienGitHub = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="project-card">
      <img src={cover} alt={title} className="project-cover" />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <button onClick={ouvrirLienGitHub}>Voir sur GitHub</button>
      </div>
    </div>
  );
};

export default ProjectCard;
