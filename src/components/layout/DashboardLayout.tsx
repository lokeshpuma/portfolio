import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { ParticleBackground } from '../common/ParticleBackground';
import { BackgroundGlow } from '../common/BackgroundGlow';
import { CustomCursor } from '../common/CustomCursor';

export const DashboardLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 transition-colors duration-300">
      {/* Refined Minimalist Precision Micro-Pointer Cursor */}
      <CustomCursor />

      {/* Fluid Dynamic Ambient Glow in corners and background */}
      <BackgroundGlow />

      {/* Dynamic Starfield Particles Canvas */}
      <ParticleBackground />

      {/* Persistent Left Collapsible Sidebar */}
      <Sidebar
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Main Content Area - dynamically adjusts padding when collapsed */}
      <div
        className={`relative z-10 flex min-h-screen flex-col transition-all duration-300 ${
          isCollapsed ? 'md:pl-20' : 'md:pl-64'
        }`}
      >
        <Topbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
