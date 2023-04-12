import React from 'react';
import './Banner.scss';
import landscapeBanner from '../../assets/images/banner.png'

function Banner() {
  return (
    <div className="banner">
        <img src={landscapeBanner} className="banner-photo" alt="Banner"/>
        <h1 className="banner-headline">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

