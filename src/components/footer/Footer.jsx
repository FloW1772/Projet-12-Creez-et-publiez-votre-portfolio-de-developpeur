import React from 'react';
import './Footer.scss'; // Assurez-vous d'avoir le fichier CSS correspondant

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}
