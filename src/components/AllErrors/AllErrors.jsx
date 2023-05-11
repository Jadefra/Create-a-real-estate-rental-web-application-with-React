import React from 'react';
import { Link } from 'react-router-dom';
import './AllErrors.scss';

function AllErrors({
  /* Prop Defaults */
  title = 'Erreur',
  subtitle = "Oups! une erreur s'est produit",
  subtitle2 = '',
}) {
  return (
    <section className="errors">
      <h1 className="errors-title">{title}</h1>
      <h2 className="errors-subtitle">
        {subtitle}
        {subtitle2 && <br className="errors-subtitle-br" />}
        {subtitle2 && subtitle2}
      </h2>
      <Link className="errors-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default AllErrors;

