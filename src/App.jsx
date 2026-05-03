import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chatbot from './components/Chatbot';
import PersonalizedRoadmap from './components/PersonalizedRoadmap';
import Timeline from './components/Timeline';
import EducationalCards from './components/EducationalCards';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import PollingBoothFinder from './components/PollingBoothFinder';
import translations from './translations';

function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  // Clear any URL hash on initial load so the page always starts at the top
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t} />
        <HowItWorks t={t} />
        <EducationalCards t={t} />
        <PersonalizedRoadmap t={t} />
        <PollingBoothFinder t={t} language={language} />
        <Timeline t={t} />
        <Chatbot t={t} language={language} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
