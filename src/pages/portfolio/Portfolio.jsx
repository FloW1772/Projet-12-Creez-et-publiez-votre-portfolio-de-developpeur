import ProjectCard from '../../components/ProjectCard/ProjectCard';
import events from '../../assets/logo/events.webp';
import Kasa from '../../assets/logo/Kasa.webp';
import nina from '../../assets/logo/nina.webp';
import ohmyfood from '../../assets/logo/ohmyfood.webp';
import Print from '../../assets/logo/Print-it.webp';
import sophie from '../../assets/logo/sophie-bluel.webp';
import './portfolio.scss';

export default function Portfolio() {

  const projects = [
    {
      id: 1,
      cover: ohmyfood,
      title: 'Projet-4-Ohmyfood',
      description: 'Ohmyfood est un site web "mobile first" qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d attente au restaurant !',
      link: 'https://github.com/FloW1772/Projet-4-Ohmyfood',
      githubPage: 'https://flow1772.github.io/Projet-4-Ohmyfood/',
    },
    {
      id: 2,
      cover: Print,
      title: 'Projet-5-Print-it',
      description: 'Voici le site internet statique d une petite entreprise qu il a fallu dynamiser',
      link: 'https://github.com/FloW1772/Projet-5-Print-it',
      githubPage: 'https://flow1772.github.io/Projet-5-Print-it/',
    },
    {
      id: 3,
      cover: sophie,
      title: 'Projet-6-Sophie-Bluel',
      description: 'Le site web est un portfolio de création d un architecte d intérieur',
      link: 'https://github.com/FloW1772/Projet-6-Sophie-Bluel',
      githubPage: 'https://flow1772.github.io/Projet-6-Sophie-Bluel/',
    },
    {
      id: 4,
      cover: Kasa,
      title: 'Projet-8-Kasa',
      description: 'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, il a donc fallu faire une refonte totale avec une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.',
      link: 'https://github.com/FloW1772/Projet-8-Kasa',
      githubPage: 'https://flow1772.github.io/Projet-8-Kasa/',
    },
    {
      id: 5,
      cover: nina,
      title: 'Projet-9-Nina-Carducci',
      description: 'J ai découvert se site après de la prospection et il nécessitait mais service d optimisation SEO',
      link: 'https://github.com/FloW1772/Projet-9-Nina-Carducci',
      githubPage: 'https://flow1772.github.io/Projet-9-Nina-Carducci/',
    },
    {
      id: 6,
      cover: events,
      title: 'Projet-10-Events',
      description: 'Projet 10- Events est une plateforme d organisation et gestion d événements',
      link: 'https://github.com/FloW1772/Projet-10-Events',
      githubPage: 'https://flow1772.github.io/Projet-10-Events/',
    },
  ];

  return (
    <div className="portfolio">
      <h1 className="portfolio2">Portfolio :</h1>
      <div className="portfolio-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project.cover}
            title={project.title}
            description={project.description}
            link={project.link}
            githubPage={project.githubPage}
          />

        ))}
      </div>
    </div>
  );
}