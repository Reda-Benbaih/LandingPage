import React from 'react';
import './Testimonials.css';

const TestimonialCard = ({ name, role, feedback, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">“</div>
      <p className="feedback-text">{feedback}</p>
      <div className="profile-container">
        <div className="avatar">{avatar}</div>
        <div className="profile-info">
          <h4 className="client-name">{name}</h4>
          <span className="client-role">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;