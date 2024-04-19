import React, { useState, useRef } from 'react';
import Logo from '../../assets/logo/logo.jpg';
import './Presentation.scss';
import Modale from '../../components/Modale/Modale';
import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';

const Presentation = () => {
  const [showModale, setShowModale] = useState(false);
  const modalRef = useRef(null);
  const cvModalRef = useRef(null); // Référence pour la modale du CV

  const openModale = () => {
    if (modalRef.current) {
      modalRef.current.openModale();
      setShowModale(true);
    }
  };

  const openCVModale = () => {
    if (cvModalRef.current) {
      cvModalRef.current.openModale();
      setShowModale(true);
    }
  };

  const closeModale = () => {
    if (modalRef.current) {
      modalRef.current.closeModale();
      setShowModale(false);
    }
    if (cvModalRef.current) {
      cvModalRef.current.closeModale();
      setShowModale(false);
    }
  };

  return (
    <header className="header">
      <img src={Logo} alt="Florentin Guiné - Logo" className="project-cover" />
      <h1>Salut, Je suis Florentin Guiné</h1>
      <button type="button" className="button" onClick={openModale}>En savoir plus sur moi</button> {/* Nouveau bouton */}
      <p>Développeur Front-End</p>
      <a href="/contact" className="button">Contactez-moi !</a>
      {/* Bouton pour ouvrir la modale du CV */}
      <button type="button" className="button" onClick={openCVModale}>Voir mon CV !</button>

      {/* Modale pour afficher les informations personnelles */}
      <Modale ref={modalRef} >
        <div>
          <h2>À propos de moi :</h2>
          <p className="mode">Je suis étudiant qui a découvert le développement informatique avec des amis et qui m'ont aider a aimer ça.</p>
          <p className="mode">j'ai beaucoup essayé d'apprendre par moi-même au début en "auto-didacte", mais cette année, j'ai décidé d'aller plus loin en me lançant dans la formation intégration web d'OpenClassroom pour me perfectionner dans le domaine.</p>
          <p className="mode">N'hésitez pas à me contacter pour discuter de vos projets et de la manière dont je peux vous aider à les concrétiser !</p>
        </div>
        <button type="button" onClick={closeModale}>Fermer</button> {/* Bouton pour fermer la modale */}
      </Modale>

      {/* Modale pour afficher le CV */}
      <Modale ref={cvModalRef}>
        <div>
          {/* Insérez le composant ou l'élément pour afficher le PDF */}
          <embed src={CV} type="application/pdf" width="100%" height="500px" />
        </div>
        <button type="button" onClick={closeModale}>Fermer</button> {/* Bouton pour fermer la modale */}
      </Modale>
    </header>
  );
};

export default Presentation;
