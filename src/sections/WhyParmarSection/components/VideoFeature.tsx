import { ScrollReveal } from "@/components/ScrollReveal";

export const VideoFeature = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12">
      <ScrollReveal delay={200} direction="up" className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-2xl md:rounded-[40px] overflow-hidden">
        <video
          src="/videos/why-us.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional gradient overlay to ensure text/UI on top is readable if there were any */}
        <div className="absolute inset-0 bg-black/10"></div>
      </ScrollReveal>
    </div>
  );
};