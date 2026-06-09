import MaterialTooltip from "@/components/MaterialTooltip";
import materialsData from "@/data/materials.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Materiali | Wang Officina Sacra",
  description: "Lo Spirito (Metalli) e l'Anima (Legni) utilizzati per la creazione dei dispositivi radionici Wang.",
};

export default function MaterialiPage() {
  const metals = materialsData.filter(m => m.category === "spirito");
  const woods = materialsData.filter(m => m.category === "anima");

  return (
    <div className="min-h-screen pt-40 pb-32 relative z-10">
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">Lo Spirito e L'Anima</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            I materiali non sono inermi. Essi partecipano all'equazione alchemica del dispositivo. 
            Esplora le qualità sottili di Metalli e Legni interagendo con il testo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-5xl mx-auto">
          
          {/* Metalli */}
          <section className="glass-panel p-10 md:p-12 rounded-sm">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-gold/50" />
              <h2 className="font-serif text-3xl tracking-widest uppercase">I Metalli <span className="gold-text italic text-xl ml-2 capitalize">(Lo Spirito)</span></h2>
            </div>
            
            <div className="space-y-12 text-lg font-light leading-relaxed text-foreground/80">
              <p>
                Nel crogiolo della creazione, il metallo rappresenta la scintilla, la direzione, l'informazione cruda che viene impressa nel campo quantico. 
                Scegliere il metallo significa scegliere il tipo di "Voce" con cui il dispositivo parlerà al cosmo.
              </p>
              
              <ul className="space-y-8 list-none pl-0">
                {metals.map(metal => (
                  <li key={metal.id} className="border-l border-gold/20 pl-6 gold-glow transition-colors">
                    <MaterialTooltip name={metal.name} description={metal.description} category={metal.category}>
                      <span className="font-serif text-2xl tracking-wide">{metal.name}</span>
                    </MaterialTooltip>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Legni */}
          <section className="glass-panel p-10 md:p-12 rounded-sm">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-gold/50" />
              <h2 className="font-serif text-3xl tracking-widest uppercase">I Legni <span className="gold-text italic text-xl ml-2 capitalize">(L'Anima)</span></h2>
            </div>
            
            <div className="space-y-12 text-lg font-light leading-relaxed text-foreground/80">
              <p>
                Il legno funge da condensatore vitale, assorbendo e modulando la frequenza. È l'elemento che rende "biocompatibile" l'energia sprigionata, 
                ancorandola alla trama della natura vivente e rendendola assimilabile dal campo umano.
              </p>
              
              <ul className="space-y-8 list-none pl-0">
                {woods.map(wood => (
                  <li key={wood.id} className="border-l border-gold/20 pl-6 gold-glow transition-colors">
                    <MaterialTooltip name={wood.name} description={wood.description} category={wood.category}>
                      <span className="font-serif text-2xl tracking-wide">{wood.name}</span>
                    </MaterialTooltip>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
