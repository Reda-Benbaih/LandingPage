// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Partie gauche : Texte explicatif */}
        <div className="about-text">
          <h2 className="about-title">À qui s'adresse notre solution ?</h2>
          <p className="about-paragraph">
            Que vous soyez une start-up en plein essor, un entrepreneur indépendant ou une entreprise établie, 
            notre plateforme digitale a été conçue pour briser la complexité de votre gestion quotidienne.
          </p>
          <p className="about-paragraph">
            Nous résolvons le problème de la perte de temps liée aux tâches répétitives et au manque de visibilité 
            sur vos performances. En centralisant vos outils, nous vous permettons de vous concentrer sur ce qui 
            compte vraiment : la croissance de votre activité.
          </p>
        </div>

        {/* Partie droite : Chiffres clés ou mini-cartes de valeur */}
        <div className="about-stats">
          <div className="stat-card">
            <h3>+40%</h3>
            <p>De productivité globale</p>
          </div>
          <div className="stat-card">
            <h3>-10h</h3>
            <p>De tâches administratives par semaine</p>
          </div>
          <div className="stat-card">
            <h3>99%</h3>
            <p>De clients satisfaits par notre réactivité</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;