import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { OverviewPage } from './pages/OverviewPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InsightsPage } from './pages/InsightsPage';
import { JourneyPage } from './pages/JourneyPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { SocialActivityPage } from './pages/SocialActivityPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/overview" replace />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="journey" element={<JourneyPage />} />
        <Route path="certifications" element={<CertificationsPage />} />
        <Route path="social" element={<SocialActivityPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
