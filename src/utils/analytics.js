/**
 * Google Analytics Integration
 * Tracks user behavior and events
 */

export const initializeGoogleAnalytics = (measurementId) => {
  if (!measurementId) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  window.gtag = gtag;
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (!window.gtag) return;
  window.gtag('event', eventName, eventParams);
};

export const trackPageView = (pageName, pageLocation) => {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_title: pageName,
    page_location: pageLocation,
  });
};

export const trackUserInteraction = (action, category, label) => {
  if (!window.gtag) return;
  window.gtag('event', 'interaction', {
    event_category: category,
    event_label: label,
    event_action: action,
  });
};

export const trackFormSubmission = (formName, status = 'completed') => {
  if (!window.gtag) return;
  window.gtag('event', 'form_submission', {
    form_name: formName,
    submission_status: status,
  });
};

export const trackChatMessage = (messageType = 'user') => {
  if (!window.gtag) return;
  window.gtag('event', 'chat_interaction', {
    message_type: messageType,
  });
};
