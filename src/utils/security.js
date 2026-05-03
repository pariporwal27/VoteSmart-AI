/**
 * Security Utilities
 * Input validation and sanitization for user inputs
 */

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  // Remove script tags and dangerous content
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
};

export const validateChatInput = (input) => {
  if (!input || typeof input !== 'string') return false;
  if (input.trim().length === 0) return false;
  if (input.length > 5000) return false;
  return true;
};

export const validateAge = (age) => {
  const ageNum = parseInt(age, 10);
  return !isNaN(ageNum) && ageNum >= 17 && ageNum <= 120;
};

export const validateCity = (city) => {
  if (!city || typeof city !== 'string') return false;
  if (city.trim().length < 2) return false;
  if (city.length > 100) return false;
  return true;
};

export const sanitizeChatResponse = (response) => {
  if (typeof response !== 'string') return '';
  // Remove potentially harmful content while preserving formatting
  return response
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '');
};

// Rate limiting helper
export class RateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  isAllowed() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    return false;
  }

  getRemainingRequests() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    return Math.max(0, this.maxRequests - this.requests.length);
  }
}
