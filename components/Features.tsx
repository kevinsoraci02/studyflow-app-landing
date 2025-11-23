import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Por qué los estudiantes aman StudyFlow</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Todo lo que necesitas para organizarte, mantener la motivación y estar a la vanguardia.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id}
              className="group p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;