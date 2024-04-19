import React from 'react';
import { Link } from 'react-router-dom';
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
import Vue from '../../assets/icones/logo_dvl/Vuejs_logo.jpeg'
import Yarn from '../../assets/icones/logo_dvl/Yarn.webp'





const competenceImages = {
  HTML: Html,
  CSS: CSS,
  JavaScript: JS,
  React: react,
  Sass: Sass,
  Node: JSno,
  'Visual Studio Code': VsCode,
  Vuejs: Vue,
  Figma: Figma,
  'API Swagger': Swagger,
  'React Router': RR,
  'Create React App': CRA,
  'Redux Toolkit': Redux,
  'React developer Tools': ReactDT,
  Yarn: Yarn,
  // Ajoutez d'autres compétences avec leurs images ici
};

const Competences = ({ competences }) => {
  return (
    <div className="competences">
      <h2>Compétences :</h2>

      <p>Mes compétences se sont développées. Grâce au travail effectué sur différents projets pour voir mes projets, c'est <Link to="/portfolio"> <strong>ici.</strong></Link>.</p>

      <div className="cards-container">
        {competences.map((competence, index) => (
          <div className="card" key={index}>
            <img src={competenceImages[competence]} alt={competence} className="competence-image" />
            <p>{competence}</p>
          </div>
        ))}
      </div>
      <div className="bottom-text">
        <p>Mon style vous plaît ?</p>
        <p>N'hésitez pas à me contacter, je me ferai un plaisir d'échanger avec vous, et c'est sans engagement de votre part !</p>
        <p><a href="/contact" className="button">Contactez-moi</a></p>
      </div>
    </div>
  );
};

export default Competences;
