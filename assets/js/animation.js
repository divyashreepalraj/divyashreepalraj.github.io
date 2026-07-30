/**
 * ANIMATION & MICRO-INTERACTION ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$ } from './utilities.js';

export const initAnimations = () => {
  initScrollReveals();
  initTypingEffect();
  initCustomCursor();
  initMagneticElements();
};

/* Scroll Reveal Observer */
const initScrollReveals = () => {
  const revealElements = $$('.reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right');
  
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Optionally unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
};

/* Rotating Typing Effect for Hero Title */
const initTypingEffect = () => {
  const typingTarget = $('.typing-target');
  if (!typingTarget) return;

  const roles = [
    "UI Engineer",
    "Frontend Developer",
    "Future Full Stack Developer",
    "Design System Specialist"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  const type = () => {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 500;
    }

    setTimeout(type, typingDelay);
  };

  type();
};

/* Handcrafted Custom Cursor */
const initCustomCursor = () => {
  // Check if touch device or reduced motion
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let cursorDot = $('.custom-cursor');
  let cursorFollower = $('.cursor-follower');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor';
    document.body.appendChild(cursorDot);
  }

  if (!cursorFollower) {
    cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
  }

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  };

  requestAnimationFrame(animateFollower);

  // Hover states for clickable elements
  const interactives = $$('a, button, .interactive, input, textarea, .skill-card, .project-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
};

/* Magnetic Physics Hover Effect */
const initMagneticElements = () => {
  const magneticBtns = $$('.magnetic, .btn-primary');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
};
