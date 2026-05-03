import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';

const KeyboardShortcuts = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '?' || (e.ctrlKey && e.key === '/')) {
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const shortcuts = language === 'hi' ? [
    { key: '?', desc: 'इस मदद मेनू को खोलें/बंद करें' },
    { key: 'Esc', desc: 'किसी भी मोडल को बंद करें' },
    { key: 'Tab', desc: 'अगले तत्व पर नेविगेट करें' },
    { key: 'Enter', desc: 'फॉर्म सबमिट करें या बटन दबाएं' },
  ] : [
    { key: '?', desc: 'Open/close this help menu' },
    { key: 'Esc', desc: 'Close any modal' },
    { key: 'Tab', desc: 'Navigate to next element' },
    { key: 'Enter', desc: 'Submit form or press button' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-shadow z-40 flex items-center justify-center"
        aria-label={language === 'hi' ? 'मदद' : 'Help'}
        title={language === 'hi' ? '? दबाएं' : 'Press ? for help'}
      >
        <HelpCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm w-full mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-50 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {language === 'hi' ? 'कीबोर्ड शॉर्टकट' : 'Keyboard Shortcuts'}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-600 dark:text-slate-400" />
                </button>
              </div>

              <div className="space-y-4">
                {shortcuts.map((shortcut, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <kbd className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white font-semibold text-sm min-w-fit">
                      {shortcut.key}
                    </kbd>
                    <span className="text-slate-600 dark:text-slate-300">{shortcut.desc}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                {language === 'hi'
                  ? 'इस मेनू को बंद करने के लिए Esc दबाएं'
                  : 'Press Esc to close this menu'}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
