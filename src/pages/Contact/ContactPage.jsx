import React, { useState, useRef, useEffect } from 'react';
import Modale from '../../components/Modale/Modale';
import './contact.scss';
import CV from '../../assets/document/CV_Florentin_Guine_GENERIQUE.pdf';
import Logo from '../../assets/logo/logo.webp';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [showModale, setShowModale] = useState(false);
  const [showOtherModale, setShowOtherModale] = useState(false);
  const [showPdfButton, setShowPdfButton] = useState(false);
  const modalRef = useRef(null);
  const otherModalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('https://formspree.io/f/xyyrloaz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setMessageSent(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('Une erreur s\'est produite. Veuillez réessayer.');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        alert('Une erreur s\'est produite. Veuillez réessayer.');
      }
    } else {
      alert('Veuillez remplir tous les champs.');
    }
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

  useEffect(() => {
    const handleResize = () => {
      setShowPdfButton(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className='Left'>
          <img src={Logo} alt="Florentin Guiné - Logo" className="project-cover" />

          <p>Voici les autres moyens existants pour me contacter :</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/florentin-guin%C3%A9-5165931a1/" target="_blank" rel='noopener'>Florentin Guiné</a>
          </p>
          <p>Numéro de téléphone: 06-49-47-75-14</p>

          <button type="button" id='btn-modale-pdf' onClick={openModale}>CV</button>

          {showPdfButton && (
            <button type="button" id="btn-open-pdf" onClick={() => window.open(CV)}>Ouvrir CV dans une nouvelle page</button>
          )}

          <Modale ref={modalRef}>
            <div>
              <embed src={CV} type="application/pdf" />
            </div>
            <button type="button" onClick={closeModale}>Fermer</button>
          </Modale>
        </div>

        <div className='Right'>
          <h1>Contactez-moi :</h1>
          <form onSubmit={handleSubmit}>
          {messageSent && <p className='sendMessage'>Message envoyé</p>}

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

          </form>


        </div>
      </div>
    </div>
  );
};

export default ContactPage;
