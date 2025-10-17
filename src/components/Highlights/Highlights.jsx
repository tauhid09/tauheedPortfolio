import { ProjectCard } from './ProjectCard';
import { CertificateCard } from './CertificateCard';
// import {Education} from './Eduction';

export function Highlights({ theme, colors, projects, certificates }) {
  return (
    <section id="highlights" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Highlights</h2>
          <div className={`w-20 h-1 mx-auto ${
            theme === 'dark' ? colors.darkText.replace('text-', 'bg-') : colors.primary
          }`}></div>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                theme={theme}
                colors={colors}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                certificate={cert}
                theme={theme}
                colors={colors}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
