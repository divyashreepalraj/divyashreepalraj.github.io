/**
 * MARKDOWN & DYNAMIC BLOG ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$, calculateReadingTime } from './utilities.js';
import { updateSEO } from './seo.js';

// ==========================================================================
// BLOG ARTICLES DATA
// ==========================================================================

export const blogArticles = [
  {
    id: "article-1",
    slug: "building-scalable-design-systems-pure-css-bem",
    title: "Building Scalable Design Systems in Pure CSS & BEM",
    category: "Engineering",
    categoryKey: "engineering",
    date: "July 2026",
    readingTime: "5 min read",
    author: "Divya Shree P",
    tags: ["CSS3", "Design Systems", "Architecture", "BEM"],
    summary: "How to craft enterprise design tokens, fluid typography scales, and modular CSS architecture without relying on heavy external frameworks.",
    excerpt: "Learn how to build zero-dependency CSS design systems with custom properties, fluid typography clamp() math, and BEM modular styling conventions.",
    content: `
      <p>When scaling frontend applications across enterprise platforms, third-party CSS utility frameworks often introduce heavy abstraction, specificity collisions, and bloated bundle sizes. Handcrafting a pure CSS3 design system using BEM (Block Element Modifier) architecture and native CSS custom variables yields unmatched rendering performance, total visual freedom, and 100/100 Lighthouse performance scores.</p>
      
      <h2>1. Establishing Fluid Typography & Design Tokens</h2>
      <p>Instead of relying on rigid pixel values or managing dozens of arbitrary media query breakpoints, modern design systems leverage CSS <code>clamp()</code> functions to calculate responsive font scaling fluidly:</p>
      
      <pre><code>:root {
  --font-size-base: clamp(0.95rem, 0.9rem + 0.4vw, 1.0625rem);
  --font-size-display: clamp(2.8rem, 2.2rem + 3.5vw, 4.5rem);
  --spacing-container: clamp(1.25rem, 3vw, 3rem);
}</code></pre>

      <h2>2. BEM Specificity Control</h2>
      <p>BEM keeps CSS specificity flat (single class selectors), preventing specificity wars and eliminating the need for <code>!important</code> declarations across component layers:</p>

      <pre><code>.card {
  background: var(--bg-surface);
  border-radius: var(--radius-md);
}
.card__title {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
}
.card__title--highlighted {
  color: var(--accent-primary);
}</code></pre>

      <h2>3. Dark Mode with Zero Layout Shifts</h2>
      <p>By defining theme variables on <code>:root</code> and overriding tokens under <code>[data-theme="light"]</code>, theme transitions occur purely at the paint layer without triggering DOM repaints or reflows.</p>

      <blockquote>
        <p>A well-architected CSS design system serves as the foundational bridge between UI design precision and engineering speed.</p>
      </blockquote>
    `
  },
  {
    id: "article-4",
    slug: "mastering-fluid-typography-modern-css-clamp",
    title: "Mastering Fluid Typography with Modern CSS clamp()",
    category: "Engineering",
    categoryKey: "engineering",
    date: "April 2026",
    readingTime: "4 min read",
    author: "Divya Shree P",
    tags: ["CSS Clamp", "Fluid Layout", "Responsive", "Tokens"],
    summary: "Eliminating arbitrary media query breakpoints by allowing font sizes and container padding to scale fluidly across viewports.",
    excerpt: "Discover the mathematical formulas behind fluid CSS clamp() font scaling and eliminate viewport layout shifts forever.",
    content: `
      <p>Fluid typography is the technique of allowing font sizes to smoothly interpolate between a minimum and maximum threshold based on the user's viewport width.</p>
      
      <h2>Why Clamp Beats Traditional Media Queries</h2>
      <p>Traditional responsive design relies on step-function media queries at standard device widths (e.g. 768px, 1024px). Between these breakpoints, text sizes remain rigid, leading to awkward line wrapping or clipped headers on non-standard screens.</p>

      <h2>The Mathematical Formula</h2>
      <p>The standard <code>clamp()</code> syntax accepts three arguments: a minimum value, a preferred fluid calculation, and a maximum value:</p>
      
      <pre><code>font-size: clamp(MIN, PREFERRED, MAX);</code></pre>

      <p>By calculating the viewport slope (e.g., <code>clamp(1rem, 0.8rem + 1vw, 1.5rem)</code>), typography smoothly adjusts pixel by pixel as the browser window resizes.</p>
    `
  },
  {
    id: "article-2",
    slug: "evolving-from-ui-designer-to-senior-ui-engineer",
    title: "Evolving from UI Designer to Senior UI Engineer",
    category: "Career & Mindset",
    categoryKey: "career",
    date: "June 2026",
    readingTime: "6 min read",
    author: "Divya Shree P",
    tags: ["UI Engineering", "Career Growth", "Frontend", "Figma to Code"],
    summary: "Reflections on bridging visual design precision with production frontend engineering, DOM performance, and component accessibility.",
    excerpt: "Insights and lessons learned transitioning from visual UI design to senior frontend architecture in high-volume enterprise web applications.",
    content: `
      <p>The journey from visual UI/UX designer to UI Engineer is defined by one fundamental realization: <strong>Great design is not just how something looks—it is how cleanly, reliably, and accessibly it executes in production code.</strong></p>

      <h2>The Dual Advantage</h2>
      <ul>
        <li><strong>Design Precision:</strong> Deep understanding of spatial hierarchy, typography scales, design tokenization, visual contrast, and user ergonomics.</li>
        <li><strong>Engineering Excellence:</strong> Translating Figma wireframes directly into semantic DOM structures, optimizing bundle sizes, enforcing 60fps animations, and managing application state cleanly.</li>
      </ul>

      <h2>Lessons from 4+ Years in Enterprise iGaming Development</h2>
      <p>During my tenure engineering high-traffic iGaming platforms and operator tools at Digient Technologies, cross-functional collaboration was vital. Designing UI specs with code execution constraints in mind saved hundreds of engineering hours and prevented design debt.</p>
    `
  },
  {
    id: "article-3",
    slug: "micro-interactions-web-performance-optimization",
    title: "Micro-interactions & Web Performance Optimization",
    category: "Performance",
    categoryKey: "performance",
    date: "May 2026",
    readingTime: "5 min read",
    author: "Divya Shree P",
    tags: ["Performance", "Animations", "IntersectionObserver", "WCAG"],
    summary: "Techniques for achieving 60fps micro-animations while keeping Lighthouse performance scores at a clean 100.",
    excerpt: "How to craft smooth 60fps micro-interactions using composited CSS properties and IntersectionObserver scroll triggers.",
    content: `
      <p>Micro-interactions transform a static interface into an intuitive, living digital product. However, unoptimized CSS animations can cause frame drops and severe Cumulative Layout Shifts (CLS).</p>

      <h2>1. Animate Only Composited Properties</h2>
      <p>Avoid animating non-composited layout properties like <code>height</code>, <code>width</code>, <code>top</code>, or <code>margin</code>. Stick strictly to GPU-accelerated composited properties:</p>
      
      <ul>
        <li><code>transform: translate3d()</code></li>
        <li><code>transform: scale()</code></li>
        <li><code>opacity</code></li>
      </ul>

      <h2>2. Leverage IntersectionObserver</h2>
      <p>Never attach un-throttled scroll event listeners. The <code>IntersectionObserver</code> API decouples viewport checks from the main loop, triggering reveal transitions only when elements enter view.</p>
    `
  },
  {
    id: "article-5",
    slug: "guide-to-wcag-22-aa-accessibility-for-ui-engineers",
    title: "A Guide to WCAG 2.2 AA Accessibility for UI Engineers",
    category: "Accessibility",
    categoryKey: "accessibility",
    date: "March 2026",
    readingTime: "4 min read",
    author: "Divya Shree P",
    tags: ["Accessibility", "WCAG 2.2", "Keyboard Traps", "ARIA"],
    summary: "Enforcing focus management, screen reader announcements, and high color contrast in complex web applications.",
    excerpt: "Practical patterns for modal focus traps, screen reader live regions, and WCAG 2.2 AA compliant color contrast.",
    content: `
      <p>Web accessibility is not an afterthought or feature tag—it is a core requirement of professional frontend engineering.</p>

      <h2>Key Pillars of WCAG 2.2 AA Compliance</h2>
      <ul>
        <li><strong>Keyboard Navigation & Focus Traps:</strong> Ensuring modal dialogs capture keyboard focus and restore focus on dismissal.</li>
        <li><strong>Visible Focus Rings:</strong> Maintaining distinct <code>:focus-visible</code> indicators without interfering with mouse clicks.</li>
        <li><strong>Semantic Landmark Hierarchy:</strong> Using proper HTML5 elements (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>) and valid ARIA roles.</li>
      </ul>
    `
  }
];

// ==========================================================================
// RENDER HOMEPAGE LATEST BLOG ARTICLES (index.html)
// ==========================================================================

export const renderHomepageBlog = () => {
  const container = $('.blog-section-container');
  if (!container) return;

  const latestArticles = blogArticles.slice(0, 3);

  container.innerHTML = `
    <div class="grid grid-cols-3 gap-6">
      ${latestArticles.map(article => createBlogCardHTML(article)).join('')}
    </div>

    <div style="margin-top: 3rem; text-align: center;">
      <a href="blog.html" class="btn btn-primary magnetic" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem;">
        View All Blogs
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  `;
};

// ==========================================================================
// RENDER BLOG LISTING PAGE (blog.html)
// ==========================================================================

export const renderBlogListing = () => {
  const container = $('.blog-listing-container');
  if (!container) return;

  // Set Page SEO
  updateSEO({
    title: 'Blog & Technical Writing | Divya Shree P',
    description: 'Articles on modular CSS architecture, performance engineering, WCAG accessibility, and evolving from UI design to full engineering.',
    canonicalUrl: `${window.location.origin}/blog.html`
  });

  const renderContent = (catKey = 'all', searchQuery = '') => {
    let filtered = blogArticles;

    if (catKey !== 'all') {
      filtered = filtered.filter(a => a.categoryKey === catKey);
    }

    if (searchQuery) {
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(searchQuery) ||
        a.summary.toLowerCase().includes(searchQuery) ||
        a.tags.some(t => t.toLowerCase().includes(searchQuery))
      );
    }

    const featuredArticle = filtered.length > 0 ? filtered[0] : null;
    const gridArticles = filtered.length > 1 ? filtered.slice(1) : (filtered.length === 1 && searchQuery ? filtered : []);

    container.innerHTML = `
      <!-- TOP HEADER -->
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-accent" style="margin-bottom: 0.75rem;">TECHNICAL WRITING</span>
        <h1 style="font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem; font-family: var(--font-family-heading);">
          Articles & Insights
        </h1>
        <p style="color: var(--text-secondary); font-size: var(--font-size-lg); max-width: 750px; margin-bottom: 2rem; line-height: 1.6;">
          Articles on modular CSS architecture, performance engineering, WCAG accessibility, and evolving from UI design to full engineering.
        </p>

        <!-- TABS & INLINE SEARCH ROW -->
        <div class="blog-header-row">
          <div class="blog-filter-tabs">
            <button class="skill-tab-btn ${catKey === 'all' ? 'active' : ''}" data-blog-filter="all">All Topics</button>
            <button class="skill-tab-btn ${catKey === 'engineering' ? 'active' : ''}" data-blog-filter="engineering">Engineering</button>
            <button class="skill-tab-btn ${catKey === 'career' ? 'active' : ''}" data-blog-filter="career">Career & Growth</button>
            <button class="skill-tab-btn ${catKey === 'performance' ? 'active' : ''}" data-blog-filter="performance">Performance</button>
            <button class="skill-tab-btn ${catKey === 'accessibility' ? 'active' : ''}" data-blog-filter="accessibility">Accessibility</button>
          </div>

          <div class="blog-search-box">
            <svg class="blog-search-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="blog-search-input" value="${searchQuery}" placeholder="Search by title, tag (#BEM, #CSS3)" aria-label="Search articles">
          </div>
        </div>
      </div>

      ${filtered.length === 0 ? `
        <div style="text-align: center; color: var(--text-muted); padding: 4rem 1rem;">
          <h3>No articles found</h3>
          <p style="margin-top: 0.5rem;">No technical articles matched your search criteria.</p>
        </div>
      ` : `
        <!-- FEATURED TOP CARD -->
        ${featuredArticle && !searchQuery ? `
          <article class="blog-featured-card">
            <div class="blog-featured-meta">
              <span class="badge badge-accent">${featuredArticle.category}</span>
              <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${featuredArticle.date}</span>
            </div>

            <h2 class="blog-featured-title">
              <a href="blog-post.html?post=${featuredArticle.slug}">
                ${featuredArticle.title}
              </a>
            </h2>

            <p class="blog-featured-desc">
              ${featuredArticle.excerpt || featuredArticle.summary}
            </p>

            <div class="flex flex-wrap gap-2" style="margin-bottom: 1.75rem;">
              ${featuredArticle.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
            </div>

            <div class="blog-featured-footer">
              <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${featuredArticle.readingTime}</span>
              <a href="blog-post.html?post=${featuredArticle.slug}" class="hover-underline font-mono" style="color: var(--text-primary); text-decoration: none; font-size: var(--font-size-xs); font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                Read Article ›
              </a>
            </div>
          </article>
        ` : ''}

        <!-- 3-COLUMN CARDS GRID -->
        <div class="blog-cards-grid">
          ${(searchQuery ? filtered : gridArticles).map(article => `
            <article class="blog-card-item">
              <div>
                <div class="flex items-center justify-between" style="margin-bottom: 0.85rem;">
                  <span class="badge badge-accent">${article.category}</span>
                  <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${article.date}</span>
                </div>

                <h3 class="blog-card-title">
                  <a href="blog-post.html?post=${article.slug}">
                    ${article.title}
                  </a>
                </h3>

                <p class="blog-card-excerpt">
                  ${article.excerpt || article.summary}
                </p>

                <div class="flex flex-wrap gap-2" style="margin-bottom: 1.5rem;">
                  ${article.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
                </div>
              </div>

              <div class="blog-card-footer">
                <span>${article.readingTime}</span>
                <a href="blog-post.html?post=${article.slug}" class="hover-underline" style="color: var(--text-primary); text-decoration: none; font-weight: 600;">
                  Read Article →
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      `}
    `;

    // Re-attach Search Event Listener
    const searchInput = $('#blog-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderContent(catKey, e.target.value.toLowerCase().trim());
        // Focus back search input and keep cursor
        const newSearchInput = $('#blog-search-input');
        if (newSearchInput) {
          newSearchInput.focus();
          newSearchInput.setSelectionRange(e.target.value.length, e.target.value.length);
        }
      });
    }

    // Re-attach Category Filter Buttons Event Listener
    const filterBtns = $$('[data-blog-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-blog-filter');
        const currentVal = $('#blog-search-input') ? $('#blog-search-input').value.toLowerCase().trim() : '';
        renderContent(cat, currentVal);
      });
    });
  };

  // Initial Render
  renderContent('all', '');
};

// Helper for Homepage
const createBlogCardHTML = (article) => {
  return `
    <article class="blog-card-item">
      <div>
        <div class="flex items-center justify-between" style="margin-bottom: 0.85rem;">
          <span class="badge badge-accent">${article.category}</span>
          <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${article.date}</span>
        </div>

        <h3 class="blog-card-title">
          <a href="blog-post.html?post=${article.slug}">
            ${article.title}
          </a>
        </h3>

        <p class="blog-card-excerpt">
          ${article.excerpt || article.summary}
        </p>

        <div class="flex flex-wrap gap-2" style="margin-bottom: 1.5rem;">
          ${article.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
        </div>
      <div style="padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
        <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${article.readingTime}</span>
        <a href="blog-post.html?post=${article.slug}" class="btn btn-secondary btn-sm" style="font-size: 0.85rem;">
          Read Article →
        </a>
      </div>
    </article>
  `;
};

// ==========================================================================
// RENDER DYNAMIC BLOG DETAIL PAGE (blog-post.html?post=slug)
// ==========================================================================

export const renderBlogPostDetail = () => {
  const container = $('.blog-post-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get('post') || urlParams.get('id');

  const article = blogArticles.find(a => a.slug === postSlug || a.id === postSlug) || blogArticles[0];

  if (!article) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem;">
        <h2>Article Not Found</h2>
        <p class="text-secondary" style="margin: 1rem 0 2rem;">The requested article does not exist.</p>
        <a href="blog.html" class="btn btn-primary">← Back to Blog</a>
      </div>
    `;
    return;
  }

  // Update Dynamic SEO
  updateSEO({
    title: `${article.title} | Technical Blog - Divya Shree P`,
    description: article.excerpt || article.summary,
    canonicalUrl: `${window.location.origin}/blog-post.html?post=${article.slug}`,
    ogType: 'article',
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt || article.summary,
      "author": {
        "@type": "Person",
        "name": article.author || "Divya Shree P"
      },
      "datePublished": article.date
    }
  });

  const relatedArticles = blogArticles.filter(a => a.id !== article.id).slice(0, 2);

  container.innerHTML = `
    <!-- BREADCRUMB -->
    <nav aria-label="Breadcrumb" style="margin-bottom: 2rem;">
      <a href="blog.html" class="hover-underline" style="color: var(--accent-primary); text-decoration: none; font-size: var(--font-size-sm); display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 500;">
        ← Back to Blog
      </a>
    </nav>

    <!-- ARTICLE HEADER -->
    <article class="glass-card " style="padding: 3rem 2.5rem; max-width: 850px; margin: 0 auto 4rem; border-radius: var(--radius-lg);">
      <header style="margin-bottom: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 2rem;">
        <div class="flex items-center gap-3" style="margin-bottom: 1.25rem;">
          <span class="badge badge-accent">${article.category}</span>
          <span class="font-mono text-muted" style="font-size: var(--font-size-xs);">${article.date}</span>
          <span class="font-mono text-muted" style="font-size: var(--font-size-xs); margin-left: auto;">${article.readingTime}</span>
        </div>

        <h1 style="font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 800; line-height: 1.25; margin-bottom: 1.25rem; color: var(--text-primary);">
          ${article.title}
        </h1>

        <div class="flex items-center gap-3" style="color: var(--text-secondary); font-size: var(--font-size-sm);">
          <span>By <strong>${article.author || 'Divya Shree P'}</strong></span>
        </div>
      </header>

      <!-- ARTICLE BODY -->
      <div class="article-body" style="line-height: 1.85; font-size: 1.05rem; color: var(--text-secondary);">
        ${article.content}
      </div>

      <!-- ARTICLE TAGS -->
      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
        <div class="flex flex-wrap gap-2">
          ${article.tags.map(t => `<span class="badge">#${t}</span>`).join('')}
        </div>
      </footer>
    </article>

    <!-- RELATED ARTICLES -->
    ${relatedArticles.length ? `
      <section style="max-width: 850px; margin: 0 auto;" class="">
        <h2 style="font-size: var(--font-size-xl); margin-bottom: 1.5rem; color: var(--text-primary);">Related Articles</h2>
        <div class="grid grid-cols-2 gap-6">
          ${relatedArticles.map(rel => createBlogCardHTML(rel)).join('')}
        </div>
      </section>
    ` : ''}
  `;
};


