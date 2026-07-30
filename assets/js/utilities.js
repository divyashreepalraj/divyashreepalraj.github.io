/**
 * UTILITY FUNCTIONS & HELPER ENGINE
 * Divya Shree P - Portfolio Website
 */

export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Handcrafted Lightweight Markdown Parser
 * Converts markdown string into semantic HTML
 */
export const parseMarkdown = (markdownText) => {
  if (!markdownText) return '';

  let html = markdownText
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold & Italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Unordered Lists
    .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');

  // Wrap consecutive <li> into <ul>
  html = html.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');
  
  // Paragraphs for remaining text lines
  html = html.split('\n\n').map(paragraph => {
    if (paragraph.startsWith('<h') || paragraph.startsWith('<ul') || paragraph.startsWith('<blockquote')) {
      return paragraph;
    }
    return `<p>${paragraph.trim()}</p>`;
  }).join('');

  return html;
};

/**
 * Reading time estimator (average 200 wpm)
 */
export const calculateReadingTime = (text) => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

/**
 * Safe DOM Selector Helper
 */
export const $ = (selector, context = document) => context.querySelector(selector);
export const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
