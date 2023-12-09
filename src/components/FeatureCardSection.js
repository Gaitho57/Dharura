// FeatureCardSection.js
import React from 'react';
import FeatureCard from './FeatureCard';
import './FeatureCardSection.css'; 

const FeatureCardSection = () => {
  return (
    <section className="key-features">
      <h2>Key Features</h2>
      <div className="features-list">
        <FeatureCard
          title="Interactive Map"
          icon="/images/2.png"
          description="Receive real-time alerts about emergencies in your area."
        />
        <FeatureCard
          title="Community Posts"
          icon="/images/4.png"
          description="Stay informed about local events, meetings, and initiatives."
        />
        <FeatureCard
          title="Education Section"
          icon="/images/6.png"
          description="Connect with neighbors and report suspicious activity."
        />
        <FeatureCard
          title="Emergency Contact"
          icon="/images/7.png"
          description="Find helpful resources for emergency preparedness and safety."
        />
      </div>
    </section>
  );
};

export default FeatureCardSection;