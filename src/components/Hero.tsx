
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden bg-[#020617]">
      {/* Background Tech Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold text-sm tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-3 animate-ping"></span>
              CURSO ACTIVO: VERANO 2025
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-[900] text-white leading-none tracking-tight">
              Robótica Kids <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 neon-text">
                con CoderZ
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Bienvenido al portal central de recursos. Todo lo necesario para las clases del <span className="text-white font-bold">Prof. Saúl Chávez</span> en un solo lugar.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Student" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#020617] bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  +25
                </div>
              </div>
              <p className="text-sm text-slate-500 font-bold">Estudiantes conectados en vivo</p>
            </div>
          </div>
          
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="relative z-10 glass rounded-[3rem] p-4 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12">
               <div className="relative rounded-[2rem] overflow-hidden">
                 <img 
                   src="./coderz.png" 
                   alt="Robotics Lab" 
                   className="w-full aspect-[4/3] object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass p-5 rounded-2xl border border-white/10">
                       <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">Status Plataforma</p>
                            <h4 className="text-lg font-bold text-white">Servidores CoderZ: OK</h4>
                          </div>
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 border border-green-500/30">
                            <i className="fas fa-check-circle"></i>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Background elements for depth */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
