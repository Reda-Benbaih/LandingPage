import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">LandingPage</div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;