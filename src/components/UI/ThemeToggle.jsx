import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, isScrolled, onToggle, className = '' }) {
  return (
    <button
      onClick={onToggle}
      className={`transition-colors rounded-full p-2 focus:outline-none ${className}`}
      aria-label="Toggle dark/light mode"
    >
      {theme === 'dark' ? (
        // Moon icon for dark mode
        <svg width="24" height="24" fill="none" stroke="currentColor" className="text-white">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      ) : (
        // Sun icon for light mode
        <svg width="24" height="24" fill="none" stroke="currentColor" className="text-orange-600">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}
