import React from 'react';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contactez-moi</h1>
      <form>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
