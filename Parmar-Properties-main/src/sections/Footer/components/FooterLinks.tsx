import { FooterLinkColumn } from "@/sections/Footer/components/FooterLinkColumn";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterLinks = () => {
  return (
    <div className="flex justify-between md:justify-end md:gap-32 w-full mt-10 md:mt-0 font-['Instrument_Sans']">
      <FooterLinkColumn
        className="flex flex-col gap-y-4 max-w-max"
        links={[
          { href: "https://parmarproperties.com/search", label: "Search" },
          { href: "https://parmarproperties.com/agents", label: "Agents" },
          { href: "https://parmarproperties.com/join", label: "Join" },
          { href: "https://parmarproperties.com/about", label: "About Us" },
          { href: "https://app.findrealestate.com/authentication/sign-in", label: "Agent Portal" },
        ]}
        isPrimary={true}
      />
      <FooterLinkColumn
        className="flex flex-col gap-y-4 max-w-max text-left md:text-right"
        links={[
          { href: "https://facebook.com/parmarproperties", label: "Facebook" },
          { href: "https://www.instagram.com/parmarproperties", label: "Instagram" },
          { href: "https://www.youtube.com/@parmarproperties", label: "Youtube" },
          { href: "https://www.linkedin.com/company/parmarproperties", label: "Linkedin" },
        ]}
      />
    </div>
  );
};
