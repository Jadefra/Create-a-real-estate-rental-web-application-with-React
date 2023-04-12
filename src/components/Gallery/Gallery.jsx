import React from 'react';
import './Gallery.scss';
import logementsData from './data/logements.json';
import Logement from './Logement';


function Gallery() {
  return (
    <div className="gallery">
      {logementsData.map((logement) => (
        <Logement key={logement.id} data={logement} />
      ))}
    </div>
  );
}

export default Gallery;
