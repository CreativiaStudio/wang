import Link from "next/link";
import LegalDisclaimerModal from "./LegalDisclaimerModal";

export default function Footer() {
  return (
    <footer className="glass-panel border-t border-[rgba(212,175,55,0.3)] py-12 md:py-24 px-6 mt-16 md:mt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-4xl tracking-widest text-gradient-gold uppercase">Wang</h3>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
              Officina Sacra. Architettura del Sacro, dispositivi alchemici e ponti verso l'Infinito di Gerardo Stanzione.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase gold-text">Esplora</h4>
            <nav className="flex flex-col text-sm text-foreground/60">
              <Link href="/dispositivi" className="block py-3 hover:text-gold transition-colors">I Dispositivi</Link>
              <Link href="/chi-sono" className="block py-3 hover:text-gold transition-colors">Chi sono</Link>

            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase gold-text">Contatti</h4>
            <a href="mailto:info@wangofficinasacra.com" className="block py-3 text-sm text-foreground/60 hover:text-gold transition-colors">
              info@wangofficinasacra.com
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-[rgba(212,175,55,0.3)] pt-8 text-center flex flex-col gap-4">
          <p className="text-xs text-foreground/40 max-w-3xl mx-auto italic leading-relaxed">
            I dispositivi non sono presidi medici. Sono strumenti energetici per l'armonizzazione e il benessere;<br />
            non sostituiscono il parere di un medico qualificato.
          </p>
          <div className="text-xs text-foreground/30 uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-2">
            <span>&copy; 2025 Wang - Officina Sacra™ Tutti i diritti riservati.</span>
            <span className="hidden md:inline">|</span>
            <LegalDisclaimerModal />
          </div>
        </div>
      </div>
    </footer>
  );
}
