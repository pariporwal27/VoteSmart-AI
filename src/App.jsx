import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FeedbackButton from './components/FeedbackButton';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import SectionSkeleton from './components/SectionSkeleton';
import translations from './translations';
import { initializeGoogleAnalytics, trackPageView } from './utils/analytics';

const HowItWorks = lazy(() => import('./components/HowItWorks'));
const EducationalCards = lazy(() => import('./components/EducationalCards'));
const PersonalizedRoadmap = lazy(() => import('./components/PersonalizedRoadmap'));
const PollingBoothFinder = lazy(() => import('./components/PollingBoothFinder'));
const Timeline = lazy(() => import('./components/Timeline'));
const Chatbot = lazy(() => import('./components/Chatbot'));

function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('votesmart-theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const t = translations[language];

  // Clear any URL hash on initial load so the page always starts at the top
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('votesmart-theme', theme);
  }, [theme]);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    initializeGoogleAnalytics(measurementId);
    trackPageView('VoteSmart AI', window.location.href);
  }, []);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg dark:focus:bg-slate-800 dark:focus:text-white"
      >
        Skip to content
      </a>
      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenShortcuts={() => setShortcutsOpen(true)}
      />
      <main id="main-content">
        <Hero t={t} />
        <Suspense fallback={<SectionSkeleton />}>
          <HowItWorks t={t} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <EducationalCards t={t} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PersonalizedRoadmap t={t} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton compact />}>
          <PollingBoothFinder language={language} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Timeline t={t} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Chatbot t={t} language={language} />
        </Suspense>
      </main>
      <Footer t={t} />
      <KeyboardShortcuts isOpen={shortcutsOpen} setIsOpen={setShortcutsOpen} />
      <FeedbackButton language={language} />
    </div>
  );
}

export default App;
