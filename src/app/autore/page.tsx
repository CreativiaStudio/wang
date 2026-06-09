import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerardo Stanzione | Wang Officina Sacra",
  description: "Dall'Architettura classica alla comprensione dell'operatività sottile delle forme. Il percorso di Gerardo Stanzione.",
};

export default function AutorePage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">L'Architetto e il Cercatore</h1>
          <p className="text-xl text-foreground/70 font-light italic font-serif">
            Gerardo Stanzione
          </p>
        </div>

        <div className="space-y-24 text-lg text-foreground/80 font-light leading-relaxed">
          
          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-8">La Formazione</h2>
            <p>
              La radice del percorso di Gerardo Stanzione affonda nell'Architettura classica. Per anni, la progettazione degli spazi umani ha seguito le regole dell'estetica, della funzionalità e della statica. Tuttavia, nel profondo dell'indagine architettonica, emergeva costantemente una domanda: cosa rende un luogo <em>sacro</em>?
            </p>
            <p>
              Non è la semplice aggregazione di materiali a definire la sacralità, ma l'<strong>operatività sottile delle forme</strong>. L'Architettura smette di essere solo un contenitore per la vita e si rivela come una macchina risonante, un'antenna capace di captare, modulare e trasmettere le frequenze del cosmo.
            </p>
          </section>

          <div className="thin-divider my-24" />

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-8">La Svolta Alchemica</h2>
            <p>
              Il passaggio dall'edificazione di grandi strutture alla creazione di dispositivi radionici ha segnato una trasmutazione interiore. Come descritto nell'ideogramma <em>Wang</em>, il costruttore ha compreso che prima di unire il Cielo e la Terra attraverso mattoni e cemento, doveva unirli dentro di sé.
            </p>
            <blockquote className="border-l-2 border-gold pl-6 py-2 my-8 italic text-foreground/90 font-serif text-xl">
              "L'Architetto diventa Artigiano, calandosi nella materia per forgiarla con le proprie mani. Ma l'Artigiano, nel gesto della creazione, si rivela Cercatore."
            </blockquote>
            <p>
              È nato così il progetto <strong>Wang - Officina Sacra</strong>. Non una linea di produzione, ma un vero e proprio laboratorio alchemico dove le proporzioni della Sezione Aurea (Phi) e le geometrie platoniche vengono utilizzate non come decoro, ma come codici operativi per il ripristino dell'Armonia Universale.
            </p>
          </section>

          <div className="thin-divider my-24" />

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-gradient-gold uppercase tracking-widest mb-8">La Creazione come Rito</h2>
            <p>
              Ogni dispositivo — che sia una Genesa, una Pentasfera o una complessa Unisfera — viene realizzato seguendo un protocollo preciso. I materiali (Ferro, Rame, Legni sacri) vengono scelti non per il loro colore, ma per la loro specifica risonanza animica e spirituale.
            </p>
            <p>
              In questa nuova veste, Gerardo Stanzione non "fabbrica", ma <em>manifesta</em>. E invita chi entra in contatto con questi dispositivi a non considerarli oggetti d'arredo, ma "Presenze" con le quali instaurare un dialogo profondo, per avviare il proprio, personale, Viaggio dell'Eroe.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
