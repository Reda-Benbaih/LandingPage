import React from 'react';
import './Feature.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text">{description}</p>
    </div>
  );
};

export default FeatureCard;