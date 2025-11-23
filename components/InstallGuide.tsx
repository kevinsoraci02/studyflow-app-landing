import React, { useState } from 'react';
import { Smartphone, Monitor, Share, PlusSquare, MoreVertical, Download } from 'lucide-react';

const InstallGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <section className="py-24 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Instalar App</h2>
          <p className="text-gray-400">Obtén la experiencia completa en cualquier dispositivo. Sin App Store.</p>
        </div>

        <div className="bg-background border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'mobile' ? 'bg-white/5 text-secondary' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Smartphone className="w-5 h-5" /> iOS y Android
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex-1 py-4 text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'desktop' ? 'bg-white/5 text-primary' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Monitor className="w-5 h-5" /> Escritorio (Chrome/Edge)
            </button>
          </div>

          <div className="p-8 md:p-12">
            {activeTab === 'mobile' ? (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Abrir en Navegador</h4>
                    <p className="text-sm text-gray-400">Visita <span className="text-white font-mono bg-white/10 px-1 rounded">studyflowbrain.netlify.app</span> en Safari (iOS) o Chrome (Android).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Abrir Menú de Compartir</h4>
                    <p className="text-sm text-gray-400 mb-2">
                        iOS: Toca el icono <Share className="w-4 h-4 inline mx-1" /> Compartir en la parte inferior.<br/>
                        Android: Toca los tres puntos <MoreVertical className="w-4 h-4 inline mx-1" /> en la esquina superior derecha.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Añadir a Pantalla de Inicio</h4>
                    <p className="text-sm text-gray-400">Desplázate y toca <span className="font-semibold text-white">"Añadir a Pantalla de Inicio"</span> <PlusSquare className="w-4 h-4 inline mx-1"/>. Confirma tocando "Añadir".</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                 <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Navegar al Sitio</h4>
                    <p className="text-sm text-gray-400">Abre la aplicación en Google Chrome o Microsoft Edge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Buscar Icono de Instalación</h4>
                    <p className="text-sm text-gray-400">A la derecha de la barra de direcciones, busca un pequeño icono de instalación <Download className="w-4 h-4 inline mx-1"/>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Instalar Aplicación</h4>
                    <p className="text-sm text-gray-400">Haz clic en instalar. La app se abrirá en su propia ventana y aparecerá en tu lista de aplicaciones.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;