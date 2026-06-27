"use client";

import Link from "next/link";
import products from "@/data/products.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_bg_clean.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/0" />
        
        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center glass-panel p-12 rounded-2xl max-w-4xl mt-32"
          style={{ backgroundColor: 'rgba(10, 10, 10, 0.75)' }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-wider md:tracking-widest leading-tight">
            Benvenuti <br /> nell'officina sacra.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto mb-12">
            In uno spazio limitato, dove regna il silenzio e l'ascolto.
          </p>
          <Link 
            href="#il-viaggio" 
            className="group flex flex-col items-center gap-4 text-gold hover:text-white transition-colors duration-500"
          >
            <span className="text-sm uppercase tracking-widest font-serif gold-text">Inizia il Viaggio</span>
            <div className="w-px h-16 bg-gold group-hover:bg-white transition-colors duration-500" />
          </Link>
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 md:py-40 relative flex items-center justify-center px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center font-serif text-lg md:text-2xl leading-loose md:leading-loose text-foreground/80 italic space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            In uno spazio limitato,<br/>
            in cui regna il silenzio e l'ascolto,<br/>
            nascono creazioni che hanno la Missione di essere un Ponte verso l'Infinito.
          </p>
          <p>
            Oggetti realizzati a mano,<br/>
            con Presenza ed Intenzione,<br/>
            ispirati alle Tradizioni simboliche ed ai Percorsi interiori.
          </p>
          <p>
            Ogni strumento è un'offerta silenziosa.
          </p>
          <p>
            non è solo Artigianato,<br/>
            non è solo Spiritualità.
          </p>
          <p>
            Ogni gesto è un Rito,<br/>
            ogni forma è un Codice<br/>
            ogni oggetto è un Messaggio.
          </p>
          <p className="text-xl md:text-3xl text-gold mt-12 pt-8">
            Benvenuti nell'Officina Sacra.
          </p>
        </motion.div>
      </section>

      {/* Il Viaggio dell'Eroe (Scroll-telling) */}
      <section id="il-viaggio" className="py-32 md:py-48">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="min-h-screen flex items-center py-32"
          >
            <div className={`container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              
              {/* Text Content */}
              <motion.div 
                className={`flex flex-col gap-8 glass-panel p-10 rounded-2xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gold font-serif text-xl gold-text">Capitolo {index + 1}</span>
                  <div className="h-px bg-gold/30 flex-grow" />
                </div>
                
                {/* Mobile Image */}
                <div className="md:hidden relative aspect-square flex items-center justify-center py-4 w-full max-w-[260px] mx-auto">
                  <div className="absolute inset-0 bg-gold/5 rounded-full blur-2xl opacity-30 mix-blend-screen" />
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    {product.image && (
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain drop-shadow-gold"
                      />
                    )}
                  </motion.div>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif text-gradient-gold">{product.name}</h2>
                <h3 className="text-2xl text-gold italic font-serif mb-4">{product.plane}</h3>
                
                <p className="text-foreground/80 leading-relaxed font-light text-xl">
                  {getJourneyDescription(product.id)}
                </p>

                <p className="text-foreground/60 text-base border-l-2 border-gold/40 pl-6 my-6 italic">
                  {product.function}
                </p>

                <Link 
                  href={`/dispositivi/${product.slug}`}
                  className="inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase tracking-widest text-sm mt-6 group w-fit"
                >
                  Scopri il Dispositivo
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </motion.div>

              {/* Visual Content */}
              <motion.div 
                className="hidden md:flex relative aspect-square items-center justify-center p-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl opacity-30 mix-blend-screen" />
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {product.image && (
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={600}
                      height={600}
                      className="object-contain drop-shadow-gold"
                    />
                  )}
                </motion.div>
              </motion.div>
              
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

function getJourneyDescription(id: string) {
  switch (id) {
    case "genesa-crystal":
      return "L'Eroe si affaccia al Mondo. La base strutturale dell'esistenza, il radicamento alla Terra e l'armonizzazione della forma pura.";
    case "pentasfera":
      return "L'Eroe intraprende il Viaggio. Entrando nel mare delle emozioni, la Pentasfera trasforma il sentire confuso in chiarezza del cuore, navigando il piano astrale.";
    case "ipergenesa":
      return "L'Eroe lascia le Acque e si inoltra nella regione del Fuoco. La quinta dimensione della mente, pura espressione e visione strategica.";
    case "unisfera":
      return "L'Eroe unisce l'Acqua al Fuoco e giunge al compimento del suo Cammino. La sintesi assoluta dei tre piani, organo vitale dell'essere cosmico unificato.";
    default:
      return "";
  }
}
