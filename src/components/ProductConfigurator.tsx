"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const METALS = ["Rame", "Alluminio", "Ferro", "Ferro brunito", "Ottone", "Bronzo", "Acciaio inossidabile", "Acciaio Corten", "Piombo", "Ghisa", "Zinco"];
const WOODS = ["Quercia", "Noce", "Faggio", "Castagno", "Ontano", "Salice", "Bambù", "Balsa", "Betulla", "Abete", "Ciliegio", "Teak", "Tiglio", "Acero", "Olmo", "Frassino"];

export default function ProductConfigurator({ product }: { product: any }) {
  const [polarity, setPolarity] = useState<"yin" | "yang">("yin");
  const [dimensionIdx, setDimensionIdx] = useState(0);
  const [materialCategory, setMaterialCategory] = useState<"Legno" | "Metallo">("Legno");
  const [materialType, setMaterialType] = useState<string>(WOODS[0]);

  const selectedDimension = product.dimensions[dimensionIdx];
  const activePolarity = product.polarity[polarity];
  const materialList = materialCategory === "Legno" ? WOODS : METALS;

  // Generic WhatsApp number for now
  const whatsappNumber = "390000000000";
  const whatsappMessage = encodeURIComponent(`Salve, vorrei richiedere informazioni sul dispositivo ${product.name}.\nConfigurazione:\n- Polarità: ${activePolarity.name}\n- Dimensione: ${selectedDimension.size}\n- Materiale: ${materialCategory} (${materialType})`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cat = e.target.value as "Legno" | "Metallo";
    setMaterialCategory(cat);
    setMaterialType(cat === "Legno" ? WOODS[0] : METALS[0]);
  };

  return (
    <div className="flex flex-col gap-10">
      
      {/* 1. Polarità */}
      <div className="space-y-4">
        <label className="text-sm font-serif uppercase tracking-widest text-gold block">1. Scegli la Polarità</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setPolarity("yin")}
            className={`w-full p-4 border transition-all duration-300 text-left rounded-sm ${polarity === "yin" ? "border-gold text-white shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-gold/5" : "border-white/10 text-white/50 hover:text-white"}`}
          >
            <h4 className="font-serif text-lg text-gold mb-1">Yin</h4>
            <p className="text-xs uppercase tracking-wider">{product.polarity.yin.name}</p>
          </button>
          <button
            onClick={() => setPolarity("yang")}
            className={`w-full p-4 border transition-all duration-300 text-left rounded-sm ${polarity === "yang" ? "border-gold text-white shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-gold/5" : "border-white/10 text-white/50 hover:text-white"}`}
          >
            <h4 className="font-serif text-lg text-gold mb-1">Yang</h4>
            <p className="text-xs uppercase tracking-wider">{product.polarity.yang.name}</p>
          </button>
        </div>
        
        {/* Descrizione dinamica polarità */}
        <AnimatePresence mode="wait">
          <motion.div
            key={polarity}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="p-4 bg-white/5 border-l-2 border-gold/50 rounded-r-md mt-2"
          >
            <p className="text-white/80 text-sm leading-relaxed">{activePolarity.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Dimensione */}
      <div className="space-y-4">
        <label className="text-sm font-serif uppercase tracking-widest text-gold block">2. Scegli la Dimensione</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.dimensions.map((dim: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setDimensionIdx(idx)}
              className={`w-full p-3 border transition-all duration-300 text-left flex flex-col gap-1 rounded-sm ${
                dimensionIdx === idx 
                  ? "border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] bg-gold/5" 
                  : "border-white/10 text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              <span className="font-medium text-lg">{dim.size}</span>
              <span className="text-xs text-white/50 uppercase tracking-wide">{dim.scope}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Materiale */}
      <div className="space-y-4">
        <label className="text-sm font-serif uppercase tracking-widest text-gold block">3. Scegli il Materiale</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="flex flex-col gap-2">
            <span className="text-xs text-white/50 uppercase">Categoria</span>
            <div className="relative">
              <select 
                value={materialCategory}
                onChange={handleCategoryChange}
                className="w-full bg-[#0B0C10] border border-white/20 text-white p-3 rounded-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold appearance-none"
              >
                <option value="Legno">Legno</option>
                <option value="Metallo">Metallo</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs text-white/50 uppercase">Essenza / Lega</span>
            <div className="relative">
              <select 
                value={materialType}
                onChange={(e) => setMaterialType(e.target.value)}
                className="w-full bg-[#0B0C10] border border-white/20 text-white p-3 rounded-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold appearance-none"
              >
                {materialList.map(mat => (
                  <option key={mat} value={mat}>{mat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="pt-8 border-t border-white/10">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 border border-gold/50 rounded-sm text-gold hover:bg-gold hover:text-black transition-colors duration-500 font-serif tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.1)]"
        >
          <span>Richiedi Configurazione</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
