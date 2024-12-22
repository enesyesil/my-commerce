'use client';

import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';



const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
      {/* Header Component */}
      <Header />

      {/* About Section */}
      <AboutSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;

