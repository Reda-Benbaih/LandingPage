import React from 'react';
import './Hero.css';
import heroImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='heroText'> 
            <h2 className='title'>Propulsez votre entreprise dans une nouvelle digitale</h2>
            <p className='texte'> 
                Une solution tout-en-un moderne et intuitive pour automatiser vos processus, 
                gagner un temps précieux et maximiser votre productivité au quotidien.
            </p>
            <div className='buttonContainer'> 
                <a className='button1' href="">Démarrer l'essai gratuit</a>
                <a className='button2' href="">En savoir plus</a>
            </div>
        </div>
        <div className='heroImage'>
            <img src={heroImage} alt="Illustration de la solution digitale" />
        </div>
    </section>
  );
};

export default Hero;
