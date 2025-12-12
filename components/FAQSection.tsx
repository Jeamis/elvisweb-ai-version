import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Le paiement en plusieurs fois est-il possible ?",
      answer: "Absolument. Nous savons que la trésorerie est importante. Vous pouvez régler votre site en 2 fois sans frais (un acompte au démarrage, le solde à la livraison). Pour les packs plus importants, des facilités sur mesure sont possibles."
    },
    {
      question: "Suis-je propriétaire de mon site web ?",
      answer: "Oui, à 100%. Contrairement à certaines agences ou plateformes (Wix, Shopify) où vous louez votre site, chez Elvis Web, tout ce que nous créons vous appartient. Vous avez accès à tous les fichiers et à l'administration."
    },
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "Pour un Pack Vitrine Pro, comptez environ 7 à 10 jours ouvrés une fois que nous avons tous vos éléments (textes, logo). Pour un E-commerce, le délai est généralement de 15 à 20 jours. Une option 'Urgence 72h' est disponible sur devis."
    },
    {
      question: "Le référencement (SEO) est-il inclus ?",
      answer: "Oui. Tous nos sites sont livrés avec une structure optimisée pour Google (balises Hn, méta-descriptions, sitemap, rapidité). Pour aller plus loin et viser la 1ère page sur des mots-clés concurrentiels, nous proposons des packs Marketing dédiés."
    },
    {
      question: "Puis-je modifier le site moi-même après la livraison ?",
      answer: "Tout à fait. Nous utilisons WordPress, l'outil le plus utilisé au monde. C'est intuitif et nous vous formons (1h de coaching visio incluse) pour que vous soyez autonome pour modifier vos textes, images ou ajouter des produits."
    },
    {
      question: "Y a-t-il des frais cachés ou un abonnement ?",
      answer: "Aucun frais caché. Le prix du devis est ferme. Le seul coût récurrent est l'hébergement et le nom de domaine (environ 50€/an chez LWS), mais nous vous offrons la première année !"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
               <HelpCircle size={14} /> Questions Fréquentes
           </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-lg text-slate-600">
            Nous avons probablement les réponses. Si ce n'est pas le cas, contactez-nous !
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-elvis-blue bg-blue-50/30 shadow-md' : 'border-slate-100 bg-white hover:border-slate-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-elvis-blue' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-elvis-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Vous ne trouvez pas votre réponse ?</p>
            <a href="#contact" className="inline-flex items-center justify-center font-bold text-elvis-blue hover:underline">
                Contactez notre équipe support
            </a>
        </div>

      </div>
    </section>
  );
}