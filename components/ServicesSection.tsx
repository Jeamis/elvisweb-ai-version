import React from 'react';
import ServiceCard from './ServiceCard';
import { ServicePack } from '../types';
import { Shield, Rocket } from 'lucide-react';

interface ServicesSectionProps {
  onOrder: (pack: ServicePack) => void;
  marketingPacks?: ServicePack[];
  webPacks?: ServicePack[];
}

export default function ServicesSection({ onOrder, marketingPacks, webPacks }: ServicesSectionProps) {
  // Fallback data if props are not provided (Safety)
  const defaultWebPacks: ServicePack[] = [
    {
      id: 'vitrine-pro',
      title: 'Pack Vitrine Pro',
      price: 550,
      period: '',
      description: 'Idéal pour les indépendants et TPE. Un site vitrine rapide et élégant pour présenter votre activité.',
      features: ['Design responsive sur mesure', '5 pages clés', 'Formulaire de contact', 'Certificat SSL inclus', 'Formation prise en main (1h)'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ecommerce-pro',
      title: 'Pack E-commerce Pro',
      price: 650,
      period: '',
      description: 'Une boutique complète pour vendre vos produits 24h/24 avec paiement sécurisé.',
      features: ['Boutique WooCommerce', 'Jusqu\'à 50 produits', 'Paiement CB / PayPal', 'Relance panier abandonné', 'Optimisation SEO Vente'],
      isPopular: true,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'marketplace',
      title: 'Pack Marketplace Premium',
      price: 1500,
      period: '',
      description: 'Pour les projets ambitieux type place de marché multi-vendeurs.',
      features: ['Architecture complexe', 'Espace vendeurs', 'Système de commissions', 'Design Premium UX/UI', 'Support Prioritaire'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const defaultMarketingPacks: ServicePack[] = [
    {
        id: 'seo-essentiel',
        title: 'SEO Essentiel (mensuel)',
        price: 99,
        period: '/mois',
        description: 'Audit de site, suivi de 5 mots-clés, backlinks de base.',
        features: ['Audit technique initial', 'Optimisation On-page', 'Suivi 5 mots-clés', 'Backlinks essentiels', 'Rapport mensuel simple'],
        category: 'marketing',
        image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'cm-mensuel',
        title: 'Community Management',
        price: 99,
        period: '/mois',
        description: 'Gestion réseaux sociaux : 8 publications + 2 stories, visuels inclus...',
        features: ['8 Posts + 2 Stories', 'Création des visuels', 'Rédaction des légendes', 'Programmation', 'Modération de base'],
        category: 'marketing',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'google-ads',
        title: 'Campagne Google Ads',
        price: 280,
        period: '',
        description: 'Setup + suivi d\'une campagne optimisée (hors budget publicitaire).',
        features: ['Recherche mots-clés', 'Rédaction des annonces', 'Paramétrage conversions', 'Optimisation enchères', 'Suivi pendant 15 jours'],
        isPopular: true,
        category: 'marketing',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const displayedWebPacks = webPacks || defaultWebPacks;
  const displayedMarketingPacks = marketingPacks ? marketingPacks.slice(0, 3) : defaultMarketingPacks;

  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Web Creation Section */}
        <div id="packs-web" className="mb-24">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Investissez dans un site qui <span className="text-elvis-blue underline decoration-4 decoration-blue-200">rapporte</span>
            </h2>
            <p className="text-lg text-slate-600">
              Arrêtez de bricoler. Choisissez une solution professionnelle clé en main et concentrez-vous sur votre métier. On s'occupe de tout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {displayedWebPacks.map(pack => (
              <ServiceCard key={pack.id} pack={pack} onOrder={onOrder} />
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-elvis-blue">
                   <Rocket size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">Besoin de plus rapide ?</h4>
                   <p className="text-sm text-slate-600">Option Livraison Express 72h disponible au checkout.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-elvis-blue">
                   <Shield size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">Garantie Technique</h4>
                   <p className="text-sm text-slate-600">Maintenance et correctifs offerts pendant 30 jours.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Marketing Section */}
        <div id="marketing" className="pt-20 border-t border-gray-100">
           <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">Performance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Attirez des clients <span className="text-purple-600">en automatique</span>
            </h2>
            <p className="text-slate-600">
              Un beau site ne suffit pas. Donnez-lui la visibilité qu'il mérite avec nos stratégies d'acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedMarketingPacks.map(pack => (
              <ServiceCard key={pack.id} pack={pack} onOrder={onOrder} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}