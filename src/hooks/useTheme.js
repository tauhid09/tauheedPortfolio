import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('colorTheme');

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    if (savedColor) {
      setColorTheme(savedColor);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const changeColorTheme = (color) => {
    setColorTheme(color);
    localStorage.setItem('colorTheme', color);
  };

  return { theme, colorTheme, toggleTheme, changeColorTheme };
}
