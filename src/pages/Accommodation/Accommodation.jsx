import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import AllErrors from '../../components/AllErrors/AllErrors';
import Error404 from '../../pages/Error404/Error404';

import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rate/Rate';
import Collapse from '../../components/Dropdown/Dropdown';

function Accommodation() {
  // Get data from logements.json
  const logements = useFetch(process.env.PUBLIC_URL + '/logements.json');

  // Get ad id from URL
  const { accommodationId } = useParams();

  // Search for the ad with the identifier found in the URL
  let thisAccommodation;
  if (logements.data) {
    thisAccommodation = logements.data.find((accommodation) => accommodation.id.toString() === accommodationId);
  }

  // If the data is loading, a loading screen will appear
  if (logements.isLoading) {
    return <LoadingScreen />;
  }

  // If there is an error, the AllErrors component is displayed
  if (logements.error) {
    return <AllErrors />;
  }

  // If the ad does not exist, the Error404 component is displayed
  if (!thisAccommodation) {
    return <Error404 />;
  }

  // Decompose the host name into firstName and lastName
  let firstName, lastName;
  if (thisAccommodation.host && thisAccommodation.host.name) {
    [firstName, lastName] = thisAccommodation.host.name.split(' ');
  }

  // Set page title
  document.title = thisAccommodation.title + ' - Kasa';

  // Return the rest of your component here
  return (
    <section className="accommodation">
      <Carrousel images={thisAccommodation.pictures} />
      <div className="set-host-rating-detail-accommodation">
        <div className="set-detail-accommodation-title-host-rate">
          <h1 className="accommodation-title">{thisAccommodation.title}</h1>
          <p className="accommodation-location">{thisAccommodation.location}</p>
          <div className="tag-set">
            {thisAccommodation.tags.map((tag, index) => (
              <Tag tagName={tag} key={`${tag}-${index}`} />
            ))}
          </div>
        </div>
        <div className="set-host-rating">
          <Rating rating={thisAccommodation.rating} />
          <div className="set-host">
            <div className="host-name">
              {firstName}
              <br />
              {lastName}
            </div>
            <img className="host-picture" src={thisAccommodation.host && thisAccommodation.host.picture} alt="Host_photo" />
          </div>
        </div>
      </div>
      <div className="set-description-equipments">
        <Collapse title="Description" content={thisAccommodation.description} />
        <Collapse title="Equipments" content={thisAccommodation.equipments} />
      </div>
    </section>
  );
}

export default Accommodation;
















