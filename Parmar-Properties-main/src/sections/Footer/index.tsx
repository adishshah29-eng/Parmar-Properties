import { useRef, useEffect } from "react";
import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return;

    const wrapper = document.getElementById('main-content-wrapper');

    const updateMargin = (height: number) => {
      if (!wrapper) return;
      if (window.innerWidth >= 768) {
        // Subtract 1px to prevent subpixel rendering gaps between the main content wrapper and fixed footer
        wrapper.style.marginBottom = `${height - 1}px`;
      } else {
        wrapper.style.marginBottom = '0px';
      }
    };

    let currentHeight = footerElement.offsetHeight;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        currentHeight = entry.contentRect.height;
        updateMargin(currentHeight);
      }
    });

    resizeObserver.observe(footerElement);

    const handleWindowResize = () => {
      updateMargin(currentHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleWindowResize);
      if (wrapper) {
        wrapper.style.marginBottom = '0px';
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative md:fixed bottom-0 left-0 w-full z-0 md:-z-10"
    >
      <div className="bg-neutral-900 text-white min-h-[auto] min-w-[auto] z-0 overflow-hidden w-full h-full">
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
