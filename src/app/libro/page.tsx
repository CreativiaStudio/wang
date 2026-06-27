import type { Metadata } from "next";
import Flipbook from "@/components/Flipbook";

export const metadata: Metadata = {
  title: "Geometrie Consapevoli - Il Libro | Wang Officina Sacra",
  description: "Un'opera di sintesi tra arte, geometria sacra, spiritualità ed esperienza artigianale.",
};

export default function LibroPage() {
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
    { title: "Pratiche", page: "" },
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

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">Geometrie Consapevoli</h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light italic font-serif">
            Il libro di Gerardo Stanzione
          </p>
        </div>

        {/* 1. Cover / Manifesto */}
        <div className="glass-panel thin-divider p-8 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full" />
          <div className="relative z-10 text-center space-y-6 md:space-y-8 font-serif text-lg md:text-2xl italic font-light text-foreground/80">
            <p>In uno spazio limitato,</p>
            <p>in cui regna il silenzio e l'ascolto,</p>
            <p className="text-gold">nascono creazioni che hanno la Missione di essere un Ponte verso l'Infinito.</p>
            
            <div className="h-12" />
            
            <p>Oggetti realizzati a mano,</p>
            <p>con Presenza ed Intenzione,</p>
            <p>ispirati alle Tradizioni simboliche ed ai Percorsi interiori.</p>
            
            <div className="h-12" />
            
            <p>Ogni strumento è un'offerta silenziosa.</p>
            <p>non è solo Artigianato,</p>
            <p>non è solo Spiritualità.</p>
            
            <div className="h-12" />
            
            <p>Ogni gesto è un Rito,</p>
            <p>ogni forma è un Codice</p>
            <p>ogni oggetto è un Messaggio.</p>
            
            <div className="h-12" />
            
            <p className="text-2xl md:text-3xl font-normal text-gradient-gold uppercase tracking-widest">Benvenuti nell'Officina Sacra.</p>
          </div>
        </div>

        {/* 2. Sinossi */}
        <div className="mb-32">
          <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-12 text-center">Sinossi</h2>
          <div className="space-y-8 text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-4xl mx-auto">
            <p>
              <strong>Geometrie Consapevoli</strong> è un'opera di sintesi tra arte, geometria sacra, spiritualità ed esperienza artigianale. Non è un manuale, né un trattato teorico: è un percorso iniziatico reso forma.
            </p>
            <p>
              Il libro esplora la Geometria come linguaggio universale della Coscienza, mostrando come le forme archetipiche — sfera, cerchio, poliedro, spirale — non siano astrazioni matematiche, ma matrici vive di ordine, risonanza ed equilibrio. La costruzione concreta delle strutture diventa atto meditativo, rito operativo, strumento di trasformazione interiore.
            </p>
            <p>
              Attraverso dispositivi come <strong>Genesa, Pentasfera, IperGenesa e Unisfera</strong>, l'opera conduce il lettore dall'armonia personale alla risonanza cosmica, tracciando un cammino che unisce corpo, psiche e spirito. Ogni geometria è al tempo stesso oggetto, simbolo e portale: un catalizzatore di consapevolezza.
            </p>
            <p>
              Il cuore del libro è un messaggio semplice e radicale: la Forma costruisce la Coscienza, e la Coscienza genera la Forma. In questo dialogo silenzioso tra mano e spirito, <em>Geometrie Consapevoli</em> diventa un dono, un invito a ricordare che l'ordine del Cosmo vive già dentro di noi, in attesa di essere riconosciuto.
            </p>
          </div>
        </div>

        {/* 3. Indice */}
        <div className="mb-32 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-12 text-center">Indice</h2>
          <div className="glass-panel p-8 md:p-12 space-y-4 font-serif text-foreground/80">
            {indexItems.map((item, idx) => (
              <div key={idx} className={`flex items-end gap-2 ${item.title.toUpperCase() === item.title ? 'mt-8 mb-4 font-bold text-gold text-lg' : 'text-base font-light'}`}>
                <span className="shrink-0">{item.title}</span>
                <div className="grow border-b border-dotted border-white/20 mb-1" />
                <span className="shrink-0 font-medium">{item.page}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Flipbook Placeholder */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-12 text-center">Sfoglia il Libro</h2>
          <p className="text-center text-foreground/60 mb-12 font-light">Puoi sfogliare l'anteprima cliccando sugli angoli delle pagine o trascinandole.</p>
          
          <Flipbook images={bookImages} />
          
        </div>

      </div>
    </div>
  );
}
