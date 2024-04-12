import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './home.scss';
import events from '../../assets/logo/events.png'
import Kasa from '../../assets/logo/Kasa.png'
import nina from '../../assets/logo/nina.webp'
import ohmyfood from '../../assets/logo/ohmyfood.png'
import Print from '../../assets/logo/Print-it.png'
import sophie from '../../assets/logo/sophie-bluel.png'
// import GitHubPage from '../../components/GitHubPage/GitHubPage';

// import project1Cover from '../assets/images/project1.png';
// import project2Cover from '../assets/images/project2.png';
// import project3Cover from '../assets/images/project3.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      cover: <img src= {ohmyfood} alt="Logo projet 1" />,
      title: 'Projet-4-Ohmyfood',
      description: 'Description du projet 1...',
      // cover: project1Cover,
      link: 'https://github.com/FloW1772/Projet-4-Ohmyfood',
    },
    {
      id: 2,
      cover: <img src= {Print} alt="Logo projet 2" />,
      title: 'Projet-5-Print-it',
      description: 'Description du projet 2...',
      // cover: project2Cover,
      link: 'https://github.com/FloW1772/Projet-5-Print-it',
    },
    {
      id: 3,
      cover: <img src= {sophie} alt="Logo projet 3" />,
      title: 'Projet-6-Sophie-Bluel',
      description: 'Description du projet 3...',
      // cover: project3Cover,
      link: 'https://github.com/FloW1772/Projet-6-Sophie-Bluel',
    },
    {
      id: 4,
      cover: <img src= {Kasa} alt="Logo projet 4" />,
      title: 'Projet-8-Kasa',
      description: 'Description du projet 4...',
      // cover: project4Cover,
      link: 'https://github.com/FloW1772/Projet-8-Kasa',
    },
    {
      id: 5,
      cover: <img src= {nina} alt="Logo projet 5" />,
      title: 'Projet-9-Nina-Carducci',
      description: 'Description du projet 5...',
      // cover: project5Cover,
      link: 'https://github.com/FloW1772/Projet-9-Nina-Carducci',
    },
    {
      id: 6,
      cover: <img src= {events} alt="Logo projet 6" />,
      title: 'Projet-10-724events',
      description: 'Description du projet 6...',
      // cover: project6Cover,
      link: 'https://github.com/FloW1772/Projet-10-724events',
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
// return (
//   <div>
//     {projects.map(project => (
//       <div key={project.id}>
//         {project.cover}
//         <GitHubPage key={project.id} url={project.link} />
//         <h2>{project.title}</h2>
//         <p>{project.description}</p>
//       </div>
//     ))}
//   </div>
// );
// }