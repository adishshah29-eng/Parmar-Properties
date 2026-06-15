export const ImageStack = () => {
  const images = [
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/28.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/37.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/77.jpg",
    "https://c.animaapp.com/mq3zczchi8fb7N/assets/21.jpg",
  ];

  const chevronClipPath = "polygon(0% 0%, 53.1% 0%, 100% 50%, 53.1% 100%, 0% 100%, 46.8% 50%)";

  return (
    <div className="flex justify-center items-center relative overflow-hidden w-full py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      {images.map((src, index) => {
        // Create an overlapping/stacking effect with scale down and opacity fade
        // First image is fully visible and large, subsequent ones shift left, shrink, and fade
        const isFirst = index === 0;
        
        // Exact styling values based on reference
        const scale = isFirst ? 1 : 1 - (index * 0.05);
        const opacity = isFirst ? 1 : 1 - (index * 0.2);
        const zIndex = 10 - index;
        const translateX = isFirst ? 0 : `-${index * 15}%`; // overlap to the left
        
        return (
          <div
            key={index}
            className="shrink-0 relative overflow-hidden bg-neutral-100"
            style={{
              width: "clamp(80px, 20vw, 240px)",
              aspectRatio: "346 / 440",
              zIndex,
              opacity,
              transform: `translateX(${translateX}) scale(${scale})`,
              marginLeft: isFirst ? '0' : '-8%', // negative margin for overlap constraint
              clipPath: chevronClipPath,
              WebkitClipPath: chevronClipPath,
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out"
            }}
          >
            <img
              src={src}
              alt={`Identity visual ${index + 1}`}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
};