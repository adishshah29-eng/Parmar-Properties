# Handover: Dual-Stage Parallax Footer Reveal

This document outlines the technical implementation of the sticky footer reveal requested for the Parmar Properties website.

## Objective
Implement a high-end "reveal from behind" parallax effect for the footer, similar to standard luxury real estate platforms. Specifically:
1. **Phase 1 (Parallax Reveal):** The top 50% of the footer reveals at half-speed while scrolling down.
2. **Phase 2 (Parallel Scroll):** The remaining 50% of the footer scrolls normally (parallel with the page) once the first half is revealed.

## Implementation Details
We opted for a **native React + CSS approach** rather than introducing heavy external animation libraries (like Framer Motion). This ensures maximum performance and zero dependency overhead. 

### Files Modified
- `src/sections/Footer/index.tsx`

### Technical Architecture
The implementation relies on three key mechanisms:

1. **Dynamic Resizing (`ResizeObserver` pattern)**
   - The footer container dynamically matches `1.5x` the actual footer height using a lightweight `useEffect` combined with a `resize` listener. This ensures the component stays responsive across all breakpoints without hardcoded heights.

2. **CSS `clip-path` for the Reveal Window**
   - The outer container uses `clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"`.
   - This creates a strict boundary box in the normal document flow. The fixed-position inner footer is visually confined to this box, allowing the container to act as a "window" sliding up over the footer as the user scrolls.

3. **Dual-Stage Scroll Math (`requestAnimationFrame`)**
   - The inner footer is absolutely positioned at the top of the container (`absolute top-0`).
   - A highly performant `window.addEventListener("scroll")` with `requestAnimationFrame` calculates the exact scroll intersection.
   - **Math Breakdown**:
     - `scrollAmount`: Distance the container has scrolled into the viewport from the bottom.
     - **0 to 100% of Footer Height**: The inner footer `translateY` is pushed down by `0.5 * scrollAmount`. Relative to the container, it moves down, but relative to the viewport, it moves *up* at exactly half the speed of the scroll. This achieves the parallax effect and reveals the top 50% of the footer.
     - **100% to 150% of Footer Height**: The `translateY` locks at `0.5 * footerHeight`. The footer is now fixed relative to the container, meaning it scrolls up parallel with the rest of the page, revealing the bottom 50%.

## Code Reference
```tsx
const scrollAmount = Math.max(0, windowHeight - rect.top);

if (scrollAmount <= 0) {
  setTranslateY(0);
} else if (scrollAmount <= footerHeight) {
  // Phase 1: Parallax. Moves up at half speed.
  setTranslateY(scrollAmount * 0.5);
} else {
  // Phase 2: Parallel scroll. Locks offset.
  setTranslateY(footerHeight * 0.5);
}
```

## Next Steps / Maintenance
- **Adjusting the Threshold:** If the design requires a different transition point (e.g., parallax for 70% instead of 50%), you will need to adjust the container height multiplier (currently `1.5x`) and the corresponding `0.5` multipliers in the `handleScroll` math.
- **Performance:** The scroll listener is fully optimized with `ticking` state and `requestAnimationFrame`. No further debouncing is necessary.
