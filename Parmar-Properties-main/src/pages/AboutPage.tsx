import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/sections/Header/index";
import { Footer } from "@/sections/Footer/index";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollScrubRevealText } from "@/components/ScrollScrubRevealText";
import { SplitTextReveal } from "@/components/SplitTextReveal";

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const narrativeSegments = [
    {
      text: "For over four decades, Parmar Properties has been the silent force behind South Mumbai's most significant residential and commercial acquisitions.",
      revealColorClass: "text-black font-semibold",
      baseColorClass: "text-neutral-300 font-semibold",
    },
    {
      text: " We do not simply list properties. We advise, strategize, and execute with absolute precision. Our clients are high-net-worth individuals, family offices, and NRI investors who demand absolute discretion, unmatched market access, and street-level pricing intelligence.",
      revealColorClass: "text-neutral-500 font-medium",
      baseColorClass: "text-neutral-300 font-medium",
    },
  ];

  const philosophySegments = [
    {
      text: "In South Mumbai's luxury real estate market, trust is the only currency that never depreciates.",
      revealColorClass: "text-black font-medium",
      baseColorClass: "text-neutral-300 font-medium",
    },
    {
      text: " We build relationships that span generations, ensuring every transaction is backed by decades of street-level data, deep developer alignments, and an unwavering commitment to your legacy.",
      revealColorClass: "text-neutral-500 font-normal",
      baseColorClass: "text-neutral-300 font-normal",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-black font-['Instrument_Sans'] overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-[120px] md:pt-[160px] pb-16 md:pb-24 px-6 md:px-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-black/40 mb-4">
                Our Story & Philosophy
              </p>
            </ScrollReveal>
            <h1 className="text-[48px] md:text-[76px] lg:text-[92px] font-semibold tracking-[-0.06em] leading-[0.92] text-black">
              <SplitTextReveal text="Access. Influence. Legacy." initialDelay={100} />
            </h1>
          </div>
          <div className="lg:pb-2">
            <ScrollReveal direction="up" delay={300}>
              <p className="text-[18px] md:text-[22px] font-medium tracking-[-0.04em] leading-[1.25] text-black/60 max-w-[420px]">
                South Mumbai's trusted luxury real estate advisory shaping premium portfolios since 1985.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero Image */}
        <ScrollReveal direction="up" delay={400} duration={1800} className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-none">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="South Mumbai Luxury Architecture"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
        </ScrollReveal>
      </section>

      {/* Narrative Section */}
      <section className="bg-white py-16 md:py-28 px-6 md:px-16 border-y border-black/5">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-[120px]">
            <ScrollReveal direction="right" delay={100}>
              <h2 className="font-['Instrument_Serif'] text-[42px] md:text-[56px] font-normal italic leading-none tracking-tight text-black">
                Who We Are
              </h2>
              <div className="w-12 h-[1px] bg-black mt-6 mb-8"></div>
              <p className="text-sm font-medium tracking-wider uppercase text-black/40">
                Advisors, Not Brokers
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={200}>
              <ScrollScrubRevealText
                as="p"
                className="text-[24px] md:text-[36px] lg:text-[42px] tracking-[-0.03em] leading-[1.15] text-balance mb-12"
                segments={narrativeSegments}
                scrubStart="top 85%"
                scrubEnd="center 45%"
              />
            </ScrollReveal>

            {/* Overlapping Image Stack */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
              <ScrollReveal direction="up" delay={100} className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium Interior Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={250} className="aspect-[4/5] overflow-hidden mt-8 md:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Residence South Mumbai"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-16 md:py-28 px-6 md:px-16 max-w-[1920px] mx-auto">
        <ScrollReveal direction="up" delay={100} className="mb-12 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-black/40 mb-3">
            Our Core Competencies
          </p>
          <h2 className="text-[36px] md:text-[54px] font-semibold tracking-[-0.05em] leading-[1.05] text-black">
            The Pillars of Our Advisory
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 1 */}
          <ScrollReveal direction="up" delay={100} className="bg-white border border-black/5 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300">
            <div>
              <span className="font-['Instrument_Serif'] text-[42px] md:text-[52px] italic text-black/20 block mb-6">
                01
              </span>
              <h3 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.04em] mb-4">
                Unmatched Access
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                We unlock off-market luxury inventory, pre-launch developer opportunities, and highly restricted residential assets across South Bombay's most prestigious micro-markets.
              </p>
            </div>
          </ScrollReveal>

          {/* Pillar 2 */}
          <ScrollReveal direction="up" delay={200} className="bg-white border border-black/5 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300">
            <div>
              <span className="font-['Instrument_Serif'] text-[42px] md:text-[52px] italic text-black/20 block mb-6">
                02
              </span>
              <h3 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.04em] mb-4">
                Absolute Discretion
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Protecting the privacy and strategic interests of South Mumbai's prominent business families, industrialists, and corporate leaders is our highest operational mandate.
              </p>
            </div>
          </ScrollReveal>

          {/* Pillar 3 */}
          <ScrollReveal direction="up" delay={300} className="bg-white border border-black/5 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300">
            <div>
              <span className="font-['Instrument_Serif'] text-[42px] md:text-[52px] italic text-black/20 block mb-6">
                03
              </span>
              <h3 className="text-[20px] md:text-[24px] font-semibold tracking-[-0.04em] mb-4">
                Pricing Intelligence
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Our recommendations are backed by decades of street-level transaction records, proprietary valuation models, and deep developer alignments to ensure optimal entry and exit timing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements / Milestones */}
      <section className="bg-black text-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
          <div>
            <ScrollReveal direction="right" delay={100}>
              <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                Proven Track Record
              </p>
              <h2 className="text-[38px] md:text-[56px] lg:text-[68px] font-semibold tracking-[-0.05em] leading-[0.95] text-white">
                Decades of Trusted Execution.
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-6 max-w-[460px]">
                Our numbers reflect our deep alignments and the trust placed in us by South Mumbai's strongest developer ecosystem and most prominent luxury buyers.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-16">
            {/* Stat 1 */}
            <ScrollReveal direction="up" delay={100}>
              <span className="font-['Instrument_Serif'] text-[56px] md:text-[72px] italic leading-none text-white block mb-2">
                40+
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/40 block mb-1">
                Years Presence
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                Advising South Bombay's luxury real estate market since 1985.
              </p>
            </ScrollReveal>

            {/* Stat 2 */}
            <ScrollReveal direction="up" delay={200}>
              <span className="font-['Instrument_Serif'] text-[56px] md:text-[72px] italic leading-none text-white block mb-2">
                ₹12k+ Cr
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/40 block mb-1">
                Ecosystem Volume
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                Annual luxury transaction volume within our developer network.
              </p>
            </ScrollReveal>

            {/* Stat 3 */}
            <ScrollReveal direction="up" delay={300}>
              <span className="font-['Instrument_Serif'] text-[56px] md:text-[72px] italic leading-none text-white block mb-2">
                ₹154 Cr
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/40 block mb-1">
                Sold in 30 Days
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                Record-breaking pre-launch sales execution at Tribeca Tower 1.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy / Quote Section */}
      <section className="py-16 md:py-28 px-6 md:px-16 max-w-[1920px] mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={100} className="mb-8">
            <span className="font-['Instrument_Serif'] text-[72px] md:text-[96px] italic text-black/10 leading-none block">
              “
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <ScrollScrubRevealText
              as="p"
              className="font-['Instrument_Sans'] text-[24px] md:text-[38px] lg:text-[46px] tracking-[-0.04em] leading-[1.15] text-balance mb-12"
              segments={philosophySegments}
              scrubStart="top 85%"
              scrubEnd="center 45%"
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-black/40">
              The Parmar Properties Philosophy
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F0F0F] text-white py-16 md:py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <ScrollReveal direction="up" delay={100}>
            <h2 className="font-['Instrument_Serif'] text-[42px] md:text-[64px] font-normal italic leading-none tracking-tight text-white">
              Begin Your Private Consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-[520px]">
              Connect with our senior advisors for a confidential discussion regarding your South Mumbai residential or commercial real estate requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            <a
              href="https://parmarproperties.in/contact"
              className="inline-flex items-center gap-3 bg-white text-black text-sm md:text-base font-semibold leading-none px-8 py-4 rounded-full hover:bg-white/90 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shadow-md"
            >
              <span>Schedule Consultation</span>
              <ArrowIcon size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};
