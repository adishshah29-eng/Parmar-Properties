import { ScrollReveal } from "@/components/ScrollReveal";

// FIND's "why-us_preview" sits inside the SAME container as the text above
// it (not a wider 1920px wrapper), and is just a bare <video> — no overlay.
export const VideoFeature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <ScrollReveal delay={200} direction="up" className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-2xl md:rounded-[40px] overflow-hidden">
        <video
          src="/videos/why-parmar.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      </ScrollReveal>
    </div>
  );
};