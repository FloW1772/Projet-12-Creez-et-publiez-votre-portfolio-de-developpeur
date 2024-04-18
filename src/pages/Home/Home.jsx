// import React, { useState, useRef } from 'react';
// import Presentation from '../../components/presentation/presentation';
// import Modale from '../../components/Modale/Modale'; // Importer le composant de modale
// import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';
// import './home.scss';

// export default function Portfolio() {
//   const [showModale, setShowModale] = useState(false);
//   const modalRef = useRef(null); // Référence pour accéder au composant de modale

//   const openModale = () => {
//     if (modalRef.current) {
//       modalRef.current.openModale();
//       setShowModale(true);
//     }
//   };

//   const closeModale = () => {
//     if (modalRef.current) {
//       modalRef.current.closeModale();
//       setShowModale(false);
//     }
//   };

//   return (
//     <div>
//       <Presentation />
//       {/* Bouton pour ouvrir la modale */}
//       <button type="button" onClick={openModale}>Voir CV</button>

//       {/* Modale pour afficher le PDF */}
//       <Modale ref={modalRef}>
//         <div>
//           {/* Insérez le composant ou l'élément pour afficher le PDF */}
//           <embed src={CV} type="application/pdf" width="100%" height="600px" />
//         </div>
//         <button type="button" onClick={closeModale}>Fermer</button> {/* Bouton pour fermer la modale */}
//       </Modale>
//     </div>
//   );
// }
import React, { useState, useRef } from 'react';
import Presentation from '../../components/presentation/presentation';
import Modale from '../../components/Modale/Modale'; // Importer le composant de modale
import Portfolio from '../../components/Portfolio/Portfolio'; // Importer le composant Portfolio
import './home.scss';

export default function Home() {
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
    <div>
      <Presentation />
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

      {/* Afficher le portfolio */}
      <Portfolio />
    </div>
  );
}
