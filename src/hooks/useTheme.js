import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');
  const [colorTheme, setColorTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('colorTheme');

    if (savedTheme) {
      // Always set theme to dark regardless of saved value
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      // Ensure dark class is added if no saved theme
      document.documentElement.classList.add('dark');
    }
    if (savedColor) {
      setColorTheme(savedColor);
    }
  }, []);

  // Remove toggle functionality - always return dark theme
  const toggleTheme = () => {
    // Do nothing - light mode is disabled
  };

  const changeColorTheme = (color) => {
    setColorTheme(color);
    localStorage.setItem('colorTheme', color);
  };

  return { theme, colorTheme, toggleTheme, changeColorTheme };
}