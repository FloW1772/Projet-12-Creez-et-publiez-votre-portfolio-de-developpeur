import React, { useState } from 'react';
import './modale.scss'; // Assurez-vous d'avoir un fichier CSS pour styliser votre modal

export default function Modal({ closeModal, addProject }) {
  const [newProject, setNewProject] = useState({
    cover: '',
    title: '',
    description: '',
    link: '',
  });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification que tous les champs sont remplis
    if (newProject.cover && newProject.title && newProject.description && newProject.link) {
      // Appel de la fonction addProject pour ajouter le nouveau projet
      addProject(newProject);
      // Réinitialisation du formulaire et fermeture de la modale
      setNewProject({ cover: '', title: '', description: '', link: '' });
      closeModal();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-modal" onClick={closeModal}>X</span>
        <h2>Ajouter un nouveau projet</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cover">Image du projet:</label>
            <input type="text" id="cover" name="cover" value={newProject.cover} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Titre:</label>
            <input type="text" id="title" name="title" value={newProject.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={newProject.description} onChange={handleChange}></textarea>
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
