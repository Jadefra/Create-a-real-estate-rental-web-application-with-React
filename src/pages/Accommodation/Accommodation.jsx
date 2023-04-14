import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import Error from '../components/Error';
import Error404 from '../components/Error404';
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';


function Accommodation() {
  // Get data from logements.json
  const logements = useFetch(window.location.origin + '/Kasa/logements.json');

  // Get ad id from URL
  const { accommodationId } = useParams();

  // Search for the ad with the identifier found in the URL
  let thisAccommodation;
  if (logements.data) {
    thisAccommodation = logements.data.find((accommodation) => accommodation.id === accommodationId);
  }

  // If the data is loading, a loading screen will appear
  if (logements.loading) {
    return <LoadingScreen />;
  }

  // If there is an error the Error component
  if (logements.error) {
    return <Error />;
  }

  // If the ad does not exist, the Error404 component
  if (!thisAccommodation) {
    return <Error404 />;
  } else {
    // Decompose the host name into firstName and lastName
    const [firstName, lastName] = thisAccommodation.host.name.split(' ');
    // Set page title
    document.title = thisAccommodation.title + ' - Kasa';
    return (
      <section>
        <Gallery images={thisAccommodation.pictures} />
        <div className="Detailed-description-set">
          <div className="Title-Description-Host-Rate-set">
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
              <img className="host-photo" src={thisAccommodation.host.photo} alt="Host_photo" />
            </div>
          </div>
        </div>
        <div className="set-description-equipments">
          <Collapse title="Description" content={thisAccommodation.description} />
          <Collapse title="Equipements" content={thisAccommodation.equipments} />
        </div>
      </section>
    );
  }
}
export default Accommodation;












