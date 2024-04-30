import React from 'react';
import Presentation from '../../components/presentation/Presentation';
import Competences from '../../components/competences/Competences';
import Projet from '../../components/Projet/Projet';
import './home.scss';
import Image1 from '../../assets/images/Image_1&2.webp'
import Image2 from '../../assets/images/Image_3&4.webp'
import Image5 from '../../assets/images/Image5.webp'
import Image6 from '../../assets/images/Image6.webp'
import Image7 from '../../assets/images/Image7.webp'
import Image8 from '../../assets/images/Image8.webp'
import Image9 from '../../assets/images/Image9.webp'
import Image10 from '../../assets/images/Image10.webp'


export default function HomePage() {
  const competences = [
    { name: 'HTML', url: 'https://developer.mozilla.org/fr/docs/Glossary/HTML5' },
    { name: 'CSS', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
    { name: 'React', url: 'https://fr.react.dev/' },
    { name: 'Sass', url: 'https://sass-lang.com/' },
    { name: 'SEO', url: 'https://www.seo.fr/definition/seo-definition' },
    { name: 'Vuejs', url: 'https://vuejs.org/' },
    { name: 'Figma', url: 'https://www.figma.com/fr/' },
    { name: 'Site Web dynamique', url: 'https://www.noiise.com/definition/site-web-dynamique/' },
    { name: 'API Swagger', url: 'https://swagger.io/' },
    { name: 'Planification', url: 'https://fr.smartsheet.com/content/it-project-plan' },
    { name: 'Gestion de projet', url: 'https://fr.wikipedia.org/wiki/Gestion_de_projet' },
    { name: 'React Router', url: 'https://reactrouter.com/en/main' },
    { name: 'Create React App', url: 'https://create-react-app.dev/' },
    { name: 'React Developer Tools', url: 'https://react.dev/learn/react-developer-tools' },
    { name: 'Yarn', url: 'https://yarnpkg.com/' },
    { name: 'Nodejs', url: 'https://nodejs.org/en' },
    { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
    { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
  ];

  const images = [
    Image1,
    Image2,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10
  ];



  return (
    <div>
      <Presentation />
      <Projet images={images} />
      <Competences competences={competences} />
    </div>
  );
}