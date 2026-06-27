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
                <h2 className="text-3xl md:text-4xl font-serif text-gradient-gold text-center">Cosa rappresenta il logo dell'Officina Sacra?</h2>
              </div>

              <div className="space-y-6 text-foreground/80 leading-relaxed font-light">
                <p>
                  È la mia personale interpretazione dell'ultimo kanji del termine giapponese ikigai 生き甲斐.
                </p>
                <p>
                  È un racconto racchiuso in pochi tratti.
                </p>
                <p>
                  C'è <strong>un piano di lavoro</strong> sorretto da due assi: il luogo dell'agire nella dualità.<br />
                  Sopra di esso poggia <strong>un oggetto</strong>: la materia su cui si compie il Lavoro umano.
                </p>
                <p>
                  Su di loro aleggia <strong>un'onda</strong> che tende verso l'alto.<br />
                  È l'aspirazione dell'uomo: il desiderio di elevarsi, di cercare senso,<br />
                  di volgere lo sguardo dal mondo orizzontale della necessità<br />
                  al mondo verticale del significato.
                </p>
                <p>
                  Dall'alto scende come risposta <strong>un raggio verticale</strong>:<br />
                  il messaggio cosmico, l'ispirazione, la scintilla che non si fabbrica con le<br />
                  mani ma arriva, quando arriva, come un soffio.
                </p>
                <p>
                  Quando l'onda terrestre e il raggio cosmico si incontrano attraverso il gesto,<br />
                  si apre <strong>un varco</strong> nel confine tra il nostro mondo e le dimensioni superiori.
                </p>
                <p>
                  In quell'istante accade il miracolo:<br />
                  il tavolo diventa altare;<br />
                  l'oggetto si fa offerta — non un manufatto, ma una presenza che trattiene un senso;<br />
                  l'artigiano diventa sacerdote del gesto: colui che opera e custodisce con consapevolezza, con ascolto, con dedizione;<br />
                  l'atto non è più solo lavoro: diventa Sacro Officio.
                </p>
                <p className="mt-8 font-serif text-xl text-gold">
                  Il logo rappresenta quell'incontro trascendente:
                </p>
                <div className="space-y-2 mt-4 text-lg">
                  <p>
                    <strong className="text-gold">Wang</strong> — il sovrano, il pontefice, colui che costruisce ponti tra i Mondi.
                  </p>
                  <p>
                    <strong className="text-gold">Officina Sacra</strong> — il luogo in cui il fare diventa rito.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
