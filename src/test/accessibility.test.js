import { describe, it, expect, beforeEach } from 'vitest';
import { announceToScreenReader, generateAriaLabel, focusManagement } from '../utils/accessibility';

describe('Accessibility Utilities', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('generateAriaLabel', () => {
    it('should generate aria label with status', () => {
      const label = generateAriaLabel('Submit', 'disabled');
      expect(label).toBe('Submit, disabled');
    });

    it('should generate aria label without status', () => {
      const label = generateAriaLabel('Submit', null);
      expect(label).toBe('Submit');
    });
  });

  describe('announceToScreenReader', () => {
    it('should create announcement element with correct role', (done) => {
      announceToScreenReader('Form submitted successfully');
      
      setTimeout(() => {
        const announcement = document.querySelector('[role="status"]');
        expect(announcement).toBeTruthy();
        expect(announcement.textContent).toBe('Form submitted successfully');
        done();
      }, 100);
    });

    it('should remove announcement after timeout', (done) => {
      announceToScreenReader('Test message');
      
      setTimeout(() => {
        const announcement = document.querySelector('[role="status"]');
        expect(announcement).toBeNull();
        done();
      }, 3500);
    });
  });

  describe('focusManagement', () => {
    it('should set focus on element', () => {
      const button = document.createElement('button');
      document.body.appendChild(button);

      focusManagement.setFocus(button);
      expect(document.activeElement).toBe(button);
    });

    it('should handle null element gracefully', () => {
      expect(() => focusManagement.setFocus(null)).not.toThrow();
    });
  });
});
