import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const useAccessibility = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  const [fontSize, setFontSize] = useState(100); // 100 = normal size
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem('accessibility-preferences');
    if (savedPreferences) {
      const { fontSize: savedFontSize, highContrast: savedContrast, darkMode: savedDarkMode } = JSON.parse(savedPreferences);
      setFontSize(savedFontSize);
      setHighContrast(savedContrast);
      setDarkMode(savedDarkMode);
    }
  }, []);

  const savePreferences = (newPreferences) => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(newPreferences));
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.min(prev + 10, 150);
      savePreferences({ fontSize: newSize, highContrast, darkMode });
      return newSize;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.max(prev - 10, 70);
      savePreferences({ fontSize: newSize, highContrast, darkMode });
      return newSize;
    });
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const newValue = !prev;
      savePreferences({ fontSize, highContrast: newValue, darkMode });
      return newValue;
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      savePreferences({ fontSize, highContrast, darkMode: newValue });
      return newValue;
    });
  };

  return {
    fontSize,
    highContrast,
    darkMode,
    prefersReducedMotion,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleDarkMode,
  };
};

export default useAccessibility;
