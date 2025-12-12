import React from 'react';
import { ArrowLeft, CheckCircle, Shield } from 'lucide-react';

interface Props {
    onBack: () => void;
    onContact: () => void;
}

export default function MentionsLegales({ onBack, onContact }: Props) {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-elvis-blue transition-colors mb-8 font-medium">
            <ArrowLeft size={20} /> Retour
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="mb-10 border-b border-slate-100 pb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
                   Transparence
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Mentions <span className="text-elvis-blue">Légales</span>
                </h1>
                <p className="text-slate-500">
                    Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dit L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs du site elvisweb.com les présentes mentions légales.
                </p>
            </div>

            <div className="space-y-10">
                
                <section>
                    <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
                        <span className="w-8 h-8 rounded-lg bg-blue-100 text-elvis-blue flex items-center justify-center"><Shield size={18}/></span>
                        Identité de l'éditeur
                    </h2>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-3 text-sm text-slate-700">
                        <p><strong className="text-slate-900">Nom ou raison sociale :</strong> Elvis Web</p>
                        <p><strong className="text-slate-900">Adresse postale :</strong> Lot 140 FID TER Ambohimahitsy, Antananarivo, Madagascar</p>
                        <p><strong className="text-slate-900">Numéro NIF et RCS :</strong> 63122 11 2025 0 11296 - 2025B01269</p>
                        <p><strong className="text-slate-900">Directeur de publication :</strong> Jeamis</p>
                        <p><strong className="text-slate-900">Contact :</strong> jeamis@elvisweb.com</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Hébergement</h2>
                    <p className="text-slate-600 mb-2">
                        Le site est hébergé par <strong>LWS (Ligne Web Services)</strong>, partenaire officiel.
                    </p>
                    <div className="text-sm text-slate-500">
                        Adresse : 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br/>
                        Téléphone : +33 1 77 62 30 03<br/>
                        Site web : www.lws.fr
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Propriété intellectuelle</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu’il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                </section>

            </div>
        </div>

        {/* Reassurance & CTA */}
        <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Une entreprise fiable pour votre projet</h3>
                <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                    Maintenant que les présentations sont faites, si on parlait de votre réussite ?
                </p>
                <button onClick={onContact} className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                    Demander un devis gratuit
                </button>
             </div>
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        </div>

      </div>
    </div>
  );
}