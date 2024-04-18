import React, { useState, useRef } from 'react';
import Logo from '../../assets/logo/logo.jpg';
import './Presentation.scss';
import Modale from '../../components/Modale/Modale'; // Importer le composant de modale
import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';

const Presentation = () => {
  const [showModale, setShowModale] = useState(false);
  const modalRef = useRef(null); // Référence pour accéder au composant de modale

  const openModale = () => {
    if (modalRef.current) {
      modalRef.current.openModale();
      setShowModale(true);
    }
  };

  const closeModale = () => {
    if (modalRef.current) {
      modalRef.current.closeModale();
      setShowModale(false);
    }
  };

  return (
    <header className="header">
      <img src={Logo} alt="Florentin Guiné - Logo" className="project-cover" />
      <h1>Salut, Je suis Florentin Guiné</h1>
      <p>Développeur Front-End</p>
      <a href="/contact" className="button">Contacter-moi</a>
      {/* Bouton pour ouvrir la modale */}
      <button type="button" onClick={openModale}>Voir CV</button>

      {/* Modale pour afficher le PDF */}
      <Modale ref={modalRef}>
        <div>
          {/* Insérez le composant ou l'élément pour afficher le PDF */}
          <embed src={CV} type="application/pdf" width="100%" height="600px" />
        </div>
        <button type="button" onClick={closeModale}>Fermer</button> {/* Bouton pour fermer la modale */}
      </Modale>
    </header>
  );
};

export default Presentation;