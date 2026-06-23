import { ScrollReveal } from "@/components/ScrollReveal";

export const ImageStack = () => {
  const images = [
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/21.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/77.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/28.jpg",
  ];

  const chevronClipPath = "polygon(0% 0%, 53.1% 0%, 100% 50%, 53.1% 100%, 0% 100%, 46.8% 50%)";

  return (
    <div className="flex justify-center items-center relative overflow-hidden w-full py-8 -mx-4 px-4 sm:mx-0 sm:px-0">
      {images.map((src, index) => {
        const isFirst = index === 0;

        return (
          <ScrollReveal
            key={index}
            delay={index * 150}
            direction="left"
            distance={80}
            className="shrink-0 relative"
            style={{
              zIndex: 10 - index,
              marginLeft: isFirst ? '0' : '-40',
            }}
          >
            <div
              className="identity-card overflow-hidden bg-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-4 hover:scale-105"
              style={{
                width: "clamp(120px, 25vw, 280px)",
                aspectRatio: "346 / 440",
                clipPath: chevronClipPath,
                WebkitClipPath: chevronClipPath,
              }}
            >
              <img
                src={src}
                alt={`Identity visual ${index + 1}`}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};