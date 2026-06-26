import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='logo'>LandingPage</div>
      <div className='functionContainer'>
        <a className='functions' href="">Accueil</a>
        <a className='functions' href="">Functions</a>
        <a className='functions' href="">A propos</a>
        <a className='functions' href="">Temoignage</a>
        <a className='functions' href="">Contact</a>
      </div>
    </section>
  );
};

export default Navbar;