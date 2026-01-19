
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

const App: React.FC = () => {
  const whatsappNumber = "51925640929";
  const groupLink = "https://chat.whatsapp.com/LBIZh3Dnf3MJp9NbC1r7Sh";

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200">
      <Header />
      
      <main className="flex-grow pt-0 md:pt-0">
        <Hero />
        
        <div id="recursos" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left side: Resources (8 cols) */}
            <div className="lg:col-span-8 space-y-16">
              <section>
                <div className="flex items-center space-x-4 mb-10">
                  <div className="h-10 w-2 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase italic">
                    Centro de Comando
                  </h2>
                </div>
                <QuickLinks />
              </section>

              <section id="horario">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="h-10 w-2 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase italic">
                    Plan de Operaciones
                  </h2>
                </div>
                <div className="relative">
                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50"></div>
                   <div className="relative">
                      <Schedule />
                   </div>
                </div>
              </section>
            </div>

            {/* Right side: Communication & Alerts (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Communication Box */}
                <div className="glass rounded-[2.5rem] p-8 border border-slate-700/50 relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <i className="fas fa-headset text-blue-400 mr-3"></i>
                    Soporte para Padres
                  </h3>
                  
                  <div className="space-y-4">
                    <a 
                      href={groupLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
                    >
                      <i className="fab fa-whatsapp text-2xl mr-3 group-hover:rotate-12 transition-transform"></i>
                      WhatsApp Grupo
                    </a>
                    
                    <a 
                      href={`https://wa.me/${whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-full py-4 border-2 border-slate-700 text-slate-300 font-bold rounded-2xl hover:border-blue-500 hover:text-blue-400 transition-all active:scale-95"
                    >
                      <i className="fas fa-comment-dots text-xl mr-3 group-hover:-translate-y-1 transition-transform"></i>
                      Prof. Saúl Directo
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                    <p className="text-[11px] text-slate-400 leading-relaxed italic uppercase tracking-wider">
                      "Utiliza estos canales para dudas sobre el acceso a CoderZ o Microsoft Teams."
                    </p>
                  </div>
                </div>

                {/* Status Card */}
                <div className="bg-gradient-to-br from-[#464eb8]/20 to-blue-600/20 rounded-[2.5rem] p-8 border border-[#464eb8]/30 relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 opacity-10">
                    <i className="fas fa-users-rectangle text-9xl text-white"></i>
                  </div>
                  <h4 className="text-white font-bold mb-3 flex items-center uppercase text-xs tracking-widest">
                    <i className="fas fa-bolt text-yellow-400 mr-2"></i>
                    Próxima Sesión Teams
                  </h4>
                  <div className="space-y-2 relative z-10">
                    <p className="text-4xl font-black text-white italic">09:00 AM</p>
                    <p className="text-blue-300 font-bold text-xs uppercase tracking-tighter">Preparar micrófonos y cámaras</p>
                  </div>
                </div>

                {/* Video Info */}
                <div className="glass rounded-[2rem] p-6 border border-slate-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                      <i className="fas fa-circle text-[8px] animate-pulse"></i>
                    </div>
                    <span className="font-black text-white text-[10px] uppercase tracking-widest">Grabaciones Teams</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
                    Si el estudiante no pudo asistir a la sesión de Microsoft Teams, la grabación estará disponible en el Drive al finalizar el día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
