import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chatbot from './components/Chatbot';
import PersonalizedRoadmap from './components/PersonalizedRoadmap';
import Timeline from './components/Timeline';
import EducationalCards from './components/EducationalCards';
import Footer from './components/Footer';

import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <EducationalCards />
        <PersonalizedRoadmap />
        <Timeline />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
