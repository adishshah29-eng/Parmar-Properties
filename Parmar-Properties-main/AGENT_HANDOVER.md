# Parmar Properties — Agent Handover Document

**Project root:** `c:\Users\HARIO\Downloads\Prathamesh\Parmar Properties\Parmar\Parmar-Properties-main`
**Last verified build:** `npm run build` → zero errors, 85 modules, ~363 kB JS

---

## 1. Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | React | 18.2.0 |
| Language | TypeScript | via Vite |
| Build | Vite | 6.3.5 |
| Styling | Tailwind CSS | 3.4.16 |
| Animation | GSAP + ScrollTrigger | 3.15.0 |
| Routing | react-router-dom | 6.8.1 |
| Icons | lucide-react | 0.453.0 |
| Dev tool | agentation | 3.0.2 |

**Path alias:** `@/` -> `src/` (configured in `vite.config.ts`)
**Dev server:** `npm run dev`
**Build:** `npm run build`

---

## 2. Architecture Overview

```
src/
├── App.tsx                       ← Router root (BrowserRouter + Routes)
├── index.tsx                     ← React entry point
├── content/
│   ├── content.ts                ← SINGLE SOURCE OF TRUTH for all copy
│   └── config.ts                 ← Technical config (newsletter URL etc.)
├── components/
│   ├── ScrollReveal.tsx          ← Blur + translateY fade-in on scroll
│   ├── ScrollScrubRevealText.tsx ← GSAP clip-path word reveal (all headings)
│   └── SplitTextReveal.tsx       ← Word-by-word translateY reveal
├── hooks/
│   └── useScrollReveal.ts        ← IntersectionObserver hook
├── pages/
│   └── BlogPage.tsx              ← Full /blog page
└── sections/
    ├── Main/index.tsx            ← Composes all homepage sections in order
    ├── Header/                   ← Sticky header, hide-on-scroll, mobile drawer
    ├── HeroSection/              ← Cinematic hero with parallax
    ├── WhyParmarSection/         ← "Why Parmar" scrub-reveal
    ├── IdentitySection/          ← "Who We Are" with ImageStack
    ├── ProcessSection/           ← "Why South Mumbai" steps
    ├── AgentsSection/            ← "Don't Rent Your Career"
    ├── TestimonialsSection/      ← Testimonial carousel
    ├── ServicesSection/          ← Buy / Sell / Lease panels
    ├── SupportSection/           ← Developer partnership cards
    ├── BlogSection/              ← Preview of 3 blog posts → /blog
    ├── CtaSection/               ← Final CTA + WhatsApp
    └── Footer/                   ← Newsletter, links, legal, logo
```

---

## 3. Routing (src/App.tsx)

| Route | Component | Notes |
|---|---|---|
| `/` | `<HomePage>` | Header + Main + Footer |
| `/blog` | `<BlogPage>` | Full blog listing page |
| `/blog/*` | `<BlogPage>` | Catches sub-paths |
| `/About` | NOT CREATED | Nav link exists, page does not |
| `/Expertise` | NOT CREATED | Nav link exists, page does not |

IMPORTANT: Use `<Link to="...">` from react-router-dom for internal links. Never plain `<a href>` for internal routes.

---

## 4. Centralized Content System

### src/content/content.ts
The ONLY place to edit user-facing copy, URLs, and data.

Exports:
- `seoMeta`            → title, description, OG tags (not yet wired to <head>)
- `brand`              → name, tagline, copyrightYear (auto-computed)
- `navigation`         → links[] (NavLink + isDropdown), ctaButton
- `hero`               → headline, subHeadline, ctaButton
- `identity`           → heading, bodySegments[], images[]
- `whyParmar`          → eyebrow, bodySegments[], featureImageUrl
- `services`           → items[] (number, label, description, imageUrl)
- `processSouthMumbai` → heading, subHeading, ctaButton, steps[]
- `support`            → heading, subHeading, subHeadingMuted, ctaButton, cards[]
- `blog`               → heading, subheading, ctaButton, categories[], posts[]
- `agents`             → heading, imageUrl, bodySegments[], ctaButton
- `testimonials`       → headingSegments[], sideImageUrl, items[]
- `cta`                → headline, backgroundImageUrl, primaryButton, whatsapp
- `footer`             → primaryLinks[], socialLinks[], legalLinks[], legalNotices[], newsletter, contact[]

### src/content/config.ts
Technical config only:
- `config.newsletter.confirmationUrl`

---

## 5. Design System — Key Tokens

### Section Pattern (use exactly)
```tsx
<section className="bg-[COLOR] text-[COLOR] py-16 md:py-[100px] w-full overflow-hidden">
  <div className="max-w-[1920px] mx-auto px-6 md:px-16">
    ...
  </div>
</section>
```

### Heading Animation (ScrollScrubRevealText)
Used on ALL section headings:
```tsx
<ScrollScrubRevealText
  text="Heading Text"
  as="h2"
  className="font-['Instrument_Sans'] text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.05]"
  baseColorClass="text-neutral-300"
  revealColorClass="text-black"
  scrubStart="top 90%"
  scrubEnd="center 60%"
/>
```

### Body/Card Animation (ScrollReveal)
```tsx
<ScrollReveal direction="up" delay={0}>     // heading wrapper
<ScrollReveal direction="up" delay={150}>   // body text
<ScrollReveal delay={index * 100}>          // staggered cards
```

### Fonts
- Headings:  font-['Instrument_Serif']
- Body / UI: font-['Instrument_Sans']

### CTA Button
```
bg-black text-white px-6 py-3.5 rounded-[100px] text-base md:text-xs font-medium hover:bg-black/80 transition-colors
```

---

## 6. Blog System

### Homepage Preview (BlogSection)
- File: src/sections/BlogSection/index.tsx
- Shows first 3 posts from blog.posts
- "Visit Our Blog" uses <Link to="/blog">
- Uses ScrollScrubRevealText heading + ScrollReveal body (matches other sections)

### Full Blog Page (BlogPage)
- File: src/pages/BlogPage.tsx
- Route: /blog
- Features: search, category filters, featured carousel, 3-col grid
- All data from `blog` in content.ts

### Adding a New Blog Post
Edit blog.posts[] in src/content/content.ts:
```ts
{
  date: "YYYY-MM-DD",
  title: "Post Title",
  excerpt: "One or two sentence summary.",
  imageUrl: "https://...",
  href: "/blog/slug",
  category: "Real Estate",  // must match one of blog.categories
}
```

---

## 7. Known Stubs / TODOs

- /About page             → Route not created. Nav link href is "/About"
- /Expertise page         → Route not created. Nav link href is "/Expertise"
- Opportunities nav link  → href: "#" — fill when page exists
- Contact nav link        → href: "#" — fill when page exists
- WhatsApp number         → cta.whatsapp.phone = "1234567890" — REPLACE with real number
- OG image URL            → seoMeta.ogImage — REPLACE with production URL
- SEO meta in <head>      → seoMeta not wired to any <Helmet> or meta tags yet
- ProcessSection CTA href → "#" — fill when Opportunities page exists
- Head Office address     → footer.contact[0].value — currently NYC, update to Mumbai
- Individual blog posts   → /blog/* slugs have no individual article pages yet

---

## 8. Header Behaviour

- Transparent over HeroSection
- White/blurred (bg-white/95 backdrop-blur-md) after scrolling past Hero
- Auto-hides on scroll down, reappears on scroll up (300px threshold)
- Mobile drawer: slides in from right, renders navigation.links + CTA
- Desktop CTA: plain <a href> — change to <Link> if contact page gets a route

---

## 9. How to Add a New Page

1. Create src/pages/MyPage.tsx
2. Add route in src/App.tsx:
   <Route path="/my-page" element={<MyPage />} />
3. Update matching href in src/content/content.ts
4. If in nav: change isDropdown: true stub to isDropdown: false and set real href

---

## 10. How to Add a New Section

1. Create src/sections/MySection/index.tsx
2. Add content block to src/content/content.ts
3. Import + insert in src/sections/Main/index.tsx at desired position
4. Follow section pattern from §5: py-16 md:py-[100px], px-6 md:px-16,
   ScrollScrubRevealText heading, ScrollReveal body

---

Generated: 2026-06-24. Build verified clean at time of writing.
