import { ServicesHeader } from "@/sections/ServicesSection/components/ServicesHeader";
import { ServicePanel } from "@/sections/ServicesSection/components/ServicePanel";
import { ServicesCta } from "@/sections/ServicesSection/components/ServicesCta";

export const ServicesSection = () => {
  return (
    <section className="bg-black py-20 md:py-32 w-full overflow-hidden">
      <ServicesHeader />
      
      <div className="w-full flex flex-col border-b border-white/20">
        <ServicePanel
          imageUrl="https://c.animaapp.com/mq3zczchi8fb7N/assets/67.jpg"
          description="Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We’ve done this over 10,000 times, and we know what wins."
          label="BUY"
          delay={0}
        />
        <ServicePanel
          imageUrl="https://c.animaapp.com/mq3zczchi8fb7N/assets/85.jpg"
          description="Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs."
          label="SELL"
          delay={150}
        />
        <ServicePanel
          imageUrl="https://c.animaapp.com/mq3zczchi8fb7N/assets/48.jpg"
          description="Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won’t find online."
          label="RENT"
          delay={300}
        />
      </div>

      <ServicesCta />
    </section>
  );
};
