import React from 'react';
import Presentation from '../../components/presentation/presentation';
import Competences from '../../components/competences/Competences'; // Importer le composant Competences
import './home.scss';

export default function Home() {
  const competences = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'SEO', 'Vuejs', 'Figma', 'Site Web dynamique', 'API Swagger', 'Planification', 'Gestion de projet', 'React Router', 'Create React App', 'Debuggage', 'React Developer Tools', 'Yarn', 'Nodejs', 'Redux Toolkit', 'Visual Studio Code'];

  return (
    <div>
      <Presentation />
      <Competences competences={competences} /> {/* Afficher les compétences dans des cartes */}
    </div>
  );
}
