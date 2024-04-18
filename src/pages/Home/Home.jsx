import React from 'react';
import Presentation from '../../components/presentation/presentation';
import Competences from '../../components/competences/Competences'; // Importer le composant Competences
import './home.scss';

export default function Home() {
  const competences = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'];

  return (
    <div>
      <Presentation />
      <Competences competences={competences} /> {/* Afficher les compétences */}
    </div>
  );
}
