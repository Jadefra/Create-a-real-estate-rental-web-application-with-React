import React, { useState } from 'react';

import Vector from '../../assets/images/Vector.svg';

import './Dropdown.scss';

function Dropdown({ title, content }) {
  const [dropActive, setDropActive] = useState('');
  const [dropRotate, setDropRotate] = useState('dropdown-icon');

  const openDropdown = () => {
    setDropActive(dropActive === '' ? 'active' : '');
    setDropRotate(
      dropActive === 'active' ? 'dropdown-icon' : 'dropdown-icon rotate'
    );
  };

  // It is a way to check if the content is an array or not. If it's not an array, it will push the
  // contained in the contentArray. If it is an array, it will loop through the array and push each element into
  // the contentArray
  const contentArray = [];
  if (!Array.isArray(content)) {
    contentArray.push(content);
  } else {
    for (let i = 0; i < content.length; i++) {
      contentArray.push(content[i]);
    }
  }

  return (
    <div className="dropdown-section">
      {/* This is the button that is used to toggle dropdown. */}
      <button className={`dropdown ${dropActive}`} onClick={openDropdown}>
        <span className="dropdown-title">{title}</span>
        <img src={Vector} className={`${dropRotate}`} alt="Toggle" />
      </button>
      <div className={`dropdown-content ${dropActive}`}>
        <div className="dropdown-text">
          {contentArray.map((contentItem, index) => (
            <div key={`${contentItem}-${index}`}>{contentItem}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;



