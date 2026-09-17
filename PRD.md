# Product Requirements Document (PRD)
## Personal Portfolio — "Analytics Dashboard" Style

**Owner:** [Your Name]
**Version:** 1.0
**Target IDE:** Antigravity (agentic build), React 18+
**Status:** Draft — ready for implementation

---

## 1. Overview

Build a personal portfolio website styled as an **interactive analytics dashboard** rather than a
traditional scrolling one-pager. The site uses a persistent left sidebar for navigation between
distinct "pages" (routes), each presenting a different facet of the owner's profile (skills,
projects, journey, certifications, contact) using dashboard UI patterns: stat cards, charts,
filterable grids, and timelines.

This PRD describes the **structure, components, and behavior** to recreate — not any specific
person's biographical content. All copy in this document is a **placeholder**; replace it with
your own name, projects, skills, and credentials before shipping.

## 2. Goals

- Present a technical profile (data/ML/software background) with the credibility of a real
  analytics product, not a static resume page.
- Make projects easy to filter, scan, and drill into (details / live demo / source).
- Quantify the portfolio itself (stat counters: number of projects, live demos, credentials, etc.)
  to reinforce credibility at a glance.
- Be fast, responsive, accessible, and cheap/free to host.

## 3. Non-Goals

- No blog/CMS functionality.
- No authentication or user accounts.
- No backend database — content is static/config-driven (JSON/TS data files) for v1.

## 4. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | React 18 + Vite (or Next.js 14 App Router) | Next.js if you want file-based routing + easy Vercel deploy |
| Routing | React Router v6 (Vite) or Next.js routing | Routes: `/overview /skills /projects /insights /journey /certifications /contact` |
| Styling | Tailwind CSS | Utility-first, matches dark dashboard aesthetic |
| Animation | Framer Motion | Page transitions, hover states, floating particles |
| Charts | Recharts | Donut chart (skill/domain composition), bar/line for stats |
| Icons | lucide-react | Consistent line icons for sidebar + stat cards |
| Forms | React Hook Form + a form backend (Formspree / EmailJS / Resend API route) | Contact form delivers to owner's inbox |
| Deployment | Vercel (or Netlify/GitHub Pages) | Static/SSR hosting, custom domain optional |
| Content | Local JSON/TS files (`/data/*.ts`) | No CMS; edit files to update content |

## 5. Information Architecture (Sitemap)

```
/                → redirects to /overview
/overview        → Hero + portfolio-wide stats + CTA
/skills          → Technical skills, interview-readiness mapping, category breakdown
/projects        → Filterable project grid with search
/insights        → Portfolio analytics: proof points, composition chart, methodology
/journey         → Horizontal timeline: education → skill-building → work
/certifications  → Certificates, badges, verification links
/contact         → Contact form + availability info
```

Every route shares a persistent **Sidebar** (left) and a lightweight **Topbar** (profile mini-card,
"last updated" date). Only the main content panel changes between routes.

## 6. Global Layout & Shared Components

### 6.1 Sidebar (persistent, all pages)
- Avatar (circular), name, one-line title (e.g. "Data Analytics & ML"), availability status dot
  (green = "Open to opportunities").
- Nav list with icon + label for each route (Overview, Skills, Projects, Insights, Journey,
  Certifications, Contact). Active route highlighted with accent color + left border indicator.
- Bottom of sidebar: primary "Resume" button (download/link to PDF) + row of social icons
  (LinkedIn, GitHub, Email).
- Collapsible/hidden on mobile behind a hamburger toggle; becomes a bottom nav or drawer.

### 6.2 Topbar (per page)
- Small breadcrumb-style badge, e.g. "Analytics Dashboard".
- Page title with one keyword in accent color (e.g. "Portfolio **Overview**") + a small pill badge
  describing the page (e.g. "Analytics Summary").
- Right-aligned "Last updated <Month Year>" text.

### 6.3 StatCard
Reusable card used on Overview / Skills / Insights pages.
- Props: `icon`, `value` (number, animates count-up on mount), `label`, `sublabel`.
- Grid of 4–6 per row (responsive: 2 cols mobile, 3 tablet, 4–6 desktop).

### 6.4 CTABanner ("Portfolio signal")
- Floating card at the bottom of each page: small mascot/logo icon + one sentence summarizing the
  page's takeaway + a button linking to the next logical page (Overview → Explore Skills → Explore
  Projects → etc.), forming a guided tour.

### 6.5 Footer
- One-line: `Built with [stack] · [Your Name] © [Year] · [optional: hosting credit]`.

### 6.6 Background motion
- Subtle floating-particle / starfield effect (Framer Motion + canvas or absolutely-positioned
  divs) behind hero and CTA sections. Should be low-opacity and non-distracting; respect
  `prefers-reduced-motion`.

## 7. Page Specifications

### 7.1 Overview (`/overview`)
- Header card: avatar, name, short bio (2–3 lines), row of tech-stack badges (e.g. Python, SQL,
  Tableau, Power BI, Scikit-learn, Flask, Streamlit).
- "Portfolio Overview" StatCard grid: total case studies, ML projects, live demos, GitHub repos,
  advanced case studies, credentials & awards (pick the 4–6 that apply to you).
- CTABanner → links to `/skills`.

### 7.2 Skills (`/skills`)
- Repeats the top StatCard strip for consistency.
- **Technical Skills** panel: list of skills, each tagged with a category chip (Programming / Data
  Analysis / Statistics / Visualization / Machine Learning) and a skill-count badge.
- **Interview Coverage** panel: bullet list mapping practical skill areas to interview themes
  (e.g. "Problem framing & EDA", "Feature engineering", "Model selection & tuning", "Deployment &
  inference"), each linking to the project that demonstrates it.
- **Skills by Category** panel: filter tabs (All / Programming / Data Analysis / Statistics /
  Visualization / Machine Learning) rendering category cards with a skill count and short
  description.
- CTABanner → links to `/projects`.

### 7.3 Projects (`/projects`)
- Search input (filters by title/tool/tag) + filter tab chips (All + your domain categories, e.g.
  ML / Analytics / Visualization / Systems / Competitive Programming).
- Responsive 2-column card grid. **ProjectCard** fields:
  - Title, category badge, one-line description.
  - Thumbnail/illustration or embedded mini screenshot.
  - 2–3 inline metrics (e.g. dataset size, accuracy, users).
  - Action row: `Details` (opens modal or detail route), `Live Demo` (external link), `GitHub`
    (external link) — icon + label buttons.
- Empty state when search/filter yields nothing.

### 7.4 Insights (`/insights`)
- StatCard strip (can reuse or show alternate metrics: repos, advanced case studies, credentials).
- **Selected Technical Proof**: cards pairing a project name with its single strongest
  quantitative result (benchmark, accuracy, dataset size).
- **Engineering Capabilities**: 3 principle cards (e.g. "Evaluation-first machine learning",
  "Production-facing data products", "Explainable & reproducible AI"), each with a short
  description + example project link.
- **Portfolio Composition**: donut/pie chart (Recharts) showing % split of work across domains
  (ML, Analytics, Visualization, Systems).
- **Stories Worth Discussing**: 2–3 short narrative cards for interview talking points.
- **How I Work**: numbered process list (e.g. "Validate before deploying", "Keep pipelines
  reproducible").
- **ML Evaluation, in Context**: comparison table of your models' metrics vs. baselines.
- CTABanner → links to `/projects` (filtered by domain) or `/journey`.

### 7.5 Journey (`/journey`)
- Horizontal stepper/timeline: 5–8 nodes (e.g. Academic Foundation → University/Degree →
  Skill-Building Program → Competition/Hackathon → Certification/Bootcamp → Internship →
  Current Role), each node showing a date, icon/logo, and short card with 2–3 bullet
  achievements.
- Side panel: one or two highlight stats (e.g. a completion percentage, score, or rating) plus a
  small set of milestone chips (weeks, score, count).
- CTABanner → links to `/certifications`.

### 7.6 Certifications (`/certifications`)
- Grid/list of certification cards. Each card: issuer + program name, year, 2–3 sub-badges (skills
  or achievement tiers), a "Verified" indicator, and a "View Certificate" link.
- Support tiered certificates (e.g. Basic/Intermediate/Advanced) as sub-rows within one card.
- Closing banner: encouraging stat ("You keep learning, you keep growing.") with a small bar-chart
  graphic and 2 stat callouts, plus a "more coming soon" note.
- CTABanner → links to `/contact`.

### 7.7 Contact (`/contact`)
- Header: "Get In Touch" + "Open to opportunities" badge.
- Left panel: 2–3 line pitch ("Your message goes straight to my inbox"), quick facts (location,
  status/role, average response time).
- Right panel: form — Name, Email, Subject, Message (textarea), gradient "Send message" button.
  Wire to Formspree/EmailJS/Resend so no backend is required.
- Bottom CTABanner: one-line pitch + "Send an Email" mailto/button as a fallback channel.

## 8. Design System

- **Palette**: near-black navy background (`#0A0E1A`–`#0F1420`), card surfaces slightly lighter
  with subtle border (`#1A2233`), primary accent teal/cyan (`#22D3EE`/`#2DD4BF`), gradient buttons
  (teal → blue), secondary accents for badges (amber/orange for awards, green for "available",
  purple for ML tags).
- **Typography**: sans-serif (Inter/Geist), bold large numerals for stat cards, medium-weight page
  titles with the accent word in the primary teal color.
- **Shape**: rounded-xl cards (12–16px radius), soft borders, subtle glassmorphism
  (`backdrop-blur` + translucent background) on floating banners.
- **Motion**: count-up numeric animation for stats, hover-lift on cards, fade/slide route
  transitions, ambient particle drift in background — all Framer Motion, all `prefers-reduced-motion`-aware.
- **Spacing**: 8px base scale, generous padding inside cards (24–32px), consistent gap-6 grids.

## 9. Data Model (example shapes)

```ts
// data/projects.ts
type Project = {
  id: string;
  title: string;
  category: "ML" | "Analytics" | "Visualization" | "Systems" | "CP";
  description: string;
  thumbnail?: string;
  metrics: { label: string; value: string }[];
  links: { details?: string; demo?: string; github?: string };
};

// data/skills.ts
type Skill = {
  name: string;
  category: "Programming" | "Data Analysis" | "Statistics" | "Visualization" | "Machine Learning";
};

// data/journey.ts
type JourneyStep = {
  date: string;
  title: string;
  org?: string;
  bullets: string[];
};

// data/certifications.ts
type Certification = {
  issuer: string;
  program: string;
  year: string;
  badges: string[];
  verified: boolean;
  certificateUrl?: string;
};
```

## 10. Non-Functional Requirements

- **Responsive**: sidebar collapses to a bottom nav or drawer under 768px; stat/project grids
  reflow to 1–2 columns on mobile.
- **Accessibility**: semantic landmarks, keyboard-navigable sidebar, sufficient color contrast on
  dark background, `alt` text on all images, reduced-motion support.
- **Performance**: target Lighthouse ≥ 90 on Performance/Accessibility/SEO; lazy-load project
  images; code-split routes.
- **SEO**: per-route `<title>`/meta description, Open Graph image for social shares.
- **Analytics** (optional): Vercel Analytics or Plausible for page-view tracking.

## 11. Deployment Plan

1. Push repo to GitHub.
2. Connect repo to Vercel (or Netlify) → auto-deploy on push to `main`.
3. Set custom domain (optional) via DNS CNAME.
4. Configure the contact-form provider's API key as an environment variable in the hosting
   dashboard (never commit it).

## 12. Build Phases (suggested for an agentic IDE run)

1. **Scaffold**: init React/Next app, Tailwind, routing, folder structure (`/data`, `/components`,
   `/pages` or `/app`).
2. **Global shell**: Sidebar, Topbar, Footer, route outlet, dark theme tokens.
3. **Overview page** with StatCard + CTABanner (validates design system end-to-end).
4. **Skills page**.
5. **Projects page** (search/filter logic + ProjectCard + modal/detail view).
6. **Insights page** (Recharts donut + comparison table).
7. **Journey page** (timeline component).
8. **Certifications page**.
9. **Contact page** (form integration).
10. **Polish pass**: animations, responsive QA, accessibility audit, SEO metadata.
11. **Deploy** to Vercel + smoke test on mobile/desktop.

## 13. Content Checklist (fill in before launch)

- [ ] Your name, title, avatar photo, short bio
- [ ] Real project list with metrics and working demo/GitHub links
- [ ] Actual skills grouped by category
- [ ] Real education/work timeline with dates
- [ ] Real, verifiable certifications with certificate links
- [ ] Working contact form endpoint and your real email
- [ ] Resume PDF linked from sidebar
