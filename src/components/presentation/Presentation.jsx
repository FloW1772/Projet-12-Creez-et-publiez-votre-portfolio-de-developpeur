import React, { useState, useRef } from 'react';
import Logo from '../../assets/logo/logo.webp';
import './Presentation.scss';
import Modale from '../Modale/Modale';
import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';

const Presentation = () => {
  const [showModale, setShowModale] = useState(false);
  const cvModalRef = useRef(null);

  const openCVModale = () => {
    if (cvModalRef.current) {
      cvModalRef.current.openModale();
      setShowModale(true);
    }
  };

  const closeModale = () => {
    if (cvModalRef.current) {
      cvModalRef.current.closeModale();
      setShowModale(false);
    }
  };

  return (
    <header className="header">
      <img src={Logo} alt="Florentin Guiné - Logo" className="project-cover" />
      <h1>Salut, Je suis Florentin Guiné</h1>
      <div>
        <h2 className="mode">À propos de moi :</h2>
        <p className="mode">Je suis un étudiant qui a découvert le développement informatique grâce à des amis qui m'ont beaucoup aidé à mes débuts à apprendre et à comprendre le développement, j'ai adoré cet esprit de partage. Et cela m'a permis d'encore plus adorer le développement par la suite. </p>
        <p className="mode">J'ai beaucoup essayé d'apprendre par moi-même au début en "auto-didacte", mais cette année, j'ai décidé d'aller plus loin en me lançant dans la formation d'intégrateur web d'OpenClassroom pour me perfectionner dans le domaine.</p>
        <p className="mode">N'hésitez pas à me contacter pour discuter de vos projets et de la manière dont je peux vous aider à les concrétiser !</p>
      </div>
      <a href="/contact" className="button">Contactez-moi !</a>
      {/* Bouton pour ouvrir la modale du CV */}
      <button type="button" className="button" onClick={openCVModale}>Voir mon CV !</button>

      {/* Modale pour afficher le CV */}
      <Modale ref={cvModalRef}>
        <div>
          {/* Insérez le composant ou l'élément pour afficher le PDF */}
          <embed src={CV} type="application/pdf" width="100%" height="500px" />
        </div>
        <button type="button" className="button button2" onClick={closeModale}>Fermer</button>
      </Modale>
    </header>
  );
};

export default Presentation;
