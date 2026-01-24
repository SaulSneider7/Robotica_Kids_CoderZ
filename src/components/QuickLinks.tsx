
import React from 'react';

const QuickLinks: React.FC = () => {
  const teamsLink = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA2NjhmMDEtNTg0ZS00NDE5LWJiZWYtMDE1YmQ4NGU5MDIy%40thread.v2/0?context=%7b%22Tid%22%3a%22b4a40545-7779-4b38-aff7-1f1738f80840%22%2c%22Oid%22%3a%228f8ed7f3-119f-4166-9bac-3c857da41764%22%7d"; 
  const driveLink = "https://drive.google.com/drive/folders/1mju6MU6fzv075rhAxnwSBWYheWvrn1jS?usp=sharing";
  const coderzLink = "https://play.gocoderz.com/";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* MICROSOFT TEAMS / LIVE CLASS - UPDATED ICON TO ZOOM STYLE */}
      <a 
        href={teamsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#1e293b]/40 border border-slate-700/50 p-8 rounded-[2.5rem] hover:bg-blue-600/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <i className="fas fa-video text-7xl text-white"></i>
        </div>
        <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg border border-blue-400/30">
          <i className="fas fa-video text-2xl"></i>
        </div>
        <h3 className="text-2xl font-black text-white mb-2 italic">Microsoft Teams</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">Únete a la videollamada interactiva en vivo por Teams.</p>
        <div className="flex items-center text-blue-400 font-black text-xs tracking-widest">
          INGRESAR AHORA
          <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
        </div>
      </a>

      {/* CODERZ PLATFORM */}
      <a 
        href={coderzLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#1e293b]/40 border border-slate-700/50 p-8 rounded-[2.5rem] hover:bg-indigo-600/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <i className="fas fa-laptop-code text-7xl text-white"></i>
        </div>
        <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg border border-indigo-500/30">
          <i className="fas fa-robot text-2xl"></i>
        </div>
        <h3 className="text-2xl font-black text-white mb-2 italic">Entrar a CoderZ</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">Inicia tu misión y controla tu robot en el entorno virtual.</p>
        <div className="flex items-center text-indigo-400 font-black text-xs tracking-widest">
          ABRIR CODERZ
          <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
        </div>
      </a>

      {/* DRIVE RECORDINGS */}
      <a 
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#1e293b]/40 border border-slate-700/50 p-8 rounded-[2.5rem] hover:bg-orange-600/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <i className="fab fa-google-drive text-7xl text-white"></i>
        </div>
        <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg border border-orange-500/30">
          <i className="fab fa-google-drive text-2xl"></i>
        </div>
        <h3 className="text-2xl font-black text-white mb-2 italic">Grabaciones</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">Revisa las sesiones grabadas organizadas por fecha.</p>
        <div className="flex items-center text-orange-400 font-black text-xs tracking-widest">
          ACCEDER AL DRIVE
          <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
        </div>
      </a>
    </div>
  );
};

export default QuickLinks;
