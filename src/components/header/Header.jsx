import React from 'react';
import './header.scss';
import Logo from '../../assets/logo/Logo-FG2.webp'

export default function Header() {
  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <header className="header">
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" onClick={redirectToHome} />
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
