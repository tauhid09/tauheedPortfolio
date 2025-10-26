import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero({ theme, colors, onScrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-transparent"
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
            I'm Tauheed
          </h1>
          <p className={`font-mono font-semibold text-xl sm:text-2xl mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-slate-600'
            }`}>
            Commit to growth. Push to success
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => onScrollToSection('highlights')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${theme === 'dark'
                ? `text-white ${colors.darkPrimary} ${colors.darkHover}`
                : `text-white ${colors.primary} ${colors.hover}`
                }`}
            >
              View My Work
            </button>
            <button
              onClick={() => onScrollToSection('contact')}
              className={`px-8 py-3 rounded-lg font-semibold text-white hover:transition-all transform hover:scale-105 shadow-lg ${theme === 'dark' ? 'bg-red-600 hover:bg-red-700' : 'bg-red-700 hover:bg-red-600'
                }`}
            >
              Get In Touch
            </button>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1BOOw8T7xaZwZDHbGSB71dSjIOFfNJWqx/view?usp=drive_link'
              className={`px-8 py-3 text-white rounded-lg font-semibold hover:transition-all transform hover:scale-105 shadow-lg ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700 ' : 'bg-green-700 hover:bg-green-600'
                } inline-block`}
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a target='_blank' href="https://github.com/tauhid09" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-500' : 'text-slate-900 hover:text-gray-700'
              }`}>
              <Github className="w-10 h-10" />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/mohd-tauheed-ansari/" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-blue-600' : 'text-slate-900 hover:text-blue-700'
              }`}>
              <Linkedin className="w-10 h-10" />
            </a>
            <a href='mailto:mohdtauheedansari479@gmail.com' className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-red-600' : 'text-slate-900 hover:text-red-700'
              }`}>
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
