import React, { useState, useRef } from 'react';
import Modale from '../../components/Modale/Modale';
import './contact.scss';
import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [showModale, setShowModale] = useState(false);
  const [showOtherModale, setShowOtherModale] = useState(false); // État pour la deuxième modale
  const modalRef = useRef(null); // Référence pour accéder au composant de modale
  const otherModalRef = useRef(null); // Référence pour la deuxième modale

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

  const openModale = () => {
    if (modalRef.current) {
      modalRef.current.openModale();
      setShowModale(true);
    }
  };

  const openOtherModale = () => {
    if (otherModalRef.current) {
      otherModalRef.current.openModale();
      setShowOtherModale(true);
    }
  };

  const closeModale = () => {
    if (modalRef.current) {
      modalRef.current.closeModale();
      setShowModale(false);
    }
  };

  const closeOtherModale = () => {
    if (otherModalRef.current) {
      otherModalRef.current.closeModale();
      setShowOtherModale(false);
    }
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

        {/* Bouton pour ouvrir la modale CV */}
        <button type="button" onClick={openModale}>CV</button>

        {/* Bouton pour ouvrir la deuxième modale "Autre moyen de contact" */}
        <button type="button" onClick={openOtherModale}>Autre moyen de contact</button>

        {/* Modale pour afficher le PDF */}
        <Modale ref={modalRef}>
          <div>
            {/* Insérez le composant ou l'élément pour afficher le PDF */}
            <embed src={CV} type="application/pdf" width="100%" height="600px" />
          </div>
          <button type="button" onClick={closeModale}>Fermer</button> {/* Bouton pour fermer la modale */}
        </Modale>

        <Modale ref={otherModalRef}>
          <div>
            <p>Voici les autres moyens existants pour me contacter :</p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/florentin-guin%C3%A9-5165931a1/" target="_blank">Florentin Guiné</a>
            </p>
            <p>Numéro de téléphone: 06-49-47-75-14</p>
          </div>
          <button type="button" onClick={closeOtherModale}>Fermer</button>
        </Modale>

      </form>
    </div>
  );
};

export default ContactPage;
