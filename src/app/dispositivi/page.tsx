import Link from "next/link";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Dispositivi | Wang Officina Sacra",
  description: "Catalogo dei dispositivi alchemici: Genesa Crystal, Pentasfera, IperGenesa, Unisfera.",
};

function DeviceSymbol({ slug }: { slug: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="w-9 h-9 sm:w-10 sm:h-10 text-gold shrink-0"
      aria-hidden="true"
    >
      {slug === "genesa-crystal" && <rect x="7" y="7" width="26" height="26" />}
      {(slug === "pentasfera" || slug === "ipergenesa") && (
        <polygon points="20,5.5 34.74,16.21 29.11,33.54 10.89,33.54 5.26,16.21" />
      )}
      {slug === "unisfera" && (
        <>
          <polygon points="20,5.5 34.74,16.21 29.11,33.54 10.89,33.54 5.26,16.21" />
          <polygon points="20,5.5 29.11,33.54 5.26,16.21 34.74,16.21 10.89,33.54" />
        </>
      )}
    </svg>
  );
}

export default function DispositiviPage() {
  return (
    <div className="min-h-[100svh] flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gradient-gold uppercase tracking-widest">
            I Dispositivi
          </h1>
        </div>

        <div className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link
              href={`/dispositivi/${product.slug}`}
              key={product.id}
              className="group flex items-center justify-between gap-4 px-5 py-4 sm:px-7 sm:py-6 glass-panel border border-gold/20 hover:border-gold/60 rounded-sm transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <DeviceSymbol slug={product.slug} />
                <div className="min-w-0">
                  <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-widest text-foreground/90 group-hover:text-gold transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gold/80 italic font-serif mt-0.5">
                    {product.plane}
                  </p>
                </div>
              </div>

              <svg
                className="w-5 h-5 text-gold/70 group-hover:text-gold shrink-0 transform group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
