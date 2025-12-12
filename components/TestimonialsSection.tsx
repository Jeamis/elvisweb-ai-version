import React from 'react';
import { Star, MoreVertical } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Karel Abiti",
      initial: "K",
      color: "bg-blue-600",
      rating: 5,
      date: "il y a 2 semaines",
      text: "Équipe très professionnelle et réactive. Ils ont parfaitement compris ce que je voulais et ont même fait plus que ce que j'attendais. Le site est propre, moderne et fonctionnel. Travail sérieux et rapide. Je recommande sans hésiter !",
      tag: "NOUVEAU"
    },
    {
      name: "Camille Josselin",
      initial: "C",
      color: "bg-blue-700",
      rating: 5,
      date: "il y a 3 semaines",
      text: "Ils ont fait preuve d'une grande patience et d'un réel professionnalisme tout au long de mon projet. Leur expertise a été précieuse et je les remercie sincèrement pour l'excellent travail réalisé sur mon plugin.",
      tag: "NOUVEAU"
    },
    {
      name: "DENIS GNAMAN",
      initial: "D",
      color: "bg-orange-700",
      rating: 4,
      date: "il y a 2 mois",
      text: "Très bonne expérience tant au niveau de la compréhension des besoins, de l'écoute et de la réalisation de mon site."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-2xl font-bold text-slate-500">Google</span>
             <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
             </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            La satisfaction de nos clients est notre meilleure publicité.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-medium text-lg`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      Avis de <span className="font-bold flex"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
                    </p>
                  </div>
                </div>
                <MoreVertical size={16} className="text-slate-400 cursor-pointer" />
              </div>

              {/* Stars & Meta */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                   ))}
                </div>
                <span className="text-xs text-slate-500">{review.date}</span>
                {review.tag && (
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    {review.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center text-sm font-medium text-elvis-blue hover:text-blue-700 underline underline-offset-4">
                Voir tous les avis sur Google Maps
            </a>
        </div>

      </div>
    </section>
  );
}