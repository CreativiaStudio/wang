import { notFound } from "next/navigation";
import Image from "next/image";
import products from "@/data/products.json";
import ProductConfigurator from "@/components/ProductConfigurator";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);
  if (!product) return { title: "Prodotto non trovato | Wang Officina Sacra" };

  return {
    title: `${product.name} | Wang Officina Sacra`,
    description: `Dispositivo: ${product.name}. ${product.plane}.`,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6 uppercase tracking-widest">{product.name}</h1>
          <p className="text-xl text-white/60 italic font-serif max-w-2xl mb-6">{product.plane}</p>
          <p className="text-lg text-white/80 font-light max-w-3xl leading-relaxed">{product.function}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Visual Column / Galleria */}
          <div className="relative lg:sticky lg:top-32 flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-md mx-auto mb-8">
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-[100px] mix-blend-screen" />
              {product.image && (
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={600}
                  height={600}
                  className="relative z-10 object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                />
              )}
            </div>
            <p className="text-xs uppercase tracking-widest text-white/30">Galleria Immagini (Scorri per altre angolazioni)</p>
          </div>

          {/* Info Column / Configurator */}
          <div className="flex flex-col">
            <div className="bg-[#0f1014] p-8 md:p-10 border border-white/5 rounded-md shadow-2xl">
               <ProductConfigurator product={product} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
