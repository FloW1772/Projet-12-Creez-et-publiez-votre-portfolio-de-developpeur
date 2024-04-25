import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projet.scss';

export default function Projet({ images }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="projet-container">
      <div className="text-below-slider">
        <p className="bottom-text">Ci-dessous, vous pouvez voir un slider montrant différentes images des différents projets,</p>
        <p className="bottom-text">m'ayant aidé a développer mes compétences et à m'améliorer en développement.</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="projet-slide">
              <img
                src={image}
                alt={`Projet ${index + 1}`}
                className="projet-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-low-slider">
        <p className="bottom-text">Si vous voulez voir les projets en liées avec les images du slider et ceux qui m'ont permit de développer mes compétences, c'est par <a href="/portfolio"> <strong>ici.</strong></a>.</p>

      </div>
    </div>
  );
}