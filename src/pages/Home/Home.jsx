import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './home.scss';
// import './portfolio.scss';
// import project1Cover from '../assets/images/project1.png';
// import project2Cover from '../assets/images/project2.png';
// import project3Cover from '../assets/images/project3.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'Description du projet 1...',
      // cover: project1Cover,
      link: '#',
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Description du projet 2...',
      // cover: project2Cover,
      link: '#',
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du projet 3...',
      // cover: project3Cover,
      link: '#',
    },
    {
      id: 4,
      title: 'Projet 4',
      description: 'Description du projet 4...',
      // cover: project4Cover,
      link: '#',
    },
    {
      id: 5,
      title: 'Projet 5',
      description: 'Description du projet 5...',
      // cover: project5Cover,
      link: '#',
    },
    {
      id: 3,
      title: 'Projet 6',
      description: 'Description du projet 6...',
      // cover: project6Cover,
      link: '#',
    },
  ];
  // const firstRow = projects.slice(0, 3); // Les 3 premiers projets
  // const secondRow = projects.slice(3); // Les 3 derniers projets

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
