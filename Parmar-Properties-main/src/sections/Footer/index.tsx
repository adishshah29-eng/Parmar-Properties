import { useRef, useEffect, useState } from "react";
import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply parallax when footer is in or near the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // How far the footer has entered the viewport (0 = just entered, 1 = fully passed)
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        // Translate from +40px (not yet reached) to 0px (scrolled through)
        const translateY = (1 - progress) * 40;
        setParallaxY(translateY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full z-0 overflow-hidden bg-neutral-900"
    >
      <div 
        className="bg-neutral-900 text-white w-full"
        style={{
          transform: `translateY(${parallaxY}px)`,
          willChange: "transform",
        }}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16">
          <ScrollReveal
            direction="up"
            distance={40}
            className="grid grid-cols-1 md:grid-cols-2 pt-10 pb-6 gap-y-8 md:pt-14 md:pb-6 md:gap-y-6 justify-between"
          >
            <NewsletterSignup />
            <FooterLinks />
            <FooterLogo />
            <FooterLegal />
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};
