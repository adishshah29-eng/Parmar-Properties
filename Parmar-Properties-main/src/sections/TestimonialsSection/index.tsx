import { TestimonialCard } from "./components/TestimonialCard";

const testimonials = [
  {
    title: "Dream Home Secured",
    quote: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others. The team at Parmar Properties made finding my dream home an absolute breeze.",
    author: "Ashish Mishra",
    rating: 5
  },
  {
    title: "Smooth Selling Process",
    quote: "They managed the sale of my apartment with utmost professionalism. I was kept in the loop every step of the way and we closed well above asking price in record time.",
    author: "Simran Bharadwaj",
    rating: 5
  },
  {
    title: "Unmatched Expertise",
    quote: "Working with them was the best decision we made. Their deep knowledge of the local market and expert negotiation skills saved us thousands on our new family home.",
    author: "Rajveer Chawda",
    rating: 4
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-zinc-100 py-20 md:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-lora font-bold text-neutral-900 mb-4">
            Client Stories
          </h2>
          <p className="text-neutral-600 font-instrument_sans max-w-2xl mx-auto text-lg">
            Hear from our satisfied clients about their journey finding, selling, and renting with Parmar Properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 200}ms` }}
            >
              <TestimonialCard
                title={t.title}
                quote={t.quote}
                author={t.author}
                rating={t.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
