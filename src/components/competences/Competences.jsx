import React from 'react';
import './competences.scss';

const Competences = ({ competences }) => {
  return (
    <div className="competences">
      <h2>Compétences</h2>
      <ul>
        {competences.map((competence, index) => (
          <li key={index}>{competence}</li>
        ))}
      </ul>
    </div>
  );
};

export default Competences;
