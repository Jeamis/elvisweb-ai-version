import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, FileUp, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const steps = [
    {
        num: "01",
        title: "Demande",
        desc: "Décrivez votre projet via le formulaire. C'est rapide et sans engagement."
    },
    {
        num: "02",
        title: "Analyse",
        desc: "Un expert étudie vos besoins et prépare une stratégie sur-mesure."
    },
    {
        num: "03",
        title: "Proposition",
        desc: "Vous recevez un devis détaillé et un plan d'action sous 24h."
    },
    {
        num: "04",
        title: "Lancement",
        desc: "Validation du devis et démarrage immédiat de votre projet."
    }
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <div className="bg-white pb-12 pt-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
               Contact & Devis
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Parlons de <span className="text-elvis-blue">votre projet</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vous avez une idée ? Nous avons l'expertise pour la réaliser.
                Remplissez le formulaire ci-dessous pour recevoir une estimation gratuite et précise.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-2"><Clock size={18} className="text-green-500"/> Réponse sous 2h ouvrées</span>
                <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-500"/> Confidentialité garantie</span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Info & Process */}
            <div className="lg:col-span-5 space-y-12">
                
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Nos coordonnées</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-elvis-blue">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Téléphone</p>
                                <p className="text-lg font-semibold text-slate-900">+33 1 77 62 81 02</p>
                                <p className="text-sm text-slate-500">Du Lundi au Vendredi, 9h-18h</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-elvis-blue">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email</p>
                                <p className="text-lg font-semibold text-slate-900">jeamis@elvisweb.com</p>
                                <p className="text-sm text-slate-500">Réponse rapide garantie</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-elvis-blue">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Siège</p>
                                <p className="text-lg font-semibold text-slate-900">Antananarivo, Madagascar</p>
                                <p className="text-sm text-slate-500">Partenaire LWS France</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Steps Vertical */}
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 px-2">Comment ça marche ?</h3>
                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 text-slate-900 font-bold flex items-center justify-center shadow-sm group-hover:border-elvis-blue group-hover:text-elvis-blue transition-colors">
                                        {step.num}
                                    </div>
                                    {idx !== steps.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                                </div>
                                <div className="pb-6">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-elvis-blue to-purple-600"></div>
                    
                    <div className="p-8 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">Demander un devis sur mesure</h2>
                            <p className="text-slate-500 mt-2">Remplissez ce formulaire pour recevoir une proposition adaptée à votre budget.</p>
                        </div>

                        {formStatus === 'success' ? (
                            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message envoyé !</h3>
                                <p className="text-slate-600 mb-6">
                                    Merci de nous avoir contactés. Notre équipe va analyser votre demande et vous recontactera sous 2h (heures ouvrées).
                                </p>
                                <button 
                                    onClick={() => setFormStatus('idle')}
                                    className="text-elvis-blue font-bold hover:underline"
                                >
                                    Envoyer une autre demande
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Nom complet <span className="text-red-500">*</span></label>
                                        <input type="text" required placeholder="Jean Dupont" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Entreprise</label>
                                        <input type="text" placeholder="Nom de votre société" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email professionnel <span className="text-red-500">*</span></label>
                                        <input type="email" required placeholder="jean@entreprise.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Téléphone <span className="text-red-500">*</span></label>
                                        <input type="tel" required placeholder="06 12 34 56 78" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Type de projet</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white">
                                            <option>Pack Vitrine Pro</option>
                                            <option>Pack E-commerce Pro</option>
                                            <option>Pack Marketplace</option>
                                            <option>Marketing / SEO</option>
                                            <option>Développement Sur Mesure</option>
                                            <option>Autre</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Détails du projet</label>
                                    <textarea rows={4} placeholder="Décrivez votre besoin, vos objectifs et vos délais..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-elvis-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"></textarea>
                                </div>

                                <div className="space-y-2">
                                     <label className="text-sm font-bold text-slate-700">Pièce jointe (Cahier des charges, logo...)</label>
                                     <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                                         <div className="flex flex-col items-center gap-2">
                                             <div className="p-2 bg-blue-50 text-elvis-blue rounded-full group-hover:scale-110 transition-transform">
                                                <FileUp size={20} />
                                             </div>
                                             <span className="text-sm text-slate-500">Cliquez pour ajouter un fichier (PDF, JPG, PNG)</span>
                                         </div>
                                         <input type="file" className="hidden" />
                                     </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-elvis-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? (
                                        <span>Envoi en cours...</span>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Envoyer ma demande gratuitement
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-slate-400">
                                    En cliquant sur envoyer, vous acceptez notre politique de confidentialité. 
                                    Vos données ne seront jamais partagées.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}