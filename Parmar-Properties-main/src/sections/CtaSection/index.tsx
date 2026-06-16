import { SplitTextReveal } from "@/components/SplitTextReveal";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CtaSection = () => {
    return (
      <section className="items-center box-border caret-transparent text-white flex text-[10px] h-[550px] justify-center leading-[11.5px] outline-neutral-900 outline-[3px] relative no-underline md:text-[6.66667px] md:h-[600px] md:leading-[7.66667px]">
        <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] absolute no-underline overflow-hidden inset-0 md:text-[6.66667px] md:leading-[7.66667px] after:accent-auto after:bg-neutral-900/80 after:box-border after:caret-transparent after:text-white after:block after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[11.5px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-instrument_sans after:md:text-[6.66667px] after:md:leading-[7.66667px]">
          <img
            alt=""
            src="https://c.animaapp.com/mq3zczchi8fb7N/assets/14.webp"
            className="aspect-[auto_2880_/_1464] box-border text-transparent inline text-[10px] h-full leading-[11.5px] object-cover outline-neutral-900 outline-[3px] no-underline w-full scale-[1.0102] md:text-[6.66667px] md:leading-[7.66667px]"
          />
        </div>
        <div className="box-border caret-transparent text-[10px] leading-[11.5px] max-w-[1920px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline mx-auto px-6 md:px-16">
          <div className="box-border caret-transparent text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.3px] leading-[34.5px] outline-neutral-900 outline-[3px] relative text-center no-underline md:tracking-[-0.48px] md:leading-[55.2px]">
            <SplitTextReveal 
              text="Parmar Properties. We’ll Help You Get There."
              className="box-border caret-transparent text-3xl sm:text-4xl md:text-5xl tracking-[-0.3px] leading-[34.5px] outline-neutral-900 outline-[3px] no-underline md:tracking-[-0.48px] md:leading-[55.2px]"
            />
          </div>
          <ScrollReveal delay={300} className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] text-center no-underline mt-[30px] md:text-[6.66667px] md:leading-[7.66667px] md:mt-[26.6667px]">
            <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline md:text-[6.66667px] md:leading-[7.66667px]">
              <a
                href="https://parmarproperties.com/contact"
                className="bg-white caret-transparent text-neutral-900 text-base font-medium leading-6 outline-[3px] relative no-underline border px-6 py-3.5 rounded-[100px] border-transparent md:text-xs md:leading-[16.8px] md:px-5 md:py-[10.2667px] inline-block"
              >
                <div className="items-center box-border caret-transparent gap-x-3.5 flex text-base justify-center leading-6 outline-[3px] gap-y-3.5 no-underline overflow-hidden md:gap-x-[9.33333px] md:text-xs md:leading-[16.8px] md:gap-y-[9.33333px]">
                  <div className="box-border caret-transparent text-base leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline overflow-hidden md:text-xs md:leading-[16.8px]">
                    <span className="box-border caret-transparent block text-base leading-6 outline-[3px] relative no-underline md:text-xs md:leading-[16.8px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-[105%] after:inset-x-0 after:font-instrument_sans after:md:text-xs after:md:leading-[16.8px]">
                      Let's Get Started
                    </span>
                  </div>
                  <span className="items-center box-border caret-transparent flex text-base h-6 justify-center leading-6 min-h-[auto] min-w-6 outline-[3px] no-underline w-6 md:text-xs md:h-4 md:leading-[16.8px] md:min-w-4 md:w-4">
                    <img
                      src="https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-9.svg"
                      alt="Icon"
                      className="box-border caret-transparent text-base leading-6 outline-[3px] no-underline md:text-xs md:leading-[16.8px]"
                    />
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  };
  