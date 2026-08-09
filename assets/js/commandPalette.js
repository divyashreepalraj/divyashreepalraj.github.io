/**
 * COMMAND PALETTE (CTRL + K) ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$ } from './utilities.js';
import { setTheme } from './theme.js';

const searchItems = [
  { title: "Go to Home / Hero", category: "Navigation", url: "#hero", icon: "🏠" },
  { title: "Visual Evolution Journey", category: "Navigation", url: "#about", icon: "👤" },
  { title: "Work Experience & Digient", category: "Navigation", url: "#experience", icon: "💼" },
  { title: "Skills Matrix & Technologies", category: "Navigation", url: "#skills", icon: "⚡" },
  { title: "Featured Projects Showcase", category: "Navigation", url: "#projects", icon: "🚀" },
  { title: "Design Process Engine", category: "Navigation", url: "#process", icon: "📐" },
  { title: "GitHub Activity & Heatmap", category: "Navigation", url: "#github", icon: "🐙" },
  { title: "Client Feedback & Testimonials", category: "Navigation", url: "#testimonials", icon: "💬" },
  { title: "Blog & Articles", category: "Navigation", url: "#blog", icon: "✍️" },
  { title: "Contact Divya Shree P", category: "Navigation", url: "#contact", icon: "📫" },

  { title: "Toggle Dark / Light Theme", category: "Action", action: "toggle-theme", icon: "🌓" },
  { title: "Download Professional Resume (PDF)", category: "Action", url: "/resume/", icon: "📄" },

  { title: "Project: Maintenance Page", category: "Project", url: "#projects", icon: "🛠️" },
  { title: "Project: Birthday Newspaper", category: "Project", url: "#projects", icon: "📰" },
  { title: "Project: Satbet Contribution", category: "Project", url: "#projects", icon: "🎰" },
  { title: "Design: Gaming Dashboard", category: "Project", url: "#projects", icon: "🎮" },
  { title: "Design: Casino CMS System", category: "Project", url: "#projects", icon: "🎲" },

  { title: "Article: Building Scalable Design Systems", category: "Blog", url: "blog.html", icon: "📚" },
  { title: "Article: Evolving from UI Design to UI Engineering", category: "Blog", url: "blog.html", icon: "💡" }
];

export const initCommandPalette = () => {
  let backdrop = $('.command-palette-backdrop');
  let selectedIndex = 0;

  if (!backdrop) {
    createCommandPaletteDOM();
    backdrop = $('.command-palette-backdrop');
  }

  const input = $('.command-input');
  const resultsContainer = $('.command-results');
  const triggers = $$('[data-action="command-palette"]');

  const openPalette = () => {
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    input.value = '';
    selectedIndex = 0;
    renderResults(searchItems);
    setTimeout(() => input.focus(), 50);
  };

  const closePalette = () => {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
  };

  // Keyboard shortcut Ctrl+K or Cmd+K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closePalette();
    }
  });

  triggers.forEach(btn => btn.addEventListener('click', openPalette));

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });

  // Filter items
  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const filtered = searchItems.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderResults(filtered);
  });

  // Arrow Keys & Enter Navigation inside Modal
  input.addEventListener('keydown', (e) => {
    const items = $$('.command-item', resultsContainer);
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedIndex]) {
        items[selectedIndex].click();
      }
    }
  });

  const updateSelection = (items) => {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedIndex);
      if (idx === selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  };

  const renderResults = (items) => {
    if (items.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No results found.</div>`;
      return;
    }

    resultsContainer.innerHTML = items.map((item, idx) => `
      <div class="command-item ${idx === selectedIndex ? 'selected' : ''}" data-url="${item.url || ''}" data-action="${item.action || ''}">
        <div class="command-item-left">
          <span>${item.icon}</span>
          <span>${item.title}</span>
        </div>
        <span class="command-item-badge">${item.category}</span>
      </div>
    `).join('');

    // Bind click events
    $$('.command-item', resultsContainer).forEach((el, idx) => {
      el.addEventListener('click', () => {
        const url = el.getAttribute('data-url');
        const action = el.getAttribute('data-action');

        closePalette();

        if (action === 'toggle-theme') {
          const current = document.documentElement.getAttribute('data-theme') || 'dark';
          setTheme(current === 'dark' ? 'light' : 'dark');
        } else if (url) {
          if (url.startsWith('#')) {
            const targetSection = $(url);
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = url;
          }
        }
      });
    });
  };
};

const createCommandPaletteDOM = () => {
  const html = `
    <div class="command-palette-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Command Palette">
      <div class="command-dialog">
        <div class="command-header">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" class="command-input" placeholder="Type a command or search..." aria-label="Command palette search input">
        </div>
        <div class="command-results"></div>
        <div class="command-footer">
          <span>Navigation: <span class="kbd">↑</span> <span class="kbd">↓</span></span>
          <span>Select: <span class="kbd">↵</span></span>
          <span>Close: <span class="kbd">ESC</span></span>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
};
