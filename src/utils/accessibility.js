/**
 * Accessibility Utilities
 * Helper functions for improving accessibility
 */

export const generateAriaLabel = (label, status) => {
  return status ? `${label}, ${status}` : label;
};

export const getKeyboardShortcuts = () => {
  return {
    '?': 'Show help',
    'Enter': 'Submit form or send message',
    'Escape': 'Close modal or cancel',
    'Tab': 'Navigate forward',
    'Shift+Tab': 'Navigate backward',
  };
};

export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    announcement.remove();
  }, 3000);
};

export const focusManagement = {
  setFocus: (element) => {
    if (element) element.focus();
  },
  
  trapFocus: (containerElement, event) => {
    const focusableElements = containerElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      event.preventDefault();
    }
  },
};

export const colorContrast = {
  wcagAA: 'Contrast ratio >= 4.5:1 for normal text',
  wcagAAA: 'Contrast ratio >= 7:1 for normal text',
  wcagAALarge: 'Contrast ratio >= 3:1 for large text',
};
