import { describe, it, expect } from 'vitest';
import {
  sanitizeInput,
  validateChatInput,
  validateAge,
  validateCity,
  sanitizeChatResponse,
  RateLimiter,
} from '../utils/security';

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should remove script tags', () => {
      const input = '<script>alert("xss")</script>Hello';
      const result = sanitizeInput(input);
      expect(result).not.toContain('<script>');
      expect(result).not.toContain('</script>');
    });

    it('should remove javascript: protocol', () => {
      const input = '<a href="javascript:alert()">click</a>';
      const result = sanitizeInput(input);
      expect(result).not.toContain('javascript:');
    });

    it('should remove event handlers', () => {
      const input = '<div onclick="alert()">test</div>';
      const result = sanitizeInput(input);
      expect(result).not.toContain('onclick');
    });

    it('should preserve normal text', () => {
      const input = 'Hello world';
      const result = sanitizeInput(input);
      expect(result).toBe('Hello world');
    });
  });

  describe('validateChatInput', () => {
    it('should accept valid input', () => {
      expect(validateChatInput('Hello there')).toBe(true);
    });

    it('should reject empty input', () => {
      expect(validateChatInput('')).toBe(false);
      expect(validateChatInput('   ')).toBe(false);
    });

    it('should reject input longer than 5000 characters', () => {
      const longInput = 'a'.repeat(5001);
      expect(validateChatInput(longInput)).toBe(false);
    });

    it('should reject non-string input', () => {
      expect(validateChatInput(null)).toBe(false);
      expect(validateChatInput(undefined)).toBe(false);
      expect(validateChatInput(123)).toBe(false);
    });
  });

  describe('validateAge', () => {
    it('should accept valid ages', () => {
      expect(validateAge(18)).toBe(true);
      expect(validateAge(25)).toBe(true);
      expect(validateAge(120)).toBe(true);
    });

    it('should reject ages below 17', () => {
      expect(validateAge(16)).toBe(false);
      expect(validateAge(5)).toBe(false);
    });

    it('should reject ages above 120', () => {
      expect(validateAge(121)).toBe(false);
    });
  });

  describe('validateCity', () => {
    it('should accept valid city names', () => {
      expect(validateCity('Mumbai')).toBe(true);
      expect(validateCity('New York')).toBe(true);
    });

    it('should reject empty or short city names', () => {
      expect(validateCity('')).toBe(false);
      expect(validateCity('a')).toBe(false);
    });

    it('should reject city names longer than 100 characters', () => {
      const longCity = 'a'.repeat(101);
      expect(validateCity(longCity)).toBe(false);
    });
  });

  describe('RateLimiter', () => {
    it('should allow requests within limit', () => {
      const limiter = new RateLimiter(3, 1000);
      expect(limiter.isAllowed()).toBe(true);
      expect(limiter.isAllowed()).toBe(true);
      expect(limiter.isAllowed()).toBe(true);
    });

    it('should block requests exceeding limit', () => {
      const limiter = new RateLimiter(2, 1000);
      expect(limiter.isAllowed()).toBe(true);
      expect(limiter.isAllowed()).toBe(true);
      expect(limiter.isAllowed()).toBe(false);
    });

    it('should return remaining requests count', () => {
      const limiter = new RateLimiter(3, 1000);
      limiter.isAllowed();
      expect(limiter.getRemainingRequests()).toBe(2);
    });
  });
});
