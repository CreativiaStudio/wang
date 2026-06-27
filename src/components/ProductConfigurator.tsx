"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MATERIALS = {
  Metallo: {
    name: "Lo Spirito del Metallo",
    description: "Presenza ordinata, energia concentrata, fulmine mineralizzato che percorre linee invisibili. Il metallo è custode e conduttore: vigile, concentrato, ponte tra impulso e struttura, tra l'idea e la sua realizzazione."
  },
  Legno: {
    name: "L'Anima del Legno",
    description: "Non è solo materia: è presenza che vibra, memoria che resiste tra radici e chioma. Il legno resta custode delle vibrazioni umane e terrestri: lento, denso, pieno di storia, un ponte tra la materia e l'anima."
  }
};

const UNISFERA_COMBINATIONS = [
  "Tutto Legno (Pentasfera in Legno + IperGenesa in Legno)",
  "Tutto Metallo (Pentasfera in Metallo + IperGenesa in Metallo)",
  "Legno + Metallo (Pentasfera in Legno + IperGenesa in Metallo)",
  "Metallo + Legno (Pentasfera in Metallo + IperGenesa in Legno)"
];

export default function ProductConfigurator({ product }: { product: any }) {
  const [dimensionIdx, setDimensionIdx] = useState(0);
  const [materialCategory, setMaterialCategory] = useState<"Legno" | "Metallo">("Metallo");
  const [unisferaCombination, setUnisferaCombination] = useState(UNISFERA_COMBINATIONS[0]);

  const isUnisfera = product.slug === "unisfera";
  const selectedDimension = product.dimensions[dimensionIdx];
  const activeMaterial = MATERIALS[materialCategory];

  // Generic WhatsApp number for now
  const whatsappNumber = "390000000000";
  const whatsappMessage = isUnisfera
    ? encodeURIComponent(`Salve, vorrei richiedere informazioni sul dispositivo ${product.name}.\nConfigurazione:\n- Dimensione: ${selectedDimension.size}\n- Combinazione Materica: ${unisferaCombination}`)
    : encodeURIComponent(`Salve, vorrei richiedere informazioni sul dispositivo ${product.name}.\nConfigurazione:\n- Dimensione: ${selectedDimension.size}\n- Essenza: ${activeMaterial.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-10">
      
      {/* 1. Dimensione */}
      <div className="space-y-4">
        <label className="text-sm font-serif uppercase tracking-widest text-gold block">1. Scegli la Dimensione</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.dimensions.map((dim: any, idx: number) => (
            <div key={idx} className="relative group">
              <button
                onClick={() => setDimensionIdx(idx)}
                className={`w-full p-4 border transition-all duration-300 text-left flex flex-col gap-1 rounded-sm ${
                  dimensionIdx === idx 
                    ? "border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] bg-gold/5" 
                    : "border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium text-lg">{dim.size}</span>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-xs text-white/50 uppercase tracking-wide">{dim.scope}</span>
              </button>
              
              {/* Custom CSS Tooltip */}
              <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-[#0B0C10] border border-gold/30 text-white/90 text-xs leading-relaxed rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-none">
                {dim.description}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-solid border-t-[#0B0C10] border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 border-solid border-t-gold/30 border-t-[9px] border-x-transparent border-x-[9px] border-b-0 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Materiale / Combinazione */}
      <div className="space-y-4">
        <label className="text-sm font-serif uppercase tracking-widest text-gold block">
          {isUnisfera ? "2. Combinazione Materica" : "2. L'Essenza (Materiale)"}
        </label>
        
        {isUnisfera ? (
          <>
            <div className="relative mt-2">
              <select 
                value={unisferaCombination}
                onChange={(e) => setUnisferaCombination(e.target.value)}
                className="w-full bg-[#0B0C10] border border-white/20 text-white p-4 rounded-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold appearance-none font-light"
              >
                {UNISFERA_COMBINATIONS.map(combo => (
                  <option key={combo} value={combo}>{combo}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* UX Note Unisfera */}
            <p className="text-white/70 text-sm leading-relaxed border-l-2 border-gold/50 pl-4 mt-6 italic font-light">
              "L'Unisfera è un portale complesso che fonde la gestione delle emozioni (Pentasfera) e l'ordine del pensiero (IperGenesa). A differenza delle altre Presenze, qui il materiale è una relazione tra vibrazioni. Scegli la dimensione ideale per il tuo spazio e decidi se mantenere un'unica natura materica o se far dialogare lo Spirito del Metallo con l'Anima del Legno."
            </p>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setMaterialCategory("Metallo")}
                className={`w-full p-4 border transition-all duration-300 text-left rounded-sm ${materialCategory === "Metallo" ? "border-gold text-white shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-gold/5" : "border-white/10 text-white/50 hover:text-white"}`}
              >
                <h4 className="font-serif text-lg text-gold mb-1">Metallo</h4>
                <p className="text-xs uppercase tracking-wider">{MATERIALS.Metallo.name}</p>
              </button>
              <button
                onClick={() => setMaterialCategory("Legno")}
                className={`w-full p-4 border transition-all duration-300 text-left rounded-sm ${materialCategory === "Legno" ? "border-gold text-white shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-gold/5" : "border-white/10 text-white/50 hover:text-white"}`}
              >
                <h4 className="font-serif text-lg text-gold mb-1">Legno</h4>
                <p className="text-xs uppercase tracking-wider">{MATERIALS.Legno.name}</p>
              </button>
            </div>
            
            {/* Descrizione dinamica materiale */}
            <AnimatePresence mode="wait">
              <motion.div
                key={materialCategory}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white/5 border-l-2 border-gold/50 rounded-r-md mt-2"
              >
                <p className="text-white/80 text-sm leading-relaxed italic">"{activeMaterial.description}"</p>
              </motion.div>
            </AnimatePresence>

            {/* UX Note Standard */}
            <p className="text-white/50 text-xs leading-relaxed border-l-2 border-white/10 pl-4 mt-6">
              <strong className="text-white/70 font-normal">Ogni materia ha un'Anima, un'impronta sottile che va oltre la forma.</strong><br />
              Scegliendo il Legno o il Metallo ci indichi la via; l'essenza specifica o la lega più adatta a te verrà definita insieme all'artigiano dopo l'ordine, in base alla risonanza e alle tue necessità.
            </p>
          </>
        )}
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
