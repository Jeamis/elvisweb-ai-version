import React from 'react';
import { ArrowLeft, Lock, Database, EyeOff, Cookie } from 'lucide-react';

interface Props {
    onBack: () => void;
    onContact: () => void;
}

export default function PrivacyPolicy({ onBack, onContact }: Props) {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-elvis-blue transition-colors mb-8 font-medium">
            <ArrowLeft size={20} /> Retour
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-elvis-blue"></div>

            <div className="mb-10 border-b border-slate-100 pb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider mb-4">
                   RGPD Compliant
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Politique de <span className="text-green-500">Confidentialité</span>
                </h1>
                <p className="text-slate-500 text-lg">
                   Chez Elvis Web, vos données sont sacrées. Nous ne les utilisons que pour vous aider à réussir votre projet. Pas de spam, pas de revente. Promis.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-elvis-blue shadow-sm mb-4">
                        <Database size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Quelles données collectons-nous ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Uniquement ce qui est nécessaire pour traiter votre demande de devis ou de contact :
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-slate-600">
                        <li>• Nom et Prénom</li>
                        <li>• Adresse Email professionnelle</li>
                        <li>• Numéro de téléphone</li>
                        <li>• Informations relatives à votre projet</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm mb-4">
                        <Lock size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Pourquoi et comment ?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        <strong>Finalité :</strong> Vous répondre, établir un devis précis et assurer le suivi de votre projet.
                        <br/><br/>
                        <strong>Sécurité :</strong> Toutes les données transitent via un protocole sécurisé (HTTPS/SSL) et sont stockées sur des serveurs sécurisés en Europe.
                    </p>
                </div>
            </div>

            <div className="space-y-8 text-slate-700">
                <section>
                    <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <EyeOff size={20} className="text-slate-400"/>
                        Partage des données
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Nous ne vendons, n'échangeons et ne transférons <strong>jamais</strong> vos informations personnelles identifiables à des tiers. Cela n'inclut pas les tierces parties de confiance qui nous aident à exploiter notre site Web (comme notre hébergeur LWS), tant que ces parties conviennent de garder ces informations confidentielles.
                    </p>
                </section>

                <section>
                    <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                        <Cookie size={20} className="text-slate-400"/>
                        Cookies & Traceurs
                    </h2>
                    <p className="text-sm leading-relaxed mb-2">
                        Nous utilisons des cookies pour :
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 mb-2">
                        <li>Améliorer votre expérience sur le site.</li>
                        <li>Analyser le trafic de manière anonyme (Google Analytics).</li>
                    </ul>
                    <p className="text-sm">
                        Vous pouvez à tout moment choisir de désactiver les cookies via les paramètres de votre navigateur.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-slate-900 mb-3">
                        Vos droits
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                        <br/>
                        Pour exercer ce droit, envoyez simplement un email à : <strong className="text-elvis-blue">jeamis@elvisweb.com</strong>
                    </p>
                </section>
            </div>

        </div>
        
        {/* Footer Link to Contact */}
        <div className="mt-8 flex justify-center">
             <button onClick={onContact} className="text-slate-500 hover:text-elvis-blue text-sm font-medium transition-colors">
                 Une question sur la confidentialité ? Contactez-nous
             </button>
        </div>

      </div>
    </div>
  );
}