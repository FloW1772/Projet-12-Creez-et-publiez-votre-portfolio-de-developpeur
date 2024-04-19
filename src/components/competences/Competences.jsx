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
      <div className="bottom-text">
        <p>Mon style vous plaît ?</p>
        <p>N'hésitez pas à me contacter, je me ferai un plaisir d'échanger avec vous, et c'est sans engagement de votre part !</p>
        <p><a href="/contact" className="button">Contactez-moi</a></p>
      </div>
    </div>
  );
};

export default Competences;
