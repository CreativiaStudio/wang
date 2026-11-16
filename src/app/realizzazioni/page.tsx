"use client";

import { useEffect, useState } from "react";

const realizzazioni = [
  {
    src: "/Genesa_render.jpg",
    titolo: "Genesa",
    didascalia: "Geometria, equilibrio e armonia nella materia.",
    alt: "Realizzazione Genesa di Wang Officina Sacra",
  },
  {
    src: "/Pentasfera_render.jpg",
    titolo: "Pentasfera",
    didascalia: "L’intreccio della forma, il respiro dello spazio.",
    alt: "Realizzazione Pentasfera di Wang Officina Sacra",
  },
  {
    src: "/IperGenesa_render.jpg",
    titolo: "IperGenesa",
    didascalia: "Una geometria che si apre a nuove dimensioni.",
    alt: "Realizzazione IperGenesa di Wang Officina Sacra",
  },
  {
    src: "/Unisfera_render.jpg",
    titolo: "Unisfera",
    didascalia: "Unità e presenza in un dialogo di linee essenziali.",
    alt: "Realizzazione Unisfera di Wang Officina Sacra",
  },
];

export default function RealizzazioniPage() {
  const [indiceSelezionato, setIndiceSelezionato] = useState<number | null>(null);

  useEffect(() => {
    if (indiceSelezionato === null) return;

    const overflowPrecedente = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const gestisciTastiera = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndiceSelezionato(null);
      }
      if (event.key === "ArrowLeft") {
        setIndiceSelezionato((indice) =>
          indice === null ? null : (indice - 1 + realizzazioni.length) % realizzazioni.length,
        );
      }
      if (event.key === "ArrowRight") {
        setIndiceSelezionato((indice) =>
          indice === null ? null : (indice + 1) % realizzazioni.length,
        );
      }
    };

    window.addEventListener("keydown", gestisciTastiera);

    return () => {
      document.body.style.overflow = overflowPrecedente;
      window.removeEventListener("keydown", gestisciTastiera);
    };
  }, [indiceSelezionato]);

  const operaSelezionata =
    indiceSelezionato === null ? null : realizzazioni[indiceSelezionato];

  return (
    <main className="min-h-screen bg-background pb-32 pt-40 text-foreground">
      <div className="container mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-20 max-w-4xl text-center md:mb-24">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#d4af37]/80">
            Opere manifeste
          </p>
          <h1 className="mb-7 font-serif text-5xl uppercase tracking-widest text-gradient-gold md:text-7xl">
            Realizzazioni
          </h1>
          <div className="mx-auto mb-8 h-px w-24 bg-[#d4af37]/50" />
          <p className="text-lg font-light leading-relaxed text-foreground/75 md:text-xl">
            La materia manifestata: fotografie reali di creazioni collocate in spazi
            abitativi, giardini e luoghi di pratica.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {realizzazioni.map((opera, indice) => (
            <button
              key={opera.src}
              type="button"
              onClick={() => setIndiceSelezionato(indice)}
              className="group overflow-hidden border border-[#d4af37]/20 bg-black/20 text-left shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/60 hover:shadow-[#d4af37]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              aria-label={`Ingrandisci la fotografia: ${opera.titolo}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={opera.src}
                  alt={opera.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/60 bg-black/50 text-[#d4af37] opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="6" />
                    <path d="m16 16 4 4M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
              <span className="block border-t border-[#d4af37]/15 px-6 py-6 md:px-8">
                <span className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-2xl tracking-wide text-gradient-gold md:text-3xl">
                    {opera.titolo}
                  </span>
                  <span className="text-xs tracking-[0.3em] text-foreground/35">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="block font-light leading-relaxed text-foreground/65">
                  {opera.didascalia}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-5 text-center md:mt-20">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/35" />
          <p className="text-sm font-light italic tracking-wide text-foreground/45">
            Nuove fotografie dal laboratorio sono in arrivo.
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/35" />
        </div>
      </div>

      {operaSelezionata && indiceSelezionato !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-titolo"
          onClick={() => setIndiceSelezionato(null)}
        >
          <button
            type="button"
            onClick={() => setIndiceSelezionato(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-black/50 text-[#d4af37] transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] sm:right-8 sm:top-8"
            aria-label="Chiudi la fotografia ingrandita"
            autoFocus
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndiceSelezionato(
                (indiceSelezionato - 1 + realizzazioni.length) % realizzazioni.length,
              );
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/60 text-[#d4af37] transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] sm:left-8 sm:h-12 sm:w-12"
            aria-label="Fotografia precedente"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>

          <figure
            className="flex max-h-full w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                src={operaSelezionata.src}
                alt={operaSelezionata.alt}
                className="max-h-[72vh] max-w-full object-contain shadow-2xl shadow-black"
              />
            </div>
            <figcaption className="mt-6 max-w-2xl px-12 text-center sm:px-16">
              <h2
                id="lightbox-titolo"
                className="mb-2 font-serif text-2xl tracking-wide text-gradient-gold md:text-3xl"
              >
                {operaSelezionata.titolo}
              </h2>
              <p className="font-light text-foreground/65">{operaSelezionata.didascalia}</p>
              <p className="mt-3 text-xs tracking-[0.3em] text-foreground/35">
                {String(indiceSelezionato + 1).padStart(2, "0")} / {String(realizzazioni.length).padStart(2, "0")}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIndiceSelezionato((indiceSelezionato + 1) % realizzazioni.length);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/60 text-[#d4af37] transition-colors hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] sm:right-8 sm:h-12 sm:w-12"
            aria-label="Fotografia successiva"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}
