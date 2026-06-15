import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLegal } from "@/sections/Footer/components/FooterLegal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white min-h-[auto] min-w-[auto] z-0 overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16">
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
  );
};
