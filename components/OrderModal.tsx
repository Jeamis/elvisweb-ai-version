import React, { useState, useEffect } from 'react';
import { X, Check, Server, PenTool, Lock } from 'lucide-react';
import { ServicePack } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  pack: ServicePack | null;
  initialPrice?: number;
  initialOptions?: any;
}

export default function OrderModal({ isOpen, onClose, pack, initialPrice, initialOptions }: OrderModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // If we receive initial options (from product page), we skip the config step or pre-fill it.
  // For better UX, if options are passed, we jump straight to contact (Step 2)
  useEffect(() => {
      if (isOpen && initialOptions) {
          setStep(2);
      } else if (isOpen) {
          setStep(1);
      }
  }, [isOpen, initialOptions]);

  if (!isOpen || !pack) return null;

  const displayPrice = initialPrice || pack.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would submit to backend
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Commander {pack.title}</h3>
            <p className="text-xs text-slate-500">Étape {step === 1 ? '1' : step === 2 ? '2' : '3'} sur 3</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* STEP 1: ONLY if no options were passed (fallback) */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-sm text-slate-600 mb-4">
                Configuration rapide standard. Pour plus d'options, passez par la page produit.
              </div>
              
              <div className="pt-4 border-t flex justify-between items-center">
                <span className="text-slate-500">Total estimé</span>
                <span className="text-2xl font-bold text-elvis-blue">{displayPrice}€</span>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full bg-elvis-blue hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all"
              >
                Continuer
              </button>
            </div>
          )}

          {/* STEP 2: Contact Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4 flex justify-between items-center">
                   <span className="text-sm font-medium text-slate-700">Votre configuration :</span>
                   <span className="font-bold text-elvis-blue text-lg">{displayPrice} €</span>
              </div>

              <div className="text-sm text-slate-600 mb-4">
                Vos coordonnées pour la création du compte client.
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elvis-blue focus:border-transparent outline-none"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email professionnel</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elvis-blue focus:border-transparent outline-none"
                  placeholder="jean@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elvis-blue focus:border-transparent outline-none"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                <Lock size={12} /> Paiement sécurisé via Stripe/PayPal à l'étape suivante.
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => {
                      if(initialOptions) onClose(); // If came from product page, "Back" closes modal to show page
                      else setStep(1);
                  }}
                  className="w-1/3 bg-gray-100 hover:bg-gray-200 text-slate-700 py-3 rounded-lg font-bold transition-all"
                >
                  Retour
                </button>
                <button 
                  type="submit"
                  className="w-2/3 bg-elvis-blue hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all"
                >
                  Valider la commande
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Merci {formData.name} !</h4>
              <p className="text-slate-600 mb-6">
                Votre demande pour le <strong>{pack.title}</strong> a bien été enregistrée.
                <br/>
                <span className="text-sm mt-2 block bg-slate-50 p-2 rounded">Options choisies incluses dans le devis.</span>
              </p>
              <button 
                onClick={onClose}
                className="bg-elvis-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}