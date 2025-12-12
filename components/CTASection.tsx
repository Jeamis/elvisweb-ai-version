import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const scrollToPacks = () => {
    const element = document.getElementById('packs-web');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-elvis-blue rounded-3xl overflow-hidden px-6 py-16 md:py-24 text-center shadow-2xl shadow-blue-500/30">
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M25 0 L50 14.5 L50 43.4 L25 58 L0 43.4 L0 14.5 Z" stroke="white" fill="none" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)"/>
             </svg>
          </div>
          
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 font-medium leading-relaxed">
              Rejoignez les 350+ entrepreneurs qui ont digitalisé leur activité avec succès.
            </p>
            <button 
              onClick={scrollToPacks}
              className="bg-white text-elvis-blue hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}