import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableSpecular?: boolean;
  tiltIntensity?: number;
  elevated?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  enableTilt = true,
  enableSpecular = true,
  tiltIntensity = 8,
  elevated = false,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to card center (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Pixel coordinates relative to card for specular light
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  // Springs for buttery smooth Apple-style tilt
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotX.set(x);
    spotY.set(y);

    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  }, [mouseX, mouseY, spotX, spotY]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] dark:border-white/[0.08] ${
        elevated
          ? 'bg-white/80 shadow-2xl backdrop-blur-2xl dark:bg-[#0c1424]/85 dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)]'
          : 'bg-white/70 shadow-xl backdrop-blur-xl dark:bg-[#0a101e]/75 dark:shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
      } transition-colors duration-300 ${className}`}
      {...(props as any)}
    >
      {/* Specular Top Rim Reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/20" />

      {/* Mouse Follow Specular Ambient Highlight */}
      {enableSpecular && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${spotX.get()}px ${spotY.get()}px, rgba(34, 211, 238, 0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Internal Glass Highlight Ring */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.08] dark:ring-white/[0.05]" />

      {/* Child Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
