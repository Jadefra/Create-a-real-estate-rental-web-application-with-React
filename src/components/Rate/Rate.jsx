import React from 'react'; 
import star from '../../assets/images/star.svg';
import './Rate.scss'; 

function Rate({ rate }) {
  const globalStar = 5;
  const starSum = parseInt(rate);
  const emptyStars = globalStar - starSum;

  // check if starSum and emptyStars are numbers
  if (isNaN(starSum) || isNaN(emptyStars)) {
    return null;
  }

  return (
    <div className="rate-overall">
      {/*Return full stars quantity*/}
      {[...Array(starSum)].map((e,i) => (
        <img
          className="star"
          key={'full-star-' + i}
          src={star}
          alt="The rating with the stars filled in"
        />
      ))}
      {/*Return the amount of empty stars*/}
      {[...Array(emptyStars)].map((_, i) => (
        <img
          className="star-empty"
          key={'empty-star-' + i}
          src={star}
          alt="The note with the empty stars"
        />
      ))}
    </div>
  );
}


export default Rate;
