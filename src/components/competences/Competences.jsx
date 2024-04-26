import React from 'react';
import './competences.scss';
import CRA from '../../assets/icones/logo_dvl/Create_React_App.webp'
import CSS from '../../assets/icones/logo_dvl/CSS.webp'
import Figma from '../../assets/icones/logo_dvl/Figma.webp'
import Html from '../../assets/icones/logo_dvl/Html.webp'
import JS from '../../assets/icones/logo_dvl/Javascript.webp'
import JSno from '../../assets/icones/logo_dvl/node_new.webp'
import ReactDT from '../../assets/icones/logo_dvl/React-Developer-Tools.webp'
import RR from '../../assets/icones/logo_dvl/react-router.webp'
import react from '../../assets/icones/logo_dvl/React.webp'
import Redux from '../../assets/icones/logo_dvl/Redux.webp'
import Sass from '../../assets/icones/logo_dvl/Sass.webp'
import Swagger from '../../assets/icones/logo_dvl/swagger-banner.webp'
import VsCode from '../../assets/icones/logo_dvl/VsCode.webp'
import Vue from '../../assets/icones/logo_dvl/Vue.js.webp'
import Yarn from '../../assets/icones/logo_dvl/Yarn.webp'

const competenceImages = {
  HTML: Html,
  CSS: CSS,
  JavaScript: JS,
  React: react,
  Sass: Sass,
  Nodejs: JSno,
  'Visual Studio Code': VsCode,
  Vuejs: Vue,
  Figma: Figma,
  'API Swagger': Swagger,
  'React Router': RR,
  'Create React App': CRA,
  'Redux Toolkit': Redux,
  'React Developer Tools': ReactDT,
  Yarn: Yarn,
};

const Competences = ({ competences }) => {
  return (
    <div className="competences">
      <h2>Compétences :</h2>


      <div className="cards-container">
        {competences.map((competence, index) => (
          <a href={competence.url} target="_blank" rel="noopener noreferrer" key={index} className="card">
            {competenceImages[competence.name] && (
              <img src={competenceImages[competence.name]} alt={competence.name} className="competence-image" />
            )}
            <p>{competence.name}</p>
          </a>
        ))}
      </div>
      <div className="bottom-text">
        <p>Mon style vous plaît ?</p>
        <p>N'hésitez pas à me contacter, je me ferai un plaisir d'échanger avec vous, et c'est sans engagement de votre part !</p>
        <p><a href="/contact" className="button">Contactez-moi !</a></p>
      </div>
    </div>
  );
};

export default Competences;
