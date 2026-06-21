import { useState, useEffect } from "react";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-mobile-menu-open={isMobileMenuOpen ? "true" : "false"}
      className="box-border caret-transparent text-sm min-h-[auto] min-w-[auto] sticky no-underline z-50 top-0 inset-x-0"
      style={{
        background: isScrolled ? "rgba(255, 255, 255, 0.15)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.08)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div className="box-border caret-transparent w-full max-w-[1920px] no-underline mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="items-center box-border caret-transparent text-neutral-900 grid grid-cols-[1fr_auto] leading-[11.5px] min-h-[84px] relative no-underline z-50 md:grid-cols-[166.667px_1fr_166.667px] md:leading-[1.5] md:min-h-[52px]">
          <HeaderLogo />
          <DesktopNavigation />
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </div>
      
      {/* Mobile Nav Drawer */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-['Instrument_Sans']">
          <a href="/search" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Search</a>
          <a href="/agents" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Agents</a>
          <a href="/join" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">Join</a>
          <a href="/about" className="text-neutral-900 font-medium no-underline hover:text-neutral-600 transition-colors">About Us</a>
        </div>
      </div>
    </header>
  );
};
