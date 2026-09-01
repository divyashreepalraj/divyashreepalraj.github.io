/**
 * SEO & METADATA DYNAMIC ENGINE
 * Divya Shree P - Portfolio Website
 */

/**
 * Dynamically updates page title, meta description, canonical URL,
 * Open Graph meta tags, Twitter cards, and JSON-LD structured data.
 * @param {Object} seoData 
 */
export const updateSEO = (seoData = {}) => {
  const {
    title = 'Divya Shree P | UI Engineer & Frontend Developer',
    description = 'Portfolio of Divya Shree P - UI Engineer & Frontend Developer specializing in design systems, modular CSS, web performance, and accessible web engineering.',
    canonicalUrl = window.location.href.split('?')[0],
    ogImage = `${window.location.origin}/assets/images/hero_img.png`,
    ogType = 'website',
    jsonLd = null
  } = seoData;

  // Document Title
  document.title = title;

  // Helper to set or create meta tag
  const setMetaTag = (selector, attrName, attrValue, content) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard Meta Tags
  setMetaTag('meta[name="description"]', 'name', 'description', description);

  // Open Graph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

  // Twitter Cards
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

  // Canonical Link
  let canonicalElement = document.querySelector('link[rel="canonical"]');
  if (!canonicalElement) {
    canonicalElement = document.createElement('link');
    canonicalElement.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalElement);
  }
  canonicalElement.setAttribute('href', canonicalUrl);

  // JSON-LD Structured Data
  if (jsonLd) {
    let scriptElement = document.querySelector('script[type="application/ld+json"]#dynamic-json-ld');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('id', 'dynamic-json-ld');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLd, null, 2);
  }
};
