"use client";

import Image from "next/image";
import Flipbook from "@/components/Flipbook";

const indexItems = [
  { title: "Chi sono?", page: "4" },
  { title: "Nota sulle fonti", page: "4" },
  { title: "Dispositivi", page: "5" },
  { title: "Genesa Crystal", page: "6" },
  { title: "Pentasfera", page: "7" },
  { title: "IperGenesa", page: "8" },
  { title: "Unisfera", page: "9" },
  { title: "Campi di applicazione in base alla dimensione", page: "11" },
  { title: "Premessa", page: "12" },
  { title: "Genesa Crystal", page: "13" },
  { title: "Pentasfera", page: "14" },
  { title: "IperGenesa", page: "15" },
  { title: "Unisfera", page: "16" },
  { title: "Pratiche", page: "17" },
  { title: "Premesse", page: "17" },
  { title: "Genesa Crystal", page: "21" },
  { title: "Genesa e Geobiologia", page: "23" },
  { title: "Genesa ed Elettrocoltura", page: "23" },
  { title: "Pentasfera", page: "24" },
  { title: "IperGenesa", page: "27" },
  { title: "Unisfera", page: "31" },
  { title: "Materiali adoperati", page: "35" },
  { title: "Lo Spirito del Metallo", page: "37" },
  { title: "I Metalli e gli Elementi", page: "38" },
  { title: "L'Anima del Legno", page: "39" },
  { title: "I Legni e gli Elementi", page: "40" },
  { title: "Le sfumature archetipiche nei dispositivi", page: "41" },
  { title: "Genesa", page: "42" },
  { title: "Pentasfera", page: "43" },
  { title: "IperGenesa", page: "45" },
  { title: "Unisfera", page: "47" },
  { title: "La pelle dei dispositivi", page: "49" },
  { title: "La mia firma energetica", page: "51" },
  { title: "Le unità di misura adottate e le varie grandezze", page: "52" },
  { title: "I dispositivi e le dimensioni spaziali", page: "53" },
  { title: "Le aspirazioni dei nastri", page: "54" },
  { title: "Collocazione dell'Attacco delle Spirali", page: "55" },
  { title: "Tipologie di spirali e loro funzione", page: "56" },
  { title: "L'Isolamento dei Nastri", page: "59" },
  { title: "Toponomastica dei Nastri", page: "59" },
  { title: "Il Canto delle emozioni nella Pentasfera Yin", page: "60" },
  { title: "I livelli di Coscienza dei Dispositivi", page: "61" },
  { title: "Un'Osservazione", page: "62" },
  { title: "L'Epopea degli Auròi", page: "63" },
  { title: "La Via del Soffio", page: "65" },
  { title: "La Via dell'Acqua", page: "66" },
  { title: "La Via del Fuoco", page: "67" },
  { title: "Il Tempio della Creazione", page: "69" },
  { title: "Come in Alto", page: "71" },
  { title: "Così in Basso", page: "72" },
  { title: "Nel Mezzo", page: "73" },
  { title: "Il Respiro della Vita", page: "75" },
  { title: "Oltre l'Unisfera", page: "77" },
  { title: "Ti ringrazio", page: "78" },
  { title: "Appendici", page: "79" },
  { title: "Appendice A - Tabella Riepilogativa: Le Vie, i Templi, gli Ordini, le Compagnie", page: "80" },
  { title: "Appendice B - L'Officina del Tempio", page: "81" },
  { title: "Appendice C - Le Dimore dell'Energia", page: "81" },
  { title: "Appendice D - Schede tecniche dei Dispositivi", page: "81" },
  { title: "Appendice E - Cosa rappresenta il logo dell'Officina Sacra?", page: "97" },
];

const bookImages = [
  "/libro_processed/73.jpg",
  "/libro_processed/74.jpg",
  "/libro_processed/75.jpg",
  "/libro_processed/76.jpg",
  "/libro_processed/77.jpg",
];

export default function LibroPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">
            Il Libro
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light italic font-serif">
            Geometrie Consapevoli · Gerardo Stanzione
          </p>
        </div>

        {/* Cover */}
        <figure className="mx-auto mb-16 max-w-md sm:mb-20">
          <div className="glass-panel rounded-sm border border-gold/35 p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
            <Image
              src="/1.png"
              alt="Copertina del libro Geometrie Consapevoli di Gerardo Stanzione"
              width={800}
              height={1040}
              priority
              className="h-auto w-full rounded-[2px] object-contain"
            />
          </div>
        </figure>

        <div className="w-24 h-px bg-gold/40 mx-auto my-14 sm:my-16" aria-hidden="true" />

        {/* Testo descrittivo continuo */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-light leading-relaxed text-foreground/80">
          <p>
            Geometrie Consapevoli non è né un manuale né una dottrina compiuta, ma la versione attuale della mappa di un lungo Cammino che prosegue oltre queste pagine. È un invito a osservare, sperimentare e riconoscere nelle forme visibili la possibilità di relazioni più profonde tra Materia e Spirito. L’Opera nasce dall’incontro tra architettura, artigianato e ricerca interiore. Al suo centro vi sono quattro strutture considerate non come semplici oggetti, ma come strumenti per indagare il rapporto tra Materia, Energia e Coscienza.
          </p>
          <p>
            Partendo da due modelli già esistenti, la Genesa e la Pentasfera, l’autore introduce l’IperGenesa e l’Unisfera, nate dal proprio Lavoro di esplorazione e sperimentazione. All’interno della propria Visione e del personale approccio operativo, i quattro dispositivi vengono progressivamente ricondotti a un sistema unitario. Ciascuno diventa espressione di una diversa dimensione dell’Essere: dal piano fisico ed eterico al mondo emozionale, fino al livello del pensiero e, poi, alla sintesi che apre alla comprensione delle cause che orientano l’esistenza.
          </p>
          <p>
            Il libro attraversa sogni, orientamenti, polarità, spiralità, materiali, dimensioni, proporzioni, modalità costruttive e pratiche operative, intrecciando osservazione concreta, esperienza diretta, gesto artigianale e linguaggio simbolico.
          </p>
          <p>
            La trattazione si apre poi al mito. Nell’Epopea degli Auròi, le dinamiche dei dispositivi si traducono in una cosmogonia poetica nella quale Soffio, Acqua e Fuoco percorrono differenti Vie per fondersi nel Tempio della Creazione e generare un nucleo cosciente in cui emozione, pensiero e materia vibrano all’unisono. Geometria e racconto diventano allora due prospettive attraverso cui contemplare il medesimo processo: l’Energia che si organizza nella Forma e, attraverso di essa, diviene Coscienza.
          </p>
          <p>
            L’Unisfera non conclude il percorso: rappresenta una soglia. Oltre di essa il Viaggio continua verso configurazioni non ancora compiute ma già vive come intuizioni e possibilità. Il libro si ferma proprio su questo confine, là dove ciò che è stato condiviso diventa terreno da consolidare per sostenere i passi successivi.
          </p>
        </div>

        <div className="w-24 h-px bg-gold/40 mx-auto my-14 sm:my-16" aria-hidden="true" />

        {/* Indice continuo */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel border border-gold/20 p-6 sm:p-10 font-serif text-foreground/80">
            <div className="columns-1 md:columns-2 gap-12">
              {indexItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-end gap-2 break-inside-avoid mb-3 ${
                    item.title.toUpperCase() === item.title
                      ? "pt-6 pb-2 font-bold text-gold text-lg"
                      : "text-sm font-light"
                  }`}
                >
                  <span className="shrink-0 max-w-[85%] text-left leading-snug">{item.title}</span>
                  <div className="grow border-b border-dotted border-white/20 mb-1" />
                  <span className="shrink-0 font-medium">{item.page}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-24 h-px bg-gold/40 mx-auto my-14 sm:my-16" aria-hidden="true" />

        {/* Flipbook */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-12 text-center">
            Sfoglia il Libro
          </h2>
          <p className="text-center text-foreground/60 mb-12 font-light">
            Puoi sfogliare l&apos;anteprima cliccando sugli angoli delle pagine o trascinandole.
          </p>

          <Flipbook images={bookImages} />
        </div>
      </div>
    </div>
  );
}
