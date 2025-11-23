import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Helper function to encode data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !feedback) return;

    setStatus('submitting');

    // Submit data to Netlify via AJAX
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", email, feedback })
    })
      .then(() => {
        setStatus('success');
        setEmail('');
        setFeedback('');
        // Reset status after 5 seconds so user can submit again if needed
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setStatus('error');
      });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface to-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">¡Suscríbete a las novedades y comparte ideas!</h2>
          <p className="text-gray-400">Ayúdanos a construir la mejor herramienta de estudio. Escuchamos cada sugerencia.</p>
        </div>

        <form 
            onSubmit={handleSubmit} 
            className="bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-2xl"
            data-netlify="true"
            name="feedback"
        >
          {/* Netlify hidden field for form identification */}
          <input type="hidden" name="form-name" value="feedback" />

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@universidad.edu"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-300 mb-2">Tu Opinión / Solicitud de Funciones</label>
              <textarea
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Me gustaría que la app tuviera..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                 <span>Enviando...</span>
              ) : status === 'success' ? (
                 <span>¡Enviado con Éxito!</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Opinión
                </>
              )}
            </button>
            
            {status === 'error' && (
                <p className="text-red-400 text-center text-sm">Hubo un error al enviar. Por favor intenta de nuevo.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;