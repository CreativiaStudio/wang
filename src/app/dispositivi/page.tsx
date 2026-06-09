import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Dispositivi | Wang Officina Sacra",
  description: "Catalogo dei dispositivi alchemici: Genesa Crystal, Pentasfera, IperGenesa, Unisfera.",
};

export default function DispositiviPage() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-gradient-gold mb-6 uppercase tracking-widest">I Dispositivi</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Strumenti energetici per l'armonizzazione e l'evoluzione della coscienza. 
            Scegli la forma che risuona con il tuo cammino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product) => (
            <Link 
              href={`/dispositivi/${product.slug}`} 
              key={product.id}
              className="group glass-panel gold-glow transition-all duration-500 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl mix-blend-screen" />
                {product.image && (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={300}
                    height={300}
                    className="relative z-10 object-contain drop-shadow-gold group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-serif text-2xl text-foreground/90 group-hover:text-gold transition-colors uppercase tracking-widest mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-gold italic font-serif mb-4">{product.plane}</p>
                <p className="text-foreground/60 text-sm font-light leading-relaxed flex-grow line-clamp-3">
                  {product.function}
                </p>
                
                <div className="mt-6 pt-4 thin-divider flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-foreground/40">Scopri</span>
                  <svg className="w-5 h-5 text-gold transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
