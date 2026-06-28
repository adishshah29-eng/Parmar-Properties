import { useState, useEffect, useRef } from "react";
import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(footerRef.current);
    setFooterHeight(footerRef.current.getBoundingClientRect().height);

    return () => resizeObserver.disconnect();
  }, []);

  // 15% extra scroll distance creates a subtle parallax effect while minimizing the dark spacing gap
  const PARALLAX_RATIO = 0.15;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (spacerRef.current && footerHeight > 0) {
            const rect = spacerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const scrollAmount = Math.max(0, windowHeight - rect.top);
            const spacerHeight = footerHeight * (1 + PARALLAX_RATIO);
            
            if (scrollAmount <= 0) {
              setTranslateY(footerHeight);
            } else {
              const progress = Math.min(1, scrollAmount / spacerHeight);
              setTranslateY(footerHeight * (1 - progress));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerHeight]);

  const spacerHeight = footerHeight > 0 ? footerHeight * (1 + PARALLAX_RATIO) : 0;

  return (
    <>
      {/* Spacer to push content up and dictate the scroll distance for the parallax */}
      <div ref={spacerRef} style={{ height: spacerHeight }} className="w-full" />
      
      {/* Fixed footer hidden behind main content */}
      <footer 
        className="fixed bottom-0 left-0 w-full -z-10 bg-neutral-900 text-white will-change-transform"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {/* Dark background extension to seamlessly connect to the section above without a gap */}
        <div className="absolute bottom-full left-0 w-full h-[100vh] bg-neutral-900 pointer-events-none" />
        
        <div ref={footerRef} className="w-full max-w-[1920px] mx-auto px-6 md:px-16 overflow-hidden">
          <ScrollReveal 
            direction="up" 
            distance={40} 
            className="grid [grid-template-areas:'newsletter''links''logo''copyright'] grid-cols-1 pt-16 pb-10 gap-y-12 md:[grid-template-areas:'newsletter_links''logo_logo''copyright_copyright'] md:grid-cols-[1fr_auto] md:justify-between md:pt-24 md:pb-8"
          >
            <NewsletterSignup />
            <FooterLinks />
            <FooterLogo />
            <FooterLegal />
          </ScrollReveal>
        </div>
      </footer>
    </>
  );
};
