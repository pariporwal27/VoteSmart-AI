import React, { useState, useEffect } from 'react';
import { Vote, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Eligibility', href: '#roadmap' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Ask AI', href: '#chatbot' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[var(--primary)] dark:text-[var(--primary-light)]">
          <Vote size={28} className="text-[var(--secondary)]" />
          <span className="text-xl font-bold tracking-tight">AI Election Companion</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary-light)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#roadmap"
            className="px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary-light)] transition-colors shadow-sm"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-slate-200 dark:border-slate-700"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#roadmap"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-lg bg-[var(--primary)] text-white text-base font-semibold"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
