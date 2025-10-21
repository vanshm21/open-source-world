import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import CTABanner from '../components/sections/CTABanner';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
};

export default HomePage;
