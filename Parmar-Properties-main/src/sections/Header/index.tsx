import { useState, useEffect } from "react";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Find the Hero section height to know when to show the solid header
          // The Hero section is the first <section> on the page and has a large scrollVh height.
          const heroSection = document.querySelector('section');
          const triggerHeight = heroSection ? (heroSection.offsetTop + heroSection.offsetHeight - window.innerHeight) : window.innerHeight;
          
          // Add solid background only after scrolling past the cinematic Hero section
          setIsScrolled(currentScrollY > triggerHeight);

          // Hide on scroll down, show on scroll up
          if (currentScrollY > lastScrollY && currentScrollY > 300) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-mobile-menu-open={isMobileMenuOpen ? "true" : "false"}
      className={`box-border caret-transparent text-sm min-h-[auto] min-w-[auto] fixed no-underline z-[100] top-0 inset-x-0 transition-all duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm !opacity-100" 
          : "bg-transparent"
      }`}
    >
      <div className="box-border caret-transparent w-full max-w-[1920px] no-underline mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="items-center box-border caret-transparent text-neutral-900 grid grid-cols-[1fr_auto] leading-[11.5px] min-h-[64px] relative no-underline z-50 md:grid-cols-[200px_1fr_200px] md:leading-[1.5] md:min-h-[62px]">
          <HeaderLogo />
          <DesktopNavigation />
          <div className="flex justify-end items-center">
            <a
              href="https://parmarproperties.in/contact"
              className="hidden md:inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 hover:-translate-y-0.5 hover:scale-105 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg whitespace-nowrap"
            >
              Schedule Consultation
            </a>
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-['Instrument_Sans']">
          <a href="/About" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Search</a>
          <a href="/Expertise" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Agents</a>
          <a href="/Opportunities" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Join</a>
          <a href="/Contact" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">About Us</a>
          <a
            href="https://parmarproperties.in/contact"
            className="mt-4 inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 hover:-translate-y-0.5 hover:scale-105 text-white font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </header>
  );
};