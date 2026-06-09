import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wang - Officina Sacra | Ponti verso l'Infinito",
  description: "Dispositivi alchemici e forme radioniche: Genesa Crystal, Pentasfera, IperGenesa, Unisfera. L'Architettura del Sacro di Gerardo Stanzione.",
  keywords: ["Wang", "Officina Sacra", "Genesa Crystal", "Pentasfera", "IperGenesa", "Unisfera", "Radionica", "Alchimia", "Geometria Sacra", "Gerardo Stanzione"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-gold selection:text-black relative">
        {/* Subtle Background Overlay */}
        <div className="fixed inset-0 z-[-1] bg-[url('/bg_overlay.png')] bg-cover bg-center opacity-40 pointer-events-none" />
        
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
