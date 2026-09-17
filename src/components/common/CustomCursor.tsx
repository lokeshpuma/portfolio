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
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.25)' : 'rgba(34, 211, 238, 0.9)',
        borderColor: isHovered ? 'rgba(34, 211, 238, 0.9)' : 'transparent',
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="pointer-events-none fixed inset-0 z-50 h-3 w-3 rounded-full border border-transparent shadow-[0_0_8px_rgba(34,211,238,0.6)] backdrop-blur-[0.5px]"
    />
  );
};
