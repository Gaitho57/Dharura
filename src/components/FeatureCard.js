// FeatureCard.js
import React from 'react';

const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
