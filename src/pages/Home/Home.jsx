import React from 'react';
import Presentation from '../../components/presentation/presentation';
import Competences from '../../components/competences/Competences'; // Importer le composant Competences
import './home.scss';

export default function Home() {
  const competences = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'SEO', 'Vue.js', 'Figma', 'Visual Studio Code', 'Site Web dynamique', 'API Swagger', 'Planification', 'Gestion de projet', 'React Router', 'Create React App', 'Debuggage', 'React Developer Tools', 'Yarn', 'Node.js', 'Redux Toolkit'];

  return (
    <div>
      <Presentation />
      <Competences competences={competences} /> {/* Afficher les compétences dans des cartes */}
    </div>
  );
}
