"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProductFunction = {
  title: string;
  description: string;
};

type ProductDimension = {
  size: string;
  scope: string;
  points: string[];
};

type Product = {
  name: string;
  functions: ProductFunction[];
  dimensions: ProductDimension[];
};

export default function ProductConfigurator({ product }: { product: Product }) {
  const [dimensionIdx, setDimensionIdx] = useState(0);
  const [isFunctionsOpen, setIsFunctionsOpen] = useState(false);
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(false);

  const selectedDimension = product.dimensions[dimensionIdx];

  // Generic WhatsApp number for now
  const whatsappNumber = "390000000000";
  const whatsappMessage = encodeURIComponent(
    `Salve, vorrei richiedere informazioni sul dispositivo ${product.name}.\nConfigurazione:\n- Dimensione: ${selectedDimension.size}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-6">
      {/* Funzioni */}
      <section className="overflow-hidden rounded-sm border border-gold/30 bg-[#0f1014]">
        <button
          type="button"
          onClick={() => setIsFunctionsOpen((isOpen) => !isOpen)}
          aria-expanded={isFunctionsOpen}
          aria-controls="funzioni-panel"
          className="flex w-full items-center justify-between gap-4 p-5 text-left text-gold transition-colors duration-300 hover:bg-gold/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-gold"
        >
          <span className="font-serif text-lg uppercase tracking-widest">Funzioni</span>
          <motion.svg
            animate={{ rotate: isFunctionsOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="h-5 w-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {isFunctionsOpen && (
            <motion.div
              id="funzioni-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="space-y-5 border-t border-gold/20 p-5">
                {product.functions.map((functionItem) => (
                  <li key={functionItem.title} className="border-l border-gold/40 pl-4">
                    <h3 className="font-serif text-base text-gold">{functionItem.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{functionItem.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Dimensioni */}
      <section className="overflow-hidden rounded-sm border border-gold/30 bg-[#0f1014]">
        <button
          type="button"
          onClick={() => setIsDimensionsOpen((isOpen) => !isOpen)}
          aria-expanded={isDimensionsOpen}
          aria-controls="dimensioni-panel"
          className="flex w-full items-center justify-between gap-4 p-5 text-left text-gold transition-colors duration-300 hover:bg-gold/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-gold"
        >
          <span className="font-serif text-lg uppercase tracking-widest">Dimensioni</span>
          <motion.svg
            animate={{ rotate: isDimensionsOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="h-5 w-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {isDimensionsOpen && (
            <motion.div
              id="dimensioni-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 border-t border-gold/20 p-5">
                {product.dimensions.map((dimension, idx) => {
                  const isSelected = dimensionIdx === idx;

                  return (
                    <button
                      key={dimension.size}
                      type="button"
                      onClick={() => setDimensionIdx(idx)}
                      aria-pressed={isSelected}
                      className={`w-full rounded-sm border p-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                        isSelected
                          ? "border-gold bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                          : "border-white/10 hover:border-gold/50 hover:bg-white/[0.02]"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className={`font-serif text-lg ${isSelected ? "text-gold" : "text-white"}`}>
                          {dimension.size}
                        </span>
                        {isSelected && (
                          <svg
                            className="h-5 w-5 shrink-0 text-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className={`mt-1 block text-xs uppercase tracking-wide ${isSelected ? "text-gold/70" : "text-white/50"}`}>
                        {dimension.scope}
                      </span>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70 marker:text-gold/60">
                        {dimension.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

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
