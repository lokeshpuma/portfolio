import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Only enable on desktop mouse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverTargets = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      const onEnter = () => setIsHovered(true);
      const onLeave = () => setIsHovered(false);

      targets.forEach((t) => {
        t.addEventListener('mouseenter', onEnter);
        t.addEventListener('mouseleave', onLeave);
      });

      return () => {
        targets.forEach((t) => {
          t.removeEventListener('mouseenter', onEnter);
          t.removeEventListener('mouseleave', onLeave);
        });
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    const cleanupHover = handleHoverTargets();
    const observer = new MutationObserver(() => handleHoverTargets());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      cleanupHover();
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.95)' : 'rgba(34, 211, 238, 0.85)',
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-0 z-50 h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      />

      {/* Ambient Fluid Aura Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.6 : 1,
          opacity: isHovered ? 0.8 : 0.4,
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.25)',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-0 z-40 h-8 w-8 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-[1px]"
      />
    </>
  );
};
