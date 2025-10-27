import React from 'react';

export function Education({ theme, colors, education }) {
  return (
    <div className="mb-16">
      <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}>Education</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className={`absolute left-4 top-0 h-full w-0.5 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
        } md:left-1/2 md:-translate-x-1/2`}></div>
        
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="mb-12 flex flex-col md:flex-row items-start md:items-center"
          >
            {/* Timeline dot */}
            <div className={`absolute left-2.5 w-3 h-3 rounded-full md:left-1/2 md:-translate-x-1/2 md:w-4 md:h-4 ${
              theme === 'dark' ? colors.darkPrimary : colors.primary
            }`}></div>
            
            {/* Content */}
            <div className={`ml-8 mr-4 md:ml-0 md:mr-0 md:w-5/12 p-4 md:p-6 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-white'
            } ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}`}>
              <span className={`text-xs md:text-sm font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full ${
                theme === 'dark' ? `${colors.darkPrimary} text-white` : `${colors.primary} text-white`
              }`}>{edu.year}</span>
              <h4 className={`text-lg md:text-xl font-bold mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{edu.title}</h4>
              <p className={`mt-1 text-sm md:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}