import myself from './images/myself.jpg'

export function About({ theme, colors }) {
  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>About Me</h2>
          <div className={`w-20 h-1 mx-auto ${theme === 'dark' ? colors.darkText.replace('text-', 'bg-') : colors.primary
            }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <img
              src={myself}
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6 scroll-animate">
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
              Hi, I’m <strong>  Mohd Tauheed Ansari </strong>, a passionate <strong>Front-End Developer</strong> who loves building clean, responsive, and user-friendly web applications.
              I specialize in React.js, Tailwind CSS, and modern JavaScript frameworks, and I’m always eager to learn new technologies.
              I enjoy turning creative ideas into real, interactive experiences on the web.
            </p>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
              Currently, I’m exploring full-stack development and working on projects that improve my problem-solving and design skills.
              I’m always open to collaborations, internships, or exciting new challenges!
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>LANGUAGE</h3>
                <ul className={`space-y-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  <li>C</li>
                  <li>C++</li>
                  <li>JAVA</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>SKILLS</h3>
                <ul className={`space-y-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  <li>ReactJS</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript ES6+</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>TOOLS</h3>
                <ul className={`space-y-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  <li>Git & GitHub</li>
                  <li>Vite</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
