export type TestimonialCardProps = {
    quote: string;
    author: string;
  };
  
  export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
      <div className="box-border snap-start caret-transparent shrink-0 text-[10px] h-full leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] relative no-underline w-[85vw] md:text-[6.66667px] md:leading-[7.66667px] md:w-[435px]">
        <div className="box-border caret-transparent text-[22px] tracking-[-0.22px] leading-[25.3px] outline-neutral-900 outline-[3px] no-underline font-lora md:text-[21.3333px] md:tracking-[-0.426667px] md:leading-[24.5333px]">
          <p className="box-border caret-transparent text-[22px] tracking-[-0.22px] leading-[25.3px] outline-neutral-900 outline-[3px] no-underline md:text-[21.3333px] md:tracking-[-0.426667px] md:leading-[24.5333px]">
            {props.quote}
          </p>
        </div>
        <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline mt-[30px] md:text-[6.66667px] md:leading-[7.66667px] md:mt-[33.3333px]">
          <div className="box-border caret-transparent inline-block text-xs font-medium leading-[13.2px] outline-neutral-900 outline-[3px] no-underline uppercase align-middle font-lora">
            {props.author}
          </div>
          <div className="box-border caret-transparent inline-block text-xs font-medium leading-[13.2px] outline-neutral-900 outline-[3px] relative no-underline uppercase top-[-1.68px] align-middle mx-5 font-lora">
            /
          </div>
          <div className="bg-[url(data:image/svg+xml,<svg%20xmlns=\%22http://www.w3.org/2000/svg\%22%20viewBox=\%220%200%2016%2016\%22><path%20fill=\%22%23151717\%22%20d=\%22M7.52%201.46a.5.5%200%200%201%20.96%200l1.2%203.72c.07.2.26.35.48.35h3.91a.5.5%200%200%201%20.3.9l-3.17%202.3a.5.5%200%200%200-.18.56l1.2%203.72a.5.5%200%200%201-.76.56l-3.17-2.3a.5.5%200%200%200-.58%200l-3.17%202.3a.5.5%200%200%201-.77-.56l1.21-3.72a.5.5%200%200%200-.18-.56l-3.16-2.3a.5.5%200%200%201%20.29-.9h3.91a.5.5%200%200%200%20.48-.35l1.2-3.72Z\%22/></svg>)] bg-size-[16px_16px] box-border caret-transparent inline-block text-[10px] h-4 leading-[11.5px] outline-neutral-900 outline-[3px] no-underline align-middle w-20 md:bg-size-[13.3333px_13.3333px] md:text-[6.66667px] md:h-[13.3333px] md:leading-[7.66667px] md:w-[66.6667px]"></div>
        </div>
      </div>
    );
  };
  