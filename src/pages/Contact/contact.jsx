// import React, { useState } from 'react';
// import './contact.scss';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [messageSent, setMessageSent] = useState(false); // Nouvel état pour suivre si le message est envoyé

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name && formData.email && formData.message) {
//       // Envoyer le message à la boîte mail
//       sendEmail(formData);
//       // Réinitialiser les champs du formulaire après l'envoi
//       setFormData({ name: '', email: '', message: '' });
//       // Mettre à jour l'état pour indiquer que le message a été envoyé
//       setMessageSent(true);
//     } else {
//       alert("Veuillez remplir tous les champs.");
//     }
//   };

//   const sendEmail = (data) => {
//     // Logique d'envoi du message à une boîte mail (par exemple, en utilisant une API)
//     console.log("Envoyer un email avec les données :", data);
//     // Vous devrez remplacer cette console.log par la logique réelle d'envoi de courrier électronique
//   };

//   return (
//     <div className="contact-page">
//       <h1>Contactez-moi :</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Prénom & Nom :</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email :</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="message">Message :</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         <button type="submit">Envoyer</button>

//         {messageSent && <p>Message envoyé</p>} {/* Afficher "Message envoyé" si messageSent est true */}
//       </form>
//     </div>
//   );
// };

// export default ContactPage;
import React, { useState, useRef } from 'react';
import Modal from '../../components/Modale/Modale'; // Importez le composant de modale
import './contact.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null); // Référence pour accéder au composant de modale

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Envoyer le message à la boîte mail
      sendEmail(formData);
      // Réinitialiser les champs du formulaire après l'envoi
      setFormData({ name: '', email: '', message: '' });
      // Mettre à jour l'état pour indiquer que le message a été envoyé
      setMessageSent(true);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  const sendEmail = (data) => {
    // Logique d'envoi du message à une boîte mail (par exemple, en utilisant une API)
    console.log("Envoyer un email avec les données :", data);
    // Vous devrez remplacer cette console.log par la logique réelle d'envoi de courrier électronique
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page">
      <h1>Contactez-moi :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Prénom & Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Envoyer</button>

        {messageSent && <p>Message envoyé</p>}

        {/* Bouton pour ouvrir la modale */}
        <button onClick={openModal}>Voir PDF</button>

        {/* Modale pour afficher le PDF */}
        {showModal && (
          <Modal>
            <div>
              {/* Insérez le composant ou l'élément pour afficher le PDF */}
              <embed src="path_to_your_pdf_file.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
            <button onClick={closeModal}>Fermer</button> {/* Bouton pour fermer la modale */}
          </Modal>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
