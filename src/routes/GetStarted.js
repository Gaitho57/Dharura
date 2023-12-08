import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './GetStartedStyles.css'; 
import FeatureCard from '../components/FeatureCard';
const GetStarted = () => (
  <div className="get-started-page">
    <Navbar />
    <div className="content-container">
      <div className="hero-section">
        <h1>Welcome to Dharura!</h1>
        <p>
          Your one-stop solution for emergency response, community engagement,
          and building a safer, more resilient community.
        </p>
      </div>

      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features-list">
          <FeatureCard
            title="Emergency Alerts"
            icon="/images/emergency-alert.png"
            description="Receive real-time alerts about emergencies in your area."
          />
          <FeatureCard
            title="Community News & Events"
            icon="/images/news-events.png"
            description="Stay informed about local events, meetings, and initiatives."
          />
          <FeatureCard
            title="Neighbourhood Watch"
            icon="/images/neighbourhood-watch.png"
            description="Connect with neighbors and report suspicious activity."
          />
          <FeatureCard
            title="Resource Hub"
            icon="/images/resources.png"
            description="Find helpful resources for emergency preparedness and safety."
          />
          <FeatureCard
            title="Volunteer Opportunities"
            icon="/images/volunteering.png"
            description="Make a difference by volunteering for community projects."
          />
        </div>
      </section>

      <section className="quick-start">
        <h2>Quick Start Guide</h2>
        <ol>
          <li>Sign Up: Create a free account to access all features.</li>
          <li>Explore Features: Discover how Dharura can help you.</li>
          <li>Join your community: Connect with your neighbors and build a stronger community.</li>
        </ol>
      </section>

      <section className="help-resources">
        <h2>Help & Resources</h2>
        <ul>
          <li>
            <a href="/help-center">Visit our Help Center</a>
          </li>
          <li>
            <a href="/contact">Contact our Support Team</a>
          </li>
        </ul>
      </section>

      <section className="cta">
        <h2>Start exploring today!</h2>
        <button>Explore Features</button>
      </section>
    </div>
    <Footer />
  </div>
);

export default GetStarted;