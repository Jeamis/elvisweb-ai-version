import React from 'react';
import { Calculator, FileText, ArrowRight, Check, Layout, ShoppingBag, Utensils, Hammer, Plane, GraduationCap } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

interface PortfolioPageProps {
  onNavigateContact: () => void;
}

export default function PortfolioPage({ onNavigateContact }: PortfolioPageProps) {
  
  const projects = [
    { 
      title: "Maison & Déco", 
      cat: "E-Commerce • WooCommerce", 
      desc: "Refonte complète UX/UI et migration SEO.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Cabinet Avocats", 
      cat: "Site Vitrine • Corporate", 
      desc: "Site institutionnel pour un cabinet international.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Coach Sportif", 
      cat: "Réservation • Blog", 
      desc: "Système de prise de rdv et espace membre vidéo.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Restaurant Bio", 
      cat: "Menu en ligne • Click & Collect", 
      desc: "Commande en ligne et synchronisation cuisine.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Agence Immobilière", 
      cat: "Listing • Carte Interactive", 
      desc: "Connexion passerelle API et recherche avancée.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    { 
      title: "Startup Tech", 
      cat: "Landing Page • SaaS", 
      desc: "Design moderne animé et optimisation conversion.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const sectors = [
    { icon: Hammer, label: "Bâtiment" },
    { icon: Utensils, label: "Gastronomie" },
    { icon: ShoppingBag, label: "Mode" },
    { icon: Plane, label: "Tourisme" },
    { icon: GraduationCap, label: "Formation" },
    { icon: Layout, label: "Industrie" },
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-white pb-16 pt-10 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
               Nos Réalisations
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                Des projets qui <span className="text-elvis-blue">génèrent des résultats</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Découvrez une sélection de projets conçus pour des artisans, commerçants, marques et indépendants à travers la France.
                Chaque site est unique, pensé pour valoriser l'activité et convertir.
                <br />
                <span className="text-red-500 font-medium text-sm block mt-2">🎯 Plus de 50 projets livrés avec satisfaction et accompagnement complet.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={onNavigateContact}
                  className="flex items-center gap-2 bg-elvis-blue hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <Calculator size={20} />
                    Obtenir un devis gratuit
                </button>
                <button 
                  onClick={onNavigateContact}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md"
                >
                    <FileText size={20} />
                    Me faire rappeler
                </button>
            </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project, idx) => (
                <div key={idx} className="group cursor-pointer">
                    
                    {/* Visual Container - Clean Look */}
                    <div className="relative mb-6 pr-8 sm:pr-14 pt-4">
                         
                         {/* Desktop Mockup */}
                         <div className="relative z-10 w-full bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200 transition-transform duration-500 group-hover:-translate-y-1">
                             {/* Browser Bar */}
                             <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                                 <div className="flex gap-1.5">
                                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                 </div>
                                 <div className="flex-1 bg-slate-50 h-5 rounded-full max-w-[50%]"></div>
                             </div>
                             <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                             </div>
                         </div>

                         {/* Mobile Mockup Overlay */}
                         <div className="absolute -right-0 -bottom-6 z-20 w-[28%] sm:w-[25%] bg-slate-900 rounded-[1.5rem] p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] border-[5px] border-slate-900 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                             <div className="aspect-[9/19] bg-white rounded-[1.2rem] overflow-hidden relative">
                                 <img src={project.img} alt="Mobile" className="w-full h-full object-cover object-center" />
                             </div>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
                        <p className="text-elvis-blue font-bold text-sm">{project.cat}</p>
                    </div>

                </div>
            ))}
        </div>
      </div>

      {/* Sectors Stripe */}
      <div className="bg-white py-16 border-y border-gray-100 mb-0">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="text-lg font-bold text-slate-800 mb-8">Nous travaillons avec tous les secteurs d'activité</h3>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {sectors.map((sector, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 bg-blue-50 text-elvis-blue rounded-2xl flex items-center justify-center text-2xl group-hover:bg-elvis-blue group-hover:text-white transition-all duration-300 shadow-sm">
                            <sector.icon size={28} />
                        </div>
                        <span className="text-sm font-medium text-slate-600">{sector.label}</span>
                    </div>
                ))}
             </div>
             <p className="text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
                Chacun de nos projets est livré clé en main, avec formation à la gestion du site et support technique pendant 1 mois.
                <br/>
                <span className="flex items-center justify-center gap-2 mt-2 font-medium text-green-600">
                    <Check size={16} /> Objectif : un site rapide, beau et qui vous rapporte des clients.
                </span>
             </p>
         </div>
      </div>

      {/* Reuse Components */}
      <TestimonialsSection />
      
      <div className="bg-slate-50 pb-20 pt-10">
        <CTASection />
      </div>

    </div>
  );
}