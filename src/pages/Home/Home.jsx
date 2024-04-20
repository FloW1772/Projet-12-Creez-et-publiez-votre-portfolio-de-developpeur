import React from 'react';
import Presentation from '../../components/presentation/presentation';
import Competences from '../../components/competences/Competences';
import './home.scss';

export default function Home() {
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
    { name: 'Debuggage', url: 'https://juba.github.io/tidyverse/20-debuggage-performance.html' },
    { name: 'React Developer Tools', url: 'https://react.dev/learn/react-developer-tools' },
    { name: 'Yarn', url: 'https://yarnpkg.com/' },
    { name: 'Nodejs', url: 'https://nodejs.org/en' },
    { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
    { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
  ];

  return (
    <div>
      <Presentation />
      <Competences competences={competences} />
    </div>
  );
}