import React from 'react';
import { Check, Star, Calculator, FileText } from 'lucide-react';
import { ServicePack } from '../types';

interface WebCreationPageProps {
  onOrder: (pack: ServicePack) => void;
  packs: ServicePack[];
}

export default function WebCreationPage({ onOrder, packs }: WebCreationPageProps) {
  
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Header Specific */}
      <div className="bg-white pb-16 pt-10 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
               Site Web
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                Création de site web <span className="text-elvis-blue">professionnelle</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Choisissez le pack qui correspond à votre activité et bénéficiez d'un site moderne, optimisé et livré clé en main. 
                <br />
                <span className="text-red-500 font-medium text-sm block mt-2">🎯 Nos offres incluent : développement complet, intégration des contenus, référencement de base et accompagnement personnalisé.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex items-center gap-2 bg-elvis-blue hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Calculator size={20} />
                    Calculer mon prix
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView()}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md"
                >
                    <FileText size={20} />
                    Demander un devis
                </button>
            </div>
        </div>
      </div>

      {/* Packs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack) => (
                <div key={pack.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative group">
                    
                    {/* Mockup Container with Gradient */}
                    <div className={`h-56 relative overflow-hidden p-6 flex items-center justify-center ${pack.isPopular ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
                         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                         <img 
                            src={pack.image} 
                            alt={pack.title}
                            className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500"
                         />
                         {pack.isPopular && (
                            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                                Best Seller
                            </div>
                         )}
                    </div>

                    <div className="p-8 flex-1 flex flex-col text-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Création de sites web</span>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{pack.title}</h3>
                        <div className="text-3xl font-extrabold text-elvis-blue mb-6">
                            {pack.price.toLocaleString('fr-FR')} €
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[60px]">
                            {pack.description}
                        </p>

                        <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                             <ul className="space-y-3 text-left">
                                {pack.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>

                        <button 
                            onClick={() => onOrder(pack)}
                            className="w-full bg-elvis-blue hover:bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        >
                            Configurer mon site
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-sm text-slate-500 max-w-4xl mx-auto space-y-2">
            <p className="flex items-center justify-center gap-2">
                💡 Tous nos sites sont développés sous <strong>WordPress</strong>, optimisés pour le <strong>référencement naturel</strong> et livrés avec <strong>formation à la gestion du contenu</strong>.
            </p>
            <p className="flex items-center justify-center gap-2">
                🎯 Elvis Web, partenaire officiel <strong>LWS</strong>, garantit un hébergement rapide, sécurisé et 100% français.
            </p>
        </div>
      </div>
    </div>
  );
}