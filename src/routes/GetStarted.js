import React from 'react';
import './GetStarted.css';
import HeroImg2 from '../components/HeroImg2';
import FeatureCardSection from '../components/FeatureCardSection';
import QuickStartGuide from '../components/QuickStartGuide';
import HelpResources from '../components/HelpResources';
import CtaSection from '../components/CtaSection';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const GetStarted = () => {
  return (
    <div className="get-started-page">
      <Navbar />
      <div className="content-container">
        <HeroImg2 heading="Getting Started" text="This section showcases how the app is used" />
        <div className="section-spacer"></div>
        <FeatureCardSection />
        <div className="section-spacer"></div>
        <QuickStartGuide />
        <div className="section-spacer"></div>
        <HelpResources />
        <div className="section-spacer"></div>
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;