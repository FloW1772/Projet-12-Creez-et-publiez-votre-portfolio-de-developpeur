import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import './competences.scss';

const Competences = ({ competences }) => {
  return (
    <div className="competences">
      <h2>Compétences :</h2>

      <p>Mes compétences se sont développées. Grâce au travail effectué sur différents projets pour voir mes projets, c'est <Link to="/portfolio"> <strong>ici.</strong></Link>.</p>

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
