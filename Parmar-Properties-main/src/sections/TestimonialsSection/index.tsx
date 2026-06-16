import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";
import { TestimonialImage } from "@/sections/TestimonialsSection/components/TestimonialImage";
import { ScrollReveal } from "@/components/ScrollReveal";

export const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-100 box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline py-[60px] md:text-[6.66667px] md:leading-[7.66667px] md:py-[100px]">
      <div className="box-border caret-transparent text-[10px] leading-[11.5px] max-w-[1920px] outline-neutral-900 outline-[3px] no-underline mx-auto px-[25px] md:text-[6.66667px] md:leading-[7.66667px] md:px-[66.6667px]">
        <ScrollReveal
          aria-label="Don’t Take Our Word for It."
          className="box-border caret-transparent text-[44px] font-medium tracking-[-0.88px] leading-[46.2px] outline-neutral-900 outline-[3px] no-underline mb-10 md:text-5xl md:tracking-[-1.92px] md:leading-[48px] md:mb-[66.6667px]"
        >
          <div className="box-border caret-transparent text-[44px] tracking-[-0.88px] leading-[46.2px] outline-neutral-900 outline-[3px] relative no-underline w-fit md:text-5xl md:tracking-[-1.92px] md:leading-[48px]">
            <h2 className="box-border caret-transparent text-[44px] tracking-[-0.88px] leading-[46.2px] outline-neutral-900 outline-[3px] no-underline md:text-5xl md:tracking-[-1.92px] md:leading-[48px]">
              Don’t Take{" "}
              <span className="box-border caret-transparent text-zinc-400 text-[44px] tracking-[-0.88px] leading-[46.2px] outline-neutral-900 outline-[3px] no-underline md:text-5xl md:tracking-[-1.92px] md:leading-[48px]"></span>
              <span className="box-border caret-transparent text-zinc-400 text-[44px] tracking-[-0.88px] leading-[46.2px] outline-neutral-900 outline-[3px] no-underline md:text-5xl md:tracking-[-1.92px] md:leading-[48px]">
                Our Word for It.
              </span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="box-border caret-transparent gap-x-[normal] block text-[10px] grid-cols-none leading-[11.5px] outline-neutral-900 outline-[3px] gap-y-[normal] no-underline md:gap-x-[61.3333px] md:grid md:text-[6.66667px] md:grid-cols-[auto_434.667px] md:leading-[7.66667px] md:gap-y-[61.3333px]">
          <ScrollReveal delay={150} className="box-border caret-transparent text-[10px] leading-[11.5px] min-h-0 min-w-0 outline-neutral-900 outline-[3px] no-underline md:text-[6.66667px] md:leading-[7.66667px] md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline border-t md:text-[6.66667px] md:leading-[7.66667px]"></div>
            <TestimonialCarousel />
          </ScrollReveal>
          <ScrollReveal delay={250} direction="left">
            <TestimonialImage />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
