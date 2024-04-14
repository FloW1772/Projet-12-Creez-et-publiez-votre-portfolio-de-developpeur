import React from 'react';
import Logo from '../../assets/logo/logo.jpg';
import './Presentation.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Florentin Guiné - Logo" className="project-cover" />
      <h1>Salut, Je suis Florentin Guiné</h1>
      <p>Développeur Front-End</p>
      <a href="/contact" className="button">Contacter</a>
    </header>
  );
};

export default Header;
