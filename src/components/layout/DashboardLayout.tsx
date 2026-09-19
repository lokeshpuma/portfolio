import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { MobileTabBar } from './MobileTabBar';
import { ParticleBackground } from '../common/ParticleBackground';
import { BackgroundGlow } from '../common/BackgroundGlow';
import { CustomCursor } from '../common/CustomCursor';

export const DashboardLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f4f6fb] text-slate-900 dark:bg-[#060913] dark:text-slate-100 transition-colors duration-300">
      {/* Precision Micro-Pointer & Fluid Aura */}
      <CustomCursor />

      {/* Atmospheric Spatial Ambient Glow */}
      <BackgroundGlow />

      {/* Dynamic Starfield Particles Canvas */}
      <ParticleBackground />

      {/* Persistent / Floating macOS Spatial Glass Sidebar */}
      <Sidebar
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Native iPhone Floating Bottom Glass Tab Bar */}
      <MobileTabBar onOpenFullMenu={() => setMobileMenuOpen(true)} />

      {/* Main Content Area */}
      <div
        className={`relative z-10 flex min-h-screen flex-col transition-all duration-300 ${
          isCollapsed ? 'md:pl-24' : 'md:pl-72'
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
