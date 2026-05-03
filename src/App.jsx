import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chatbot from './components/Chatbot';
import PersonalizedRoadmap from './components/PersonalizedRoadmap';
import Timeline from './components/Timeline';
import EducationalCards from './components/EducationalCards';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

function App() {
  // Clear any URL hash on initial load so the page always starts at the top
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

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
