"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WangLogoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:border-gold hover:bg-black transition-all duration-300 gold-glow overflow-hidden relative bg-black"
        aria-label="Approfondimento Logo Wang"
      >
        <Image src="/logo_gold.png" alt="Wang Logo" fill className="object-contain p-1.5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
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
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel p-8 md:p-16 rounded-2xl shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-3 text-foreground/50 hover:text-gold transition-colors z-20"
                aria-label="Chiudi"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full border border-gold flex items-center justify-center text-gold mb-6 gold-glow overflow-hidden relative bg-black">
                  <Image src="/logo_gold.png" alt="Wang Logo" fill className="object-contain p-3" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-gradient-gold text-center">Il Sovrano che unisce Cielo e Terra</h2>
              </div>

              <div className="space-y-6 text-foreground/80 leading-relaxed font-light">
                <p>
                  Nella tradizione, l'ideogramma <strong>Wang (王)</strong> rappresenta il Sovrano. Le tre linee orizzontali simboleggiano il Cielo, l'Umanità e la Terra. La linea verticale che le attraversa rappresenta colui che è in grado di unire questi tre mondi.
                </p>
                <p>
                  <em>Wang - Officina Sacra</em> nasce da questa consapevolezza: non si tratta di produrre oggetti, ma di forgiare "Ponti verso l'Infinito". Ogni forma creata all'interno dell'officina rispetta le proporzioni auree e le leggi dell'armonia universale, operando come un dispositivo di risonanza tra le dimensioni spirituali e quelle materiali.
                </p>
                <p>
                  Come descritto nell'Appendice E del libro dell'autore, il passaggio dall'Architettura classica alla comprensione dell'operatività sottile delle forme richiede un salto quantico della coscienza: l'Architetto diventa Artigiano, e l'Artigiano si rivela Cercatore.
                </p>
                <p className="text-gold italic text-center mt-8 text-lg font-serif">
                  "Sono stati necessari molti menhir per giungere a una Cattedrale gotica. Ogni gesto è un Rito, ogni forma è un Codice, ogni oggetto è un Messaggio."
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
