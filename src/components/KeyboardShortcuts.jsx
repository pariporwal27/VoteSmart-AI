import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const KeyboardShortcuts = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);

      if (!isTyping && (event.key === '?' || (event.ctrlKey && event.key === '/'))) {
        event.preventDefault();
        setIsOpen((open) => !open);
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  const shortcuts = [
    { key: '?', desc: 'Open or close this help menu' },
    { key: 'Esc', desc: 'Close open dialogs' },
    { key: 'Tab', desc: 'Move to the next control' },
    { key: 'Enter', desc: 'Activate the focused button or link' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-800"
            role="dialog"
            aria-modal="true"
            aria-labelledby="keyboard-shortcuts-title"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 id="keyboard-shortcuts-title" className="text-2xl font-bold text-slate-900 dark:text-white">
                Keyboard Shortcuts
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                aria-label="Close keyboard shortcuts"
              >
                <X size={24} className="text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex items-center gap-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                  <kbd className="min-w-fit rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-600 dark:text-white">
                    {shortcut.key}
                  </kbd>
                  <span className="text-slate-600 dark:text-slate-300">{shortcut.desc}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">Press Esc to close this menu</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default KeyboardShortcuts;
