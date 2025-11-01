import { useEffect, useState } from 'react';

// Simple hash-based router hook
export const useHashRouter = () => {
  const [route, setRoute] = useState(window.location.hash || '#/pricing');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/pricing');
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route
    if (!window.location.hash) {
      window.location.hash = '#/pricing';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  return { route, navigate };
};
