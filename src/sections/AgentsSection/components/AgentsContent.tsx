import { SplitTextReveal } from "@/components/SplitTextReveal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AgentsContent = () => {
  return (
    <div className="flex-1 w-full max-w-xl md:pl-16 lg:pl-24 flex flex-col justify-center">
      <SplitTextReveal
        text="Don't Rent Your Career. Own It."
        className="text-black font-['Instrument_Sans'] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8 md:mb-12"
      />

      <ScrollReveal delay={200} className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
        <img
          src="https://c.animaapp.com/mq3zczchi8fb7N/assets/94.jpg"
          alt="Agents working"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="text-black font-medium text-lg md:text-xl leading-relaxed font-['Instrument_Sans'] mb-10">
          At FIND, our agents don’t just work for the brand—they own a part of it.{" "}
          <span className="text-black/40">
            We give top performers real equity, so they’re invested in more than just
            your transaction—they're invested in your outcome. Agents are certified,
            supported, and equipped to deliver five-star service—because their
            success is tied to yours.
          </span>
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <a
          href="/join"
          className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium text-sm transition-transform hover:scale-105"
        >
          <span>Join The Movement</span>
          <svg className="ml-3 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </ScrollReveal>
    </div>
  );
};