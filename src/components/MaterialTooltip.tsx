"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MaterialTooltipProps {
  children: React.ReactNode;
  name: string;
  description: string;
  category: string;
}

export default function MaterialTooltip({ children, name, description, category }: MaterialTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {/* Target Element */}
      <span className="border-b border-gold/50 hover:border-gold hover:text-gold transition-colors">
        {children}
      </span>

      {/* Tooltip Content */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 glass-panel gold-glow rounded-sm pointer-events-none"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-serif text-lg text-gradient-gold">{name}</h4>
              <span className="text-[10px] uppercase tracking-widest text-white/50 border border-gold/30 px-2 py-0.5 rounded-full">
                {category}
              </span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed italic">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
