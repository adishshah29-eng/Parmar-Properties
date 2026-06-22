# Parmar Properties — Agent Handover

> **Project:** Parmar Properties real-estate website  
> **Stack:** Vite + React + TypeScript + TailwindCSS  
> **Dev server:** `npm run dev` inside `Parmar-Properties-main/`  
> **Last updated:** 2026-06-22  

---

## 1. Project Structure

```
FindClone/
└── Parmar-Properties-main/
    ├── assets/                   # Static images (back.webp, house.webp, cloud.webp, smoke.webp)
    ├── src/
    │   ├── App.tsx               # Root: Header + Main + Footer + Agentation (dev-only)
    │   ├── sections/
    │   │   ├── HeroSection/      # ← PRIMARY FOCUS of this session
    │   │   │   └── index.tsx
    │   │   ├── Header/
    │   │   ├── Main/
    │   │   ├── Footer/
    │   │   ├── WhyParmarSection/
    │   │   ├── AgentsSection/
    │   │   ├── CtaSection/
    │   │   ├── IdentitySection/
    │   │   ├── ProcessSection/
    │   │   ├── ServicesSection/
    │   │   ├── SupportSection/
    │   │   └── TestimonialsSection/
    │   └── ...
    ├── vite.config.ts
    ├── package.json
    └── tailwind.config.js
```

---

## 2. Dependencies — Key Notes

| Package | Purpose | Notes |
|---|---|---|
| `agentation` | Dev overlay UI | Import in `App.tsx` line 4, render conditionally `import.meta.env.DEV`. Was missing from `node_modules` — fixed by running `npm install` |
| `gsap` | Animation library | Installed but not actively used in HeroSection (scroll is pure React state) |
| `react-router-dom` | Routing | Installed but single-page app currently |

---

## 3. HeroSection — Complete Animation Architecture

**File:** [`src/sections/HeroSection/index.tsx`](src/sections/HeroSection/index.tsx)

### 3.1 Assets Used

```tsx
import heroBg        from "assets/back.webp";    // Sky background
import heroBuilding   from "assets/house.webp";   // Building (luxury real estate)
import heroCloud      from "assets/cloud.webp";   // Decorative side clouds (L + R)
import heroCloudScroll from "assets/smoke.webp";  // Fog/smoke scroll overlay
```

### 3.2 Scroll-Jack Architecture

The section uses a **sticky scroll-jack** pattern:
- `<section>` has height `700vh` (desktop) / `320vh` (mobile)
- Inner `<div>` is `sticky top-0 h-screen` — stays fixed while user scrolls
- `scrollProgress` (0→1) is computed from `window.scrollY` relative to section offset

```tsx
const scrolled = window.scrollY - section.offsetTop;
const range    = section.offsetHeight - viewportH;
scrollProgress = Math.max(0, Math.min(1, scrolled / range));
```

### 3.3 Phase Map (Current — Final State)

```
scroll 0.00 → 0.40   Phase 1: Building rises from below, hero text sinks DOWN behind it
scroll 0.40 → 0.75   Phase 2: PARMAR PROPERTIES SVG strokes draw IN on the building
                               Building image fills through letter cutouts simultaneously
                               ⚠ NO SMOKE during this phase — building stays fully visible
scroll 0.75 → 0.92   Phase 3: Smoke/fog blazes in (AFTER SVG is complete)
scroll 0.92 → 1.00   Phase 4: White exit cover — next section begins
```

**Phase variables:**
```tsx
const p1 = Math.min(1, scrollProgress / 0.40);                         // building rise
const p3 = Math.max(0, Math.min(1, (scrollProgress - 0.40) / 0.35));  // SVG strokes
const p4 = Math.max(0, Math.min(1, (scrollProgress - 0.42) / 0.33));  // image fill (alongside strokes)
const p2 = Math.max(0, Math.min(1, (scrollProgress - 0.75) / 0.17));  // smoke (AFTER SVG)
const p5 = Math.max(0, Math.min(1, (scrollProgress - 0.92) / 0.08));  // white exit
```

### 3.4 Layer Stack (z-index order)

| Layer | z-index | Element | Driven by |
|---|---|---|---|
| 1 | 0 | Sky background (`back.webp`) | `skyScale` (subtle zoom) |
| 2 | 1 | Dark tint overlay | `darkOpacity` (fades in p1) |
| 3 | **25** | Building (`house.webp`) | `buildingY` rises, `buildingOpacity` fades at p2 |
| 4a/b | **28** | L + R decorative clouds | Fade with `cloudSideOpacity` (driven by p3) |
| 5 | 20 | Bottom white gradient | `bottomGradientOpacity` fades with p3 |
| 6 | 30 | Smoke overlay (`smoke.webp`) | `smokeOpacity/smokeY/smokeScale` — starts at scroll 0.75 |
| 7 | 40 | SVG PARMAR PROPERTIES | `textLayerOpacity`, strokes + image fill |
| 8 | 50 | White exit cover | `whiteOpacity` |
| 9 | **10** | Hero text content | `contentOpacity` fades, `contentY` moves DOWN (sinks into building) |
| 10 | 30 | Scroll hint | Fades early |

> ⚠️ **Critical z-index rule:** Hero text is `z-10` and building is `z-25`. This is intentional — the building rises ABOVE the text, creating the "building swallows text" effect.

### 3.5 Key Animation Variables

```tsx
// Building rises from 35% below bottom, enters view as user scrolls
const buildingY      = (1 - p1e) * 35;
const buildingOpacity = Math.max(0.15, 1 - p2e); // never fully hides (stays ghost)

// Text SINKS DOWN (not up) into the building
const contentY       = p1e * 120;   // px downward
const contentOpacity = Math.max(0, 1 - p1 * 2.0);

// SVG layer
const textLayerOpacity = easeOut2(Math.max(0, (scrollProgress - 0.39) / 0.04));
const maskParallaxY    = 30 - p4e * 60;  // building scrolls from y=+30% → y=-30% inside letters
const strokeOpacity    = Math.max(0, Math.min(1, p3 * 5) * (1 - easeOut2(p4)));
const fillProgress     = easeOut(p4);

// Smoke
const smokeY       = 40 - p2e * 75;
const smokeScale   = 1.0 + p2e * 2.2;
const smokeOpacity = easeOut(p2);  // 0 until scroll 0.75
```

### 3.6 SVG Wordmark

The SVG contains **PARMAR** (row 1, y=89–230) and **PROPERTIES** (row 2, y=299–376) as:
1. **Mask paths** (`fill="white"`) — define letter cutout shapes
2. **Stroke paths** (`.lp` class) — animated via `strokeDashoffset` per-letter
3. **Image fill** (`<g mask="url(#parmar-mask)">`) — building scrolls through the cutouts

The stroke draw-in is driven by a `useEffect` that reads real `getTotalLength()` per path and distributes `strokeDashoffset` proportionally across the letters.

### 3.7 Hero Content Text

```tsx
// h1
"Access. Influence. Legacy"  — text-black, clamp(32px, 5.5vw, 80px), letter-by-letter entrance animation

// Subtitle
"SOUTH MUMBAI'S TRUSTED LUXURY REAL ESTATE ADVISORY SINCE 1985"  — text-black, font-semibold

// CTA Button
"Explore Opportunities →"  — bg-gray-900 text-white, rounded-full, links to parmarproperties.in/contact
```

---

## 4. Changes Made This Session

| # | What | File | Detail |
|---|---|---|---|
| 1 | Fixed `agentation` missing package | — | Ran `npm install` |
| 2 | Hero layout: building positioned at bottom, text at top | `HeroSection/index.tsx` | Matches reference (FIND Real Estate site) |
| 3 | Building scroll animation | `HeroSection/index.tsx` | `buildingY = (1-p1e)*35`, rises with scroll |
| 4 | Text sinks DOWN into building | `HeroSection/index.tsx` | `contentY = p1e * 120` (was moving UP) |
| 5 | z-index fix: text behind building | `HeroSection/index.tsx` | Text=z-10, Building=z-25, Clouds=z-28 |
| 6 | Text colors changed to black | `HeroSection/index.tsx` | h1, subtitle, strong all black |
| 7 | Removed empty tagline paragraph | `HeroSection/index.tsx` | Old "South Mumbai's..." `<p>` removed |
| 8 | "Building Relationships" → full tagline | `HeroSection/index.tsx` | Now: "SOUTH MUMBAI'S TRUSTED LUXURY REAL ESTATE ADVISORY SINCE 1985" |
| 9 | Scroll height extended to 700vh | `HeroSection/index.tsx` | Was 500vh; gives more time for each phase |
| 10 | Full phase map redesign | `HeroSection/index.tsx` | SVG before smoke; smoke only at scroll 0.75+ |
| 11 | Building image in SVG scrolls 60% | `HeroSection/index.tsx` | `maskParallaxY = 30 - p4e*60` |
| 12 | Building size inside SVG: 120%×150% | `HeroSection/index.tsx` | Ensures building fills letter cutouts at all scroll positions |

---

## 5. Open Items / Known Issues

- [ ] **SVG image fill** — the building image (`heroBuilding`) inside the SVG mask at `preserveAspectRatio="xMidYMid meet"` may not fill letters perfectly on all aspect ratios. Consider switching to `slice` if gaps appear.
- [ ] **Mobile experience** — scroll height is 320vh on mobile. Phase timings are the same fractions (not adjusted for mobile), so the animation may feel rushed on mobile.
- [ ] **Header opacity** — currently fades out during Phase 1 (via `data-mobile-menu-open` mutation observer). The header becomes hidden quickly; may want to reconsider for UX.
- [ ] **Smoke size** — on very large screens (4K), smoke at 140% width + 2.2× scale may not fully cover edges. Test at wide viewports.
- [ ] **Other sections** — `WhyParmarSection`, `TestimonialsSection` etc. were not touched this session. May need review.
- [ ] **`agentation` vulnerability** — `npm audit` reports 1 high severity vulnerability. Run `npm audit fix --force` if it's safe to upgrade.

---

## 6. How to Run

```bash
cd Parmar-Properties-main
npm run dev       # dev server (Vite)
npm run build     # production build → dist/
```

Aliases configured in `vite.config.ts`:
```ts
{ find: "@",      replacement: path.resolve(__dirname, "src")    }
{ find: "assets", replacement: path.resolve(__dirname, "assets") }
```

---

## 7. Reference Design

The hero is modeled after the **FIND Real Estate** website hero:
- Large text in upper portion of viewport
- Building rooftop visible at the bottom (cropped, only top floors)
- Fog/cloud flanking the building at bottom corners
- SVG wordmark with building showing through letter cutouts (image mask effect)
- Scroll drives the entire animation via `scrollProgress` (0→1)
