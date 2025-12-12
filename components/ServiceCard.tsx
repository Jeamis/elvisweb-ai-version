import React from 'react';
import { Check, Star } from 'lucide-react';
import { ServicePack } from '../types';

interface ServiceCardProps {
  pack: ServicePack;
  onOrder: (pack: ServicePack) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ pack, onOrder }) => {
  return (
    <div className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300 ${pack.isPopular ? 'border-2 border-elvis-blue shadow-xl scale-105 z-10' : 'border border-gray-100 shadow-md hover:shadow-xl'}`}>
      
      {pack.isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold uppercase py-1 px-4 rounded-full shadow-md flex items-center gap-1">
          <Star size={12} fill="currentColor" /> Choix populaire
        </div>
      )}

      {/* Image Header - Increased height to match reference */}
      <div className="h-48 w-full bg-slate-100 rounded-t-2xl overflow-hidden relative group">
         <img 
            src={pack.image || `https://picsum.photos/seed/${pack.id}/400/200`} 
            alt={pack.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{pack.title}</h3>
        <p className="text-sm text-slate-500 mb-6 min-h-[40px] leading-relaxed">{pack.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-extrabold text-elvis-blue">{pack.price} €</span>
          <span className="text-slate-400 font-medium">{pack.period}</span>
          <div className="text-xs text-slate-400 mt-1 font-medium">Payable en 2x sans frais</div>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {pack.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
              <div className="min-w-[18px] mt-0.5">
                <Check size={18} className="text-green-500" strokeWidth={3} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => onOrder(pack)}
          className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${pack.isPopular ? 'bg-elvis-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
        >
          Configurer mon site
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;