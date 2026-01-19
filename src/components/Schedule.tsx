
import React from 'react';

const Schedule: React.FC = () => {
  const sessions = [
    { day: 'Martes', time: '09:00 - 12:00', icon: 'fas fa-rocket', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
    { day: 'Jueves', time: '09:00 - 12:00', icon: 'fas fa-microchip', color: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/5' },
    { day: 'Sábado', time: '09:00 - 12:00', icon: 'fas fa-robot', color: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {sessions.map((session, idx) => (
        <div 
          key={idx} 
          className={`relative overflow-hidden ${session.bg} border-2 ${session.border} p-8 rounded-[2rem] group hover:scale-[1.02] transition-all`}
        >
          <div className="flex flex-col items-center text-center">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${session.color} bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all`}>
              <i className={`${session.icon} text-2xl`}></i>
            </div>
            <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">{session.day}</h4>
            <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-sm font-bold text-slate-300">
              {session.time}
            </div>
            <p className="text-[10px] font-black text-slate-500 mt-6 tracking-[0.2em] uppercase">Sesión de Verano</p>
          </div>
          
          {/* Subtle line indicator */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${session.color.split('-')[1]}-500 to-transparent opacity-50`}></div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
