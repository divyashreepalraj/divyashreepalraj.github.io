/**
 * TESTIMONIALS CAROUSEL ENGINE
 * Divya Shree P - Portfolio Website
 */

export const initTestimonials = () => {
  const container = document.querySelector('.testimonial-carousel-container');
  const track = document.querySelector('.testimonial-track');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!container || !track) return;

  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  if (cards.length === 0) return;

  let currentIndex = 0;
  let cardsPerView = 3;
  let autoSlideTimer = null;
  const AUTOPLAY_INTERVAL = 5000;

  // Reduced motion preference check
  const isReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Determine cardsPerView based on window viewport width
  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  // Total pages or discrete scroll positions
  const getMaxIndex = () => {
    return Math.max(0, cards.length - cardsPerView);
  };

  const getPageCount = () => {
    return Math.ceil(cards.length / cardsPerView);
  };

  // Create pagination dots
  const createDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const pageCount = getPageCount();

    if (pageCount <= 1) return;

    for (let i = 0; i < pageCount; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === getCurrentPage() ? 'active' : ''}`;
      dot.setAttribute('type', 'button');
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', i === getCurrentPage() ? 'true' : 'false');
      
      dot.addEventListener('click', () => {
        // Jump to start card of that page group
        currentIndex = Math.min(i * cardsPerView, getMaxIndex());
        updateSlider();
        restartAutoSlide();
      });

      dotsContainer.appendChild(dot);
    }
  };

  const getCurrentPage = () => {
    return Math.floor(currentIndex / cardsPerView);
  };

  // Update slider track translation and active control state
  const updateSlider = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    // Calculate translation width considering 20px gap
    // Each item width = (containerWidth - (cardsPerView - 1) * 20) / cardsPerView
    const containerWidth = container.clientWidth;
    const gap = 20;
    const cardWidth = (containerWidth - (cardsPerView - 1) * gap) / cardsPerView;
    const moveDistance = (cardWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${moveDistance}px)`;

    // Update pagination dots
    if (dotsContainer) {
      const currentPage = getCurrentPage();
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, idx) => {
        const isActive = idx === currentPage;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
  };

  // Navigation handlers
  const nextSlide = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex >= maxIndex) {
      currentIndex = 0; // Loop continuously
    } else {
      // Step by cardsPerView for group navigation, capped at maxIndex
      currentIndex = Math.min(currentIndex + cardsPerView, maxIndex);
    }
    updateSlider();
  };

  const previousSlide = () => {
    if (currentIndex <= 0) {
      currentIndex = getMaxIndex(); // Loop to last view
    } else {
      currentIndex = Math.max(0, currentIndex - cardsPerView);
    }
    updateSlider();
  };

  // Autoplay control functions
  const startAutoSlide = () => {
    if (isReducedMotion() || autoSlideTimer) return;
    autoSlideTimer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  };

  const restartAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Event Listeners for Prev/Next Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      previousSlide();
      restartAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartAutoSlide();
    });
  }

  // Hover & Focus Pause handling
  container.parentElement?.addEventListener('mouseenter', stopAutoSlide);
  container.parentElement?.addEventListener('mouseleave', startAutoSlide);
  container.parentElement?.addEventListener('focusin', stopAutoSlide);
  container.parentElement?.addEventListener('focusout', startAutoSlide);

  // Resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const newCardsPerView = getCardsPerView();
      if (newCardsPerView !== cardsPerView) {
        cardsPerView = newCardsPerView;
        createDots();
      }
      updateSlider();
    }, 100);
  });

  // Touch Swipe Support for Mobile & Tablet
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    stopAutoSlide();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
    startAutoSlide();
  });

  // Initial Initialization
  cardsPerView = getCardsPerView();
  createDots();
  updateSlider();
  startAutoSlide();
};
