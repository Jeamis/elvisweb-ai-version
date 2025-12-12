import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';

interface FooterProps {
    onNavigate?: (page: any) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    }

    const handleNavClick = (e: React.MouseEvent, page: string) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(page);
            window.scrollTo(0, 0);
        }
    }

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            {/* Logo in Footer */}
            <div className="flex items-center gap-0 mb-8 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
               <Globe className="h-8 w-8 text-elvis-blue" strokeWidth={1.5} />
               <div className="h-8 w-[2px] bg-elvis-blue mx-3"></div>
               <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-elvis-blue">ELVIS</span>
                <span className="text-xl font-bold tracking-tight text-elvis-blue">WEB</span>
              </div>
            </div>
            
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Votre site web clé en main, du design à la mise en ligne. Accompagnement personnalisé & support 5j/7 inclus. Basée à Madagascar — Partenaire officiel LWS France.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <MapPin className="text-elvis-blue" size={20} />
                </div>
                <div>
                   <span className="block text-sm font-semibold">Adresse</span>
                   <span className="text-slate-400 text-sm">Lot 140 FID TER Ambohimahitsy, Antananarivo</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <Phone className="text-elvis-blue" size={20} />
                </div>
                <div>
                   <span className="block text-sm font-semibold">Téléphone</span>
                   <span className="text-slate-400 text-sm">+261 33 06 575 07</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-slate-800 p-2 rounded-lg">
                  <Mail className="text-elvis-blue" size={20} />
                </div>
                <div>
                   <span className="block text-sm font-semibold">Email</span>
                   <span className="text-slate-400 text-sm">jeamis@elvisweb.com</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-elvis-blue transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-elvis-blue transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-elvis-blue transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Right: Callback Form */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
             <div className="flex items-center gap-2 mb-6 text-elvis-blue">
                 <Clock size={20} />
                 <span className="font-bold text-sm uppercase tracking-wide">Réponse rapide</span>
             </div>
             <h3 className="text-2xl font-bold mb-2">Être rappelé en 15 min</h3>
             <p className="text-slate-400 mb-6 text-sm">Laissez-nous vos coordonnées, un expert vous rappelle immédiatement pour discuter de votre projet.</p>
             
             <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Nom</label>
                    <input type="text" required className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:border-elvis-blue focus:ring-1 focus:ring-elvis-blue outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Téléphone</label>
                    <input type="tel" required className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg focus:border-elvis-blue focus:ring-1 focus:ring-elvis-blue outline-none transition-all" />
                </div>
                
                <button type="submit" className="w-full bg-elvis-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                   {status === 'success' ? 'Demande envoyée !' : 'Être rappelé maintenant'}
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">En cliquant, vous acceptez d'être contacté par téléphone ou email.</p>
             </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2025 ElvisWeb — Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" onClick={(e) => handleNavClick(e, 'mentions')} className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'cgu')} className="hover:text-white transition-colors">CGU</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
        </div>
      </div>
      
      {/* Floating WhatsApp */}
      <a href="https://wa.me/261330657507" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-40 animate-bounce">
         <Phone className="fill-current" />
      </a>
    </footer>
  );
}