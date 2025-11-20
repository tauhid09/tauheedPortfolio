import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact({ theme, colors }) {
  // Force dark theme since light mode is disabled
  const isDark = true;
  
  return (
    <section id="contact" className={`py-20 transition-colors duration-300 bg-transparent mx-4`}>
      <div className=" xl:h-[55vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  shadow-[3px_3px_15px_-3px_rgba(0,0,0,1)] p-10 rounded-[15px] backdrop-blur-[20px]">
        <div className="text-center mb-12 scroll-animate">
          <h2 className={`text-6xl font-bold mb-4 font-sans ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>Get In Touch</h2>
          <div className={`w-20 h-1 mx-auto ${
            isDark ? colors.darkText.replace('text-', 'bg-') : colors.primary
          }`}></div>
          <p className={`mt-8 max-w-2xl mx-auto font-sans ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto scroll-animate">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="https://github.com/tauhid09"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-4 sm:p-6 glass-morphism-card glass-morphism-hover w-40`}
            >
              <Github className="w-10 h-10 sm:w-12 sm:h-12 " />
              <span className="font-medium text-base sm:text-lg font-sans">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohd-tauheed-ansari/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-4 sm:p-6 glass-morphism-card glass-morphism-hover w-40`}
            >
              <Linkedin className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="font-medium text-base sm:text-lg font-sans">LinkedIn</span>
            </a>

            <a
              href="mailto:mohdtauheedansari879@gmail.com"
              className={`flex flex-col items-center gap-3 p-4 sm:p-6 glass-morphism-card glass-morphism-hover w-40`}
            >
              <Mail className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="font-medium text-base sm:text-lg font-sans">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}