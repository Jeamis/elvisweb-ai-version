import React from 'react';
import { CheckCircle, ShieldCheck, Star, ArrowRight, PlayCircle, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-elvis-light -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animate"></div>
      <div className="absolute top-40 right-80 w-72 h-72 bg-elvis-ocean rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob-animate" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-elvis-blue text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <ShieldCheck size={16} /> Partenaire Officiel LWS
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Ne perdez plus de clients. <br/>
              <span className="gradient-text">Votre site pro en 7j.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Transformez vos visiteurs en acheteurs avec un design moderne et performant. Agence experte WordPress, nous livrons des résultats, pas juste du code.
            </p>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-4 mb-8">
               <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+50</div>
               </div>
               <div className="flex flex-col">
                  <div className="flex text-elvis-accent">
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                     <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">4.9/5 par nos clients</span>
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#packs-web" className="group flex items-center justify-center gap-2 px-8 py-4 bg-elvis-blue hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                Voir les offres
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 rounded-xl font-bold text-lg shadow-sm transition-all">
                <PlayCircle size={20} />
                Nos réalisations
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle className="text-green-500" size={16} /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="text-green-500" size={16} /> Paiement sécurisé</span>
            </div>
          </div>

          {/* Right Column: Dynamic Visual */}
          <div className="relative hidden lg:block perspective-1000">
             {/* Main Image "Mockup" */}
             <div className="relative z-20 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard Analytics" 
                  className="rounded-xl w-full h-auto object-cover"
                />
                
                {/* Floating Card 1: Growth */}
                <div className="absolute -left-12 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                   <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <TrendingUp size={24} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Croissance</p>
                      <p className="text-lg font-bold text-slate-800">+125% Ventes</p>
                   </div>
                </div>

                {/* Floating Card 2: Satisfaction */}
                 <div className="absolute -right-6 top-8 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1 animate-pulse">
                   <div className="flex -space-x-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                   </div>
                   <p className="text-xs font-bold text-slate-700">Top Agence</p>
                </div>
             </div>
             
             {/* Decorative Elements behind */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-elvis-blue/10 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}