import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { processSouthMumbai } from "@/content/content";

export const ProcessHeader = () => {
  return (
    <div className="flex-1 flex-shrink-0 w-full md:w-[280px] mb-12 md:mb-0">
      <ScrollScrubRevealText
        as="h2"
        text={processSouthMumbai.heading}
        className="font-['Instrument_Sans'] text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.05] mb-10"
        baseColorClass="text-neutral-300"
        revealColorClass="text-black"
        scrubStart="top 90%"
        scrubEnd="center 60%"
      />
      <ScrollReveal delay={200}>
        <a
          href={processSouthMumbai.ctaButton.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium text-sm transition-transform hover:scale-105"
        >
          <span>{processSouthMumbai.ctaButton.label}</span>
          <svg className="ml-3 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </ScrollReveal>
    </div>
  );
};