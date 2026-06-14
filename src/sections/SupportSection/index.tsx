import { SupportHeader } from "@/sections/SupportSection/components/SupportHeader";
import { SupportCard } from "@/sections/SupportSection/components/SupportCard";

export const SupportSection = () => {
  return (
    <section className="bg-neutral-900 box-border caret-transparent text-white text-[10px] leading-[11.5px] outline-neutral-900 outline-[3px] no-underline pt-10 pb-[60px] md:text-[6.66667px] md:leading-[7.66667px] md:py-[100px]">
      <div className="box-border caret-transparent text-[10px] leading-[11.5px] max-w-[1920px] outline-neutral-900 outline-[3px] no-underline mx-auto px-[25px] md:text-[6.66667px] md:leading-[7.66667px] md:px-[66.6667px]">
        <SupportHeader />
        <div className="box-border caret-transparent gap-x-2.5 grid text-[10px] grid-flow-col grid-cols-none leading-[11.5px] outline-neutral-900 outline-[3px] gap-y-2.5 scroll-smooth no-underline overflow-auto mt-[60px] -mx-5 px-5 md:gap-x-5 md:text-[6.66667px] md:grid-cols-[1fr_1fr_1fr] md:leading-[7.66667px] md:gap-y-5 md:mt-[66.6667px] md:mx-0 md:px-0">
          <SupportCard
            imageAlt="Mortgage Services"
            imageSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/18.jpg"
            title="Mortgage Services"
            description="Helping you secure your dream home with flexible mortgage options."
            buttonText="Learn More"
            iconSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg"
            iconAlt="Icon"
            delay={0}
          />
          <SupportCard
            imageAlt="Property Management"
            imageSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/91.jpg"
            title="Property Management"
            description="Let us handle the details so you can enjoy the rewards."
            buttonText="Learn More"
            iconSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg"
            iconAlt="Icon"
            delay={100}
          />
          <SupportCard
            imageAlt="Property Management"
            imageSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/17.jpg"
            title="Construction and Real Estate Development"
            description="Guiding you through the intricacies of building and developing properties with expert insight and support."
            buttonText="Learn More"
            iconSrc="https://c.animaapp.com/mq3zczchi8fb7N/assets/icon-6.svg"
            iconAlt="Icon"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};
