# Micro-interactions & Web Performance Optimization

> Category: Performance  
> Date: May 2026  
> Author: Divya Shree P

Micro-interactions transform a static website into a tactile, living digital product. However, improper animation implementations can degrade FPS and cause severe Cumulative Layout Shifts (CLS).

---

## 1. Animate Only Composited Properties

Avoid animating `height`, `width`, `top`, or `margin`. Stick strictly to hardware-accelerated CSS properties:
- `transform: translate3d()`
- `transform: scale()`
- `opacity`

## 2. Leverage IntersectionObserver

Never attach heavy scroll event listeners without throttling. `IntersectionObserver` decouples viewport scroll checks from the main thread, executing scroll reveals only when elements enter the viewport.
