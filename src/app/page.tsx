"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const journeyLinks = [
  { href: "/dispositivi", label: "Dispositivi" },
  { href: "/materiali", label: "Materiali" },
  { href: "/libro", label: "Libro" },
  { href: "/chi-sono", label: "Chi sono?" },
  { href: "/realizzazioni", label: "Realizzazioni" },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_bg_clean.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/0" />

        <motion.div
          className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center glass-panel p-12 rounded-2xl max-w-4xl mt-32"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.75)" }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-wider md:tracking-widest leading-tight">
            Benvenuti <br /> nell’Officina Sacra.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto mb-12">
            In uno spazio limitato, in cui regnano il silenzio e l’ascolto, vengono al mondo creazioni nate per essere un Ponte verso l’Infinito.
          </p>
          <Link
            href="#manifesto"
            aria-label="Scorri al manifesto"
            className="group flex flex-col items-center gap-4 text-gold hover:text-white transition-colors duration-500"
          >
            <span className="text-sm uppercase tracking-widest font-serif text-gold group-hover:text-white transition-colors duration-500">Scorri</span>
            <svg
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-y-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m0 0l-6-6m6 6l6-6" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="pt-24 pb-12 md:pt-32 md:pb-16 relative flex items-center justify-center px-6 scroll-mt-24">
        <motion.div
          className="max-w-3xl mx-auto text-center font-serif text-lg md:text-2xl leading-[1.6] text-foreground/80 italic space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            Non è solo Artigianato.<br />
            Non è solo Spiritualità.<br />
            Ogni gesto è un Rito.<br />
            Ogni forma è un Codice.<br />
            Ogni creazione è un Messaggio.
          </p>
          <p>
            Ogni strumento è un’offerta silenziosa.<br />
            Oggetti realizzati a mano, con Presenza e Intenzione, ispirati alle Tradizioni simboliche e ai Percorsi interiori.
          </p>
        </motion.div>
      </section>

      {/* Inizia il viaggio */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-gradient-gold text-center uppercase tracking-wider">Inizia il viaggio</h2>
            <div className="w-px h-16 bg-gold my-10" aria-hidden="true" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {journeyLinks.map((link, index) => (
              <motion.div
                key={link.href}
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link
                  href={link.href}
                  className="group glass-panel thin-divider gold-glow flex flex-col items-center justify-center gap-8 h-full min-h-48 p-8 rounded-2xl text-center text-gold hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  <span className="font-serif text-xl uppercase tracking-widest text-gradient-gold">{link.label}</span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
