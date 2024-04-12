import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './home.scss';
import events from '../../assets/logo/events.png';
import Kasa from '../../assets/logo/Kasa.png';
import nina from '../../assets/logo/nina.webp';
import ohmyfood from '../../assets/logo/ohmyfood.png';
import Print from '../../assets/logo/Print-it.png';
import sophie from '../../assets/logo/sophie-bluel.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      cover: ohmyfood,
      title: 'Projet-4-Ohmyfood',
      description: 'Description du projet 1...',
      link: 'https://github.com/FloW1772/Projet-4-Ohmyfood',
    },
    {
      id: 2,
      cover: Print,
      title: 'Projet-5-Print-it',
      description: 'Description du projet 2...',
      link: 'https://github.com/FloW1772/Projet-5-Print-it',
    },
    {
      id: 3,
      cover: sophie,
      title: 'Projet-6-Sophie-Bluel',
      description: 'Description du projet 3...',
      link: 'https://github.com/FloW1772/Projet-6-Sophie-Bluel',
    },
    {
      id: 4,
      cover: Kasa,
      title: 'Projet-8-Kasa',
      description: 'Description du projet 4...',
      link: 'https://github.com/FloW1772/Projet-8-Kasa',
    },
    {
      id: 5,
      cover: nina,
      title: 'Projet-9-Nina-Carducci',
      description: 'Description du projet 5...',
      link: 'https://github.com/FloW1772/Projet-9-Nina-Carducci',
    },
    {
      id: 6,
      cover: events,
      title: 'Projet-10-724events',
      description: 'Description du projet 6...',
      link: 'https://github.com/FloW1772/Projet-10-724events',
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            cover={project.cover}
            link={project.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
