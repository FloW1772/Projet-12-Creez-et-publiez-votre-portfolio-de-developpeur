import React, { useState } from 'react';
import './projectcard.scss'

const ProjectCard = ({ id, cover, title, description, link, githubPage }) => {
  const [modalContent, setModalContent] = useState(null);

  const handleButtonClick = (url, isGitHubPage) => {
    if (isGitHubPage) {
      setModalContent(url);
    } else {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        window.open(url, '_blank');
      } else {
        console.error('Invalid URL:', url);
      }
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="project-card">
      <img src={cover} alt={title} className="project-cover" />
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-link">
          <button onClick={() => handleButtonClick(link, false)} className="btn">
            Voir le projet
          </button>
          {githubPage && (
            <button onClick={() => handleButtonClick(githubPage, true)} className="btn">
              GitHub Page
            </button>
          )}
        </div>
      </div>
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe src={modalContent} frameborder="0"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
