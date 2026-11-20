"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { href: "/dispositivi", label: "Dispositivi" },
  { href: "/materiali", label: "Materiali" },
  { href: "/libro", label: "Libro" },
  { href: "/chi-sono", label: "Chi sono?" },
  { href: "/realizzazioni", label: "Realizzazioni" },
] as const;

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
        <Link
          href="/"
          className="flex items-center gap-4 group transition-all"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:border-gold transition-all duration-300 gold-glow overflow-hidden relative bg-black shrink-0">
            <Image src="/logo_gold.png" alt="Wang Officina Sacra" fill className="object-contain p-1.5" />
          </span>
          <span className="font-serif text-xl tracking-widest uppercase text-gradient-gold group-hover:brightness-125 transition-all">
            Wang - Officina Sacra
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 lg:gap-8 xl:gap-12 items-center text-xs lg:text-sm uppercase tracking-widest text-foreground/70">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold gold-glow transition-all">
              {item.label}
            </Link>
          ))}
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
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-serif uppercase tracking-wider hover:text-gold gold-glow transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
