import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Veuillez entrer votre email !");
      return;
    }
    alert(`Merci ! Inscription réussie avec : ${email}`);
    setEmail('');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <h2 className="contact-title">Prêt à propulser votre activité ?</h2>
        <p className="contact-text">
          Rejoignez-nous aujourd'hui et boostez votre productivité.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Démarrer</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;