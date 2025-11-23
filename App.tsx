import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import InstallGuide from './components/InstallGuide';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { LOGO_SRC } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
        {/* Navigation Mockup (Simple) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Logo Image */}
                    <img 
                        src={LOGO_SRC} 
                        alt="StudyFlow AI Logo" 
                        className="h-8 w-auto object-contain"
                        onError={(e) => {
                            // Fallback if image not found (optional visual cue or hide)
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        StudyFlow AI
                    </div>
                </div>
                <a 
                    href="https://studyflowbrain.netlify.app" 
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
                >
                    Abrir App
                </a>
            </div>
        </nav>

        <main>
            <Hero />
            <Features />
            <InstallGuide />
            <Testimonials />
            <FAQ />
            <Newsletter />
        </main>
        
        <Footer />
    </div>
  );
}

export default App;