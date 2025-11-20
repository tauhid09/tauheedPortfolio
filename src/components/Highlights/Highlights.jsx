import { ProjectCard } from './ProjectCard';
import { CertificateCard } from './CertificateCard';
import { Education } from './Education';
import CircularGallery from './CircularGallery'
export function Highlights({ theme, colors, projects, certificates, education, achievements }) {
  // Force dark theme since light mode is disabled
  const isDark = true;

  return (
    <section id="highlights" className={`py-20 transition-colors duration-300 bg-transparent mx-4 w-[95%] shadow-[3px_3px_15px_-3px_rgba(0,0,0,1)] p-10 rounded-[15px] backdrop-blur-[20px] `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className={`text-4xl font-bold mb-4 font-sans ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Highlights</h2>
          <div className={`w-20 h-1 mx-auto ${isDark ? colors.darkText.replace('text-', 'bg-') : colors.primary
            }`}></div>
        </div>

        <Education theme={theme} colors={colors} education={education} />

        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate font-sans ${isDark ? 'text-white' : 'text-slate-900'
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
          <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate font-sans ${isDark ? 'text-white' : 'text-slate-900'
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

        <div style={{ width: '100%', height: '500px', position: 'relative', overflow: 'hidden' }}>
          <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.04} />
        </div>
      </div>
    </section>
  );
}