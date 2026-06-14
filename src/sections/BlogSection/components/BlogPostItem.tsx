export type BlogPostItemProps = {
    href: string;
    date: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageClassName: string;
    showImageOverlay: string;
  };
  
  export const BlogPostItem = (props: BlogPostItemProps) => {
    return (
      <div className="box-border caret-transparent text-[10px] leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline py-0 border-t-black border-t-0 md:border-t-neutral-900/10 md:text-[6.66667px] md:leading-[7.66667px] md:py-5 md:border-t">
        <div className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] relative no-underline md:text-[6.66667px] md:leading-[7.66667px]">
          <div className="box-border caret-transparent gap-x-[30px] grid text-[10px] grid-cols-none leading-[11.5px] outline-neutral-900 outline-[3px] gap-y-[30px] no-underline md:gap-x-5 md:text-[6.66667px] md:grid-cols-[auto_650.667px] md:leading-[7.66667px] md:gap-y-5">
            <div className="box-border caret-transparent text-[10px] leading-[11.5px] min-h-[auto] min-w-[auto] order-none outline-neutral-900 outline-[3px] no-underline md:text-[6.66667px] md:leading-[7.66667px] md:order-1">
              <a
                href={props.href}
                className="aspect-[365_/_250] box-border caret-transparent block text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] relative no-underline -mx-5 md:aspect-[976_/_450] md:text-[6.66667px] md:leading-[7.66667px] md:mx-0"
              >
                <div className="box-border caret-transparent flex text-[10px] h-full leading-[11.5px] outline-neutral-900 outline-[3px] relative no-underline w-full overflow-hidden md:text-[6.66667px] md:leading-[7.66667px]">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className={props.imageClassName}
                  />
                  {props.showImageOverlay === "true" && (
                    <div className="box-border caret-transparent text-[10px] h-full leading-[11.5px] outline-neutral-900 outline-[3px] absolute no-underline w-full z-[1] left-0 top-0 md:text-[6.66667px] md:leading-[7.66667px]"></div>
                  )}
                </div>
              </a>
            </div>
            <div className="box-border caret-transparent block flex-row text-[10px] justify-normal leading-[11.5px] min-h-[auto] min-w-[auto] outline-neutral-900 outline-[3px] no-underline md:flex md:flex-col md:text-[6.66667px] md:justify-between md:leading-[7.66667px]">
              <div className="box-border caret-transparent text-sm font-medium leading-[21px] min-h-0 min-w-0 outline-neutral-900 outline-[3px] no-underline mb-[30px] md:text-[13.3333px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:mb-[45.6667px]">
                {props.date}
              </div>
              <div className="box-border caret-transparent text-[10px] leading-[11.5px] min-h-0 min-w-0 outline-neutral-900 outline-[3px] no-underline md:text-[6.66667px] md:leading-[7.66667px] md:min-h-[auto] md:min-w-[auto]">
                <a
                  href={props.href}
                  className="box-border caret-transparent block text-[22px] font-medium tracking-[normal] leading-[25.3px] outline-neutral-900 outline-[3px] no-underline md:text-[29.3333px] md:tracking-[-0.586667px] md:leading-[33.7333px]"
                >
                  {props.title}
                </a>
                <div className="box-border caret-transparent text-base font-medium leading-6 outline-neutral-900 outline-[3px] no-underline mt-[15px] md:text-[10.6667px] md:leading-4 md:mt-4">
                  <p className="box-border caret-transparent text-base leading-6 outline-neutral-900 outline-[3px] no-underline md:text-[10.6667px] md:leading-4">
                    {props.description}
                  </p>
                </div>
              </div>
              <div className="box-border caret-transparent text-[10px] leading-[11.5px] min-h-0 min-w-0 outline-neutral-900 outline-[3px] no-underline mt-[30px] md:text-[6.66667px] md:leading-[7.66667px] md:min-h-[auto] md:min-w-[auto] md:mt-5">
                <a
                  href={props.href}
                  className="box-border caret-transparent text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline md:text-[6.66667px] md:leading-[7.66667px]"
                >
                  <button
                    type="button"
                    className="bg-white caret-transparent text-neutral-900 text-base font-medium leading-6 outline-[3px] relative no-underline border border-neutral-900/30 px-6 py-3.5 rounded-[100px] md:text-xs md:leading-[16.8px] md:px-5 md:py-[10.2667px]"
                  >
                    <div className="items-center box-border caret-transparent gap-x-3.5 flex text-base justify-center leading-6 outline-[3px] gap-y-3.5 no-underline overflow-hidden md:gap-x-[9.33333px] md:text-xs md:leading-[16.8px] md:gap-y-[9.33333px]">
                      <div className="box-border caret-transparent text-base leading-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline overflow-hidden md:text-xs md:leading-[16.8px]">
                        <span className="box-border caret-transparent block text-base leading-6 outline-[3px] relative no-underline md:text-xs md:leading-[16.8px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-[105%] after:inset-x-0 after:font-instrument_sans after:md:text-xs after:md:leading-[16.8px]">
                          Read More
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
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  