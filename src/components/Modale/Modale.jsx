// import React, { useState } from 'react';
// import './modale.scss';

// export default function Modal({ closeModal, addProject }) {
//   const [newProject, setNewProject] = useState({
//     cover: '',
//     title: '',
//     description: '',
//     link: '',
//   });

//   // Fonction pour gérer les changements dans les champs du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject({ ...newProject, [name]: value });
//   };

//   // Fonction pour gérer le changement de fichier
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewProject({ ...newProject, cover: file });
//   };

//   // Fonction pour soumettre le formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Vérification que tous les champs sont remplis
//     if (newProject.cover && newProject.title && newProject.description && newProject.link) {
//       // Vérification que le lien commence par "https://github.com"
//       const githubRegex = /^https:\/\/github\.com/;
//       if (!githubRegex.test(newProject.link)) {
//         alert("Le lien doit commencer par https://github.com");
//         return; // Arrêter le traitement si le lien n'est pas valide
//       }
//       // Appel de la fonction addProject pour ajouter le nouveau projet
//       addProject(newProject);
//       // Réinitialisation du formulaire et fermeture de la modale
//       setNewProject({ cover: '', title: '', description: '', link: '' });
//       closeModal();
//     } else {
//       alert('Veuillez remplir tous les champs.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="close-modal" onClick={closeModal}>X</span>
//         <h2>Ajouter un nouveau projet</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="cover">Image du projet:</label>
//             <input type="file" id="cover" name="cover" onChange={handleFileChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="title">Titre:</label>
//             <input type="text" id="title" name="title" value={newProject.title} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" name="description" value={newProject.description} onChange={handleChange}></textarea>
//           </div>
//           <div className="form-group">
//             <label htmlFor="link">Lien GitHub:</label>
//             <input type="text" id="link" name="link" value={newProject.link} onChange={handleChange} />
//           </div>
//           <button type="submit">Ajouter</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import './modale.scss';

// export default function Modal({ closeModal, addProject }) {
//   const [newProject, setNewProject] = useState({
//     cover: '',
//     title: '',
//     description: '',
//     link: '',
//   });

//   // Fonction pour gérer les changements dans les champs du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject({ ...newProject, [name]: value });
//   };

//   // Fonction pour gérer le changement de fichier
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewProject({ ...newProject, cover: file });
//   };

//   // Fonction pour soumettre le formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Vérification que tous les champs sont remplis
//     if (newProject.cover && newProject.title && newProject.description && newProject.link) {
//       // Vérification que le lien commence par "https://github.com"
//       const githubRegex = /^https:\/\/github\.com/;
//       if (!githubRegex.test(newProject.link)) {
//         alert("Le lien doit commencer par https://github.com");
//         return; // Arrêter le traitement si le lien n'est pas valide
//       }
//       // Vérification que le fichier sélectionné est une image
//       if (!newProject.cover.type.startsWith('image/')) {
//         alert("Veuillez sélectionner un fichier image.");
//         return; // Arrêter le traitement si le fichier n'est pas une image
//       }
//       // Appel de la fonction addProject pour ajouter le nouveau projet
//       addProject(newProject);
//       // Réinitialisation du formulaire et fermeture de la modale
//       setNewProject({ cover: '', title: '', description: '', link: '' });
//       closeModal();
//     } else {
//       alert('Veuillez remplir tous les champs.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="close-modal" onClick={closeModal}>X</span>
//         <h2>Ajouter un nouveau projet</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="cover">Image du projet:</label>
//             <input type="file" id="cover" name="cover" onChange={handleFileChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="title">Titre:</label>
//             <input type="text" id="title" name="title" value={newProject.title} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <input type="text" id="description" name="description" value={newProject.description} onChange={handleChange}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="link">Lien GitHub:</label>
//             <input type="text" id="link" name="link" value={newProject.link} onChange={handleChange} />
//           </div>
//           <button type="submit">Ajouter</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './modale.scss';

export default function Modal({ onClose, addProject }) {
  const [newProject, setNewProject] = useState({
    cover: '',
    title: '',
    description: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProject({ ...newProject, cover: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProject.cover && newProject.title && newProject.description && newProject.link) {
      const githubRegex = /^https:\/\/github\.com/;
      if (!githubRegex.test(newProject.link)) {
        alert("Le lien doit commencer par https://github.com");
        return;
      }
      if (!newProject.cover.type.startsWith('image/')) {
        alert("Veuillez sélectionner un fichier image.");
        return;
      }
      addProject(newProject);
      setNewProject({ cover: '', title: '', description: '', link: '' });
      onClose(); // Utilise onClose ici
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>X</span>
        <h2>Ajouter un nouveau projet</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cover">Image du projet:</label>
            <input type="file" id="cover" name="cover" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Titre:</label>
            <input type="text" id="title" name="title" value={newProject.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={newProject.description} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="link">Lien GitHub:</label>
            <input type="text" id="link" name="link" value={newProject.link} onChange={handleChange} />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
}
