import React from 'react';
import './Gallery.scss';
import { useFetch } from './hooks/useFetch';
import Logement from './Logement';

function Gallery() {
  const { isLoading, data: accommodationsData, error } = useFetch(
    process.env.PUBLIC_URL + '/accommodation.json'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="gallery">
      {accommodationsData.map((accommodation) => (
        <Logement key={accommodation.id} data={accommodation} />
      ))}
    </div>
  );
}

export default Gallery;

