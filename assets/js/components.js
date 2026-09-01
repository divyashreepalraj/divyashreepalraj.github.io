/**
 * SHARED COMPONENTS LOADER (Header & Footer Engine)
 * Divya Shree P - Portfolio Website
 */

export async function loadSharedComponents() {
  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');

  // Determine path prefix for subdirectories (e.g. '../' for /resume/)
  let prefix = '';
  const scriptTag = document.querySelector('script[src*="app.js"]');
  if (scriptTag && scriptTag.getAttribute('src').startsWith('../')) {
    prefix = '../';
  } else {
    const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    if (pathname.includes('/resume')) {
      prefix = '../';
    }
  }

  const headerPath = `${prefix}components/header.html`;
  const footerPath = `${prefix}components/footer.html`;

  // Fetch and inject Header
  if (headerContainer) {
    try {
      const response = await fetch(headerPath);
      if (response.ok) {
        const headerHTML = await response.text();
        headerContainer.innerHTML = headerHTML;
        adjustRelativeLinks(headerContainer, prefix);
        setActiveNavigation();
        applyHeaderState();
      } else {
        console.error(`[Components] Failed to fetch header from ${headerPath}: ${response.status}`);
      }
    } catch (err) {
      console.error(`[Components] Exception loading header:`, err);
    }
  }

  // Fetch and inject Footer
  if (footerContainer) {
    try {
      const response = await fetch(footerPath);
      if (response.ok) {
        const footerHTML = await response.text();
        footerContainer.innerHTML = footerHTML;
        adjustRelativeLinks(footerContainer, prefix);
        updateFooterYear(footerContainer);
      } else {
        console.error(`[Components] Failed to fetch footer from ${footerPath}: ${response.status}`);
      }
    } catch (err) {
      console.error(`[Components] Exception loading footer:`, err);
    }
  }
}

/**
 * Adjust relative links inside injected component for subfolders
 */
function adjustRelativeLinks(container, prefix) {
  if (!prefix) return;

  const elements = container.querySelectorAll('a[href], img[src]');
  elements.forEach(el => {
    const attr = el.hasAttribute('href') ? 'href' : 'src';
    const val = el.getAttribute(attr);
    if (
      val &&
      !val.startsWith('http://') &&
      !val.startsWith('https://') &&
      !val.startsWith('mailto:') &&
      !val.startsWith('tel:') &&
      !val.startsWith('/') &&
      !val.startsWith('#') &&
      !val.startsWith('../')
    ) {
      el.setAttribute(attr, prefix + val);
    }
  });
}

/**
 * Automatically detect current page and set active navigation item
 */
function setActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const pathname = window.location.pathname.toLowerCase();

  navLinks.forEach(link => link.classList.remove('active'));

  const isProjects = pathname.endsWith('projects.html') || pathname.endsWith('project.html');
  const isBlog = pathname.endsWith('blog.html') || pathname.endsWith('blog-post.html');
  const isHome = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';

  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    
    if (isProjects && (href.includes('projects.html') || href.includes('project.html'))) {
      link.classList.add('active');
    } else if (isBlog && (href.includes('blog.html') || href.includes('blog-post.html'))) {
      link.classList.add('active');
    }
  });
}

/**
 * Apply scrolled header styling for inner pages by default
 */
function applyHeaderState() {
  const header = document.querySelector('.header');
  if (!header) return;

  const pathname = window.location.pathname.toLowerCase();
  const isHome = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';

  if (!isHome) {
    header.classList.add('scrolled');
  } else if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
}

/**
 * Update dynamic year in footer
 */
function updateFooterYear(container) {
  const yearEl = container.querySelector('#current-year') || document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
