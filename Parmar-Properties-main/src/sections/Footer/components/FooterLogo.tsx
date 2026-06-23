import { ScrollReveal } from "@/components/ScrollReveal";
import logo from "assets/Parmar logo without bg.webp";

export const FooterLogo = () => {
  return (
    <ScrollReveal delay={0} className="box-border caret-transparent text-[10px] col-end-[logo] col-start-[logo] row-end-[logo] row-start-[logo] leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline mt-20 md:text-[6.66667px] md:leading-[7.66667px] md:mt-[83.3333px]">
      <a
        href="/"
        className="no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 inline-block"
        aria-label="Go to home page"
      >
        <img
          src={logo}
          alt="Parmar Properties Logo"
          className="w-auto h-16 md:h-24 object-contain inline-block"
        />
      </a>
    </ScrollReveal>
  );
};
