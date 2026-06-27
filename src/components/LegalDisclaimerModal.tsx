"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LegalDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4"
        aria-label="Note Legali e Proprietà Intellettuale"
      >
        Note Legali e Proprietà Intellettuale
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center px-4 py-8 md:py-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel p-8 md:p-12 rounded-2xl shadow-2xl"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-3 text-foreground/50 hover:text-gold transition-colors z-20"
                  aria-label="Chiudi"
                >
                  <X size={28} />
                </button>

                <div className="flex flex-col mb-8 text-center mt-4">
                  <h2 className="text-2xl md:text-3xl font-serif text-gradient-gold mb-2">Note Legali e Proprietà Intellettuale</h2>
                </div>

                <div className="space-y-8 text-foreground/80 leading-relaxed font-light text-left md:text-center">
                  <p className="font-serif text-lg text-gold">
                    2025 Wang - Officina Sacra™ Tutti i diritti riservati.
                  </p>
                  
                  <p>
                    Questo testo è parte integrante della proprietà intellettuale di Gerardo Stanzione.<br className="hidden md:block"/>
                    È vietata la riproduzione, anche parziale, senza consenso scritto dell'autore.<br className="hidden md:block"/>
                    Le entità, i nomi e le narrazioni qui presenti sono frutto di un'opera originale,<br className="hidden md:block"/>
                    nata da un crogiolo di letture, esperienze e intuizioni,<br className="hidden md:block"/>
                    filtrate attraverso il sentire e l'alchimia interiore dell'autore.<br className="hidden md:block"/>
                    Esse sono registrate nella memoria della materia e custodite nel tempo.
                  </p>

                  <p>
                    I modelli <strong className="text-gold">IperGenesa™</strong> e <strong className="text-gold">Unisfera™</strong> sono depositati all'UIBM. Tutti i diritti riservati.<br className="hidden md:block"/>
                    Sono opere di design geometrico originali nella concezione e nell'applicazione,<br className="hidden md:block"/>
                    ideate e realizzate da Gerardo Stanzione, nell'ambito del progetto Wang - Officina Sacra™,<br className="hidden md:block"/>
                    reinterpretando ed integrando in modo autonomo e innovativo strutture geometriche precedenti.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
