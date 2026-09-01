/**
 * MASTER APPLICATION ENTRY POINT
 * Divya Shree P - Portfolio Website
 */

import { loadSharedComponents } from './components.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animation.js';
import { initCommandPalette } from './commandPalette.js';
import { renderHomepageProjects, renderProjectsListing, renderProjectDetail } from './projects.js';
import { renderHomepageBlog, renderBlogListing, renderBlogPostDetail } from './blog.js';
import { initTestimonials } from './testimonials.js';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Initializing Divya Shree P Portfolio Engineering Application...');

  // Load Shared Components (Header & Footer)
  await loadSharedComponents();

  // Initialize Core Modules
  initTheme();
  initNavigation();
  initAnimations();
  initCommandPalette();

  // Dynamic Year in Footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Page Routing & Rendering
  const path = window.location.pathname.toLowerCase();

  if (document.querySelector('.projects-listing-container') || path.endsWith('projects.html')) {
    renderProjectsListing();
  } else if (document.querySelector('.project-detail-container') || path.endsWith('project.html')) {
    renderProjectDetail();
  } else if (document.querySelector('.blog-listing-container') || path.endsWith('blog.html')) {
    renderBlogListing();
  } else if (document.querySelector('.blog-post-container') || path.endsWith('blog-post.html')) {
    renderBlogPostDetail();
  } else {
    // Homepage (index.html)
    renderHomepageProjects();
    renderHomepageBlog();
    initTestimonials();
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');
      const successFeedback = document.getElementById('contact-success');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.remove('error');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.remove('error');
      }

      if (!messageInput.value.trim()) {
        messageInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        messageInput.parentElement.classList.remove('error');
      }

      if (isValid) {
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending...`;

        try {
          const formData = new FormData(contactForm);
          const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            if (successFeedback) {
              successFeedback.style.display = 'flex';
              successFeedback.textContent = 'Message transmitted! Your enquiry has been sent directly to divyashree.palraj@gmail.com';
            }
            contactForm.reset();
          } else {
            throw new Error('Server response not ok');
          }
        } catch (err) {
          window.location.href = `mailto:divyashree.palraj@gmail.com?subject=Enquiry from ${encodeURIComponent(nameInput.value)}&body=${encodeURIComponent(messageInput.value + '\n\nFrom: ' + emailInput.value)}`;
          if (successFeedback) {
            successFeedback.style.display = 'flex';
            successFeedback.textContent = 'Opening your mail client to send message to divyashree.palraj@gmail.com...';
          }
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          setTimeout(() => {
            if (successFeedback) successFeedback.style.display = 'none';
          }, 8000);
        }
      }
    });
  }
});
