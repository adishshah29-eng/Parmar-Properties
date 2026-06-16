import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";
import { TestimonialImage } from "@/sections/TestimonialsSection/components/TestimonialImage";
import { ScrollReveal } from "@/components/ScrollReveal";

export const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-100 py-16 md:py-32 w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        <ScrollReveal
          aria-label="Don’t Take Our Word for It."
          className="mb-12 md:mb-20"
        >
          <div className="relative w-fit">
            <h2 className="text-black font-['Instrument_Sans'] text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
              Don’t Take{" "}
              <span className="text-zinc-400">
                Our Word for It.
              </span>
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-col md:grid md:grid-cols-[auto_434.667px] gap-12 md:gap-[61.3333px] items-start">
          <ScrollReveal delay={150} className="w-full min-w-0">
            <div className="border-t border-neutral-900 mb-8 w-full"></div>
            <TestimonialCarousel />
          </ScrollReveal>
          
          <ScrollReveal delay={250} direction="left" className="w-full flex justify-center md:block">
            <TestimonialImage />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

