// import React from 'react';

// const ProjectCard = ({ id, cover, title, description, link }) => {
//   return (
//     <div className="project-card">
//       <img src={cover} alt={title} className="project-cover" />
//       <div className="project-details">
//         <h2 className="project-title">{title}</h2>
//         <p className="project-description">{description}</p>
//         <div className="project-link">
//           <button onClick={() => window.open(link, '_blank')} className="btn">
//             Voir le projet
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
// import React from 'react';

// const ProjectCard = ({ id, cover, title, description, link }) => {
//   const handleButtonClick = () => {
//     if (typeof link === 'string' && (link.startsWith('http://') || link.startsWith('https://'))) {
//       window.open(link, '_blank');
//     } else {
//       console.error('Lien invalide ou non défini:', link);
//     }
//   };

//   return (
//     <div className="project-card">
//       <img src={cover} alt={title} className="project-cover" />
//       <div className="project-details">
//         <h2 className="project-title">{title}</h2>
//         <p className="project-description">{description}</p>
//         <div className="project-link">
//           <button onClick={handleButtonClick} className="btn">
//             Voir le projet
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;import React from 'react';

const ProjectCard = ({ id, cover, title, description, link, githubPage }) => {
  const handleButtonClick = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank');
    } else {
      console.error('Invalid URL:', url);
    }
  };

  return (
    <div className="project-card">
      <img src={cover} alt={title} className="project-cover" />
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-link">
          <button onClick={() => handleButtonClick(link)} className="btn">
            Voir le projet
          </button>
          {githubPage && (
            <button onClick={() => handleButtonClick(githubPage)} className="btn">
              GitHub Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;