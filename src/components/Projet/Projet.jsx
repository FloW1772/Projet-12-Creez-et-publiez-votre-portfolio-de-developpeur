// import React from 'react';
// import './projet.scss';
// import Image1 from '../../assets/images/Image1.png'
// import Image2 from '../../assets/images/Image2.png'
// import Image3 from '../../assets/images/Image3.png'
// import Image4 from '../../assets/images/Image4.png'
// import Image5 from '../../assets/images/Image5.png'
// import Image6 from '../../assets/images/Image6.png'
// import Image7 from '../../assets/images/Image7.png'
// import Image8 from '../../assets/images/Image8.png'
// import Image9 from '../../assets/images/Image9.png'
// import Image10 from '../../assets/images/Image10.png'


// export default function Projet({ images }) {
//   return (
//     <div className="projet-container">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={require(`./images/${image}`)}
//           alt={`Projet ${index + 1}`}
//           className="projet-image"
//         />
//       ))}
//     </div>
//   );
// }
// Projet.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projet.scss';

export default function Projet({ images }) {
  const settings = {
    dots: true, // Afficher les indicateurs de pagination
    infinite: true, // Activer la lecture infinie
    speed: 500, // Vitesse de transition en millisecondes
    slidesToShow: 3, // Nombre d'images à afficher simultanément
    slidesToScroll: 1, // Nombre d'images à faire défiler à la fois
    autoplay: true, // Activer la lecture automatique
    autoplaySpeed: 3000, // Délai entre les diapositives en millisecondes
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
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Projet ${index + 1}`}
              className="projet-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
