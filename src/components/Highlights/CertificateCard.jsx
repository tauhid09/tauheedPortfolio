export function CertificateCard({ certificate, theme, colors }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden shadow-md transition duration-300 scroll-animate flex flex-col
        hover:scale-[1.03] hover:shadow-2xl
        ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}
      `}
      style={{ willChange: 'transform' }}
    >
      {certificate.image && (
        <div className="flex justify-center items-center w-full h-40 bg-transparent">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="object-contain h-32"
            style={{ borderRadius: '5px' }}
          />
        </div>
      )}
      <div className="flex-1 px-6 pb-6 pt-6 flex flex-col">
        <h4 className={`font-bold text-lg mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>{certificate.title}</h4>
        <p className={`text-sm mb-1 ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>{certificate.issuer}</p>
        <p className={`text-xs ${
          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
        }`}>{certificate.date}</p>
      </div>
    </div>
  );
}
