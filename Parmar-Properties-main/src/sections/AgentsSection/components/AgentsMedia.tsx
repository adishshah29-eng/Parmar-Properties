export type AgentsMediaProps = {
  imageUrl: string;
};

export const AgentsMedia = ({ imageUrl }: AgentsMediaProps) => {
  return (
    <div className="flex-1 w-full max-w-lg mb-10 md:mb-0 relative">
      <div className="text-black/60 font-['Instrument_Sans'] font-semibold tracking-widest text-sm uppercase mb-4 md:mb-6">
        For Agents
      </div>
      <div className="relative w-full h-[280px] sm:h-auto aspect-auto sm:aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden mt-8 md:mt-24">
        <img
          src={imageUrl}
          alt="Agent portrait"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};