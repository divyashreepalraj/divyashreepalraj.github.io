/**
 * MARKDOWN BLOG ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$, parseMarkdown, calculateReadingTime } from './utilities.js';

export const blogArticles = [
  {
    id: "article-1",
    title: "Building Scalable Design Systems in Pure CSS & BEM",
    category: "Engineering",
    categoryKey: "engineering",
    date: "July 2026",
    file: "blog/article-1.md",
    tags: ["CSS3", "Design Systems", "Architecture", "BEM"],
    summary: "How to craft enterprise design tokens, fluid typography scales, and modular CSS architecture without relying on heavy frameworks."
  },
  {
    id: "article-4",
    title: "Mastering Fluid Typography with Modern CSS clamp()",
    category: "Engineering",
    categoryKey: "engineering",
    date: "April 2026",
    file: "blog/article-4.md",
    tags: ["CSS Clamp", "Fluid Layout", "Responsive", "Tokens"],
    summary: "Eliminating arbitrary media query breakpoints by allowing font sizes and container padding to scale fluidly across viewports."
  },
  {
    id: "article-2",
    title: "Evolving from UI Designer to Senior UI Engineer",
    category: "Career & Mindset",
    categoryKey: "career",
    date: "June 2026",
    file: "blog/article-2.md",
    tags: ["UI Engineering", "Career Growth", "Frontend", "Figma to Code"],
    summary: "Reflections on bridging visual design precision with production frontend engineering, DOM performance, and component accessibility."
  },
  {
    id: "article-3",
    title: "Micro-interactions & Web Performance Optimization",
    category: "Performance",
    categoryKey: "performance",
    date: "May 2026",
    file: "blog/article-3.md",
    tags: ["Performance", "Animations", "IntersectionObserver", "WCAG"],
    summary: "Techniques for achieving 60fps micro-animations while keeping Lighthouse scores at a clean 100."
  },
  {
    id: "article-5",
    title: "A Guide to WCAG 2.2 AA Accessibility for UI Engineers",
    category: "Accessibility",
    categoryKey: "accessibility",
    date: "March 2026",
    file: "blog/article-5.md",
    tags: ["Accessibility", "WCAG 2.2", "Keyboard Traps", "ARIA"],
    summary: "Enforcing focus management, screen reader announcements, and high color contrast in complex web applications."
  }
];

export const initBlog = () => {
  const container = $('.blog-section-container');
  const searchInput = $('#blog-search-input');
  const catFilterBtns = $$('[data-blog-filter]');

  if (container) {
    renderCategorizedBlog('all');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        renderBlogQuery(query);
      });
    }

    catFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-blog-filter');
        renderCategorizedBlog(cat);
      });
    });
  }
};

const renderCategorizedBlog = (filterCategory) => {
  const container = $('.blog-section-container');
  if (!container) return;

  const blogCategories = [
    { key: "engineering", title: "Engineering & Architecture", icon: "🛠️" },
    { key: "career", title: "Career & Mindset Evolution", icon: "💡" },
    { key: "performance", title: "Performance & Micro-interactions", icon: "⚡" },
    { key: "accessibility", title: "WCAG Accessibility & Inclusion", icon: "♿" }
  ];

  let html = '';

  blogCategories.forEach(cat => {
    if (filterCategory !== 'all' && filterCategory !== cat.key) return;

    const catArticles = blogArticles.filter(a => a.categoryKey === cat.key);
    if (catArticles.length === 0) return;

    html += `
      <div class="blog-subsection" style="margin-bottom: 3.5rem;">
        <div class="flex items-center gap-3" style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <span style="font-size: 1.5rem;">${cat.icon}</span>
          <h3 style="font-size: var(--font-size-xl); margin: 0;">${cat.title}</h3>
          <span class="badge badge-accent" style="margin-left: auto;">${catArticles.length} ${catArticles.length === 1 ? 'Article' : 'Articles'}</span>
        </div>

        <div class="grid grid-cols-3 gap-6">
          ${catArticles.map(art => `
            <article class="glass-card shimmer reveal-up" style="display: flex; flex-direction: column;">
              <div class="flex items-center justify-between" style="margin-bottom: 0.75rem;">
                <span class="badge badge-accent">${art.category}</span>
                <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${art.date}</span>
              </div>
              <h4 style="font-size: var(--font-size-lg); margin-bottom: 0.75rem;">${art.title}</h4>
              <p style="color: var(--text-secondary); margin-bottom: 1.5rem; flex-grow: 1; font-size: var(--font-size-sm);">${art.summary}</p>
              <div class="flex flex-wrap gap-2" style="margin-bottom: 1.5rem;">
                ${art.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
              </div>
              <button class="btn btn-secondary btn-sm" data-action="read-article" data-id="${art.id}">
                Read Article →
              </button>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Bind Article Modals
  $$('[data-action="read-article"]', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const article = blogArticles.find(a => a.id === id);
      if (article) openArticleReader(article);
    });
  });
};

const renderBlogQuery = (query) => {
  const container = $('.blog-section-container');
  if (!container) return;

  if (!query) {
    renderCategorizedBlog('all');
    return;
  }

  const filtered = blogArticles.filter(art =>
    art.title.toLowerCase().includes(query) ||
    art.summary.toLowerCase().includes(query) ||
    art.tags.some(t => t.toLowerCase().includes(query))
  );

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem;">No articles match your search query "${query}".</div>`;
    return;
  }

  container.innerHTML = `
    <div class="grid grid-cols-3 gap-6">
      ${filtered.map(art => `
        <article class="glass-card shimmer reveal-up" style="display: flex; flex-direction: column;">
          <div class="flex items-center justify-between" style="margin-bottom: 0.75rem;">
            <span class="badge badge-accent">${art.category}</span>
            <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${art.date}</span>
          </div>
          <h4 style="font-size: var(--font-size-lg); margin-bottom: 0.75rem;">${art.title}</h4>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem; flex-grow: 1; font-size: var(--font-size-sm);">${art.summary}</p>
          <div class="flex flex-wrap gap-2" style="margin-bottom: 1.5rem;">
            ${art.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm" data-action="read-article" data-id="${art.id}">
            Read Article →
          </button>
        </article>
      `).join('')}
    </div>
  `;

  $$('[data-action="read-article"]', container).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const article = blogArticles.find(a => a.id === id);
      if (article) openArticleReader(article);
    });
  });
};

const openArticleReader = (article) => {
  let modal = $('.blog-reader-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="blog-reader-modal command-palette-backdrop" aria-hidden="true">
        <div class="command-dialog glass-card" style="max-width: 800px; max-height: 90vh; overflow-y: auto; padding: 2.5rem;">
          <div class="reader-header flex items-center justify-between" style="margin-bottom: 1.5rem;">
            <span class="badge badge-accent">${article.category}</span>
            <button class="btn-icon" data-action="close-reader">✕</button>
          </div>
          <h1 class="reader-title" style="font-size: var(--font-size-2xl); margin-bottom: 1rem;">${article.title}</h1>
          <div class="reader-meta flex items-center gap-4 text-muted font-mono" style="font-size: var(--font-size-xs); margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
            <span>Date: ${article.date}</span>
            <span>Reading Time: ${calculateReadingTime(article.summary + ' ' + article.title)}</span>
          </div>
          <div class="reader-body" style="line-height: 1.8; color: var(--text-secondary);">
            Loading full article content...
          </div>
        </div>
      </div>
    `);
    modal = $('.blog-reader-modal');
  }

  const readerBody = $('.reader-body', modal);
  readerBody.innerHTML = `
    <p><strong>${article.summary}</strong></p>
    <br>
    <p>In modern web development, bridging UI/UX precision with senior-level frontend engineering requires a deep appreciation for web standards, modular CSS architecture, and minimal DOM thrashing.</p>
    <br>
    <h2>Key Architectural Pillars</h2>
    <ul>
      <li><strong>Zero-Dependency Design Systems:</strong> Utilizing fluid CSS <code>clamp()</code> functions, custom HSL variable themes, and semantic HTML structure.</li>
      <li><strong>Perceptual Performance:</strong> Guaranteeing smooth 60fps micro-animations via hardware-accelerated CSS transforms and <code>IntersectionObserver</code> targets.</li>
      <li><strong>WCAG 2.2 AA Accessibility:</strong> Enforcing strict focus rings, keyboard navigation traps for modals, and screen reader labels.</li>
    </ul>
    <br>
    <p>By treating the portfolio website itself as a production engineering showcase, every line of code serves as direct proof of technical execution.</p>
  `;

  modal.classList.add('active');

  $$('[data-action="close-reader"]', modal).forEach(btn => {
    btn.addEventListener('click', () => modal.classList.remove('active'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
};
