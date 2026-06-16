import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterLegal = () => {
    return (
      <ScrollReveal delay={100} className="box-border caret-transparent text-white/40 gap-x-[30px] flex flex-col text-sm font-medium col-end-[copyright] col-start-[copyright] row-end-[copyright] row-start-[copyright] justify-between leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] gap-y-[30px] no-underline mt-[30px] md:gap-x-5 md:flex-row md:text-[10.6667px] md:leading-4 md:gap-y-5 md:mt-5">
        <div className="box-border caret-transparent gap-x-[30px] flex flex-col text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] gap-y-[30px] no-underline md:gap-x-5 md:flex-row md:text-[10.6667px] md:leading-4 md:gap-y-5">
          <a
            href="https://parmarproperties.com/terms-of-service"
            className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4"
          >
            Terms
          </a>
          <a
            href="https://parmarproperties.com/privacy-policy"
            className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4"
          >
            Privacy policy
          </a>
          <a
            href="https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf"
            className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4"
          >
            Fair Housing Notice
          </a>
          <a
            href="https://parmarproperties.com/operating-procedure"
            className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4"
          >
            Operating Procedure
          </a>
          <a
            href="https://parmarproperties.com/press"
            className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4"
          >
            Press
          </a>
          <span className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4">
            Housing Choice Vouchers Welcome
          </span>
          <span className="box-border caret-transparent block text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4">
            Se Aceptan Vales de Elección de Vivienda
          </span>
        </div>
        <div className="box-border caret-transparent text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4">
          Parmar Properties
        </div>
        <div className="box-border caret-transparent text-sm leading-[21px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4">
          Copyright © 2026
        </div>
      </ScrollReveal>
    );
  };
  