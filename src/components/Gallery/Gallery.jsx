import React from 'react';
import './Gallery.scss';
import { useFetch } from './hooks/useFetch';
import Logement from './Logement';

function Gallery() {
  const { isLoading, data: logementsData, error } = useFetch(
    process.env.PUBLIC_URL + '/logements.json'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="gallery">
      {logementsData.map((logements) => (
        <Logement key={logements.id} data={logements} />
      ))}
    </div>
  );
}

export default Gallery;

