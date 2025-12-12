import React from 'react';
import { LayoutTemplate, Smartphone, Search, ShoppingCart, Zap, Lock } from 'lucide-react';

export default function ExpertiseSection() {
  const features = [
    {
      icon: <LayoutTemplate size={24} />,
      title: "Design Sur-mesure",
      description: "Pas de templates vus et revus. Un design unique aligné avec votre marque."
    },
    {
      icon: <Smartphone size={24} />,
      title: "100% Mobile First",
      description: "Une expérience utilisateur fluide sur smartphone, tablette et desktop."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Performant",
      description: "Structure optimisée pour Google. Soyez visible dès le premier jour."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-Commerce",
      description: "Transformez vos visiteurs en acheteurs avec un tunnel de vente optimisé."
    },
    {
      icon: <Zap size={24} />,
      title: "Vitesse Éclair",
      description: "Score Google PageSpeed > 90/100 garanti pour ne perdre aucun client."
    },
    {
      icon: <Lock size={24} />,
      title: "Sécurité Maximale",
      description: "Protection anti-hack, sauvegardes automatiques et certificats SSL."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-elvis-blue font-bold tracking-widest text-xs uppercase mb-3 block">
            NOS EXPERTISES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-slate-600">
            Nous ne livrons pas juste du code. Nous livrons un outil commercial puissant conçu pour votre croissance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 text-elvis-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-elvis-blue group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}