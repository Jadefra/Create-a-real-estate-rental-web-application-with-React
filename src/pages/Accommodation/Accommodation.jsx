import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import AllErrors from '../../components/AllErrors/AllErrors';
import Error404 from '../../pages/Error404/Error404';

import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rate/Rate';
import Dropdown from '../../components/Dropdown/Dropdown';

import './Accommodation.scss';

function Accommodation() {
  const accommodations = useFetch(process.env.PUBLIC_URL + '/logements.json');
  const { accommodationId } = useParams();
  let thisAccommodation;
  if (accommodations.data) {
    thisAccommodation = accommodations.data.find((accommodation) => accommodation.id === accommodationId);
  }

  if (accommodations.isLoading) {
    return <LoadingScreen />;
  }

  if (accommodations.error) {
    return <AllErrors />;
  }

  if (!thisAccommodation) {
    return <Error404 />;
  } else {
    const [firstName, lastName] = thisAccommodation.host.name.split(' ');
    document.title = thisAccommodation.title + ' - Kasa';

    return (
      <section className="accommodation">
        <Carrousel images={thisAccommodation.pictures} />
        <div className="accommodation-detail-set">
          <div className="title-rating-host-set">
            <div className="title-tag-set">
              <h1 className="accommodation-title">{thisAccommodation.title}</h1>
              <p className="accommodation-location">{thisAccommodation.location}</p>
              <div className="tag-set">
                {thisAccommodation.tags.map((tag, index) => (
                  <Tag tagName={tag} key={`${tag}-${index}`} />
                ))}
              </div>
            </div>
            <div className="host-rating-set">
              <div className="host-set">
                <div className="host-name">
                  {firstName}
                  <br />
                  {lastName}
                </div>
                <img className="host-picture" src={thisAccommodation.host && thisAccommodation.host.picture} alt="Host_photo" />
              </div>
              <div className="rating-set">
                <Rating rating={thisAccommodation.rating} />
              </div>
            </div>
          </div>
          <div className="set-description-equipments">
            <Dropdown title="Description" content={thisAccommodation.description} />
            <Dropdown title="Equipements" content={thisAccommodation.equipments} />
          </div>
        </div>
      </section>
    );
  }
}

export default Accommodation;
























