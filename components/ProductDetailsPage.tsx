import React, { useState, useEffect } from 'react';
import { ServicePack } from '../types';
import { Star, Check, ShieldCheck, Zap, ArrowLeft, Globe, Server, Clock, PenTool, Calendar, TrendingUp } from 'lucide-react';

interface ProductDetailsPageProps {
  pack: ServicePack;
  onBack: () => void;
  onOrder: (pack: ServicePack, options: any, total: number) => void;
}

export default function ProductDetailsPage({ pack, onBack, onOrder }: ProductDetailsPageProps) {
  // Configuration State
  const [config, setConfig] = useState({
    // Web Config
    pages: 'standard',
    language: 'fr',
    hosting: 'lws_standard',
    maintenance: 'none',
    delivery: 'standard',
    
    // Marketing Config
    engagement: '1_month',
    reporting: 'monthly',
  });

  const [totalPrice, setTotalPrice] = useState(pack.price);

  // Pricing Logic
  useEffect(() => {
    let price = pack.price;

    if (pack.category === 'web') {
        // Pages logic (simplified for example)
        if (config.pages === 'extended') price += 150;
        if (config.pages === 'unlimited') price += 300;

        // Language logic
        if (config.language === 'en_fr') price += 120;
        if (config.language === 'multi') price += 250;

        // Hosting logic
        if (config.hosting === 'lws_perf') price += 80;
        
        // Maintenance logic
        if (config.maintenance === 'standard') price += 29;
        if (config.maintenance === 'pro') price += 59;

        // Delivery logic
        if (config.delivery === 'express') price += 100;
    } 
    else if (pack.category === 'marketing') {
        // Engagement discount? Or options
        // For example, weekly reporting adds cost
        if (config.reporting === 'weekly') price += 50;
        
        // Note: Engagement duration might lower price per month in real app, but here we show total for first payment
    }

    setTotalPrice(price);
  }, [config, pack.price, pack.category]);

  const handleOptionChange = (key: string, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const isWeb = pack.category === 'web';

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-elvis-blue transition-colors mb-8 font-medium"
        >
            <ArrowLeft size={20} />
            Retour aux offres
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: Visuals */}
            <div className="lg:col-span-7">
                <div className="sticky top-32">
                    <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100 overflow-hidden group">
                        {/* Background Blobs */}
                        <div className={`absolute top-0 right-0 w-64 h-64 ${isWeb ? 'bg-blue-100' : 'bg-purple-100'} rounded-full mix-blend-multiply filter blur-3xl opacity-50`}></div>
                        <div className={`absolute bottom-0 left-0 w-64 h-64 ${isWeb ? 'bg-purple-100' : 'bg-blue-100'} rounded-full mix-blend-multiply filter blur-3xl opacity-50`}></div>
                        
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50">
                            <img 
                                src={pack.image} 
                                alt={pack.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Badge */}
                            {pack.isPopular && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                                    <Star size={14} fill="currentColor" /> Best Seller
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Features List Below Image */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg text-elvis-blue"><ShieldCheck size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Garantie Qualité</h4>
                                <p className="text-xs text-slate-500">Service professionnel & suivi dédié.</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                             <div className="bg-blue-50 p-2 rounded-lg text-elvis-blue"><Zap size={20} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{isWeb ? 'Hébergement LWS' : 'Rapidité'}</h4>
                                <p className="text-xs text-slate-500">{isWeb ? 'Serveurs en France, rapides.' : 'Lancement sous 48h.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Configuration */}
            <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
                    
                    <div className="mb-6 border-b border-slate-100 pb-6">
                        <span className={`inline-block py-1 px-3 rounded-full ${isWeb ? 'bg-blue-50 text-elvis-blue' : 'bg-purple-50 text-purple-600'} text-xs font-bold uppercase tracking-wider mb-3`}>
                            {isWeb ? 'Création de site web' : 'Marketing Digital'}
                        </span>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{pack.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <div className="flex text-yellow-400">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <span>(+50 avis clients)</span>
                        </div>
                        <div className="flex items-end gap-3">
                             <span className="text-5xl font-extrabold text-elvis-blue">{totalPrice}€</span>
                             <span className="text-slate-400 font-medium mb-2">{pack.period ? pack.period : '/ TTC'}</span>
                        </div>
                    </div>

                    {/* CONFIGURATOR */}
                    <div className="space-y-5">
                        
                        {/* ---------------- WEB OPTIONS ---------------- */}
                        {isWeb && (
                            <>
                                {/* 1. Pages */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2 flex justify-between">
                                        Nombre de pages
                                        <span className="text-slate-400 font-normal text-xs">* Inclus pages légales</span>
                                    </label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.pages}
                                            onChange={(e) => handleOptionChange('pages', e.target.value)}
                                        >
                                            <option value="standard">Pack Standard (5 à 7 pages)</option>
                                            <option value="extended">Pack Étendu (8 à 15 pages) +150€</option>
                                            <option value="unlimited">Sur-mesure (+20 pages) +300€</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Language */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Choix de la langue</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.language}
                                            onChange={(e) => handleOptionChange('language', e.target.value)}
                                        >
                                            <option value="fr">Français uniquement (Inclus)</option>
                                            <option value="en_fr">Bilingue FR / EN (+120€)</option>
                                            <option value="multi">Multilingue (3 langues) +250€</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <Globe size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Hosting */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Hébergement Web (LWS)</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.hosting}
                                            onChange={(e) => handleOptionChange('hosting', e.target.value)}
                                        >
                                            <option value="lws_standard">LWS Standard - Offert 1 an</option>
                                            <option value="lws_perf">LWS Performance (+80€/an)</option>
                                            <option value="none">Je gère mon hébergement</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <Server size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Maintenance */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Forfait Maintenance</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.maintenance}
                                            onChange={(e) => handleOptionChange('maintenance', e.target.value)}
                                        >
                                            <option value="none">Aucune (Géré par vos soins)</option>
                                            <option value="standard">Standard - Mises à jour (+29€/mois)</option>
                                            <option value="pro">Pro - Sécurité & Modifs (+59€/mois)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <PenTool size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Delivery */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Délai de livraison</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.delivery}
                                            onChange={(e) => handleOptionChange('delivery', e.target.value)}
                                        >
                                            <option value="standard">Standard (7 à 10 jours ouvrés)</option>
                                            <option value="express">Express 72h (+100€)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <Clock size={16} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------------- MARKETING OPTIONS ---------------- */}
                        {!isWeb && (
                            <>
                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Durée d'engagement</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.engagement}
                                            onChange={(e) => handleOptionChange('engagement', e.target.value)}
                                        >
                                            <option value="1_month">Sans engagement (Mensuel)</option>
                                            <option value="6_month">Engagement 6 mois (Audit offert)</option>
                                            <option value="12_month">Engagement 12 mois (-10% sur la 1ère facture)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <Calendar size={16} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-800 mb-2">Fréquence Reporting</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-elvis-blue focus:border-transparent font-medium"
                                            value={config.reporting}
                                            onChange={(e) => handleOptionChange('reporting', e.target.value)}
                                        >
                                            <option value="monthly">Mensuel (Inclus)</option>
                                            <option value="weekly">Hebdomadaire (+50€/mois)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <TrendingUp size={16} />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl text-sm text-slate-600 border border-blue-100">
                                    <p><strong>Note :</strong> Les budgets publicitaires (Google Ads / Facebook Ads) sont à régler directement aux plateformes et ne sont pas inclus dans nos frais de gestion.</p>
                                </div>
                            </>
                        )}


                    </div>

                    {/* ACTION AREA */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <button 
                            onClick={() => onOrder(pack, config, totalPrice)}
                            className="w-full bg-elvis-blue hover:bg-blue-600 text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Zap size={20} fill="currentColor" />
                            {isWeb ? 'Configurer mon site' : 'Valider la commande'}
                        </button>
                        
                        <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] md:text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5"><Check size={12} className="text-green-500" strokeWidth={3} /> Devis gratuit immédiat</span>
                            <span className="flex items-center gap-1.5"><Check size={12} className="text-green-500" strokeWidth={3} /> Sans engagement</span>
                            <span className="flex items-center gap-1.5"><Check size={12} className="text-green-500" strokeWidth={3} /> Paiement sécurisé</span>
                            <span className="flex items-center gap-1.5"><Check size={12} className="text-green-500" strokeWidth={3} /> Support Réactif</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Detailed Description Block */}
        <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ce qui est inclus dans votre {pack.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-elvis-blue">Prestations Clés</h4>
                    <ul className="space-y-3">
                        {pack.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                <Check size={16} className="text-green-500 mt-0.5" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-elvis-blue">Notre approche</h4>
                    <ul className="space-y-3">
                         <li className="flex items-start gap-3 text-sm text-slate-700">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            Analyse de votre marché cible
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-700">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            Stratégie personnalisée
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-700">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            Rapports de performance clairs
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-700">
                            <Check size={16} className="text-green-500 mt-0.5" />
                            Chef de projet dédié
                        </li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}