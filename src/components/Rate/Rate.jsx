import React from 'react'; 
import starEmpty from '../../assets/images/star_empty.svg';
import starFull from '../../assets/images/star_full.svg'; 
import './Rate.scss'; 

function Rate({ rating }) {
  const globalStar = 5;
  const starSum = parseInt(rating);
  const emptyStars = globalStar - starSum;

  // check if starSum and emptyStars are numbers
  if (isNaN(starSum) || isNaN(emptyStars)) {
    return null;
  }

  return (
    <div className="rate-overall">
      {[...Array(starSum)].map((e,i) => (
        <img
          className="star"
          key={'full-star-' + i}
          src={starFull} 
          alt="Full star"
        />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <img
          className="star-empty"
          key={'empty-star-' + i}
          src={starEmpty} 
          alt="Empty star"
        />
      ))}
    </div>
  );
}

export default Rate;



