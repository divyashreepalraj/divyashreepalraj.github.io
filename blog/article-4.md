# Mastering Fluid Typography with Modern CSS clamp()

> Category: Architecture  
> Date: April 2026  
> Author: Divya Shree P

Fluid typography eliminates arbitrary `@media` query breakpoints by allowing font sizes to scale smoothly based on viewport dimensions.

```css
:root {
  --font-size-base: clamp(0.95rem, 0.9rem + 0.4vw, 1.0625rem);
  --font-size-display: clamp(2.8rem, 2.2rem + 3.5vw, 4.5rem);
}
```

By computing minimum, preferred, and maximum values, typography remains legible on 320px mobile screens as well as 4K ultra-wide displays.
