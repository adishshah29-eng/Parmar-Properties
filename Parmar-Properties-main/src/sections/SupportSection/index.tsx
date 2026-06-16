import { SupportHeader } from "@/sections/SupportSection/components/SupportHeader";
import { SupportCard } from "@/sections/SupportSection/components/SupportCard";

export const SupportSection = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 md:py-[100px] w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16">
        <SupportHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
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

