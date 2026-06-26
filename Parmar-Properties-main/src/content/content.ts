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
type DropdownItem = { label: string; href: string };
type NavLink = { label: string; href: string; isDropdown?: boolean; dropdownItems?: DropdownItem[] };
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
  ogImage: "https://parmarproperties.in/og-image.jpg", // TODO: replace with production OG image URL
  ogUrl: "https://parmar-properties-two.vercel.app",
};

// â”€â”€â”€ Brand â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const brand = {
  name: "Parmar Properties",
  tagline: "South Mumbai's Trusted Luxury Real Estate Advisory Since 1985",
  // Computed at build time â€” no manual annual update needed
  copyrightYear: new Date().getFullYear(),
};

// â”€â”€â”€ Header / Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const navigation = {
  links: [
    { label: "About", href: "/About", isDropdown: false },
    { label: "Expertise", href: "/Expertise", isDropdown: false },
    {
      label: "Opportunities",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { label: "Helpful Partnerships", href: "https://parmarproperties.in/join" },
        { label: "Commercial", href: "https://parmarproperties.in/services" },
        { label: "Operating Procedure", href: "https://parmarproperties.in/operating-procedure" },
        { label: "Rent Vs Buy Calculator", href: "#" }
      ]
    },
    {
      label: "Contact",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { label: "Mail us", href: "mailto:hello@parmarproperties.in" },
        { label: "WhatsApp us", href: "https://wa.me/1234567890" }
      ]
    },
  ] as NavLink[],
  ctaButton: { label: "Schedule Consultation", href: "https://parmarproperties.in/contact" } as CtaButton,
};

// â”€â”€â”€ Hero Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const hero = {
  headline: "Access. Influence. Legacy",
  subHeadline: "SOUTH MUMBAI'S TRUSTED LUXURY REAL ESTATE ADVISORY SINCE 1985",
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
      text: "A premier luxury real estate advisory with 40+ years presence in premium South Bombay markets.",
      revealColorClass: "text-black font-medium",
      baseColorClass: "text-neutral-200 font-medium",
    },
    {
      text: " We deliver record-breaking salesâ€”including â‚¹154 Cr sold in 30 days at Tribeca Tower 1â€”and provide portfolio planning, investment acquisition, valuation guidance, and high-velocity sales execution.",
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

// â”€â”€â”€ Process / Why South Mumbai Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const processSouthMumbai = {
  heading: "Why South Mumbai.",
  subHeading: "Why South Mumbai:",
  ctaButton: { label: "Explore Opportunities", href: "https://parmar-properties-listing.vercel.app/" } as CtaButton,
  steps: [
    { stepNumber: "01", title: "Consistent High Liquidity.", description: "â‚¹12,000+ Cr annual luxury transaction volume." },
    { stepNumber: "02", title: "HNI Business Families.", description: "78% of buyers in this premium market are HNI business families." },
    { stepNumber: "03", title: "Limited Supply.", description: "Limited supply ensures long-term appreciation and wealth preservation." },
  ] as ProcessStep[],
};

// â”€â”€â”€ Support / Features Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const support = {
  heading: "Developer Trusted Partnerships & Execution",
  subHeading: "Why South Mumbai's strongest developer ecosystem trusts Parmar Properties.",
  subHeadingMuted: " High-velocity sales, exclusive mandates, and seamless execution built on transparent relationships.",
  ctaButton: { label: "Explore Our Network", href: "/services" } as CtaButton,
  cards: [
    {
      title: "Immediate HNI Reach",
      description: "Direct access to qualified, liquidity-rich HNI buyers and business families.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/18.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmarproperties.in/services",
    },
    {
      title: "Pre-Launch Velocity",
      description: "Proven pre-launch and early-launch sales execution capabilities.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/91.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmarproperties.in/services",
    },
    {
      title: "Pricing Insights",
      description: "Market-backed pricing intelligence and transparent mandate-based relationships.",
      imageSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/17.jpg",
      iconSrc: "https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg",
      buttonText: "Learn More",
      href: "https://parmarproperties.in/services",
    },
  ] as SupportCard[],
};

// ─── About Section ───────────────────────────────────────────
export const aboutSection = {
  eyebrow: "Our Heritage & Philosophy",
  heading: "Forty Years of Unwavering Advisory.",
  bodySegments: [
    {
      text: "With unwavering dedication, we’ve completed over a hundred remarkable projects, each one a testament to our commitment to innovation and elegance.",
      revealColorClass: "text-[#111111] font-medium",
      baseColorClass: "text-neutral-300 font-medium",
    }
  ] as TextSegment[],
  ctaButton: { label: "About us", href: "/about" },
  imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
  ctaButton: { label: "Connect With Us", href: "https://parmarproperties.in/join" } as CtaButton,
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
    { quote: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!", author: "BERNADETTE HOGAN", rating: 5, imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { quote: "Exceptional service and deep market knowledge. They guided us through a complex acquisition seamlessly, securing prime inventory before it even hit the open market.", author: "JAMES CRAWFORD", rating: 5, imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { quote: "A truly professional experience from start to finish. The advisory team handled our portfolio with the utmost confidentiality and delivered outstanding returns.", author: "ANITA SHARMA", rating: 5, imageUrl: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { quote: "Unmatched expertise in South Bombay luxury real estate. Their strategic approach to negotiation saved us millions while securing our dream home.", author: "DAVID & SARAH CHEN", rating: 5, imageUrl: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { quote: "They don't just sell properties; they build lasting relationships. The level of trust and transparency they provided was exactly what we needed as first-time luxury buyers.", author: "RAHUL DESAI", rating: 5, imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  ] as TestimonialItem[],
};

// â”€â”€â”€ CTA Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const cta = {
  headline: "Parmar Properties. South Mumbai's Trusted Luxury Real Estate Advisory.",
  backgroundImageUrl: "https://c.animaapp.com/mq3zczchi8fb7N/assets/14.webp",
  primaryButton: { label: "Let's Get Started", href: "https://parmarproperties.in/contact" } as CtaButton,
  // Component builds `https://wa.me/${cta.whatsapp.phone}` â€” edit only the number here.
  whatsapp: { label: "Chat on WhatsApp", phone: "1234567890" }, // TODO: replace with real number
};

// â”€â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const footer = {
  primaryLinks: [
    { label: "Search", href: "https://parmarproperties.in/search" },
    { label: "Agents", href: "https://parmarproperties.in/agents" },
    { label: "Join", href: "https://parmarproperties.in/join" },
    { label: "About Us", href: "https://parmarproperties.in/about" },
    { label: "Agent Portal", href: "https://app.findrealestate.com/authentication/sign-in" },
  ] as FooterLink[],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com/parmarproperties" },
    { label: "Instagram", href: "https://www.instagram.com/parmarproperties" },
    { label: "Youtube", href: "https://www.youtube.com/@parmarproperties" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/parmarproperties" },
  ] as FooterLink[],
  legalLinks: [
    { label: "Terms", href: "https://parmarproperties.in/terms-of-service" },
    { label: "Privacy policy", href: "https://parmarproperties.in/privacy-policy" },
    { label: "Fair Housing Notice", href: "https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf" },
    { label: "Operating Procedure", href: "https://parmarproperties.in/operating-procedure" },
    { label: "Press", href: "https://parmarproperties.in/press" },
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
    { label: "Head Office", value: "5 West 37th Street, 12th Floor, New York, NY 10018", href: "geo://40.75104385252497,-73.98395637414475" },
    { label: "Email Us", value: "hello@parmarproperties.in", href: "mailto:hello@parmarproperties.in" },
    { label: "Call Us", value: "+1 212 994 9965", href: "tel:+12129949965" },
  ] as ContactInfo[],
};
