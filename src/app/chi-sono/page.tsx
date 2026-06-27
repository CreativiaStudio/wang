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
