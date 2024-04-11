import React from 'react';
import './Header.scss'; // Assurez-vous d'avoir le fichier CSS correspondant

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Mon Portfolio</div>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
