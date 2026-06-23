import { ScrollReveal } from "@/components/ScrollReveal";

export const VideoFeature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-10">
      <ScrollReveal 
        direction="left" 
        distance={200}
        duration={1500}
        className="relative w-full aspect-[4/5] md:aspect-[21/9] rounded-2xl md:rounded-[40px] overflow-hidden"
      >
        <img
          src="https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg"
          alt="Luxury Real Estate Placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </ScrollReveal>
    </div>
  );
};