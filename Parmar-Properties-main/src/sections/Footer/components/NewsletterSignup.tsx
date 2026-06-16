import { ScrollReveal } from "@/components/ScrollReveal";

export const NewsletterSignup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://parmarproperties.com/newsletter-confirmed";
  };

  return (
    <div className="flex flex-col gap-y-12 md:max-w-xl font-['Instrument_Sans']">
      <div>
        <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-6">
          Subscribe to our Newsletter!
        </h3>
        <form onSubmit={handleSubmit} className="relative border-b border-white/40 pb-3 flex items-center group focus-within:border-white transition-colors duration-300">
          <input
            type="email"
            placeholder="Enter address"
            name="email"
            className="w-full bg-transparent text-base text-white placeholder-white/50 focus:outline-none focus:ring-0"
            required
          />
          <button
            type="submit"
            aria-label="Submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-12 mt-6 md:mt-12">
        <div className="flex flex-col order-2 md:order-none">
          <div className="hidden md:block text-[11px] font-medium text-white/40 uppercase tracking-widest mb-4">
            Head Office
          </div>
          <a
            href="geo://40.75104385252497,-73.98395637414475"
            className="text-base md:text-sm font-medium leading-relaxed hover:text-white/70 transition-colors"
          >
            5 West 37th Street, 12th Floor,
            <br />
            New York, NY 10018
          </a>
        </div>
        
        <div className="flex flex-col order-1 md:order-none">
          <div className="hidden md:block text-[11px] font-medium text-white/40 uppercase tracking-widest mb-4">
            Email Us
          </div>
          <a
            href="mailto:hello@parmarproperties.com"
            className="text-xl md:text-sm font-medium hover:text-white/70 transition-colors underline md:no-underline"
          >
            hello@parmarproperties.com
          </a>
        </div>
        
        <div className="flex flex-col order-3 md:order-none">
          <div className="hidden md:block text-[11px] font-medium text-white/40 uppercase tracking-widest mb-4">
            Call Us
          </div>
          <a
            href="tel:+12129949965"
            className="text-base md:text-sm font-medium hover:text-white/70 transition-colors"
          >
            +1 212 994 9965
          </a>
        </div>
      </div>
    </div>
  );
};