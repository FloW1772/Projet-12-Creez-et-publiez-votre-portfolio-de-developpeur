import React from 'react';
import './competences.scss';

const Competences = ({ competences }) => {
  return (
    <div className="competences">
      <h2>Compétences</h2>
      <div className="cards-container">
        {competences.map((competence, index) => (
          <div className="card" key={index}>
            <p>{competence}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
