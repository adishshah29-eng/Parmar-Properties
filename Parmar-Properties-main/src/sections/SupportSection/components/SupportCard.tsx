import { ScrollReveal } from "@/components/ScrollReveal";

export type SupportCardProps = {
    imageAlt: string;
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
    iconSrc: string;
    iconAlt: string;
    delay?: number;
    href?: string;
  };
  
  export const SupportCard = (props: SupportCardProps) => {
    return (
      <ScrollReveal delay={props.delay || 0} className="box-border caret-transparent gap-x-[15px] grid text-[10px] h-[400px] leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] relative gap-y-[15px] no-underline w-[330px] overflow-hidden p-[30px] md:gap-x-2.5 md:text-[6.66667px] md:h-[313.333px] md:leading-[7.66667px] md:gap-y-2.5 md:w-auto md:p-[33.3333px]">
        <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] absolute no-underline inset-0 md:text-[6.66667px] md:leading-[7.66667px]">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="aspect-[auto_1107_/_940] box-border text-transparent inline text-[10px] h-full leading-[11.5px] object-cover outline-neutral-900 outline-[3px] no-underline w-full scale-[1.01] md:text-[6.66667px] md:leading-[7.66667px]"
          />
        </div>
        <div className="box-border caret-transparent text-3xl font-medium tracking-[-0.3px] leading-[34.5px] max-w-[80%] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] relative no-underline md:text-[29.3333px] md:tracking-[-0.586667px] md:leading-[33.7333px] md:max-w-[230px]">
          <h3 className="box-border caret-transparent text-3xl tracking-[-0.3px] leading-[34.5px] outline-neutral-900 outline-[3px] no-underline md:text-[29.3333px] md:tracking-[-0.586667px] md:leading-[33.7333px]">
            {props.title}
          </h3>
        </div>
        <div className="box-border caret-transparent text-base leading-6 max-w-none min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] relative no-underline md:text-[13.3333px] md:leading-5 md:max-w-[230px]">
          <p className="box-border caret-transparent text-base leading-6 outline-neutral-900 outline-[3px] no-underline md:text-[13.3333px] md:leading-5">
            {props.description}
          </p>
        </div>
        <div className="self-end box-border caret-transparent text-[10px] leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] relative no-underline md:text-[6.66667px] md:leading-[7.66667px]">
          <a
            href={props.href || "https://parmarproperties.com/services"}
            className="bg-transparent caret-transparent text-base font-medium leading-6 outline-neutral-900 outline-[3px] relative no-underline border px-6 py-3.5 rounded-[100px] border-white/50 md:text-xs md:leading-[16.8px] md:px-5 md:py-[10.2667px] inline-block"
          >
            <div className="items-center box-border caret-transparent gap-x-3.5 flex text-base justify-center leading-6 outline-neutral-900 outline-[3px] gap-y-3.5 no-underline overflow-hidden md:gap-x-[9.33333px] md:text-xs md:leading-[16.8px] md:gap-y-[9.33333px]">
              <div className="box-border caret-transparent text-base leading-6 min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline overflow-hidden md:text-xs md:leading-[16.8px]">
                <span className="box-border caret-transparent block text-base leading-6 outline-neutral-900 outline-[3px] relative no-underline md:text-xs md:leading-[16.8px] after:accent-auto after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-[105%] after:inset-x-0 after:font-instrument_sans after:md:text-xs after:md:leading-[16.8px]">
                  {props.buttonText}
                </span>
              </div>
              <span className="items-center box-border caret-transparent flex text-base h-6 justify-center leading-6 min-h-[auto] min-w-6 outline-neutral-900 outline-[3px] no-underline w-6 md:text-xs md:h-4 md:leading-[16.8px] md:min-w-4 md:w-4">
                <img
                  src={props.iconSrc}
                  alt={props.iconAlt}
                  className="box-border caret-transparent text-base leading-6 outline-neutral-900 outline-[3px] no-underline md:text-xs md:leading-[16.8px]"
                />
              </span>
            </div>
          </a>
        </div>
      </ScrollReveal>
    );
  };
  