import { ScrollReveal } from "@/components/ScrollReveal";

export type ServicePanelProps = {
  imageUrl: string;
  description: string;
  label: string;
  delay?: number;
};

export const ServicePanel = ({ imageUrl, description, label, delay = 0 }: ServicePanelProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" distance={40} className="group relative w-full border-t border-white/20 bg-black overflow-hidden flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 px-6 md:px-16 transition-all duration-500 cursor-pointer">
      {/* Background Image (appears on hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0">
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
        
        {/* Left Side: Number ring & Description */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-1/2">
          {/* Arrow / Chevron */}
          <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </div>
          
          <p className="text-white/80 font-['Instrument_Sans'] text-lg md:text-xl leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        {/* Right Side: Huge Label Text */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <h2 className="text-transparent font-['Instrument_Sans'] text-6xl md:text-[160px] lg:text-[200px] font-bold tracking-tighter leading-none transition-colors duration-500 group-hover:text-white group-hover:[WebkitTextStroke:0px]" 
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
          >
            {label}
          </h2>
        </div>
      </div>
    </ScrollReveal>
  );
};