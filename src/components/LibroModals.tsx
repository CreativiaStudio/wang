"use client";

import { useEffect, useState } from "react";

type ModalType = "sinossi" | "indice" | null;

const synopsisParagraphs = [
  "Geometrie Consapevoli non è né un manuale né una dottrina compiuta, ma la versione attuale della mappa di un lungo Cammino che prosegue oltre queste pagine. È un invito a osservare, sperimentare e riconoscere nelle forme visibili la possibilità di relazioni più profonde tra Materia e Spirito. L’Opera nasce dall’incontro tra architettura, artigianato e ricerca interiore. Al suo centro vi sono quattro strutture considerate non come semplici oggetti, ma come strumenti per indagare il rapporto tra Materia, Energia e Coscienza.",
  "Partendo da due modelli già esistenti, la Genesa e la Pentasfera, l’autore introduce l’IperGenesa e l’Unisfera, nate dal proprio Lavoro di esplorazione e sperimentazione. All’interno della propria Visione e del personale approccio operativo, i quattro dispositivi vengono progressivamente ricondotti a un sistema unitario. Ciascuno diventa espressione di una diversa dimensione dell’Essere: dal piano fisico ed eterico al mondo emozionale, fino al livello del pensiero e, poi, alla sintesi che apre alla comprensione delle cause che orientano l’esistenza.",
  "Il libro attraversa sogni, orientamenti, polarità, spiralità, materiali, dimensioni, proporzioni, modalità costruttive e pratiche operative, intrecciando osservazione concreta, esperienza diretta, gesto artigianale e linguaggio simbolico.",
  "La trattazione si apre poi al mito. Nell’Epopea degli Auròi, le dinamiche dei dispositivi si traducono in una cosmogonia poetica nella quale Soffio, Acqua e Fuoco percorrono differenti Vie per fondersi nel Tempio della Creazione e generare un nucleo cosciente in cui emozione, pensiero e materia vibrano all’unisono. Geometria e racconto diventano allora due prospettive attraverso cui contemplare il medesimo processo: l’Energia che si organizza nella Forma e, attraverso di essa, diviene Coscienza.",
  "L’Unisfera non conclude il percorso: rappresenta una soglia. Oltre di essa il Viaggio continua verso configurazioni non ancora compiute ma già vive come intuizioni e possibilità. Il libro si ferma proprio su questo confine, là dove ciò che è stato condiviso diventa terreno da consolidare per sostenere i passi successivi.",
];

export default function LibroModals({
  indexItems,
  bookImages,
}: {
  indexItems: { title: string; page: string }[];
  bookImages: string[];
}) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeModal && !selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (selectedImage) {
        setSelectedImage(null);
      } else {
        setActiveModal(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal, selectedImage]);

  const closeModal = () => {
    setActiveModal(null);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setActiveModal("sinossi")}
          className="glass-panel w-full border border-gold/40 px-4 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10 sm:px-8 sm:py-4"
        >
          Sinossi
        </button>
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setActiveModal("indice")}
          className="glass-panel w-full border border-gold/40 px-4 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10 sm:px-8 sm:py-4"
        >
          Indice
        </button>
      </div>

      {activeModal === "sinossi" && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeModal}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="sinossi-title"
            className="glass-panel relative mx-auto min-h-full w-full max-w-4xl border border-gold/40 px-6 py-16 sm:px-12 sm:py-20"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Chiudi sinossi"
              autoFocus
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-gold/40 text-2xl leading-none text-gold transition-colors hover:bg-gold/10"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h2
              id="sinossi-title"
              className="mb-10 pr-10 text-3xl text-gold sm:text-4xl"
            >
              Sinossi
            </h2>
            <div className="space-y-6 text-base leading-8 text-neutral-200 sm:text-lg sm:leading-9">
              {synopsisParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeModal === "indice" && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeModal}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="indice-title"
            className="glass-panel relative mx-auto min-h-full w-full max-w-5xl border border-gold/40 px-6 py-16 sm:px-12 sm:py-20"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Chiudi indice"
              autoFocus
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-gold/40 text-2xl leading-none text-gold transition-colors hover:bg-gold/10"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h2
              id="indice-title"
              className="mb-10 pr-10 text-3xl text-gold sm:text-4xl"
            >
              Indice
            </h2>

            <ul className="space-y-4">
              {indexItems.map((item, index) => (
                <li
                  key={`${item.title}-${item.page}-${index}`}
                  className="flex items-end gap-3 text-sm text-neutral-200 sm:text-base"
                >
                  <span>{item.title}</span>
                  <span
                    aria-hidden="true"
                    className="mb-1.5 min-w-6 flex-1 border-b border-dotted border-gold/40"
                  />
                  <span className="shrink-0 tabular-nums text-gold">
                    {item.page}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bookImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Ingrandisci immagine del libro ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden border border-gold/40 bg-black/40 p-2 transition-colors hover:bg-gold/10"
                >
                  <img
                    src={image}
                    alt={`Immagine del libro ${index + 1}`}
                    loading="lazy"
                    className="h-56 w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Immagine del libro ingrandita"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 sm:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Chiudi immagine ingrandita"
            autoFocus
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-gold/40 bg-black/60 text-2xl leading-none text-gold transition-colors hover:bg-gold/10"
          >
            <span aria-hidden="true">×</span>
          </button>
          <img
            src={selectedImage}
            alt="Immagine del libro ingrandita"
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
