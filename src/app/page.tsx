"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const journeyLinks = [
  { href: "/dispositivi", label: "Dispositivi" },
  { href: "/materiali", label: "Materiali" },
  { href: "/libro", label: "Libro" },
  { href: "/chi-sono", label: "Chi sono?" },
  { href: "/realizzazioni", label: "Realizzazioni" },
] as const;

export default function Home() {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const journeySectionRef = useRef<HTMLElement>(null);

  const handleToggleJourney = () => {
    const nextOpen = !isJourneyOpen;
    setIsJourneyOpen(nextOpen);
    if (nextOpen) {
      setTimeout(() => {
        journeySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-10 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/hero_bg_clean.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/0" />

        <motion.div
          className="relative z-10 container mx-auto text-center flex flex-col items-center glass-panel p-8 sm:p-12 rounded-2xl max-w-4xl"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.75)" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-light max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            In uno spazio limitato, in cui regnano il silenzio e l’ascolto, vengono al mondo creazioni nate per essere un Ponte verso l’Infinito.
          </p>

          <Link
            href="#manifesto"
            className="group flex flex-col items-center gap-4 text-gold hover:text-white transition-colors duration-500"
            aria-label="Scorri fino al Manifesto"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-gradient-gold uppercase tracking-wider md:tracking-widest leading-tight">
              Benvenuti <br className="sm:hidden" /> nell’Officina Sacra.
            </h1>
            <motion.svg
              className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m0 0l-6-6m6 6l6-6" />
            </motion.svg>
          </Link>
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 md:py-28 relative flex items-center justify-center px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto w-full text-center font-serif text-xl md:text-3xl leading-[1.7] text-foreground/80 italic">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p>Non è solo Artigianato.</p>
            <p>Non è solo Spiritualità.</p>
            <p>Ogni gesto è un Rito.</p>
            <p>Ogni forma è un Codice.</p>
            <p className="text-gradient-gold">Ogni creazione è un Messaggio.</p>
          </motion.div>

          <div className="w-16 h-px bg-gold/40 mx-auto my-10" aria-hidden="true" />

          <motion.div
            className="space-y-6 text-lg md:text-2xl leading-[1.7]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-gold">Ogni strumento è un’offerta silenziosa.</p>
            <p>
              Oggetti realizzati a mano, con Presenza e Intenzione, ispirati alle Tradizioni simboliche e ai Percorsi interiori.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inizia il Viaggio */}
      <section
        ref={journeySectionRef}
        className="min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center py-12 px-6 overflow-hidden"
      >
        <div className="w-full max-w-xl mx-auto text-center flex flex-col items-center">
          <button
            type="button"
            onClick={handleToggleJourney}
            aria-expanded={isJourneyOpen}
            aria-controls="inizia-viaggio-menu"
            className="group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 rounded-sm px-4 py-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gradient-gold uppercase tracking-widest transition-all duration-300 group-hover:brightness-125">
              Inizia il viaggio
            </h2>
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/70 group-hover:text-gold transition-colors">
              <span>{isJourneyOpen ? "Chiudi" : "Apri il menù"}</span>
              <motion.svg
                animate={{ rotate: isJourneyOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {isJourneyOpen && (
              <motion.nav
                id="inizia-viaggio-menu"
                aria-label="Menu principale di navigazione"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden w-full"
              >
                <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8">
                  {journeyLinks.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 font-serif text-2xl sm:text-3xl uppercase tracking-[0.22em] text-foreground/85 hover:text-gold transition-colors duration-300 py-1"
                      >
                        <span className="text-gradient-gold group-hover:brightness-125 transition-all">
                          {item.label}
                        </span>
                        <svg
                          className="w-5 h-5 text-gold/70 group-hover:text-gold transition-transform duration-300 group-hover:translate-x-1.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
