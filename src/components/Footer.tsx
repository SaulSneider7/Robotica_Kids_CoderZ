
import React from 'react';

const Footer: React.FC = () => {
  const whatsappNumber = "51925640929";
  const groupLink = "https://chat.whatsapp.com/LBIZh3Dnf3MJp9NbC1r7Sh";
  const devWebsite = "https://tu-sitioweb.com";

  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          
          {/* Logo y Descripción */}
          <div className="md:col-span-4 text-center md:text-left">
            <div className="relative inline-block mb-6 group">
               <div className="absolute -inset-1 bg-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
               <div className="relative bg-white px-4 py-1.5 rounded-lg">
                  <span className="text-[#004b93] font-black text-xl tracking-tighter">SENATI</span>
               </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Portal exclusivo para padres y alumnos de Vacaciones Tecnológicas. 
              Fomentando la innovación y el desarrollo STEM desde temprana edad a través de la robótica educativa.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={groupLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:bg-white/5 transition-all">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="https://www.facebook.com/SenatiOficial" className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-all">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>

          {/* Tarjeta del Profesor */}
          <div className="md:col-span-4">
            <div className="glass p-8 rounded-[2.5rem] border border-blue-500/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-12 -mt-12 transition-all group-hover:bg-blue-600/10"></div>
              
              <div className="relative w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500 p-1 bg-slate-800">
                <img 
                  src="./SaulCTC.jpg" 
                  alt="Prof. Saúl Chávez" 
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              <h4 className="text-white font-black text-xl">Prof. Saúl Chávez</h4>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-6">Facilitador de Robótica Kids</p>
              
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all text-sm"
                >
                  <i className="fab fa-whatsapp mr-2 text-lg"></i>
                  Chat Directo
                </a>
                <a 
                  href={groupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 bg-white/5 text-slate-300 font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Unirse al Grupo
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-4 text-center md:text-right">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center justify-center md:justify-end">
              <span className="w-8 h-px bg-blue-500 mr-3 hidden md:block"></span>
              Recursos del Curso
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="https://senati.edu.pe" target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-tighter">Portal Oficial SENATI</a></li>
              <li><a href="https://play.gocoderz.com/" target="_blank" className="text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-tighter">Plataforma CoderZ</a></li>
              <li><a href={groupLink} target="_blank" className="text-slate-500 hover:text-[#25D366] transition-colors uppercase tracking-tighter">Grupo de WhatsApp</a></li>
              <li><a href="#horario" className="text-slate-500 hover:text-yellow-500 transition-colors uppercase tracking-tighter">Horario de Sesiones</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom / Developer Credit */}
        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="text-slate-600">
            © {new Date().getFullYear()} SENATI - PROGRAMA DE VACACIONES TECNOLÓGICAS
          </div>
          
          <div className="flex items-center bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/10">
            <span className="text-slate-500 mr-2">Desarrollado por</span>
            <a 
              href={devWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-white transition-colors hover:neon-text"
            >
              Saul Sneider
            </a>
          </div>
          
          <div className="flex space-x-6 text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
