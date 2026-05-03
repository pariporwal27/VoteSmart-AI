/**
 * Error Handling Utilities
 * Graceful error handling and user-friendly messaging
 */
import React from 'react';

export class APIError extends Error {
  constructor(message, statusCode, originalError) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.originalError = originalError;
  }
}

export const handleNetworkError = (error) => {
  if (!navigator.onLine) {
    return {
      message: 'No internet connection. Please check your network.',
      type: 'offline',
      retryable: true,
    };
  }

  if (error.message === 'Failed to fetch' || error.message.includes('network')) {
    return {
      message: 'Network error. Please try again.',
      type: 'network',
      retryable: true,
    };
  }

  if (error.code === 'TIMEOUT') {
    return {
      message: 'Request timed out. Please try again.',
      type: 'timeout',
      retryable: true,
    };
  }

  return {
    message: 'An unexpected error occurred.',
    type: 'unknown',
    retryable: false,
  };
};

export const handleAPIError = (error, context = '') => {
  const messages = {
    400: 'Invalid request. Please check your input.',
    401: 'Authentication failed. Please refresh and try again.',
    403: 'Access denied.',
    404: 'Resource not found.',
    429: 'Too many requests. Please wait a moment and try again.',
    500: 'Server error. Please try again later.',
    503: 'Service unavailable. Please try again later.',
  };

  const statusCode = error.status || error.statusCode || 500;
  const message = messages[statusCode] || 'An error occurred. Please try again.';

  return {
    message,
    statusCode,
    context,
    timestamp: new Date().toISOString(),
  };
};

export const createErrorBoundary = (Component) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h2 className="text-red-800 dark:text-red-400 font-semibold mb-2">
              Something went wrong
            </h2>
            <p className="text-red-700 dark:text-red-500 text-sm">
              {this.state.error?.message || 'An unexpected error occurred.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        );
      }

      return <Component {...this.props} />;
    }
  };
};

export const logError = (error, context) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    message: error.message,
    context,
    stack: error.stack,
    userAgent: navigator.userAgent,
    url: window.location.href,
  };

  // In production, send to error tracking service (e.g., Sentry)
  console.error('[Error Log]', errorLog);
  
  return errorLog;
};
