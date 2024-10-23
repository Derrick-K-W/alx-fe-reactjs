// src/hooks/useAuth.js

import { useState, useEffect } from 'react';

// Simulated authentication function
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking the auth status (for example, from local storage or API)
    const userLoggedIn = localStorage.getItem('isAuthenticated');
    if (userLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
