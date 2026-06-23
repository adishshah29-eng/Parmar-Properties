import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";

const testimonials = [
  {
    quote: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!",
    author: "BERNADETTE HOGAN",
    rating: 5
  },
  {
    quote: "Exceptional service and deep market knowledge. They guided us through a complex acquisition seamlessly, securing prime inventory before it even hit the open market.",
    author: "JAMES CRAWFORD",
    rating: 5
  },
  {
    quote: "A truly professional experience from start to finish. The advisory team handled our portfolio with the utmost confidentiality and delivered outstanding returns.",
    author: "ANITA SHARMA",
    rating: 5
  },
  {
    quote: "Unmatched expertise in South Bombay luxury real estate. Their strategic approach to negotiation saved us millions while securing our dream home.",
    author: "DAVID & SARAH CHEN",
    rating: 5
  },
  {
    quote: "They don't just sell properties; they build lasting relationships. The level of trust and transparency they provided was exactly what we needed as first-time luxury buyers.",
    author: "RAHUL DESAI",
    rating: 5
  }
];

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
            segments={[
              {
                text: "Don't Take ",
                revealColorClass: "text-black",
                baseColorClass: "text-neutral-300"
              },
              {
                text: "Our Word for It.",
                revealColorClass: "text-neutral-400",
                baseColorClass: "text-neutral-300"
              }
            ]}
          />
        </ScrollReveal>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-stretch">
          
          {/* Left: Large Image */}
          <div className="flex-1 w-full relative z-20">
            <ScrollReveal className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Clients discussing property"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </ScrollReveal>
          </div>

          {/* Right: Testimonial Carousel */}
          <div className="flex-1 w-full flex flex-col justify-center">
            <ScrollReveal delay={200} direction="left">
              <TestimonialCarousel testimonials={testimonials} />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
