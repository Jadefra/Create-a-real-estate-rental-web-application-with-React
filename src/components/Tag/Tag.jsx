import React from 'react'; 
import './Tag.scss'; // Importer le fichier de style associé au composant Tag

function Tag({ tagName }) {
  // Définir un composant fonctionnel "Tag" qui prend une prop "tagName"
  return <div className="tag">{tagName}</div>; 
}

export default Tag; 
