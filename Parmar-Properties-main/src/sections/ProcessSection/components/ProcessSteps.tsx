import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ProcessSteps = () => {
  return (
    <div className="flex-1 min-w-0 w-full max-w-2xl">
      <ScrollReveal className="text-black font-medium text-xl md:text-2xl mb-8 font-['Instrument_Sans']">
        Steps:
      </ScrollReveal>
      <div className="flex flex-col">
        <ProcessStep
          stepNumber="01"
          title="Talk to a Real Human."
          description="We match you with an expert who actually listens."
          isFirst={true}
          delay={0}
        />
        <ProcessStep
          stepNumber="02"
          title="Get Clarity."
          description="We define what you really need, not just what’s available."
          delay={120}
        />
        <ProcessStep
          stepNumber="03"
          title="Move Forward."
          description="We find what fits — and make it happen."
          isLast={true}
          delay={240}
        />
      </div>
    </div>
  );
};
