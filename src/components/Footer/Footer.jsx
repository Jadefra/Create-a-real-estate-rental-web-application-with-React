// Footer.jsx
import React from 'react';
import logo2 from '../../assets/images/logo2.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer-whole">
      <img src={logo2} className="footer-logo" alt="Kasa Logo" />
      <h3 className="footer-rights">© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
}

export default Footer;

