import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl bg-surface/50 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;