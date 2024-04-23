import React from 'react';
import './projet.scss';

export default function Projet({ images }) {
  return (
    <div className="projet-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={require(`./images/${image}`)}
          alt={`Projet ${index + 1}`}
          className="projet-image"
        />
      ))}
    </div>
  );
}
