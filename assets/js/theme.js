/**
 * DARK & LIGHT THEME ENGINE
 * Divya Shree P - Portfolio Website
 */

const THEME_KEY = 'divya_portfolio_theme';

export const initTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default dark
  setTheme(initialTheme, false);

  // Sync with system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? 'dark' : 'light', false);
    }
  });

  // Bind toggle buttons
  const themeToggleBtns = document.querySelectorAll('[data-action="toggle-theme"]');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme, true);
    });
  });
};

export const setTheme = (theme, persist = true) => {
  document.documentElement.setAttribute('data-theme', theme);
  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Update aria-labels and toggle icon states
  const themeToggleBtns = document.querySelectorAll('[data-action="toggle-theme"]');
  themeToggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    const icon = btn.querySelector('.theme-icon');
    if (icon) {
      icon.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    }
  });
};
