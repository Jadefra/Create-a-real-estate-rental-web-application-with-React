import React, { useState } from 'react';
import sliderVector from '../../assets/images/sliderVector.svg';
import './Carrousel.scss';

function Carrousel({ images }) { 
  // Receives an array with the URLs of the images.
  // This is a React Hook that creates a state variable called "current" and sets it to 0. It
  // creates a function called `setCurrent` which takes a parameter called `value` and sets the
  // `current` state variable to the passed value.
  const [current, setCurrent] = useState(0); // Counter variable initially set to 0
  const length = images.length; // Number of images

  // The nextPicture() function takes the current value of current and adds one to it. If the current :
  // value is equal to the length of the array minus one, then the current value is set to zero.
  // Otherwise, the current value is set to the current value plus one.
  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // The `previousPicture` function takes no parameters and returns no value.
  // It sets the current picture to the previous picture.
  // If the current picture is 0, this sets the current picture to the last picture.
  const previousPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Checking to make sure the image array is not empty. If it is empty, then the
  // the cursor will not be rendered.
  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <div className="carrousel">
      {/* These are two ternary operators that check if the length of the image array is greater than 1. If it
      is, then it will return the arrow. Otherwise, it will not return the arrow. */}
      {length > 1 && (
        <img
          src={sliderVector}
          className="carrousel__vector--left"
          onClick={previousPicture}
          alt="Previous"
        />
      )}
      {length > 1 && (
        <img
          src={sliderVector}
          className="carrousel__vector--right"
          onClick={nextPicture}
          alt="Next"
        />
      )}
      {images.map((slider, index) => (
        /* It is a ternary operator which checks if the index of the image is equal to the current value.
        If so, this will make the slide active. Otherwise, it will render the slide as
        idle. */
        <div
          className={index === current ? 'carrousel__slide--active' : 'carrousel__slide'}
          key={`slider-${index}`}
        >
          {index === current && (
            <img
              src={slider}
              alt={`slide ${index + 1}`}
              className="carrousel__image"
            />
          )}
        </div>
      ))}
      {/* Slide progress indicator */}
      <span className='slide-counter'>
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

export default Carrousel;


