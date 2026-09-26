import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle very low-opacity amber ambient warmth in top right corner */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/[0.03] blur-[120px]" />

      {/* Grid Pattern Overlay for Precision Instrument Feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
    </div>
  );
};
