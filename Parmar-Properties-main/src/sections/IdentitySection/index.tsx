import { ImageStack } from "@/sections/IdentitySection/components/ImageStack";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SplitTextReveal } from "@/components/SplitTextReveal";

export const IdentitySection = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden w-full">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 flex flex-col items-center text-center">
        <SplitTextReveal 
          text="This isn't just about real estate." 
          className="text-black font-['Instrument_Sans'] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] mb-12 md:mb-20"
        />
        
        {/* Chevron Cards overlapping row */}
        <ScrollReveal delay={150} className="w-full flex justify-center translate-x-[-5%] mb-12 md:mb-20">
            <ImageStack />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-black font-medium text-xl md:text-2xl leading-relaxed max-w-3xl font-['Instrument_Sans']">
            It’s about identity. Progress. Getting unstuck. You’re not just looking for a place.{" "}
            <span className="text-black/40">
              You’re looking for alignment. That’s what we help you find.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
