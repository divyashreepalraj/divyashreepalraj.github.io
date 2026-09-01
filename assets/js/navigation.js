/**
 * NAVIGATION & SCROLL ENGINE
 * Divya Shree P - Portfolio Website
 */

import { throttle, $, $$ } from './utilities.js';

export const initNavigation = () => {
  const header = $('.header');
  const scrollProgressBar = $('.scroll-progress-bar');
  const backToTopBtn = $('.back-to-top');
  const mobileToggle = $('.mobile-menu-toggle');
  const navMenu = $('.nav-menu');
  const navLinks = $$('.nav-link');

  // Active Link Highlighting based on current URL path
  const currentPath = window.location.pathname.toLowerCase();
  navLinks.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    if (
      (currentPath.endsWith('projects.html') || currentPath.endsWith('project.html')) &&
      (href.includes('project') || href.includes('projects'))
    ) {
      link.classList.add('active');
    } else if (
      (currentPath.endsWith('blog.html') || currentPath.endsWith('blog-post.html')) &&
      (href.includes('blog'))
    ) {
      link.classList.add('active');
    } else if (
      (currentPath.endsWith('index.html') || currentPath === '/' || currentPath === '') &&
      href.startsWith('#')
    ) {
      // Handled by ScrollSpy below
    }
  });

  // Handle Header background shrink & Scroll progress bar
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    if (header) {
      const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
      if (scrollTop > 50 || !isHome) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  };

  window.addEventListener('scroll', throttle(handleScroll, 20));

  // Back to Top functionality
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      navMenu.classList.toggle('open', !isOpen);
      mobileToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close mobile menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Active Section Scroll Spy via IntersectionObserver for single-page links
  const sections = $$('section[id]');
  if (sections.length > 0 && (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '')) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else if (link.getAttribute('href').startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
};
