// ============================================================
// content.ts â€” Single source of truth for all user-facing content
// NO React, NO JSX. Pure TypeScript.
//
// BLOG DATA: Moved to Supabase. Use useBlogPosts() / fetchPostBySlug().
// BlogPost type is defined in src/lib/types.ts (re-exported below for
// backward compatibility).
// ============================================================

// Re-export so any file that still does `import { BlogPost } from "@/content/content"`
// continues to compile without changes.
export type { BlogPost } from "@/lib/types";

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
type NavLink = {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
};
type CtaButton = { label: string; href: string };
type TextSegment = { text: string; revealColorClass: string; baseColorClass: string };
type ServiceItem = { number: number; label: string; description: string; imageUrl: string };
type ProcessStep = { stepNumber: string; title: string; description: string };
type SupportCard = { title: string; description: string; imageSrc: string; iconSrc: string; buttonText: string; href: string };
type TestimonialItem = { quote: string; author: string; rating: number; imageUrl: string };
type FooterLink = { label: string; href: string };
type ContactInfo = { label: string; value: string; href: string };
type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  href: string;
  category?: string;
  content?: {
    intro: string[];
    sections: {
      title?: string;
      paragraphs: string[];
      insight?: string;
    }[];
    downloads?: { label: string; href: string }[];
  };
};
// BlogPost type removed â€” now lives in src/lib/types.ts

// â”€â”€â”€ SEO Meta â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const seoMeta = {
  title: "Parmar Properties â€” South Mumbai's Luxury Real Estate Advisory",
  description: "40+ years of premium South Bombay luxury real estate advisory. Record-breaking sales, HNI buyer access, pre-launch inventory.",
  ogImage: "https://parmar-properties-two.vercel.app/og-image.jpg", // TODO: replace with production OG image URL
  ogUrl: "https://parmar-properties-two.vercel.app",
};

// â”€â”€â”€ Brand â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const brand = {
  name: "Parmar Properties",
  tagline: "South Mumbai's Trusted Luxury Real Estate Advisory Since 1981",
  // Computed at build time â€” no manual annual update needed
  copyrightYear: new Date().getFullYear(),
};

// â”€â”€â”€ Header / Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const navigation = {
  links: [
    {
      label: "About",
      href: "/About",
      isDropdown: true,
      dropdownItems: [
        { label: "About Us", href: "/About" },
        { label: "Blog", href: "/blog" },
        { label: "Press", href: "#" }
      ]
    },
    { label: "Expertise", href: "/#expertise", isDropdown: false },
    {
      label: "Opportunities",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { label: "Buy", href: "https://parmar-properties-listing.vercel.app/" },
        { label: "Sell", href: "#" },
        { label: "Lease", href: "#" }
      ]
    },
    {
      label: "Contact",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { label: "WhatsApp us", href: "https://wa.me/1234567890" },
        { label: "Email Us", href: "mailto:hello@parmar-properties-two.vercel.app" }
      ]
    },
  ] as NavLink[],
  ctaButton: { label: "Schedule Consultation", href: "https://parmar-properties-two.vercel.app/contact" } as CtaButton,
};

// â”€â”€â”€ Hero Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const hero = {
  headline: "Access. Influence. Legacy",
  subHeadline: "SOUTH MUMBAI'S TRUSTED LUXURY REAL ESTATE ADVISORY SINCE 1981",
  ctaButton: { label: "Explore Opportunities", href: "https://parmar-properties-listing.vercel.app/" } as CtaButton,
  // NOTE: heroBg / heroBuilding / heroCloud / heroCloudScroll are Vite static
  // asset imports and remain inside HeroSection/index.tsx â€” not referenced here.
};

// â”€â”€â”€ Identity Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const identity = {
  heading: "Who We Are & What We Do",
  // ORDER-DEPENDENT â€” scrub-reveal animates segments in array sequence. Do not reorder.
  bodySegments: [
    {
      text: "For over four decades, Parmar Properties has been helping families, homebuyers, and investors make confident real estate decisions.",
      revealColorClass: "text-black font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
    {
      text: "With honest guidance, personalized service, and a deep understanding of the market, we help you find not just the right property, but the right opportunity for your future.",
      revealColorClass: "text-neutral-400 font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
  ] as TextSegment[],
  // ORDER-DEPENDENT â€” displayed left-to-right in chevron stack
  images: [
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/28.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/77.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/21.jpg",
  ],
};

// â”€â”€â”€ Why Parmar Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const whyParmar = {
  eyebrow: "Why PARMAR",
  // ORDER-DEPENDENT
  bodySegments: [
    {
      text: "Don't settle for a broker—partner with trusted advisors.",
      revealColorClass: "text-black font-semibold",
      baseColorClass: "text-neutral-200 font-semibold",
    },
    {
      text: " Every recommendation is backed by decades of market expertise, deep developer relationships, and an unwavering commitment to your success.",
      revealColorClass: "text-neutral-400 font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
  ] as TextSegment[],
  featureImageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg",
};

// â”€â”€â”€ Services Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const services = {
  eyebrow: "Luxury & Ultra-Luxury\nReal Estate Advisory",
  heading: "How Parmar\nCan Help You",
  items: [
    {
      number: 1,
      label: "Buy",
      description: "Access exclusive and pre-launch luxury inventory in South Mumbai. Take advantage of strategic timing, valuation guidance, and street-level pricing intelligence.",
      imageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/67.jpg",
    },
    {
      number: 2,
      label: "Sell",
      description: "Achieve high-velocity sales execution. Leverage our direct reach to liquidity-rich HNI buyers and pre-launch sales capabilities to sell in record time.",
      imageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/85.jpg",
    },
    {
      number: 3,
      label: "Lease",
      description: "Strategic wealth planning for HNIs, NRIs, and Family Businesses. Get zero-pressure advisory, negotiation leverage, and long-term capital appreciation.",
      imageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/48.jpg",
    },
  ] as ServiceItem[],
};

// ——— Process / Why South Mumbai Section —————————————————————
export const processSouthMumbai = {
  heading: "Real Estate,\nRewired.",
  subHeading: "Steps:",
  ctaButton: { label: "Start Your Search", href: "https://parmar-properties-listing.vercel.app" },
  steps: [
    { stepNumber: "01", title: "Talk to a Real Human.", description: "We match you with an expert who actually listens." },
    { stepNumber: "02", title: "Get Clarity.", description: "We define what you really need, not just what's available." },
    { stepNumber: "03", title: "Move Forward.", description: "We find what fits — and make it happen." },
  ],
};

// ——— Support / Features Section —————————————————————————————
export const support = {
  heading: "Our\nExpertise",
  subHeading: "We believe buying a property should feel simple, informed, and rewarding.",
  subHeadingMuted: "Every recommendation we make is guided by experience, market knowledge, and a genuine understanding of your goals.",
  ctaButton: { label: "Explore Our Network", href: "/services" } as CtaButton,
  cards: [
    {
      title: "Luxury Homes",
      description: "Every recommendation we make is guided by experience, market knowledge, and a genuine understanding of your goals.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/18.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmar-properties-two.vercel.app/services",
    },
    {
      title: "Investment Advisory",
      description: "Thoughtful guidance to help you make confident investment decisions.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/91.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmar-properties-two.vercel.app/services",
    },
    {
      title: "Exclusive Opportunities",
      description: "Access to carefully curated homes, pre-launch projects, and private listings through our trusted network.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/17.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmar-properties-two.vercel.app/services",
    },
    {
      title: "Complete Support",
      description: "From property search to final paperwork, we're with you at every step.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmar-properties-two.vercel.app/services",
    },
  ] as SupportCard[],
};

// ─── About Section ───────────────────────────────────────────
export const aboutSection = {
  eyebrow: "Our Heritage & Philosophy",
  heading: "A Legacy Built on Trust.",
  bodySegments: [
    {
      text: "For over four decades, Parmar Properties has been helping families, entrepreneurs, and investors make confident real estate decisions. Our approach has always been simple—understand every client's needs, offer honest guidance, and build relationships that last beyond the transaction.",
      revealColorClass: "text-black font-medium",
      baseColorClass: "text-neutral-300 font-medium",
    },
    {
      text: "We believe buying a property is more than an investment. It's about finding the right place, creating lasting value, and building a future with confidence.",
      revealColorClass: "text-neutral-500 font-normal",
      baseColorClass: "text-neutral-300 font-normal",
    },
  ] as TextSegment[],
  buttonLabel: "Know More",
  imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
};

// â”€â”€â”€ Blog & Resources Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// NOTE: blog.posts has been removed â€” data is now in Supabase.
// Use useBlogPosts() hook or fetchPostBySlug() to load posts.
export const blog = {
  heading: { main: "Blog &", accent: "Resources" },
  subheading: "See how we've helped clients achieve their real estate dreams, one successful move at a time.",
  ctaButton: { label: "Visit Our Blog", href: "/blog" } as CtaButton,
  categories: ["All", "Buying", "Investments", "Lifestyle", "News", "Real Estate", "Renting", "Selling"],
};


// â”€â”€â”€ Agents / Join Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const agents = {
  heading: "Don't Rent Your Career. Own It.",
  imageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/94.jpg",
  // ORDER-DEPENDENT
  bodySegments: [
    {
      text: "We offer access to real buyers beyond conventional channels, early access to pre-launch inventory, and street-level pricing intelligence.",
      revealColorClass: "text-black font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
    {
      text: " Experience faster closures through value-led, zero-pressure, trust-first advisory. Strategic timing guidance, negotiation leverage, and long-term wealth creation for HNIs, NRIs, and family businesses.",
      revealColorClass: "text-neutral-400 font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
  ] as TextSegment[],
  ctaButton: { label: "Connect With Us", href: "https://parmar-properties-two.vercel.app/join" } as CtaButton,
};

// â”€â”€â”€ Testimonials Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const testimonials = {
  // ORDER-DEPENDENT
  headingSegments: [
    { text: "Don't Take ", revealColorClass: "text-black", baseColorClass: "text-neutral-300" },
    { text: "Our Word for It.", revealColorClass: "text-neutral-400", baseColorClass: "text-neutral-300" },
  ] as TextSegment[],
  sideImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  items: [
    { quote: "Finding a home in South Mumbai is as much about patience as it is about access. The team at Parmar Properties secured our dream duplex in Malabar Hill before it even hit the open market. Absolutely professional and highly connected!", author: "Anonymous", rating: 5, imageUrl: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { quote: "As an NRI, I needed a trusted advisor who understood regulatory compliance and the premium market in Cuffe Parade. Parmar Properties was incredibly thorough, transparent, and responsive at all times of the day.", author: "Anonymous", rating: 5, imageUrl: "https://images.unsplash.com/photo-1555547614-7221376d21ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { quote: "A truly professional experience from start to finish. The advisory team handled our family wealth portfolio's real estate investments with the utmost confidentiality and delivered outstanding returns.", author: "Anonymous", rating: 5, imageUrl: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { quote: "Unmatched expertise in South Bombay luxury real estate. Their strategic approach to negotiation and deep builder relationships helped us secure our clinic space and residence at prime locations with zero hassle.", author: "Anonymous", rating: 5, imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { quote: "They don't just sell properties; they build lasting relationships. The level of trust and transparency they provided was exactly what we needed as first-time luxury buyers in Worli.", author: "Anonymous", rating: 5, imageUrl: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ] as TestimonialItem[],
};

// â”€â”€â”€ CTA Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const cta = {
  headline: "Parmar Properties. <br/> South Mumbai's Trusted Luxury Real Estate Advisory.",
  backgroundImageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/14.webp",
  primaryButton: { label: "Let's Get Started", href: "https://parmar-properties-two.vercel.app/contact" } as CtaButton,
  // Component builds `https://wa.me/${cta.whatsapp.phone}` â€” edit only the number here.
  whatsapp: { label: "Chat on WhatsApp", phone: "1234567890" }, // TODO: replace with real number
};

// â”€â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const footer = {
  primaryLinks: [
    { label: "Search", href: "https://parmar-properties-two.vercel.app/search" },
    { label: "Agents", href: "https://parmar-properties-two.vercel.app/agents" },
    { label: "Join", href: "https://parmar-properties-two.vercel.app/join" },
    { label: "About Us", href: "https://parmar-properties-two.vercel.app/about" },
    { label: "Agent Portal", href: "https://app.findrealestate.com/authentication/sign-in" },
  ] as FooterLink[],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com/parmarproperties" },
    { label: "Instagram", href: "https://www.instagram.com/parmarproperties" },
    { label: "Youtube", href: "https://www.youtube.com/@parmarproperties" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/parmarproperties" },
  ] as FooterLink[],
  legalLinks: [
    { label: "Terms", href: "https://parmar-properties-two.vercel.app/terms-of-service" },
    { label: "Privacy policy", href: "https://parmar-properties-two.vercel.app/privacy-policy" },
    { label: "Fair Housing Notice", href: "https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf" },
    { label: "Operating Procedure", href: "https://parmar-properties-two.vercel.app/operating-procedure" },
    { label: "Press", href: "https://parmar-properties-two.vercel.app/press" },
  ] as FooterLink[],
  legalNotices: [
    "Housing Choice Vouchers Welcome",
    "Se Aceptan Vales de ElecciÃ³n de Vivienda",
  ],
  newsletter: {
    heading: "Subscribe to our Newsletter!",
    placeholder: "Enter address",
  },
  contact: [
    { label: "Head Office", value: "208, Parmar Properties, Peninsula Centre", href: "geo://40.75104385252497,-73.98395637414475" },
    { label: "Email Us", value: "office@parmarproperties.in", href: "mailto:office@parmarproperties.in" },
    { label: "Call Us", value: "+022 6666 9733", href: "tel:+02266669733" },
  ] as ContactInfo[],
};
