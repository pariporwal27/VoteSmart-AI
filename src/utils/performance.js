/**
 * Performance optimizations
 * Image optimization, lazy loading utilities
 */

export const optimizeImage = (src, alt, width, height) => {
  return {
    src,
    alt,
    width,
    height,
    loading: 'lazy',
    decoding: 'async',
  };
};

export const prefetchResource = (href, as = 'script') => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};

export const preloadResource = (href, as = 'script') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};

export const observeLazyLoad = (element, callback) => {
  if (!('IntersectionObserver' in window)) {
    callback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(element);
};
