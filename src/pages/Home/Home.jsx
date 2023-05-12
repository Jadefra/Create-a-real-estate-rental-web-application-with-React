import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import AllErrors from '../../components/AllErrors/AllErrors';

import landscapeBanner from '../../assets/images/banner.png';
import Thumb from '../../components/Thumb/Thumb';

import './Home.scss';

function Home() {
  // The page title
  document.title = 'Accueil - Kasa';

  // Get data from the JSON file
  const logements = useFetch(process.env.PUBLIC_URL + '/logements.json');

  // Check if the data is loading, and if so, show a loading screen
  if (logements.isLoading) {
    return <LoadingScreen />;
  }

  // Check if there is an error, and if there is, show the "AllErrors" component
  if (logements.error) {
    return <AllErrors />;
  }

  return (
    <section className="home">
      <div className="banner">
        <img src={landscapeBanner} className="banner-photo" alt="Banner" />
        <h1 className="banner-headline">Chez vous, partout et ailleurs</h1>
      </div>
      {/* Loop through the "logements" table and display each ad as a Thumb */}
      {logements.data && (
        <div className="thumb-whole">
          {logements.data.map((logement) => (
          <Thumb
            key={logement.id}
            link={`/accommodation/${logement.id}`}  // Change this line
            title={logement.title}
            cover={logement.cover}
          />
        ))}
        <div className="fill-space"></div>
        <div className="fill-space"></div>
      </div>
      )}

    </section>
  );
}

export default Home;
