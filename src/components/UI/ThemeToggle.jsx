import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, isScrolled, onToggle, className = '' }) {
  // Render only the moon icon for dark mode since light mode is disabled
  return (
    <div className={`transition-colors rounded-full p-2 ${className}`} aria-label="Dark mode only">
      {/* Moon icon for dark mode */}
      <svg width="24" height="24" fill="none" stroke="currentColor" className="text-white">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </div>
  );
}
