import { ExternalLink, Github } from 'lucide-react';

export function ProjectCard({ project, theme, colors }) {
  // Force dark theme since light mode is disabled
  const isDark = true;
  
  return (
    <div
      className={`glass-morphism-card glass-morphism-hover transform hover:-translate-y-2 group scroll-animate`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className={`text-xl font-bold mb-2 font-sans ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>{project.title}</h4>
        <p className={`mb-4 font-sans ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-sm rounded-full ${
                isDark
                  ? colors.darkTag
                  : colors.tag
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center font-semibold ${
            isDark
              ? `${colors.darkText} hover:${colors.darkText.replace('400', '300')}`
              : `${colors.text} ${colors.hover.replace('bg-', 'hover:text-').replace('hover:', '')}`
          }`}
        >
          View Project <ExternalLink className="w-4 h-4 ml-1" />
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center ml-4 font-semibold ${
              isDark
                ? `${colors.darkText} hover:text-gray-400`
                : `${colors.text} hover:text-gray-700`
            }`}
            title="View on GitHub"
          >
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}