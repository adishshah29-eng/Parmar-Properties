import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";
import { support } from "@/content/content";

export const SupportHeader = () => {
  return (
    <div className="flex flex-col md:grid gap-10 md:gap-x-8 md:grid-cols-[auto_650px] items-start">

      {/* Heading */}
      <ScrollReveal direction="up" delay={0}>
        <h2 className="text-[44px] font-medium tracking-[-0.88px] leading-[46.2px] md:text-5xl md:tracking-[-1.92px] md:leading-[48px] text-balance">
          <ScrollScrubRevealText
            text={support.heading}
            className="text-[44px] tracking-[-0.88px] leading-[46.2px] md:text-5xl md:tracking-[-1.92px] md:leading-[48px]"
            baseColorClass="text-white/30"
            revealColorClass="text-white"
            scrubStart="top 90%"
            scrubEnd="center 40%"
          />
        </h2>
      </ScrollReveal>

      {/* Body text + button */}
      <ScrollReveal direction="up" delay={150}>
        <p className="text-[22px] font-medium leading-[28.6px] md:text-[21px] md:tracking-[-0.64px] md:leading-[24.5px]">
          {support.subHeading}
          <span className="text-white/40">
            {" "}{support.subHeadingMuted}
          </span>
        </p>
        <div className="mt-8 md:mt-7">
          <a
            href={support.ctaButton.href}
            className="inline-flex items-center gap-3.5 bg-white text-neutral-900 text-base md:text-xs font-medium px-6 py-3.5 md:px-5 md:py-[10px] rounded-full border border-transparent transition-transform hover:scale-105"
          >
            <span>{support.ctaButton.label}</span>
            <span className="flex items-center justify-center w-6 h-6 md:w-4 md:h-4">
              <img
                src="https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-9.svg"
                alt="Icon"
                className="w-full h-full"
              />
            </span>
          </a>
        </div>
      </ScrollReveal>

    </div>
  );
};