import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono | Wang Officina Sacra",
  description: "Sono un Architetto, Artigiano e Cercatore. La filosofia e il percorso di Gerardo Stanzione.",
};

export default function ChiSonoPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">Chi sono?</h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light italic font-serif">
            Sono un Architetto, Artigiano e Cercatore.
          </p>
        </div>

        <div className="space-y-8 text-lg md:text-xl text-foreground/80 font-light leading-loose">
          <p>
            Mi ha sempre affascinato il funzionamento delle cose, non solo la loro forma. Gli studi di Architettura mi hanno avvicinato alle grandi costruzioni del passato: santuari, templi, complessi megalitici — opere in cui non solo vedevo un'utilità pratica, ma intuivo anche un'operatività sottile. Strutture che canalizzavano forze, che dialogavano col Cielo e la Terra.
          </p>

          <p>
            Negli anni ho esplorato molte Vie: Naturopatia, Yoga, pratiche fisiche profonde, alchimia sottile, Radiestesia, Radionica. Ho nutrito la Mente ed allenato i miei sensi per sentire ciò che sfugge all'occhio, per cogliere il principio invisibile dietro la Manifestazione.
          </p>

          <p>
            Un giorno vidi una Pentasfera. Era come se l'avessi conosciuta da sempre ed ero già in grado di realizzarla. Dopo due giorni ne costruivo una in rame, seguendo un sapere che affiorava dall'interno, come una memoria attiva. Poi incontrai la Genesa, ma intuivo che ci fosse ancora altro. Da allora non mi sono più fermato. Le geometrie hanno cominciato a parlarmi. Ho visto direzioni, strutture, ho ascoltato i loro desideri; forme che chiedevano di venire al mondo. Negli anni successivi ho dato corpo e senso a queste visioni: costruzioni geometriche che offrono indicazioni, aprono nuove Vie, nuove architetture dell'Essere.
          </p>

          <figure className="glass-panel relative my-16 overflow-hidden rounded-sm border border-[#d4af37]/40 bg-black/20 p-3 shadow-2xl shadow-black/25 sm:p-5">
            <span className="pointer-events-none absolute left-7 top-7 z-10 h-8 w-8 border-l border-t border-[#d4af37]/65" />
            <span className="pointer-events-none absolute right-7 top-7 z-10 h-8 w-8 border-r border-t border-[#d4af37]/65" />
            <span className="pointer-events-none absolute bottom-7 left-7 z-10 h-8 w-8 border-b border-l border-[#d4af37]/65" />
            <span className="pointer-events-none absolute bottom-7 right-7 z-10 h-8 w-8 border-b border-r border-[#d4af37]/65" />

            <div
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 via-black/30 to-[#d4af37]/5 px-8 py-12 text-center"
              role="img"
              aria-label="Spazio predisposto per la fotografia di Gerardo Stanzione al banco di lavoro"
            >
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(212,175,55,0.22)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="relative max-w-md">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 96 96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="mx-auto mb-7 h-20 w-20 text-[#d4af37]/75"
                >
                  <rect x="12" y="15" width="72" height="58" rx="1" />
                  <circle cx="48" cy="37" r="10" />
                  <path d="M29 65c2-11 9-17 19-17s17 6 19 17M25 82h46M34 73v9M62 73v9" />
                  <path d="M20 23h8M68 23h8" opacity=".6" />
                </svg>
                <p className="mb-3 font-serif text-2xl tracking-wide text-gradient-gold md:text-3xl">
                  Gerardo Stanzione
                </p>
                <p className="mb-2 text-base font-light italic text-foreground/70 md:text-lg">
                  Al banco di lavoro
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                  Fotografia in arrivo
                </p>
              </div>
            </div>
            <figcaption className="px-4 pb-2 pt-5 text-center text-xs font-light uppercase tracking-[0.25em] text-foreground/40">
              Il gesto artigiano, la materia, la visione
            </figcaption>
          </figure>

          <p>
            Guardandomi attorno, però, trovavo ben poco su di loro. E quel poco, spesso, le riduceva a semplici oggetti decorativi o, peggio ancora, a sedicenti strumenti "miracolosi", senza mai spiegarne, e forse nemmeno comprenderne, la loro fisiologia sottile. Ho sentito che non bastava più fare: era giunto il momento di <strong>condividere</strong>. Così ho deciso di offrire ciò che le forme mi hanno confidato, ciò che ho appreso stando con loro, ascoltandole, costruendole con rispetto.
          </p>

          <p>
            Il mio Lavoro è un ponte tra Materia e Spirito, tra intuizione e precisione. Questi strumenti possono essere letti come arte, geometria sacra, tecnologia sottile... o semplicemente ciò che sono: forme vive, dotate di una vocazione propria, consapevoli di sé stesse e della loro missione.
          </p>
        </div>

      </div>
    </div>
  );
}
