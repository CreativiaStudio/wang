"use client";

import React, { forwardRef } from 'react';
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
  return (
    <div className="w-full flex justify-center items-center py-10">
      <FlipBook
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
              alt={`Page ${idx + 1}`} 
              className="w-full h-full object-cover pointer-events-none" 
            />
          </Page>
        ))}
      </FlipBook>
    </div>
  );
}
