import { ScrollReveal } from "@/components/ScrollReveal";
import { footer } from "@/content/content";
import { config } from "@/content/config";

export const NewsletterSignup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = config.newsletter.confirmationUrl;
  };

  return (
    <div className="flex flex-col gap-y-12 md:max-w-xl font-['Instrument_Sans']">
      <div>
        <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-6">
          {footer.newsletter.heading}
        </h3>
        <form onSubmit={handleSubmit} className="relative border-b border-white/40 pb-3 flex items-center group focus-within:border-white transition-colors duration-300">
          <input
            type="email"
            placeholder={footer.newsletter.placeholder}
            name="email"
            className="w-full bg-transparent text-base text-white placeholder-white/50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-1"
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

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-12 mt-6 md:mt-12">
        {footer.contact.map((item) => (
          <div key={item.label} className="flex flex-col">
            <div className="hidden md:block text-[11px] font-medium text-white/40 uppercase tracking-widest mb-4">
              {item.label}
            </div>
            <a
              href={item.href}
              className="text-base md:text-sm font-medium hover:text-white/70 transition-colors"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};