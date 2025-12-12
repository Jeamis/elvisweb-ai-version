import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import WebCreationPage from './components/WebCreationPage';
import MarketingPage from './components/MarketingPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import MentionsLegales from './components/MentionsLegales';
import CGU from './components/CGU';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { ServicePack } from './types';

// Centralized Data for Packs
const WEB_PACKS_DATA: ServicePack[] = [
  {
    id: 'vitrine-pro',
    title: 'Pack Vitrine Pro',
    price: 550,
    description: 'Idéal pour les indépendants, artisans et TPE. Un site vitrine rapide et élégant pour présenter votre activité et générer vos premiers contacts.',
    features: ['Design responsive', 'SEO de base', 'Formulaire de contact inclus', 'Hébergement haute performance', 'Certificat SSL offert'],
    category: 'web',
    // Image: High quality laptop/code workspace image
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'ecommerce-pro',
    title: 'Pack E-commerce Pro',
    price: 650,
    description: 'Créez votre boutique en ligne avec gestion des produits, paiements et livraisons. Parfait pour les commerçants, artisans et créateurs souhaitant vendre directement sur Internet.',
    features: ['WooCommerce intégré', 'Paiement Stripe/PayPal', 'SEO e-commerce', 'Gestion des stocks', 'Tableau de bord des ventes'],
    category: 'web',
    // Image: E-commerce dashboard or shopping cart visual
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'elearning',
    title: 'Pack E-learning Expert',
    price: 950,
    description: 'Lancez votre plateforme de formation en ligne complète. Système d\'inscription, paiement sécurisé et suivi des apprenants inclus.',
    features: ['Compatible avec LearnDash / Tutor LMS', 'Espace membre élève', 'Paiement sécurisé', 'Quiz & Certificats', 'Protection du contenu'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'marketplace',
    title: 'Pack Marketplace Premium',
    price: 1500,
    description: 'Créez une place de marché moderne où plusieurs vendeurs peuvent proposer leurs produits ou services. Idéal pour les projets à fort potentiel.',
    features: ['Multi-boutiques', 'Commissions automatiques', 'Interface vendeurs', 'Système de notation', 'Recherche avancée'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'booking',
    title: 'Pack Réservation Online',
    price: 750,
    description: 'Système de réservation en ligne simple et efficace pour hôtels, restaurants ou prestataires de service.',
    features: ['Calendrier intégré', 'Paiement en ligne', 'Confirmation automatique', 'Notifications clients', 'Gestion des disponibilités'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  }
];

const MARKETING_PACKS_DATA: ServicePack[] = [
  {
    id: 'seo-essentiel',
    title: 'SEO Essentiel (mensuel)',
    price: 99,
    period: '/mois',
    description: 'Audit de site, suivi de 5 mots-clés, backlinks de base.',
    features: ['Audit technique initial', 'Optimisation On-page', 'Suivi 5 mots-clés', 'Backlinks essentiels', 'Rapport mensuel simple'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'seo-premium',
    title: 'SEO Premium (mensuel)',
    price: 349,
    period: '/mois',
    description: 'Suivi de 15 mots-clés stratégiques, stratégie netlinking avancée, rapport mensuel détaillé.',
    features: ['Audit complet + Correctifs', 'Rédaction 2 articles/mois', 'Suivi 15 mots-clés', 'Netlinking Premium', 'Accès Dashboard positions'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'cm-mensuel',
    title: 'Community Management',
    price: 99,
    period: '/mois',
    description: 'Gestion réseaux sociaux (Facebook, Instagram, LinkedIn) : 8 publications + 2 stories, visuels inclus...',
    features: ['8 Posts + 2 Stories', 'Création des visuels', 'Rédaction des légendes', 'Programmation', 'Modération de base'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'creation-pages-rs',
    title: 'Création Pages Pro RS',
    price: 90,
    period: '',
    description: 'Mise en place et optimisation de pages professionnelles (Facebook, Instagram, LinkedIn) avec branding...',
    features: ['Configuration technique', 'Design photo couverture', 'Rédaction bio optimisée', 'Lien Linktree/Bio', '1er post de lancement'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'fb-ads',
    title: 'Campagne Facebook Ads',
    price: 280,
    period: '',
    description: 'Création et paramétrage complet d\'une campagne (hors budget publicitaire).',
    features: ['Installation Pixel Meta', 'Création des audiences', 'Rédaction des annonces', 'Création de 3 visuels', 'Suivi pendant 15 jours'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 'google-ads',
    title: 'Campagne Google Ads',
    price: 280,
    period: '',
    description: 'Setup + suivi d\'une campagne optimisée (hors budget publicitaire).',
    features: ['Recherche mots-clés', 'Rédaction des annonces', 'Paramétrage conversions', 'Optimisation enchères', 'Suivi pendant 15 jours'],
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'web' | 'marketing' | 'portfolio' | 'contact' | 'product_details' | 'mentions' | 'cgu' | 'privacy'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState<ServicePack | null>(null);
  
  // State to hold the specific configuration chosen on the Product Page
  const [selectedOptions, setSelectedOptions] = useState<any>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Navigate to Product Details Page
  const handleViewProduct = (pack: ServicePack) => {
    setSelectedPack(pack);
    // Reset options
    setSelectedOptions(null);
    setCalculatedPrice(pack.price);
    setCurrentPage('product_details');
  };

  // Open Modal from Product Page (with config) or direct lists
  const handleOrderClick = (pack: ServicePack, options?: any, total?: number) => {
    setSelectedPack(pack);
    if (options) setSelectedOptions(options);
    if (total) setCalculatedPrice(total);
    else setCalculatedPrice(pack.price);
    setIsModalOpen(true);
  };

  // Determine active tab for navbar highlighting
  const getActiveTab = () => {
      if (currentPage === 'product_details' && selectedPack) {
          return selectedPack.category === 'marketing' ? 'marketing' : 'web';
      }
      if (['mentions', 'cgu', 'privacy'].includes(currentPage)) return 'home';
      return currentPage;
  }

  const handleContactClick = () => {
      // Navigate to Contact Page instead of scroll
      setCurrentPage('contact');
  }

  const stats = [
    { number: "+350", label: "Projets Livrés" },
    { number: "100%", label: "Satisfait ou Refait" },
    { number: "5/7j", label: "Support Réactif" },
    { number: "10 Jours", label: "Délai Moyen" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={getActiveTab() as any} 
        packs={WEB_PACKS_DATA}
        marketingPacks={MARKETING_PACKS_DATA}
        onPackSelect={handleViewProduct}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            
            {/* Key Figures Section */}
            <div className="bg-blue-900 py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col items-center justify-center p-4 md:p-0 ${
                          index !== stats.length - 1 ? 'md:border-r border-blue-700/50' : ''
                        }`}
                      >
                         <span className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                           {stat.number}
                         </span>
                         <span className="text-blue-200 font-medium text-sm uppercase tracking-wide">
                           {stat.label}
                         </span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* CONVERSION OPTIMIZED ORDER: Expertise -> Portfolio -> Services -> Testimonials */}
            
            <ExpertiseSection />

            {/* MOVED UP: Portfolio Section before Services to show quality first */}
            <PortfolioSection />

            {/* Services Section with specific marketing packs */}
            {/* Pass handleViewProduct to open product page instead of modal directly */}
            {/* PASSING WEB_PACKS_DATA explicitly to ensure image consistency */}
            {/* Limit to first 3 packs on Home Page */}
            <ServicesSection 
              onOrder={handleViewProduct} 
              webPacks={WEB_PACKS_DATA.slice(0, 3)}
              marketingPacks={MARKETING_PACKS_DATA} 
            />
            
            {/* MOVED UP: Testimonials right after pricing to reassure */}
            <TestimonialsSection />

            <section className="py-24 bg-slate-50 border-t border-slate-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold text-slate-900">Pourquoi nous choisir ?</h2>
                     <p className="text-slate-600 mt-2">Plus qu'une agence, un partenaire de croissance.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 text-elvis-blue rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">1</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Expertise LWS</h3>
                        <p className="text-slate-500 leading-relaxed">En tant que partenaire officiel, nous optimisons votre hébergement pour une vitesse et une sécurité maximales.</p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 text-elvis-blue rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">2</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Design Oriénté Vente</h3>
                        <p className="text-slate-500 leading-relaxed">Nous ne faisons pas juste "joli". Nous plaçons les boutons et les appels à l'action là où ils convertissent.</p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 text-elvis-blue rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">3</div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">Support Réactif</h3>
                        <p className="text-slate-500 leading-relaxed">Une question ? Un bug ? Notre équipe basée à Mada et en France vous répond en moins de 2h.</p>
                     </div>
                  </div>
               </div>
            </section>

            <CTASection />
            <FAQSection />
          </>
        )}

        {currentPage === 'web' && (
           <WebCreationPage 
              onOrder={handleViewProduct} 
              packs={WEB_PACKS_DATA}
            />
        )}

        {currentPage === 'marketing' && (
           <MarketingPage 
              onOrder={handleViewProduct} 
              packs={MARKETING_PACKS_DATA}
            />
        )}

        {currentPage === 'portfolio' && (
           <PortfolioPage 
              onNavigateContact={handleContactClick}
            />
        )}

        {currentPage === 'contact' && (
           <ContactPage />
        )}

        {currentPage === 'product_details' && selectedPack && (
            <ProductDetailsPage 
                pack={selectedPack} 
                onBack={() => setCurrentPage(selectedPack.category === 'marketing' ? 'marketing' : 'web')} 
                onOrder={handleOrderClick} 
            />
        )}

        {currentPage === 'mentions' && (
            <MentionsLegales onBack={() => setCurrentPage('home')} onContact={() => setCurrentPage('contact')} />
        )}

        {currentPage === 'cgu' && (
            <CGU onBack={() => setCurrentPage('home')} onContact={() => setCurrentPage('contact')} />
        )}

        {currentPage === 'privacy' && (
            <PrivacyPolicy onBack={() => setCurrentPage('home')} onContact={() => setCurrentPage('contact')} />
        )}

      </main>

      <Footer onNavigate={setCurrentPage} />

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pack={selectedPack}
        initialPrice={calculatedPrice}
        initialOptions={selectedOptions}
      />
    </div>
  );
}

export default App;