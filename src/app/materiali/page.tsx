"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type SectionId = "metallo" | "legno";

type MaterialSection = {
  id: SectionId;
  title: string;
  intro: string;
  planes: {
    title: string;
    text: string;
  }[];
};

const materialSections: MaterialSection[] = [
  {
    id: "metallo",
    title: "Lo Spirito del Metallo",
    intro:
      "Il metallo non è solo materia: è presenza ordinata, concentrazione; è fulmine mineralizzato che percorre linee invisibili. Ogni lega, ogni metallo, porta con sé un carattere sottile: non dorme mai, custodisce, vibra e guida.",
    planes: [
      {
        title: "Piano eterico",
        text: "Nel piano eterico, il metallo è una griglia luminosa e salda. Le sue linee sottili scorrono come vene d’energia cristallizzata, tese e concentrate. È polarizzato: ha un “nord” e un “sud”... Il metallo, in fondo, è fuoco coagulato. Accoglie lo spirito della trasformazione e lo trattiene, come un vaso sacro.",
      },
      {
        title: "Piano astrale",
        text: "Nel piano astrale, il metallo appare come un’essenza compressa, densa di significato emozionale. È specchio dell’Anima: restituisce ciò che lo tocca, ma tramutato. Si presenta come sigillo e scudo: ponte tra impulso e forma, tra sentimento e struttura.",
      },
      {
        title: "Livello mentale",
        text: "A livello mentale, il metallo è pura geometria sacra. È pensiero che si materializza. È l’idea che diviene architettura. Così il metallo resta custode e conduttore: vigile, concentrato, ponte tra impulso e ordine.",
      },
    ],
  },
  {
    id: "legno",
    title: "L’Anima del Legno",
    intro:
      "Il legno non è solo materia: è presenza che vibra, memoria che resiste tra radici e chioma. Ogni tronco, ogni ramo, ogni foglia porta con sé un linguaggio invisibile: il legno parla.",
    planes: [
      {
        title: "Piano eterico",
        text: "Nel piano eterico, il legno è un essere in lenta vibrazione, un respiro trattenuto dalla Terra. Ogni fibra è un canale dove l’acqua ha lasciato tracce del suo percorso: un barometro silenzioso, un sensore del tempo e del tocco.",
      },
      {
        title: "Piano astrale",
        text: "Nel piano astrale, il legno è un archivio emotivo: conserva tutto ciò che ha vissuto. È empatico, poroso all’Anima. La linfa diventa il nucleo silenzioso della memoria del legno.",
      },
      {
        title: "Dimensione mentale e pensiero sottile",
        text: "Il legno, nella dimensione mentale, è l’archetipo della coerenza vivente. È la mente vegetale, quella che non pensa in linee ma in anelli. Resta custode delle vibrazioni umane e terrestri: lento, denso, pieno di storia, un ponte tra la materia e l’Anima.",
      },
    ],
  },
];

export default function MaterialiPage() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);

  return (
    <div className="relative z-10 min-h-screen overflow-hidden pb-32 pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[36rem]">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <header className="mb-20 text-center md:mb-24">
          <div aria-hidden="true" className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <h1 className="text-gradient-gold mb-6 font-serif text-5xl uppercase tracking-widest md:text-7xl">
            Materiali adoperati
          </h1>
          <div className="mx-auto max-w-2xl space-y-5 font-serif text-xl italic font-light leading-relaxed text-foreground/85 md:text-2xl">
            <p>
              Scelgo i materiali per ciò che sanno evocare in me
              <br />
              e per come risuonano con le Forze che intendo richiamare.
            </p>
            <p>
              Ogni materiale ha un&rsquo;Anima,
              <br />
              un&rsquo;impronta sottile che va oltre la forma.
            </p>
            <p>È la loro sostanza a parlarmi.</p>
            <p className="text-gold/90">Basta saper ascoltare.</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl space-y-8">
          {materialSections.map((section) => {
            const isOpen = openSection === section.id;
            const buttonId = `${section.id}-pulsante`;
            const contentId = `${section.id}-contenuto`;

            return (
              <section
                key={section.id}
                className="glass-panel rounded-sm border border-gold/10 p-8 transition-colors duration-500 hover:border-gold/30 md:p-12"
              >
                <h2 className="font-serif">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() =>
                      setOpenSection((currentSection) =>
                        currentSection === section.id ? null : section.id,
                      )
                    }
                    className="group flex w-full items-center gap-4 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent md:gap-6"
                  >
                    <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold/50 transition-all duration-300 group-hover:w-12 md:w-12" />
                    <span className="text-gradient-gold flex-1 text-2xl uppercase tracking-widest md:text-3xl">
                      {section.title}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative block h-5 w-5 shrink-0"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold/70" />
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold/70" />
                    </motion.span>
                  </button>
                </h2>

                <div className="mt-8 border-t border-gold/10 pt-8">
                  <p className="text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
                    {section.intro}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="contenuto"
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-8 pb-2 pt-8">
                          {section.planes.map((plane) => (
                            <article key={plane.title} className="border-l border-gold/20 pl-6">
                              <h3 className="gold-text mb-3 font-serif text-xl tracking-wide md:text-2xl">
                                {plane.title}
                              </h3>
                              <p className="text-lg font-light leading-relaxed text-foreground/75">
                                {plane.text}
                              </p>
                            </article>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
