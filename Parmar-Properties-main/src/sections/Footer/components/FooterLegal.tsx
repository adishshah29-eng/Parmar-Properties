import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterLegal = () => {
    return (
      <ScrollReveal delay={100} className="col-start-[copyright] col-end-[copyright] row-start-[copyright] row-end-[copyright] flex flex-col md:flex-row justify-between items-start md:items-center text-white/40 text-sm md:text-xs font-medium mt-8 md:mt-5 gap-6 md:gap-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-5">
          <a
            href="https://parmarproperties.in/terms-of-service"
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="https://parmarproperties.in/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy policy
          </a>
          <a
            href="https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf"
            className="hover:text-white transition-colors"
          >
            Fair Housing Notice
          </a>
          <a
            href="https://parmarproperties.in/operating-procedure"
            className="hover:text-white transition-colors"
          >
            Operating Procedure
          </a>
          <a
            href="https://parmarproperties.in/press"
            className="hover:text-white transition-colors"
          >
            Press
          </a>
          <span>
            Housing Choice Vouchers Welcome
          </span>
          <span>
            Se Aceptan Vales de Elección de Vivienda
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0">
          <div>Parmar Properties</div>
          <div>Copyright © 2026</div>
        </div>
      </ScrollReveal>
    );
  };
  