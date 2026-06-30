import { ImageStack } from "@/sections/IdentitySection/components/ImageStack";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";
import { identity } from "@/content/content";
export const IdentitySection = () => {
  return (
    <section className="bg-black py-6 md:py-10 overflow-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 flex flex-col items-center text-center">
        <ScrollScrubRevealText 
          as="h2"
          text={identity.heading}
          className="font-['Instrument_Serif'] italic text-[42px] md:text-[64px] lg:text-[84px] font-normal tracking-tight mb-6 md:mb-10"
          baseColorClass="text-neutral-800"
          revealColorClass="text-white"
          scrubStart="top 90%"
          scrubEnd="center 60%"
        />
        
        {/* Chevron Cards overlapping row */}
        <div className="w-full flex justify-center mb-6 md:mb-10">
            <ImageStack />
        </div>

        <ScrollReveal delay={300}>
          <ScrollScrubRevealText
            as="p"
            className="text-xl md:text-2xl leading-relaxed max-w-3xl font-['Instrument_Sans']"
            segments={identity.bodySegments}
            scrubStart="top 85%"
            scrubEnd="center 40%"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};
