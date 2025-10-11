import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../UI/ThemeToggle';

export function Navigation({
  theme,
  colors,
  isScrolled,
  activeSection,
  onToggleTheme,
  onScrollToSection
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['home', 'about', 'highlights', 'contact'];

  const getSectionLabel = (section) =>
    section === 'highlights' ? 'highlights' : section;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? theme === 'dark' ? 'bg-slate-800 shadow-md' : 'bg-white shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled
                ? theme === 'dark' ? 'text-white' : 'text-slate-800'
                : theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Portfolio
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onScrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? isScrolled
                      ? theme === 'dark' ? `${colors.darkText} font-semibold` : `${colors.text} font-semibold`
                      : theme === 'dark' ? 'text-white font-semibold' : 'text-slate-900 font-semibold'
                    : isScrolled
                      ? theme === 'dark' ? `text-slate-300 ${colors.darkHoverText}` : `text-slate-600 ${colors.hoverText}`
                      : theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {getSectionLabel(section)}
              </button>
            ))}

            <ThemeToggle
              theme={theme}
              isScrolled={isScrolled}
              onToggle={onToggleTheme}
            />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle
              theme={theme}
              isScrolled={isScrolled}
              onToggle={onToggleTheme}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? theme === 'dark' ? 'text-white' : 'text-slate-800'
                  : theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden shadow-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onScrollToSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md capitalize ${
                  theme === 'dark'
                    ? `text-slate-200 hover:bg-slate-700 ${colors.darkHoverText}`
                    : `text-slate-700 hover:bg-slate-100 ${colors.hoverText}`
                }`}
              >
                {getSectionLabel(section)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
