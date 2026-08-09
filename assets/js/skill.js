const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const bar = entry.target;
      const progress = bar.dataset.progress;

      bar.style.width = `${progress}%`;

      observer.unobserve(bar);
    });
  },
  {
    threshold: 0.2
  }
);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});