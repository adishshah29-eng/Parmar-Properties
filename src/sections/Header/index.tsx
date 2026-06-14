import { useState, useEffect } from "react";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";
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
    <header className={`box-border caret-transparent text-sm min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] sticky no-underline z-50 top-0 inset-x-0 transition-colors duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="box-border caret-transparent w-full max-w-[1920px] outline-neutral-900 outline-[3px] no-underline mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="items-center box-border caret-transparent text-neutral-900 grid grid-cols-[1fr_auto] leading-[11.5px] min-h-[84px] outline-[3px] relative no-underline z-50 md:grid-cols-[166.667px_1fr_166.667px] md:leading-[1.5] md:min-h-[52px]">
          <HeaderLogo />
          <DesktopNavigation />
          <HeaderActions />
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
