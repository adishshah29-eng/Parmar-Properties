import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";
import { testimonials as testimonialsContent } from "@/content/content";


export function TestimonialsSection() {
  return (
    <section className="bg-zinc-100 py-20 md:py-32 w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        
        {/* Header - Aligned to match left column width or span full */}
        <ScrollReveal className="mb-12 md:mb-16">
          <ScrollScrubRevealText 
            as="h2"
            text="Don't Take Our Word for It."
            className="text-4xl md:text-5xl lg:text-6xl font-['Instrument_Sans'] font-semibold tracking-tight"
            baseColorClass="text-neutral-300"
            revealColorClass="text-black"
            scrubStart="top 95%"
            scrubEnd="center 60%"
            segments={testimonialsContent.headingSegments}
          />
        </ScrollReveal>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-stretch">
          
          {/* Left: Large Image */}
          <div className="flex-1 w-full relative z-20">
            <ScrollReveal className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden relative z-20">
              <img 
                src={testimonialsContent.sideImageUrl} 
                alt="Clients discussing property"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ScrollReveal>
          </div>

          {/* Right: Testimonial Carousel */}
          <div className="flex-1 w-full flex flex-col justify-center">
            <ScrollReveal delay={200} direction="left">
              <TestimonialCarousel testimonials={testimonialsContent.items} />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
