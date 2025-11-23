import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { APP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-300">Nuevo: Tutor IA Integrado</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Domina tu Enfoque. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Sube de Nivel tu Aprendizaje.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Evita distracciones, organiza tareas y sube en la clasificación de estudiantes. 
          Experimenta la app de productividad que se siente como un juego.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={APP_URL}
            className="group relative px-8 py-4 bg-white text-background font-bold rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            Empieza Gratis Ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Floating UI Elements Mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="relative bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-float">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                         <div className="h-4 bg-white/10 rounded w-3/4"></div>
                         <div className="h-4 bg-white/10 rounded w-1/2"></div>
                         <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mt-4">
                            <p className="text-primary text-sm font-semibold mb-1">Tutor IA</p>
                            <p className="text-gray-300 text-sm">"La técnica Pomodoro usa intervalos de 25 minutos. ¿Te gustaría empezar una sesión para 'Biología 101'?"</p>
                         </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-32 h-32 rounded-full border-4 border-secondary flex items-center justify-center">
                             <div className="text-2xl font-bold font-mono">25:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;