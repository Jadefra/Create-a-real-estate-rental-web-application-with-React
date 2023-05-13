import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link nav-active' : 'nav-link';
  };

  return (
    <header className="head-overall">
      <NavLink to="/" className="head-logo">
        <img src={logo} alt="Logo" />
      </NavLink>
      <nav className="head">
        <NavLink className={getNavLinkClass('/')} to="/">
          Accueil
        </NavLink>
        <NavLink className={getNavLinkClass('/a-propos')} to="/a-propos">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
