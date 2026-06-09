"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Dimension {
  size: string;
  scope: string;
}

interface ProductSizeSelectorProps {
  productName: string;
  dimensions: Dimension[];
}

export default function ProductSizeSelector({ productName, dimensions }: ProductSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<Dimension>(dimensions[0]);

  // Generic WhatsApp number for now
  const whatsappNumber = "390000000000";
  const whatsappMessage = encodeURIComponent(`Salve, vorrei richiedere informazioni sul dispositivo ${productName}, dimensione ${selectedSize.size}.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h3 className="font-serif text-xl text-foreground/80 tracking-widest uppercase">Dimensioni e Risonanza</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {dimensions.map((dim) => (
            <button
              key={dim.size}
              onClick={() => setSelectedSize(dim)}
              className={`w-full relative px-4 py-3 border transition-all duration-300 text-sm ${
                selectedSize.size === dim.size 
                  ? "glass-panel border-gold text-gold gold-glow" 
                  : "border-white/10 text-foreground/60 hover:text-foreground gold-glow"
              }`}
            >
              {selectedSize.size === dim.size && (
                <motion.div 
                  layoutId="activeSize"
                  className="absolute inset-0 bg-gold/10"
                  transition={{ duration: 0.3 }}
                />
              )}
              {dim.size}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-panel p-10 rounded-sm">
        <p className="text-xs text-foreground/50 uppercase tracking-widest mb-1">Campo d'Azione</p>
        <p className="text-lg font-serif text-foreground/90">{selectedSize.scope}</p>
      </div>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 glass-panel gold-glow text-gradient-gold hover:bg-white/5 transition-colors duration-500 font-serif tracking-widest uppercase"
      >
        <span>Richiedi Informazioni</span>
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </a>
    </div>
  );
}
