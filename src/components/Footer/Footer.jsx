import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer({ theme }) {
  // Force dark theme since light mode is disabled
  const isDark = true;
  
  return (
    <footer className={`py-8 transition-colors duration-300 bg-transparent backdrop-blur-[20px] w-[85%] mx-auto rounded-t-[60px] shadow-[1px_2px_15px_-3px_rgba(0,0,0,1)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`${isDark ? 'text-white' : 'text-black'} font-sans`}>
            &copy; 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-slate-500 hover:text-slate-300'
                : 'text-black hover:text-slate-300'
            }`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-slate-500 hover:text-blue-500'
                : 'text-black hover:text-blue-700'
            }`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-slate-500 hover:text-red-600'
                : 'text-black hover:text-red-500'
            }`}>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
