import React from 'react';
import Banner from '../Banner/Banner';
// Importez le composant Gallery après l'avoir créé
import './Body.scss';

function Body() {
  return (
    <section className="body">
      <Banner />
      {/* Utilisez le composant Gallery après l'avoir créé */}
    </section>
  );
}

export default Body;
