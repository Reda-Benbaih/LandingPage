import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Sarah El Mansouri",
      role: "CEO de TechStart",
      feedback: "Cette solution a complètement transformé notre manière de travailler. Nous avons gagné un temps précieux sur l'automatisation de nos processus dès la première semaine !",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Freelance Full-Stack",
      feedback: "L'interface est d'une fluidité incroyable. Les outils de suivi et les statistiques m'aident à mieux piloter mes projets au quotidien. Je recommande à 100%.",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Amine Benjelloun",
      role: "Directeur des Opérations",
      feedback: "Un produit robuste, sécurisé et surtout un support très réactif. Nos équipes ont adopté la plateforme immédiatement sans aucune friction.",
      avatar: "🧔"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Ce que nos clients disent</h2>
          <p className="testimonials-subtitle">Des entreprises et des indépendants nous font confiance pour leur croissance.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              feedback={item.feedback}
              avatar={item.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;