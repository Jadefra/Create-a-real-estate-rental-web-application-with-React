import React from 'react';
import { Link } from 'react-router-dom';

import './Thumb.scss';

function Thumb({ link, cover, title }) {
  return (
    <div className="thumb">
      <Link to={link}>
        <div className="thumb-cover-whole">
          <img src={cover} alt={`Cover for ${title}`} />
        </div>
        <h2 className="thumb-title">{title}</h2>
      </Link>
    </div>
  );
}

export default Thumb;
