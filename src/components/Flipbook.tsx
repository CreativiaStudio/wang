"use client";

import React, { forwardRef, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const FlipBook = HTMLFlipBook as any;

const Page = forwardRef((props: any, ref: any) => {
  return (
    <div className="demoPage bg-white shadow-2xl relative overflow-hidden flex items-center justify-center" ref={ref}>
      {props.children}
    </div>
  );
});

Page.displayName = 'Page';

export default function Flipbook({ images }: { images: string[] }) {
  const flipBookRef = useRef<any>(null);
  const [zoom, setZoom] = useState(1);

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <div className="flex flex-col items-center gap-8 w-full py-10 relative">
      
      {/* Navbar di navigazione e zoom */}
      <div className="flex items-center justify-between w-full max-w-2xl bg-[#0B0C10] border border-gold/30 rounded-full px-6 py-4 shadow-[0_0_30px_rgba(212,175,55,0.1)] z-10 sticky top-24">
        
        <button onClick={prevButtonClick} className="text-gold hover:text-white transition-colors flex items-center gap-2 group">
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span className="text-sm font-serif uppercase tracking-widest hidden sm:block">Indietro</span>
        </button>

        <div className="flex items-center gap-4 sm:gap-6 border-x border-white/10 px-4 sm:px-8">
          <button onClick={zoomOut} className="text-white/50 hover:text-gold transition-colors" title="Riduci (Zoom Out)">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>
          </button>
          
          <div className="flex flex-col items-center justify-center w-12 sm:w-16">
            <span className="text-sm text-gold font-mono">{Math.round(zoom * 100)}%</span>
            {zoom !== 1 && (
              <button onClick={resetZoom} className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest mt-1">Reset</button>
            )}
          </div>

          <button onClick={zoomIn} className="text-white/50 hover:text-gold transition-colors" title="Ingrandisci (Zoom In)">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
          </button>
        </div>

        <button onClick={nextButtonClick} className="text-gold hover:text-white transition-colors flex items-center gap-2 group">
          <span className="text-sm font-serif uppercase tracking-widest hidden sm:block">Avanti</span>
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

      </div>

      {/* Contenitore Libro con Zoom */}
      <div className="w-full flex justify-center items-center overflow-auto py-12 px-4 scrollbar-hide">
        <div 
          className="transition-transform duration-300 origin-top flex justify-center"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
        >
          <FlipBook
            ref={flipBookRef}
            width={400}
            height={566}
            size="stretch"
            minWidth={280}
            maxWidth={500}
            minHeight={396}
            maxHeight={707}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flipbook-container"
            style={{ margin: "0 auto" }}
          >
            {images.map((src, idx) => (
              <Page key={idx}>
                <img 
                  src={src} 
                  alt={`Pagina ${idx + 1}`} 
                  className="w-full h-full object-cover pointer-events-none border border-black/5" 
                />
              </Page>
            ))}
          </FlipBook>
        </div>
      </div>
      
    </div>
  );
}
