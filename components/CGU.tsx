import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';

interface Props {
    onBack: () => void;
    onContact: () => void;
}

export default function CGU({ onBack, onContact }: Props) {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-elvis-blue transition-colors mb-8 font-medium">
            <ArrowLeft size={20} /> Retour
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="mb-10 border-b border-slate-100 pb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-4">
                   Règles
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Conditions Générales <span className="text-elvis-blue">d'Utilisation</span>
                </h1>
                <p className="text-slate-500">
                   L'utilisation du site elvisweb.com implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Ces conditions peuvent être modifiées ou complétées à tout moment.
                </p>
            </div>

            <div className="space-y-10 text-slate-700 leading-relaxed">
                
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                        Objet des CGU
                    </h2>
                    <p className="text-sm">
                        Les présentes CGU définissent les règles d'utilisation du site elvisweb.com ainsi que les responsabilités de ses utilisateurs et de son éditeur.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Accès au site</h2>
                    <p className="text-sm mb-2">
                        Le site elvisweb.com est accessible à tout moment, sauf en cas de maintenance technique ou de force majeure. L'exploitant s'efforce de maintenir une disponibilité optimale, mais ne peut garantir un accès ininterrompu au site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Responsabilités de l'utilisateur</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm marker:text-elvis-blue">
                        <li>L'utilisateur s'engage à utiliser le site de manière conforme à la législation en vigueur et aux présentes CGU.</li>
                        <li>Toute tentative de perturber le bon fonctionnement du site, par des moyens techniques ou autres, est strictement interdite.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Limitation de responsabilité</h2>
                    <p className="text-sm mb-2">L'exploitant ne peut être tenu responsable en cas de :</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm marker:text-elvis-blue">
                        <li>Dysfonctionnements techniques temporaires empêchant l'accès au site.</li>
                        <li>Erreurs ou omissions dans les contenus diffusés sur le site.</li>
                        <li>Conséquences de l'utilisation des informations publiées sur le site par un utilisateur.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Propriété intellectuelle</h2>
                    <p className="text-sm">
                        Tous les éléments présents sur le site (textes, images, logos, vidéos, etc.) sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, modification ou exploitation non autorisée est strictement interdite.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Droit applicable</h2>
                    <p className="text-sm">
                        Les présentes CGU sont régies par le droit français. En cas de litige, la compétence exclusive est attribuée aux tribunaux français.
                    </p>
                </section>

            </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-4">Des questions sur nos conditions ?</p>
            <button onClick={onContact} className="text-elvis-blue font-bold hover:underline">
                Contactez notre support
            </button>
        </div>

      </div>
    </div>
  );
}