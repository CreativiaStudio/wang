"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WangLogoModal from "./WangLogoModal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          setIsScrolled(window.scrollY > 50);
          timeoutId = null;
        }, 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-panel thin-divider py-6" : "bg-transparent py-10"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group transition-all">
          <WangLogoModal />
          <Link href="/" className="font-serif text-xl tracking-widest uppercase text-gradient-gold hover:brightness-125 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
            Wang - Officina Sacra
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-16 items-center text-sm uppercase tracking-widest text-foreground/70">
          <Link href="/chi-sono" className="hover:text-gold gold-glow transition-all">Chi sono</Link>
          <Link href="/libro" className="hover:text-gold gold-glow transition-all">Libro</Link>
          <Link href="/dispositivi" className="hover:text-gold gold-glow transition-all">Dispositivi</Link>
          <Link href="/materiali" className="hover:text-gold gold-glow transition-all">Materiali</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground/80 hover:text-gold gold-glow transition-all"
          aria-label="Toggle mobile menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full glass-panel thin-divider p-6 flex flex-col gap-6 md:hidden"
          >
            <Link href="/chi-sono" className="text-lg font-serif uppercase tracking-wider hover:text-gold gold-glow transition-all" onClick={() => setIsMobileMenuOpen(false)}>Chi sono</Link>
            <Link href="/libro" className="text-lg font-serif uppercase tracking-wider hover:text-gold gold-glow transition-all" onClick={() => setIsMobileMenuOpen(false)}>Libro</Link>
            <Link href="/dispositivi" className="text-lg font-serif uppercase tracking-wider hover:text-gold gold-glow transition-all" onClick={() => setIsMobileMenuOpen(false)}>Dispositivi</Link>
            <Link href="/materiali" className="text-lg font-serif uppercase tracking-wider hover:text-gold gold-glow transition-all" onClick={() => setIsMobileMenuOpen(false)}>Materiali</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
