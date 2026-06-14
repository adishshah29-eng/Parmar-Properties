import { FooterLinkColumn } from "@/sections/Footer/components/FooterLinkColumn";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterLinks = () => {
  return (
    <div className="flex justify-between md:justify-end md:gap-32 w-full mt-10 md:mt-0 font-['Instrument_Sans']">
      <FooterLinkColumn
        className="flex flex-col gap-y-4 max-w-max"
        links={[
          { href: "/search", label: "Search" },
          { href: "/agents", label: "Agents" },
          { href: "/join", label: "Join" },
          { href: "/about", label: "About Us" },
          { href: "https://app.findrealestate.com/authentication/sign-in", label: "Agent Portal" },
        ]}
        isPrimary={true}
      />
      <FooterLinkColumn
        className="flex flex-col gap-y-4 max-w-max text-left md:text-right"
        links={[
          { href: "https://facebook.com/findrealestate.hq", label: "Facebook" },
          { href: "https://www.instagram.com/findrealestate.hq", label: "Instagram" },
          { href: "https://www.youtube.com/@findrealestate_hq", label: "Youtube" },
          { href: "https://www.linkedin.com/company/oxford-property-group", label: "Linkedin" },
        ]}
      />
    </div>
  );
};
