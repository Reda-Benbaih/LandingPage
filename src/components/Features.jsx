import React from 'react';
import FeatureCard from './FeatureCard';
import './Feature.css';

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: "⚡",
      title: "Performance Optimisée",
      description: "Une vitesse d'exécution ultra-rapide pour garantir une expérience fluide à vos utilisateurs."
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Sécurité Maximale",
      description: "Vos processus et données sont protégés avec les derniers standards de sécurité."
    },
    {
      id: 3,
      icon: "📊",
      title: "Tableau de Bord",
      description: "Suivez vos statistiques et maximisez votre productivité grâce à des outils intuitifs."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-main-title">Nos Fonctionnalités Clés</h2>
          <p className="features-subtitle">Découvrez les outils qui vont propulser votre business.</p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;