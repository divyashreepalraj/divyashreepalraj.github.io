/**
 * PROJECTS ENGINE & DYNAMIC DATA ARCHITECTURE
 * Divya Shree P - Portfolio Website
 */

import { $, $$ } from './utilities.js';
import { updateSEO } from './seo.js';

// ==========================================================================
// DEVELOPMENT PROJECTS DATA
// ==========================================================================

export const projectsData = [
  {
    id: "satbet",
    slug: "satbet-igaming",
    title: "Satbet iGaming Frontend Platform",
    category: "Development",
    type: "Professional Project",
    shortDescription: "Complete frontend revamp of an enterprise iGaming platform, featuring a responsive UI redesign, modular CSS architecture, and real-time player bonus modules.",
    description: "Satbet is a high-volume iGaming and sports betting platform serving thousands of daily active users. This project delivered a complete frontend transformation focused on performance, mobile-first responsiveness, modular styling system, and real-time player features.",
    thumbnail: "assets/images/hero_img.png",
    heroImage: "assets/images/hero_img.png",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript ES6+", "REST APIs", "BEM"],
    overview: "As part of an Agile engineering team at Digient Technologies, I led the complete UI revamp of the Satbet platform. The legacy platform suffered from UI fragmentation across mobile viewports and heavy CSS reliance. We re-engineered the platform with clean semantic markup, custom CSS variables, and modular component architecture.",
    objective: "Modernize the visual theme across 40+ platform views, optimize frontend loading speeds on low-bandwidth mobile networks, implement a standardized UI component library, and seamlessly integrate new promotional and bonus modules.",
    role: "Frontend Developer & UI Engineer responsible for frontend architecture, component redesign, responsive layout implementation, API integration for player bonus workflows, and cross-browser QA.",
    developmentProcess: "Executed within 2-week Agile sprint cycles. Started with a full UI component audit in Figma, followed by establishing CSS custom properties for dark mode tokenization, developing responsive layout templates, and integrating backend REST endpoints for live betting metrics and player rewards.",
    keyFeatures: [
      "Complete UI & Visual Theme Overhaul across sports, live casino, and account management views.",
      "Modular & Reusable CSS Component Library reducing frontend UI debt and code duplication.",
      "Real-Time Player Bonus & Promotion Management interface with responsive modal flows.",
      "Mobile-First Responsive Layout optimized for fast rendering on high-latency networks.",
      "Zero-dependency JavaScript event handling and custom modal engine."
    ],
    screenshots: [
      { url: "assets/images/hero_img.png", caption: "Satbet Platform Overview & Sportsbook Interface" }
    ],
    challenges: "Redesigning an active, high-traffic production system with zero downtime while ensuring backward compatibility with legacy backend APIs and delivering feature updates under tight sprint deadlines.",
    solutions: "Established a decoupled modular CSS architecture using strict BEM conventions, implemented feature flags for incremental UI deployments, and built reusable Vanilla JS modules for asynchronous data fetching and dynamic modal state management.",
    outcome: "Successfully launched the revamped platform, resulting in a 35% improvement in page load speeds, a 50% reduction in UI bug reports, and significantly enhanced player retention across mobile devices.",
    liveUrl: "https://www.satbet0.in/",
    githubUrl: "",
    featured: true,
    date: "Apr 2022 – Present"
  },
  {
    id: "pedo2gero",
    slug: "pedo2gero-business",
    title: "Pedo2gero Business Web Application",
    category: "Development",
    type: "Freelance Project",
    shortDescription: "Responsive business web application engineered with semantic HTML5, fluid CSS clamp() layouts, and AI-assisted performance optimization.",
    description: "Pedo2gero is a commercial web application designed and developed to provide a seamless, mobile-responsive web presence. Built with an emphasis on clean spatial hierarchy, fast load speeds, and intuitive user navigation.",
    thumbnail: "assets/images/hero_img1.png",
    heroImage: "assets/images/hero_img1.png",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Fluid CSS clamp()", "SEO", "AI-Assisted Workflow"],
    overview: "Pedo2gero required a complete web presence built from scratch. As the sole developer, I translated business requirements into a high-performance, responsive web application featuring custom micro-animations, semantic DOM markup, and on-page technical SEO.",
    objective: "Build an elegant, lightning-fast business web app that presents services clearly, converts visitors through accessible contact touchpoints, and achieves top Lighthouse scores on mobile and desktop.",
    role: "Lead Frontend Engineer & Project Specialist handling requirements analysis, visual implementation, responsive CSS layout, Vanilla JS interactions, and end-to-end site deployment.",
    developmentProcess: "Followed a 5-step development methodology: requirements gathering, wireframing, building fluid CSS tokenization, implementing semantic HTML structure, writing modular Vanilla JS scripts, and conducting rigorous cross-browser performance testing.",
    keyFeatures: [
      "Fluid Layout Architecture leveraging modern CSS clamp() for breakpoint-free scaling.",
      "Semantic HTML5 Structure with complete ARIA landmarks and keyboard accessibility.",
      "Custom Vanilla JS Interactivity including smooth scroll, modal controls, and dynamic form validation.",
      "Technical SEO Optimization with microdata, meta tags, and high color contrast.",
      "Optimized Asset Pipeline with web-ready images and lazy loading."
    ],
    screenshots: [
      { url: "assets/images/hero_img1.png", caption: "Pedo2gero Web Application Interface" }
    ],
    challenges: "Delivering a custom, highly responsive web application on an accelerated timeline without relying on heavy third-party UI frameworks.",
    solutions: "Utilized modern native CSS Grid and Flexbox with CSS custom properties, and incorporated AI-assisted coding tools to accelerate component boilerplate generation and cross-browser testing.",
    outcome: "Achieved a 98+ Lighthouse rating across Performance, Accessibility, Best Practices, and SEO, providing the business with a reliable, professional web platform.",
    liveUrl: "https://www.pedo2gero.in/",
    githubUrl: "https://github.com/divyashreepalraj",
    featured: true,
    date: "2023"
  },
  {
    id: "casino-cms",
    slug: "casino-cms-dashboard",
    title: "iGaming Casino Management System (CMS)",
    category: "Development",
    type: "Professional Project",
    shortDescription: "Data-intensive enterprise dashboard engineered for managing live casino games, player analytics, operational rules, and real-time report generation.",
    description: "An enterprise-grade Casino Management System dashboard built for internal platform operators. Designed to handle heavy data grids, dynamic filtering, game state toggles, and live transactional monitoring with low cognitive load.",
    thumbnail: "assets/images/hero_img.png",
    heroImage: "assets/images/hero_img.png",
    technologies: ["HTML5", "CSS3 BEM", "JavaScript ES6+", "Data Tables", "DOM Optimization", "REST APIs"],
    overview: "Internal operators required a robust, accessible interface to manage casino game catalogs, bonus payouts, and player security flags. I engineered the frontend dashboard views to handle complex tabular datasets cleanly and efficiently.",
    objective: "Streamline daily operational workflows by replacing clunky legacy back-office tools with a fast, intuitive, and responsive dashboard interface.",
    role: "Frontend UI Engineer focused on dashboard architecture, accessible data grid components, form states, dynamic table filtering, and API data binding.",
    developmentProcess: "Collaborated with product managers and backend teams to define API payloads. Designed clean, high-density data tables using CSS Grid, implemented custom sorting and search filters in JavaScript, and added keyboard navigation support.",
    keyFeatures: [
      "High-Density Data Grid with client-side dynamic search, sorting, and pagination.",
      "Real-Time Status Indicators & Operational Badges for live game health.",
      "Accessible Modal Dialogs for fast game configuration and security overrides.",
      "Responsive Sidebar & Command Palette navigation for effortless multi-screen tasks."
    ],
    screenshots: [],
    challenges: "Rendering large tabular datasets with hundreds of items without causing DOM lag or memory bottlenecks on operator workstations.",
    solutions: "Implemented document fragment batching, debounced input handlers, and CSS virtual rendering techniques to keep frame rates steady at 60fps.",
    outcome: "Improved operator task efficiency by 40% and drastically reduced administrative training time for new platform managers.",
    liveUrl: "",
    githubUrl: "",
    featured: true,
    date: "2023 – 2024"
  },
  {
    id: "design-tokens",
    slug: "ui-design-tokens-system",
    title: "Enterprise UI Design Tokens System",
    category: "Development",
    type: "Open Source / Architecture",
    shortDescription: "Modular CSS architecture and design token system establishing fluid typography scales, standard spatial units, and zero-flash dark mode theme switching.",
    description: "A lightweight, framework-agnostic design system token core engineered in pure CSS custom properties and JavaScript ES Modules. Solves CSS specificity conflicts and guarantees 100/100 Lighthouse performance.",
    thumbnail: "assets/images/hero_img1.png",
    heroImage: "assets/images/hero_img1.png",
    technologies: ["CSS3 Custom Properties", "BEM Architecture", "JavaScript ES Modules", "Fluid Typography", "Accessibility"],
    overview: "To enforce visual consistency and code reusability across multiple web applications, I built this enterprise token collection. It defines color palettes, fluid font scales, container boundaries, glassmorphism overlays, and dark/light mode switches.",
    objective: "Eliminate arbitrary pixel values and inline CSS overrides across projects by supplying a standardized, accessible token system.",
    role: "Creator & Lead UI Engineer.",
    developmentProcess: "Calculated fluid math scales using CSS `clamp()`, structured token tiers (global, semantic, component), and implemented a zero-flash theme persistence script using `localStorage` and system media queries.",
    keyFeatures: [
      "Zero-Dependency CSS custom property library with dark/light theme switching.",
      "Fluid Typography & Spacing Scales reducing reliance on media queries.",
      "BEM Naming Conventions preventing specificity wars.",
      "WCAG 2.2 AA Contrast Compliance across text and surface combinations."
    ],
    screenshots: [],
    challenges: "Preventing flash of unstyled content (FOUC) or incorrect theme rendering during page load before external scripts parse.",
    solutions: "Crafted an inline zero-flash theme script placed high in the document `<head>` that synchronously reads state from `localStorage` or `prefers-color-scheme`.",
    outcome: "Adopted across personal and professional projects, cutting boilerplate CSS setup time by over 60%.",
    liveUrl: "",
    githubUrl: "https://github.com/divyashreepalraj",
    featured: false,
    date: "2024"
  }
];

// ==========================================================================
// RENDER HOMEPAGE FEATURED PROJECTS
// ==========================================================================

export const renderHomepageProjects = () => {
  const container = $('.projects-section-container');
  if (!container) return;

  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  container.innerHTML = `
    <div class="grid grid-cols-2 gap-6">
      ${featuredProjects.map(project => createProjectCardHTML(project)).join('')}
    </div>

    <div style="margin-top: 3rem; text-align: center;">
      <a href="projects.html" class="btn btn-primary magnetic" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem;">
        View All Projects
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  `;
};

// ==========================================================================
// RENDER PROJECTS LISTING PAGE (projects.html)
// ==========================================================================

export const renderProjectsListing = () => {
  const container = $('.projects-listing-container');
  if (!container) return;

  // Set Page SEO
  updateSEO({
    title: 'Projects | Divya Shree P - UI Engineer',
    description: 'Explore production development projects, web applications, and frontend systems engineered by Divya Shree P.',
    canonicalUrl: `${window.location.origin}/projects.html`
  });

  container.innerHTML = `
    <div class="grid grid-cols-2 gap-6">
      ${projectsData.map(project => createProjectCardHTML(project)).join('')}
    </div>
  `;
};

// ==========================================================================
// CARD HTML HELPER
// ==========================================================================

const createProjectCardHTML = (project) => {
  return `
    <article class="project-card glass-card shimmer" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
      <div>
        <!-- PROJECT BADGES -->
        <div class="flex items-center justify-between gap-2" style="margin-bottom: 0.75rem;">
          <span class="badge badge-accent">${project.type}</span>
          <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${project.date}</span>
        </div>

        <!-- TITLE -->
        <h3 class="project-title" style="font-size: var(--font-size-xl); margin-bottom: 0.75rem; color: var(--text-primary);">
          <a href="project.html?project=${project.slug}" style="color: inherit; text-decoration: none;" class="hover-underline">
            ${project.title}
          </a>
        </h3>

        <!-- SHORT DESCRIPTION -->
        <p class="project-desc" style="color: var(--text-secondary); margin-bottom: 1.25rem; font-size: var(--font-size-sm); line-height: 1.6;">
          ${project.shortDescription || project.description}
        </p>

        <!-- TECH STACK BADGES -->
        <div class="project-tags flex flex-wrap gap-2" style="margin-bottom: 1.5rem;">
          ${project.technologies.map(tech => `<span class="badge">#${tech}</span>`).join('')}
        </div>
      </div>

      <!-- CARD FOOTER CTA -->
      <div class="project-links" style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <a href="project.html?project=${project.slug}" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center; font-size: 0.875rem;">
          View Project Detail →
        </a>
      </div>
    </article>
  `;
};

// ==========================================================================
// RENDER DYNAMIC PROJECT DETAIL PAGE (project.html?project=slug)
// ==========================================================================

export const renderProjectDetail = () => {
  const container = $('.project-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectSlug = urlParams.get('project') || urlParams.get('id');

  const project = projectsData.find(p => p.slug === projectSlug || p.id === projectSlug) || projectsData[0];

  if (!project) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem;">
        <h2>Project Not Found</h2>
        <p class="text-secondary" style="margin: 1rem 0 2rem;">The project you are looking for does not exist or has been moved.</p>
        <a href="projects.html" class="btn btn-primary">← Back to Projects</a>
      </div>
    `;
    return;
  }

  // Update Dynamic SEO
  updateSEO({
    title: `${project.title} | Case Study - Divya Shree P`,
    description: project.shortDescription || project.description,
    canonicalUrl: `${window.location.origin}/project.html?project=${project.slug}`,
    
    ogType: 'article',
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web Browser",
      "author": {
        "@type": "Person",
        "name": "Divya Shree P"
      }
    }
  });

  // Calculate Next and Previous Projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  // Get 3 "More Projects" (excluding current project)
  const otherProjects = projectsData.filter(p => p.id !== project.id).slice(0, 3);
  if (otherProjects.length < 3) {
    const remaining = projectsData.filter(p => p.id !== project.id && !otherProjects.includes(p));
    otherProjects.push(...remaining.slice(0, 3 - otherProjects.length));
  }

  // Highlight numbers & metrics in outcome (e.g. 40%, 35%, 98+, 50%, etc.)
  const formattedOutcome = (project.outcome || '').replace(/(\d+%\+?|\d+\+)/g, '<span class="highlight-accent">$1</span>');

  container.innerHTML = `
    <div class="project-detail-wrapper">
      <!-- BREADCRUMB & BACK LINK -->
      <nav aria-label="Breadcrumb">
        <a href="projects.html" class="project-back-link">
          ← Back to Projects
        </a>
      </nav>

      <!-- TOP HERO CARD -->
      <header class="project-hero-card">
        <div class="project-hero-meta">
          <div class="flex items-center gap-2" style="flex-wrap: wrap;">
            <span class="badge badge-accent">${project.type || 'Professional Project'}</span>
            <span class="badge">${project.category || 'Development'}</span>
          </div>
          <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${project.date || ''}</span>
        </div>

        <h1 class="project-hero-title">
          ${project.title}
        </h1>

        <p class="project-hero-desc">
          ${project.shortDescription || project.description}
        </p>

        <div class="project-tech-section-title">
          TECHNOLOGIES & TOOLS
        </div>

        <div class="flex flex-wrap gap-2 pro_skill_tags">
          ${project.technologies.map(t => `<span class="badge" style="padding: 0.35rem 0.75rem;">${t.toUpperCase()}</span>`).join('')}
        </div>

        ${(project.liveUrl || project.githubUrl) ? `
          <div class="project-hero-divider"></div>
          <div class="flex flex-wrap gap-4" style="align-items: center;">
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                View Live Project
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ` : ''}

            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary magnetic" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                View Source Code
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-1.004-.013-1.845-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            ` : ''}
          </div>
        ` : ''}
      </header>

      <!-- 2x2 GRID SECTION -->
      <div class="project-grid-2x2">
        <section class="project-section-card">
          <div class="project-card-header">
            <div class="project-card-icon-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h2 class="project-card-title">Overview</h2>
          </div>
          <p class="project-card-text">${project.overview || project.description}</p>
        </section>

        <section class="project-section-card">
          <div class="project-card-header">
            <div class="project-card-icon-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <h2 class="project-card-title">My Role</h2>
          </div>
          <p class="project-card-text">${project.role || 'Frontend Engineer'}</p>
        </section>

        <section class="project-section-card">
          <div class="project-card-header">
            <div class="project-card-icon-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h2 class="project-card-title">Objective</h2>
          </div>
          <p class="project-card-text">${project.objective || ''}</p>
        </section>

        <section class="project-section-card">
          <div class="project-card-header">
            <div class="project-card-icon-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            </div>
            <h2 class="project-card-title">Development Process</h2>
          </div>
          <p class="project-card-text">${project.developmentProcess || ''}</p>
        </section>
      </div>

      <!-- KEY IMPLEMENTED FEATURES -->
      ${(project.keyFeatures && project.keyFeatures.length) ? `
        <section class="project-features-wrapper">
          <h2 class="project-features-title">
            <span style="color: #6366f1;">⚡</span> Key Implemented Features
          </h2>
          <div class="project-features-grid">
            ${project.keyFeatures.map(feat => `
              <div class="project-feature-card">
                <div class="project-feature-check">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p class="project-feature-text">${feat}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- TECHNICAL CHALLENGES & SOLUTIONS -->
      ${(project.challenges || project.solutions) ? `
        <section class="project-challenges-card">
          <h2 class="project-card-title" style="display: flex; align-items: center; gap: 0.75rem;">
            <span>💡</span> Technical Challenges & Solutions
          </h2>
          <div class="project-challenges-grid">
            <div>
              <h3 class="project-subheading">The Challenge</h3>
              <p class="project-card-text">${project.challenges || ''}</p>
            </div>
            <div>
              <h3 class="project-subheading">The Solution</h3>
              <p class="project-card-text">${project.solutions || ''}</p>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- PROJECT OUTCOME & IMPACT -->
      ${project.outcome ? `
        <section class="project-outcome-card">
          <div class="project-outcome-badge">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h2 class="project-outcome-title">Project Outcome & Impact</h2>
          <p class="project-outcome-text">${formattedOutcome}</p>
        </section>
      ` : ''}

      <!-- PREVIOUS / NEXT NAVIGATION BAR -->
      <nav aria-label="Project Navigation" class="project-nav-bar">
        <a href="project.html?project=${prevProject.slug}" class="project-nav-item">
          ‹ Previous: ${prevProject.title.split(' ')[0]}
        </a>
        <a href="projects.html" class="project-nav-center">
          ALL PROJECTS
        </a>
        <a href="project.html?project=${nextProject.slug}" class="project-nav-item">
          Next: ${nextProject.title.split(' ')[0]} ›
        </a>
      </nav>

      <!-- MORE PROJECTS SECTION -->
    </div>
  `;
};

      // <section>
      //   <h2 class="more-projects-title">More Projects</h2>
      //   <div class="more-projects-grid">
      //     ${otherProjects.map(p => `
      //       <a href="project.html?project=${p.slug}" class="more-project-card">
      //         <div class="more-project-thumb">
      //           <img src="${p.thumbnail || p.heroImage || 'assets/images/hero_img.png'}" alt="${p.title}" loading="lazy">
      //         </div>
      //         <div class="more-project-body">
      //           <h3 class="more-project-name">${p.title}</h3>
      //           <div class="more-project-tech">${p.technologies.slice(0, 3).join(', ')}</div>
      //         </div>
      //       </a>
      //     `).join('')}
      //   </div>
      // </section>


document.addEventListener('DOMContentLoaded', () => {
  renderHomepageProjects();
  renderProjectsListing();
  renderProjectDetail();
});