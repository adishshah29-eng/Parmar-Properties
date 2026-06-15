import { ScrollReveal } from "@/components/ScrollReveal";
import logo from "assets/Parmar logo without bg.png";

export const FooterLogo = () => {
    return (
      <ScrollReveal delay={0} className="box-border caret-transparent text-[10px] col-end-[logo] col-start-[logo] row-end-[logo] row-start-[logo] leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline mt-20 md:text-[6.66667px] md:leading-[7.66667px] md:mt-[83.3333px]">
        <img
          src={logo}
          alt="Parmar Properties Logo"
          className="box-border caret-transparent inline text-[10px] h-auto leading-[11.5px] outline-neutral-900 outline-[3px] no-underline w-auto md:text-[6.66667px] md:h-[186.667px] md:leading-[7.66667px] md:w-[650px]"
        />
      </ScrollReveal>
    );
  };
  