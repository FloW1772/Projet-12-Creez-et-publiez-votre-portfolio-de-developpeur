// import React, { useState } from 'react';
// import './modale.scss';

// export default function Modal({ onClose, addProject }) {
//   const [newProject, setNewProject] = useState({
//     cover: '',
//     title: '',
//     description: '',
//     link: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject({ ...newProject, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewProject({ ...newProject, cover: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newProject.cover && newProject.title && newProject.description && newProject.link) {
//       const githubRegex = /^https:\/\/github\.com/;
//       if (!githubRegex.test(newProject.link)) {
//         alert("Le lien doit commencer par https://github.com");
//         return;
//       }
//       if (!newProject.cover.type.startsWith('image/')) {
//         alert("Veuillez sélectionner un fichier image.");
//         return;
//       }
//       addProject(newProject);
//       setNewProject({ cover: '', title: '', description: '', link: '' });
//       onClose(); 
//     } else {
//       alert('Veuillez remplir tous les champs.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="close-modal" onClick={onClose}>X</span>
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
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './modale.scss';

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Fonction pour ouvrir la modale avec le contenu spécifié
  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsOpen(false);
  };

  // Expose la fonction openModal à l'extérieur du composant
  useImperativeHandle(ref, () => ({
    openModal
  }));

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {modalContent}
      </div>
    </div>
  );
});

export default Modal;
