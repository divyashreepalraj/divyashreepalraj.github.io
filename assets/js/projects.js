/**
 * PROJECTS SHOWCASE & CASE STUDY ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$ } from './utilities.js';

export const projectsData = [
  // --------------------------------------------------------------------------
  // FRONTEND & PRODUCTION SYSTEMS
  // --------------------------------------------------------------------------
  {
    id: "maintenance-page",
    title: "High-Availability Maintenance Page",
    category: "development",
    categoryLabel: "Frontend & Production Systems",
    type: "Development Project",
    summary: "Production standby page engineered with zero external dependencies, responsive canvas micro-animations, and automatic server status polling.",
    techStack: ["HTML5", "CSS3", "Vanilla JS", "SVG", "WebSockets"],
    challenges: "Delivering an engaging user experience during unplanned platform maintenance while maintaining zero server overhead and 100% Lighthouse score.",
    solutions: "Built a handcrafted CSS gradient mesh background combined with a lightweight canvas particle stream (< 5KB), auto-reconnect fallback timers, and full WCAG 2.2 AA accessibility.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["0 Framework Dependencies", "100/100 Lighthouse Performance", "Auto Reconnect Polling"]
  },
  {
    id: "birthday-newspaper",
    title: "Interactive Birthday Newspaper",
    category: "development",
    categoryLabel: "Frontend & Production Systems",
    type: "Development Project",
    summary: "Dynamic print-accurate digital newspaper platform generating custom historical frontpages based on user-selected birth dates.",
    techStack: ["HTML5", "CSS Grid", "Vanilla JS", "DOM-to-Image", "Canvas"],
    challenges: "Preserving vintage newspaper typographic layout proportions dynamically across mobile screens and PDF export.",
    solutions: "Architected fluid multi-column CSS Grid layouts with custom typography scaling (`clamp()`) and pixel-perfect high-DPI print export canvas rendering.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Custom Typography Scaling", "High DPI PDF Print Export", "Responsive Multi-column Grid"]
  },
  {
    id: "satbet-contribution",
    title: "Satbet iGaming Frontend Platform",
    category: "development",
    categoryLabel: "Frontend & Production Systems",
    type: "Development Project",
    summary: "High-performance iGaming web portal UI modules built during Digient Technologies tenure for high-volume active players.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript ES6", "REST APIs"],
    challenges: "Handling real-time odds updates, dynamic bet slips, and rapid UI re-renders without triggering layout thrashing.",
    solutions: "Optimized DOM manipulation using Virtual DOM fragment batching, debounced socket feeds, and strict CSS BEM modular styling.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Real-time Odds Stream", "Modular BEM Architecture", "High-frequency DOM Optimization"]
  },

  // EDITABLE PLACEHOLDER PROJECT 1
  {
    id: "placeholder-project-1",
    title: "Custom Web Application Placeholder #1",
    category: "development",
    categoryLabel: "Frontend & Production Systems",
    type: "Development Placeholder",
    summary: "[EDITABLE PLACEHOLDER] Replace this text with your project description, key features, and real achievements later.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+"],
    challenges: "[EDITABLE PLACEHOLDER] Describe the core technical or architectural challenge you solved in this project.",
    solutions: "[EDITABLE PLACEHOLDER] Detail your engineering solution, optimization steps, and measurable results.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Editable Placeholder", "Custom Tech Stack", "Case Study View"]
  },

  // --------------------------------------------------------------------------
  // DESIGN SYSTEMS & TOKEN ARCHITECTURE
  // --------------------------------------------------------------------------
  {
    id: "design-system-tokens",
    title: "Vanilla CSS Design System & Token Engine",
    category: "architecture",
    categoryLabel: "Design Systems & Token Architecture",
    type: "Architecture Project",
    summary: "Zero-dependency design token pipeline translating Figma token variables into production HSL CSS variables.",
    techStack: ["CSS Variables", "BEM", "HTML5", "Vanilla JS", "Design Tokens"],
    challenges: "Eliminating theme flash (FOUC) while supporting custom color palettes and typography scales without CSS framework overhead.",
    solutions: "Engineered a pure CSS custom properties architecture with inline zero-flash script and automated utility generators.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Zero FOUC Flash", "100% Native CSS Custom Properties", "Fluid clamp() Typography"]
  },
  {
    id: "accessible-component-library",
    title: "Accessible Web Component Suite (WCAG 2.2)",
    category: "architecture",
    categoryLabel: "Design Systems & Token Architecture",
    type: "Architecture & Accessibility",
    summary: "Handcrafted accessible UI components (Command Palette, Accordions, Modal Dialogs, Custom Sliders) built strictly to WAI-ARIA standards.",
    techStack: ["HTML5", "CSS3", "Vanilla JS", "WAI-ARIA", "Keyboard Traps"],
    challenges: "Enforcing focus management, keyboard traps, and screen-reader announcements without third-party UI libraries.",
    solutions: "Built lightweight ES6 JS focus trap controllers, keydown listeners, and live ARIA region announcers.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["WCAG 2.2 AA Compliant", "Keyboard Navigation Traps", "Screen Reader Tested"]
  },

  // EDITABLE PLACEHOLDER PROJECT 2
  {
    id: "placeholder-project-2",
    title: "Design System Kit Placeholder #2",
    category: "architecture",
    categoryLabel: "Design Systems & Token Architecture",
    type: "Design System Placeholder",
    summary: "[EDITABLE PLACEHOLDER] Replace this text with details of your component library, token engine, or UI architecture project.",
    techStack: ["Figma", "CSS Tokens", "WAI-ARIA"],
    challenges: "[EDITABLE PLACEHOLDER] Describe spatial grids, token scaling, or accessibility requirements.",
    solutions: "[EDITABLE PLACEHOLDER] Explain your design system token organization and code handoff strategy.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Editable Placeholder", "Token System", "Figma Integration"]
  },

  // --------------------------------------------------------------------------
  // UI/UX & MOBILE CASE STUDIES
  // --------------------------------------------------------------------------
  {
    id: "gaming-dashboard",
    title: "Next-Gen iGaming Analytics Dashboard",
    category: "design",
    categoryLabel: "UI/UX & Mobile Case Studies",
    type: "Design & Engineering",
    summary: "End-to-end UI/UX design system & interactive prototype for platform operators tracking player retention, live tables, and revenue metrics.",
    techStack: ["Figma", "UI/UX Research", "Design Systems", "HTML5", "CSS Variables"],
    challenges: "Synthesizing complex multi-source telemetry data into digestible, customizable visual widgets.",
    solutions: "Created a comprehensive dark-mode design system with ergonomic color contrast, modular drag-and-drop card layouts, and scalable widget specs.",
    wireframes: "Researched 15 operator workflows -> Low-fi wireframes -> Interactive Figma Prototype -> Production-ready CSS token system.",
    demoUrl: "https://behance.net/divyashree-p",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Full Figma Design System", "High-density Data Ergonomics", "Operator Workflow Research"]
  },
  {
    id: "casino-cms",
    title: "Enterprise Casino Content Management System",
    category: "design",
    categoryLabel: "UI/UX & Mobile Case Studies",
    type: "Design & Engineering",
    summary: "Back-office management platform designed for multi-region casino operators to configure games, bonuses, and localization settings.",
    techStack: ["UI/UX Design", "Wireframing", "Prototyping", "HTML/CSS BEM"],
    challenges: "Streamlining a legacy multi-step administrative workflow for non-technical casino content managers.",
    solutions: "Engineered intuitive step-by-step wizard forms, inline validation feedback, and unified table controls resulting in a 40% reduction in configuration errors.",
    wireframes: "User Journey Maps -> High-fidelity Interactive Prototypes -> Cross-functional Developer Handoff Specifications.",
    demoUrl: "https://behance.net/divyashree-p",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["40% Reduced Operator Error", "Step-by-step Form Wizard", "Cross-functional Developer Handoff"]
  },
  {
    id: "player-portal-app",
    title: "Mobile Casino Player Portal UI",
    category: "design",
    categoryLabel: "UI/UX & Mobile Case Studies",
    type: "UI/UX & Mobile Design",
    summary: "Touch-optimized mobile web interface for player account management, instant deposit options, and live tournament leaderboards.",
    techStack: ["Figma", "Mobile UI", "Prototyping", "Micro-interactions"],
    challenges: "Designing high-density financial transaction controls on smaller mobile screens.",
    solutions: "Crafted bottom-sheet navigation panels, large tap targets (minimum 48px), and tactile feedback micro-animations.",
    wireframes: "Mobile Usability Audits -> Wireframe Skeletons -> Tactile Figma Prototypes.",
    demoUrl: "https://behance.net/divyashree-p",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Touch Target Ergonomics", "Bottom-sheet Navigation", "Tactile Micro-interactions"]
  },

  // EDITABLE PLACEHOLDER PROJECT 3 & 4
  {
    id: "placeholder-project-3",
    title: "UI/UX Research Case Study Placeholder #3",
    category: "design",
    categoryLabel: "UI/UX & Mobile Case Studies",
    type: "UI/UX Placeholder",
    summary: "[EDITABLE PLACEHOLDER] Replace this text with user research, persona maps, wireframes, and final UI prototypes.",
    techStack: ["Figma", "User Research", "Wireframing"],
    challenges: "[EDITABLE PLACEHOLDER] Explain target audience pain points and design usability challenges.",
    solutions: "[EDITABLE PLACEHOLDER] Detail user testing feedback, iterations, and final polished interface design.",
    demoUrl: "https://behance.net/divyashree-p",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Editable Placeholder", "User Persona Maps", "Figma Prototype"]
  },
  {
    id: "placeholder-project-4",
    title: "Full Stack / API App Placeholder #4",
    category: "development",
    categoryLabel: "Frontend & Production Systems",
    type: "Full Stack Placeholder",
    summary: "[EDITABLE PLACEHOLDER] Replace this text with details of any future web app, Node.js backend, or REST API project.",
    techStack: ["Node.js", "Express", "REST APIs", "Vanilla JS"],
    challenges: "[EDITABLE PLACEHOLDER] Outline backend routing, database query performance, or authentication logic.",
    solutions: "[EDITABLE PLACEHOLDER] Detail your server-side design, schema, and API endpoint integration.",
    githubUrl: "https://github.com/divyashree-p",
    highlights: ["Editable Placeholder", "Backend Node.js", "API Integration"]
  }
];

export const initProjects = () => {
  const container = $('.projects-section-container');
  const filterBtns = $$('[data-project-filter]');

  if (!container) return;

  renderCategorizedProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-project-filter');
      renderCategorizedProjects(filter);
    });
  });
};

const renderCategorizedProjects = (filterCategory) => {
  const container = $('.projects-section-container');
  if (!container) return;

  const categoriesMap = [
    { key: "development", title: "Frontend & Production Systems", icon: "⚡" },
    { key: "architecture", title: "Design Systems & Token Architecture", icon: "🎨" },
    { key: "design", title: "UI/UX & Mobile Case Studies", icon: "📐" }
  ];

  let html = '';

  categoriesMap.forEach(cat => {
    if (filterCategory !== 'all' && filterCategory !== cat.key) return;

    const catProjects = projectsData.filter(p => p.category === cat.key);
    if (catProjects.length === 0) return;

    html += `
      <div class="project-subsection" style="margin-bottom: 3.5rem;">
        <div class="flex items-center gap-3" style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <span style="font-size: 1.5rem;">${cat.icon}</span>
          <h3 style="font-size: var(--font-size-xl); margin: 0;">${cat.title}</h3>
          <span class="badge badge-accent" style="margin-left: auto;">${catProjects.length} Projects</span>
        </div>

        <div class="grid grid-cols-3 gap-6">
          ${catProjects.map(p => `
            <article class="project-card shimmer reveal-up">
              <div class="project-thumb">
                <div class="project-thumb-preview">${p.title.charAt(0)}${p.title.split(' ')[1] ? p.title.split(' ')[1].charAt(0) : ''}</div>
              </div>
              <div class="project-body">
                <div class="flex items-center justify-between gap-2" style="margin-bottom: 0.5rem;">
                  <span class="badge badge-accent">${p.type}</span>
                </div>
                <h4 class="project-title" style="font-size: var(--font-size-lg);">${p.title}</h4>
                <p class="project-desc">${p.summary}</p>
                <div class="project-tags">
                  ${p.techStack.map(tech => `<span class="badge">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                  <button class="btn btn-secondary btn-sm" data-action="view-case-study" data-id="${p.id}" style="padding: 0.5rem 1rem; font-size: 0.85rem; width: 100%; justify-content: center;">
                    View Case Study
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Bind Case Study Modals
  $$('[data-action="view-case-study"]', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const project = projectsData.find(p => p.id === id);
      if (project) openCaseStudyModal(project);
    });
  });
};

const openCaseStudyModal = (project) => {
  let modal = $('.case-study-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="case-study-modal command-palette-backdrop" aria-hidden="true">
        <div class="command-dialog glass-card" style="max-width: 720px; max-height: 85vh; overflow-y: auto; padding: 2rem;">
          <div class="modal-content"></div>
        </div>
      </div>
    `);
    modal = $('.case-study-modal');
  }

  const modalContent = $('.modal-content', modal);
  modalContent.innerHTML = `
    <div class="flex items-center justify-between" style="margin-bottom: 1.5rem;">
      <span class="badge badge-accent">${project.type}</span>
      <button class="btn-icon" data-action="close-modal" aria-label="Close modal">✕</button>
    </div>
    <h2 style="font-size: var(--font-size-2xl); margin-bottom: 1rem;">${project.title}</h2>
    <p style="font-size: var(--font-size-lg); color: var(--text-secondary); margin-bottom: 1.5rem;">${project.summary}</p>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Tech Stack & Skills</h4>
      <div class="flex flex-wrap gap-2">
        ${project.techStack.map(t => `<span class="badge">${t}</span>`).join('')}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">The Challenge</h4>
      <p style="color: var(--text-secondary);">${project.challenges}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Engineering Solution</h4>
      <p style="color: var(--text-secondary);">${project.solutions}</p>
    </div>

    ${project.wireframes ? `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Design Process & Artifacts</h4>
        <p style="color: var(--text-secondary);">${project.wireframes}</p>
      </div>
    ` : ''}

    <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${project.githubUrl || 'https://github.com/divyashree-p'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View GitHub Repository</a>
      <button class="btn btn-secondary" data-action="close-modal">Close Case Study</button>
    </div>
  `;

  modal.classList.add('active');

  $$('[data-action="close-modal"]', modal).forEach(btn => {
    btn.addEventListener('click', () => modal.classList.remove('active'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
};
