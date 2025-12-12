import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { ServicePack } from '../types';

interface NavbarProps {
  onNavigate: (page: 'home' | 'web' | 'marketing' | 'portfolio' | 'contact') => void;
  currentPage: 'home' | 'web' | 'marketing' | 'portfolio' | 'contact';
  packs?: ServicePack[];
  marketingPacks?: ServicePack[];
  onPackSelect?: (pack: ServicePack) => void;
}

export default function Navbar({ onNavigate, currentPage, packs = [], marketingPacks = [], onPackSelect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWebSubmenuOpen, setIsMobileWebSubmenuOpen] = useState(false);
  const [isMobileMarketingSubmenuOpen, setIsMobileMarketingSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'web' | 'marketing' | 'portfolio' | 'contact', hash?: string) => {
    e.preventDefault();
    onNavigate(page);
    setIsMobileMenuOpen(false);
    
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
       window.scrollTo(0, 0);
    }
  };

  const handlePackClick = (pack: ServicePack) => {
    if (onPackSelect) {
        onPackSelect(pack);
        setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={(e) => handleLinkClick(e, 'home')}>
            {/* Logo Icon */}
            <Globe className="h-8 w-8 text-elvis-blue" strokeWidth={1.5} />
            
            {/* Vertical Separator */}
            <div className="h-8 w-[2px] bg-elvis-blue mx-3"></div>

            {/* Logo Text */}
            <div className="flex flex-col justify-center leading-none">
              <span className="text-xl font-bold tracking-tight text-elvis-blue">ELVIS</span>
              <span className="text-xl font-bold tracking-tight text-elvis-blue">WEB</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
             
             {/* WEB Dropdown */}
             <div className="relative group/web">
                <a 
                    href="#packs-web"
                    onClick={(e) => handleLinkClick(e, 'web')}
                    className={`flex items-center gap-1 text-sm uppercase tracking-wide font-medium transition-colors ${currentPage === 'web' ? 'text-elvis-blue' : 'text-slate-600 hover:text-elvis-blue'}`}
                >
                    Création de site web
                    <ChevronDown size={14} className="group-hover/web:rotate-180 transition-transform duration-300" />
                </a>

                {/* The Dropdown Panel */}
                <div className="absolute top-full -left-4 w-72 pt-4 opacity-0 invisible group-hover/web:opacity-100 group-hover/web:visible transition-all duration-300 transform group-hover/web:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                        {packs.map((pack) => (
                            <div 
                                key={pack.id}
                                onClick={() => handlePackClick(pack)}
                                className="block px-4 py-3 hover:bg-slate-50 cursor-pointer group/item border-l-4 border-transparent hover:border-elvis-blue transition-all"
                            >
                                <div className="text-sm font-bold text-slate-800 group-hover/item:text-elvis-blue">{pack.title}</div>
                                <div className="text-xs text-slate-500 mt-0.5 truncate">{pack.description.substring(0, 40)}...</div>
                            </div>
                        ))}
                         <div className="border-t border-slate-100 mt-2 pt-2 px-4 pb-2">
                             <a 
                                href="#" 
                                onClick={(e) => handleLinkClick(e, 'web')}
                                className="text-xs font-bold text-elvis-blue hover:underline flex items-center justify-center gap-1"
                             >
                                Voir toutes les offres <ChevronRight size={12}/>
                             </a>
                         </div>
                    </div>
                </div>
             </div>

             {/* MARKETING Dropdown */}
             <div className="relative group/marketing">
                <a 
                    href="#marketing"
                    onClick={(e) => handleLinkClick(e, 'marketing')}
                    className={`flex items-center gap-1 text-sm uppercase tracking-wide font-medium transition-colors ${currentPage === 'marketing' ? 'text-elvis-blue' : 'text-slate-600 hover:text-elvis-blue'}`}
                >
                    Marketing Digital
                    <ChevronDown size={14} className="group-hover/marketing:rotate-180 transition-transform duration-300" />
                </a>

                {/* The Dropdown Panel */}
                <div className="absolute top-full -left-4 w-72 pt-4 opacity-0 invisible group-hover/marketing:opacity-100 group-hover/marketing:visible transition-all duration-300 transform group-hover/marketing:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                        {marketingPacks.map((pack) => (
                            <div 
                                key={pack.id}
                                onClick={() => handlePackClick(pack)}
                                className="block px-4 py-3 hover:bg-slate-50 cursor-pointer group/item border-l-4 border-transparent hover:border-purple-600 transition-all"
                            >
                                <div className="text-sm font-bold text-slate-800 group-hover/item:text-purple-600">{pack.title}</div>
                                <div className="text-xs text-slate-500 mt-0.5 truncate">{pack.description.substring(0, 40)}...</div>
                            </div>
                        ))}
                         <div className="border-t border-slate-100 mt-2 pt-2 px-4 pb-2">
                             <a 
                                href="#" 
                                onClick={(e) => handleLinkClick(e, 'marketing')}
                                className="text-xs font-bold text-purple-600 hover:underline flex items-center justify-center gap-1"
                             >
                                Voir tous les services <ChevronRight size={12}/>
                             </a>
                         </div>
                    </div>
                </div>
             </div>

              <a 
                href="#portfolio"
                onClick={(e) => handleLinkClick(e, 'portfolio')}
                className={`text-sm uppercase tracking-wide font-medium transition-colors ${currentPage === 'portfolio' ? 'text-elvis-blue' : 'text-slate-600 hover:text-elvis-blue'}`}
              >
                Réalisations
              </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-600 font-medium text-sm">
              <Phone size={16} />
              <span>+33 1 77 62 81 02</span>
            </div>
            <button 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="bg-elvis-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Devis sur mesure
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-700">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            
            {/* Mobile WEB Submenu */}
            <div>
                 <div className="flex items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 rounded-md">
                     <a
                        href="#packs-web"
                        onClick={(e) => handleLinkClick(e, 'web')}
                        className="flex-1"
                      >
                        Création de site web
                    </a>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsMobileWebSubmenuOpen(!isMobileWebSubmenuOpen); }}
                        className="p-2"
                    >
                        <ChevronDown size={16} className={`transition-transform ${isMobileWebSubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                 </div>
                 
                 {isMobileWebSubmenuOpen && (
                    <div className="bg-slate-50 rounded-lg mx-3 mb-2 overflow-hidden">
                        {packs.map(pack => (
                            <button
                                key={pack.id}
                                onClick={() => handlePackClick(pack)}
                                className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-elvis-blue hover:bg-slate-100 border-b border-slate-100 last:border-0"
                            >
                                {pack.title}
                            </button>
                        ))}
                    </div>
                 )}
            </div>

            {/* Mobile MARKETING Submenu */}
            <div>
                 <div className="flex items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 rounded-md">
                     <a
                        href="#marketing"
                        onClick={(e) => handleLinkClick(e, 'marketing')}
                        className="flex-1"
                      >
                        Marketing Digital
                    </a>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsMobileMarketingSubmenuOpen(!isMobileMarketingSubmenuOpen); }}
                        className="p-2"
                    >
                        <ChevronDown size={16} className={`transition-transform ${isMobileMarketingSubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                 </div>
                 
                 {isMobileMarketingSubmenuOpen && (
                    <div className="bg-slate-50 rounded-lg mx-3 mb-2 overflow-hidden">
                        {marketingPacks.map(pack => (
                            <button
                                key={pack.id}
                                onClick={() => handlePackClick(pack)}
                                className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-purple-600 hover:bg-slate-100 border-b border-slate-100 last:border-0"
                            >
                                {pack.title}
                            </button>
                        ))}
                    </div>
                 )}
            </div>

            <a
                href="#portfolio"
                onClick={(e) => handleLinkClick(e, 'portfolio')}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-elvis-blue hover:bg-blue-50 rounded-md"
              >
                Réalisations
            </a>
            <div className="pt-4 mt-4 border-t border-gray-100">
               <button 
                onClick={(e) => handleLinkClick(e as any, 'contact')}
                className="w-full bg-elvis-blue text-white py-3 rounded-lg font-bold"
               >
                 Demander un devis
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}