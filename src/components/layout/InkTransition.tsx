"use client";

import React from 'react';

export const InkTransition = () => {
  return (
    <div 
      id="ink-transition-overlay"
      className="fixed inset-0 bg-black ink-transition-layer pointer-events-none"
      style={{
        clipPath: 'circle(0% at center)',
        opacity: 0
      }}
    >
        {/* We can place some SVG filter here for rough edges to look like real ink in the future */}
    </div>
  );
};
