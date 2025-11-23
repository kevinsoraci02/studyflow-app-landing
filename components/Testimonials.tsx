import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Lo que dice la comunidad</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-surface border border-white/5 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
              <p className="text-gray-300 mb-6 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;