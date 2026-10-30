
const testimonials = [
  {
    quote:
      "They understood what we needed before we even had the words for it. The new website feels clearer, faster, and much more aligned with our brand.",
    name: "Daniel Carter",
    role: "Founder, Northline Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    quote:
      "Working with this team was a great experience. They transformed our ideas into a clean, professional website that represents our business perfectly.",
    name: "Sarah Mitchell",
    role: "CEO, Creative Studio",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    quote:
      "The attention to detail was impressive. Every section feels intentional, and the final website is much easier for our customers to navigate.",
    name: "James Wilson",
    role: "Director, Growth Partners",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    quote:
      "Communication was clear throughout the project. They listened to our feedback and delivered a result that exceeded our expectations.",
    name: "Emily Roberts",
    role: "Marketing Lead, Nova Digital",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    quote:
      "Our new website has given our brand a fresh identity. The process was smooth, the design was thoughtful, and the result speaks for itself.",
    name: "Michael Anderson",
    role: "Founder, Horizon Works",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=85",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1237px]">
        {/* Section heading */}
        <div className="flex min-h-[230px] flex-col items-center justify-center border-b border-white/20 px-5 py-12 text-center">
          <span className="bg-slate-700 px-1.5 py-1 text-xs uppercase leading-none text-white">
            Client Experiences
          </span>

          <h2 className="mt-8 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Don’t Just Take Our Word for It
          </h2>
        </div>

        {/* Testimonials panel */}
        <div className="border-b border-white/20 px-5 sm:px-10 lg:px-0">
          <div className="bleed-line" />

          <div className="mx-auto max-w-[872px] bg-[linear-gradient(180deg,#063d91_0%,#0785ae_38%,#00303b_78%,#000000_100%)] px-5 py-7 sm:px-8 sm:py-10 md:h-[460px] md:grid md:grid-cols-[2fr_0.9fr] md:grid-rows-1 md:gap-10 md:px-10">
            {/* Testimonial cards */}
            <div
              className="
                flex gap-4 overflow-x-auto pb-4
                snap-x snap-mandatory
                [scrollbar-width:thin]
                [scrollbar-color:rgba(255,255,255,0.55)_transparent]
                md:min-h-0 md:flex-col md:gap-5 md:overflow-y-auto md:overflow-x-hidden md:pr-2 md:pb-2
                md:snap-none
              "
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="
                    relative flex min-h-[310px] w-[85%] shrink-0 snap-start flex-col
                    bg-white px-5 py-6 text-black
                    sm:w-[65%] sm:min-h-[290px] sm:px-6
                    md:min-h-[250px] md:w-full md:snap-align-none
                  "
                >
                  {/* Star rating */}
                  <div
                    className="mb-5 text-[25px] leading-none tracking-[2px] text-[#F7B844]"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>

                  {/* Review */}
                  <blockquote className="max-w-[95%] pb-16 font-serif text-xl leading-[1.25] tracking-tight sm:text-[23px]">
                    “{testimonial.quote}”
                  </blockquote>

                  {/* Client details */}
                  <div className="mt-auto max-w-[75%]">
                    <h3 className="font-serif text-lg">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-black/75">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Client image - bottom right */}
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    loading="lazy"
                    className="
                      absolute bottom-5 right-5
                      size-[58px] rounded-full
                      border-2 border-black/10
                      object-cover
                      sm:size-[64px]
                    "
                  />
                </article>
              ))}
            </div>

            {/* Results highlight */}
            <div className="mt-8 flex flex-col items-start text-white md:mt-0 md:pt-1">
              <span className="font-serif text-5xl leading-none sm:text-6xl">
                40%
              </span>

              <p className="mt-3 max-w-[230px] font-serif text-lg leading-[1.35] sm:text-xl">
                Marked improvement in financial efficiency and performance.
              </p>
            </div>
          </div>

          <div className="bleed-line" />
        </div>
      </div>
    </section>
  );
}
