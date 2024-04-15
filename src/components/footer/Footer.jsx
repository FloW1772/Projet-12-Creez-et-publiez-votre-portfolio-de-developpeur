import React from 'react';
import './Footer.scss'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Florentin Guiné. Tous droits réservés.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/florentin-guin%C3%A9-5165931a1/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/FloW1772" target="_blank"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}
