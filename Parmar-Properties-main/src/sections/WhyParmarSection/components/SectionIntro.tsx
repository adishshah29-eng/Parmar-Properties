import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";

// FIND's "why-us_grid": a small eyebrow column + ONE text block where the
// lead-in is solid black/bold and the continuation is a lighter gray "em"
// span — not a separate <h2> + <p> pair.
export const SectionIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-6 md:gap-10 items-start mb-10 md:mb-16 max-w-7xl mx-auto px-6 md:px-12">
      <ScrollReveal delay={100} direction="right">
        <p className="text-black font-['Instrument_Sans'] text-sm md:text-base font-semibold uppercase tracking-[0.02em]">
          Why Parmar
        </p>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <ScrollScrubRevealText 
          as="p"
          className="font-['Instrument_Sans'] tracking-[-0.02em] leading-[1.15] text-3xl md:text-5xl"
          segments={[
            {
              text: "40+ years of presence. Don’t just find a broker",
              revealColorClass: "text-black font-semibold",
              baseColorClass: "text-neutral-200 font-semibold"
            },
            {
              text: " — find proven outcomes. We give you direct access to the Jain–Marwadi network, clarity, and the right advisory by your side.",
              revealColorClass: "text-neutral-400 font-medium",
              baseColorClass: "text-neutral-200 font-medium"
            }
          ]}
          scrubStart="top 90%"
          scrubEnd="center 40%"
        />
      </ScrollReveal>
    </div>
  );
};