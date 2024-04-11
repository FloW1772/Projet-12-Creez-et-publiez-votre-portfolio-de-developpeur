import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
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
