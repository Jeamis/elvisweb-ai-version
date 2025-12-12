import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    { 
      title: "Maison & Déco", 
      cat: "E-Commerce • WooCommerce", 
      // Image d'intérieur design
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Cabinet Avocats", 
      cat: "Site Vitrine • Corporate", 
      // Bureau moderne / salle de réunion
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Coach Sportif", 
      cat: "Réservation • Blog", 
      // Salle de sport
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Restaurant Bio", 
      cat: "Menu en ligne • Click & Collect", 
      // Restaurant ambiance sombre
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-elvis-blue font-bold tracking-widest text-xs uppercase mb-3 block">Portfolio</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Nos dernières réalisations
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Chaque projet est unique. Nous créons des designs sur-mesure qui reflètent l'excellence de votre activité.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              
              {/* Layout Container for Mockups */}
              <div className="relative mb-8 pr-12 sm:pr-20"> 
                
                {/* Desktop Mockup */}
                <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 transition-transform duration-500 group-hover:-translate-y-2">
                   {/* Browser Bar */}
                   <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-slate-50">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="ml-4 flex-1 h-5 bg-slate-50 rounded-md flex items-center px-3">
                        <div className="h-1.5 bg-slate-200 rounded-full w-1/3"></div>
                      </div>
                   </div>
                   {/* Image */}
                   <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                     <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                     />
                   </div>
                </div>

                {/* Mobile Mockup - Positioned Absolute Right */}
                <div className="absolute -right-0 -bottom-8 z-20 w-[35%] sm:w-[30%] bg-slate-900 rounded-[2rem] p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-[6px] border-slate-900 transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:rotate-[-2deg]">
                    <div className="aspect-[9/19] bg-white rounded-[1.5rem] overflow-hidden relative">
                         <img 
                            src={project.img} 
                            alt="Mobile view" 
                            className="w-full h-full object-cover object-center" 
                         />
                         {/* Notch */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-5 bg-slate-900 rounded-b-xl"></div>
                    </div>
                </div>

              </div>

              {/* Text Content */}
              <div className="pl-2">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-elvis-blue font-medium text-sm">{project.cat}</p>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <button className="px-8 py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-full font-bold transition-all inline-flex items-center gap-2 group">
                Voir plus de projets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
        </div>

      </div>
    </div>
  );
}