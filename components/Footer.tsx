import React from 'react';
import { SOCIAL_LINKS, LOGO_SRC, SHOW_SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img 
                src={LOGO_SRC} 
                alt="StudyFlow AI Logo" 
                className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-white">StudyFlow AI</span>
          </div>
          
          {SHOW_SOCIALS && (
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center md:text-left text-sm text-gray-600 flex flex-col md:flex-row justify-between border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} StudyFlow AI. Todos los derechos reservados.</p>
          <div className="flex gap-4 justify-center mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-400">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;