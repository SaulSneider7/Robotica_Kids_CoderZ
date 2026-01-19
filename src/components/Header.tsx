
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = "51925640929";
  const groupLink = "https://chat.whatsapp.com/LBIZh3Dnf3MJp9NbC1r7Sh";

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Horario', href: '#horario' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-[#020617] border-b border-blue-500/30 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative group cursor-pointer">
                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                 <div className="relative bg-white px-4 py-1.5 rounded-lg flex items-center">
                    <span className="text-[#004b93] font-[900] text-2xl tracking-tighter">SENATI</span>
                 </div>
              </div>
              <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>
              <span className="text-slate-400 font-bold text-[10px] hidden sm:block uppercase tracking-[0.3em] neon-text">
                Robótica Academy
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-300 hover:text-blue-400 font-bold text-xs transition-all hover:neon-text tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black rounded-full text-[10px] shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all uppercase tracking-widest"
              >
                Asistencia Directa
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
               <button 
                onClick={toggleMenu}
                className={`p-3 rounded-xl transition-all duration-300 focus:outline-none ${
                  isMenuOpen ? 'bg-blue-600 text-white rotate-90' : 'bg-slate-800 text-slate-300'
                }`}
                aria-label="Abrir menú"
               >
                  <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Re-designed to be on TOP of everything */}
      <div 
        className={`fixed inset-0 z-[250] bg-[#020617] md:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>

        <div className="flex flex-col items-center space-y-10 w-full px-10 relative z-10">
          <div className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={toggleMenu}
                className="group w-full text-center py-4 text-4xl font-black text-white hover:text-blue-400 transition-all uppercase tracking-tighter italic border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="w-full max-w-xs pt-8">
            <a 
              href={groupLink} 
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-900/40 uppercase tracking-widest italic text-sm"
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              Soporte WhatsApp
            </a>
          </div>

          <div className="flex space-x-8 pt-8">
            <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA2NjhmMDEtNTg0ZS00NDE5LWJiZWYtMDE1YmQ4NGU5MDIy%40thread.v2/0?context=%7b%22Tid%22%3a%22b4a40545-7779-4b38-aff7-1f1738f80840%22%2c%22Oid%22%3a%228f8ed7f3-119f-4166-9bac-3c857da41764%22%7d" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all border border-white/5">
              <i className="fa fa-video text-2xl"></i>
            </a>
            <a href={`${groupLink}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#25D366] transition-all border border-white/5">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://drive.google.com/drive/folders/1mju6MU6fzv075rhAxnwSBWYheWvrn1jS?usp=sharing" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 transition-all border border-white/5">
              <i className="fab fa-google-drive text-2xl"></i>
            </a>
          </div>
        </div>

        <p className="absolute bottom-10 text-[10px] text-slate-600 font-bold tracking-[0.4em] uppercase">
          Senati Academy • Verano 2025
        </p>
      </div>
    </>
  );
};

export default Header;
